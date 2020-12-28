import React from 'react'
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import shoe1 from '../images/shoe1.jpg'
import shoe2 from '../images/shoe2.jpg'
import shoe3 from '../images/shoe3.jpg'
import shoe4 from '../images/shoe4.jpg'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));



function Home() {
    const classes = useStyles();

    return (
        
        <div>
            <Jumbotron className='shoe_back_img' >
                <Container maxWidth='md' >
                    <div className='heading_div' >
                        <Typography component='h1' className='heading' >Welcome To Shoe Store</Typography>
                    </div>
                    <Link to='/product' >
                    <div className='button_div' >
                        <Button variant="outlined" id='button' size="large" color="primary" className={classes.margin}>
                            Click Here For Shopping
        </Button>
                    </div>
                    </Link>
                </Container>
            </Jumbotron>
            <Container maxWidth='lg' >
                <div className='heading2_div'>
                    <Typography className='heading2' >Our Reliable Shoes</Typography>
                </div>

                <div id='shoe_images' className={classes.root}>
                    <Grid container spacing={3}>
                        {/* <div> */}
                        <Grid item xs={12} md={6} lg={3} >
                            <img className='shoe_image' src={shoe1} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} >
                            <img className='shoe_image' src={shoe2} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} >
                            <img className='shoe_image' src={shoe3} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} lg={3} >
                            <img className='shoe_image' src={shoe4} alt="" />
                        </Grid>
                        
                    </Grid>
                </div>

            </Container>
        </div>
    )
}

export default Home
