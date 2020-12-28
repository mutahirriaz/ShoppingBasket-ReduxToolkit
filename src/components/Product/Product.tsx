import React from 'react'
import "./Product.css"
import { ProductItem } from '../../global';
import { useSelector } from 'react-redux'
import { add, store } from '../../store';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1,
  },
  paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
  },
  
}));


const Product = () => {
  const classes = useStyles();

  const products = useSelector((state: ProductItem[]) => state)

  return (

    <div className='producy__main__div' >
   

      <div className={classes.root}>
      <Grid container spacing={1}>
        {products.map((product,i)=>{
          return(
           <Grid item xs={12} sm={6} md={6} lg={4} key={i} >
             <Paper id='paper' className={classes.paper}> 
              <div>
              <img className='Product_images' src={`images/${product.imageUrl}`}  alt="" />
              </div>
              </Paper>
              <div className='bitton_div'>
              <Button disabled={product.added} onClick={()=> store.dispatch(add(product)) } variant="info">Add To Cart</Button>
              <p>$ {product.price}</p>
              </div>
        </Grid>
          )
        })}
        
      </Grid>
    </div>

    </div>
  )
}

export default Product
