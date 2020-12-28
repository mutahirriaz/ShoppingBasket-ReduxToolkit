import React from 'react'
import "./Header.css"
import { useSelector } from 'react-redux'
import { ProductItem } from '../../global'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {
    const classes = useStyles();

    const products = useSelector((state: ProductItem[]) => state);
    let totalQ = products.filter((product) => product.added).length;

    return (
             <div>
            <div className={classes.root}>
      <AppBar id='app_barr' position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
           
          <Typography id="app_name" variant="h4" className={classes.title}>
              <Link to='/' >
                Shoe Store
              </Link>
          </Typography>
      
          <Link to='/product' >
          <Button color="inherit">Product</Button>
          </Link>

          <Link to='/item' >
            <Button color='inherit' ><ShoppingCartIcon/>{totalQ}</Button>
            </Link>
         
        </Toolbar>
      </AppBar>
    </div>
        </div>
    )
}

export default Header


