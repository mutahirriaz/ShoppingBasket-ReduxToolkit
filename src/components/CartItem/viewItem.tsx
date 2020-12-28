import React from 'react'
import { useSelector } from 'react-redux'
import { ProductItem } from '../../global'
import { store, remove, increase, clear } from '../../store/index'
import "./cartItem.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
    },
}));

const ViewItem = () => {
    const classes = useStyles();

    const products = useSelector((state: ProductItem[]) => state)

    return (
        <div className='viewitem_main_div' >
            <div className={classes.root}>
                <Grid container spacing={2}>
                    {products.filter((product) => product.added).length === 0 ? (
                       <div className='empty_cart_div' >
                           <h4>Your cart is empty
                           plz add Item in your cart
                           </h4>
                       </div>
                    ) : ""}
                    {products.filter((product) => product.added).map((product: ProductItem) => {
                        return (
                            <Container maxWidth='lg' >
                                <div className='product_second_div' >
                                    <Grid item xs={6} sm={12} md={12} lg={3} >
                                        <img className='image' src={`images/${product.imageUrl}`} alt="" />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12} lg={3} >
                                        <div className='produc_description_div' >
                                            <Typography className='produc_description' >{product.description}</Typography>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6} sm={12} md={12} lg={3} >
                                        <div className='button__div' >
                                            <Button variant='info' onClick={() => store.dispatch(increase(product))} >+</Button>
                                            <Typography className='product_quantity' >{product.quantity}</Typography>
                                            <Button variant='info' onClick={() => store.dispatch(remove(product))} >-</Button>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={3} >
                                        <Typography className='product_price' > $ {product.price}</Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={1} >
                                        <IconButton onClick={() => store.dispatch(clear(product))} aria-label='delete' className={classes.margin} ><DeleteIcon fontSize='large' /></IconButton>
                                    </Grid>
                                </div>
                            </Container>
                           
                        )
                    })}
                </Grid>
            </div>

            <div>
                   <h1>
                     Total:  $ {products.filter((product) => product.added)
                      .reduce((totalPrice , item) => (totalPrice + item.price *item.quantity) , 0)}
                  </h1>
             </div> 
               
        </div>
    )
}

export default ViewItem

