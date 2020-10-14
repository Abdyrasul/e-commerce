
import React from 'react'
import {Carousel} from "react-bootstrap";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
  root:{
      marginTop:5,
      minWidth: 275,
      width:"80%",
      align: "center",
      margin:"auto",
      [theme.breakpoints.down("xs")]: {
        width:"100%",
      },
    // maxHeight: 200,
  },
  item:{
    maxHeight:400,
    [theme.breakpoints.down("xs")]: {
        maxHeight:150,
      },
  },
  caption:{
    textAlign:"right",
    // float:"right",
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
          <Carousel>
  <Carousel.Item className={classes.item}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2020/07/07/04/30/shoes-5379214_1280.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3 className={classes.caption}>Brand</h3> */}
      <Button variant="contained" color="secondary" style={{float:"right"}}>
        Seret
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={classes.item}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brush-1761648_1280.jpg"
      alt="Third slide"
    />

    <Carousel.Caption >
      {/* <h3 className={classes.caption}>Brand</h3> */}
      <Button variant="contained" color="secondary"  style={{float:"right"}}>
        Seret
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className={classes.item}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/02/19/12/59/tie-642063_1280.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      {/* <h3 className={classes.caption}>Brand</h3> */}
      <Button variant="contained" color="secondary"  style={{float:"right"}}>
        Seret
      </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
</Card>
  );
}