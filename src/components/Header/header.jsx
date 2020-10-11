import React, { Component } from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import { Link as RouterLink } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import SvgIcon from '@material-ui/core'
import Icon from '@material-ui/core/Icon';




  const useStyles = makeStyles((theme) =>({
        brandLogo :{
            fontFamily: "Evander ExtraBold",
            color: theme.palette.secondary.main,
            // paddingLeft:15,
            // fontSize: 35, 
        },
        toolbar: {
            padding: '2px 4px',
            display: 'flex',
            // alignItems: 'center',
            justifyContent: "space-between",
            overflowX: "auto",
            width: "95%",
            margin: "auto",
            marginBottom: 5,
            borderBottom: `1px solid ${theme.palette.divider}`,
          },
          toolbarSecondary: {
            justifyContent: 'space-between',
            overflowX: 'auto',
          },
          imageIcon: {
            height: '100%'
          },
          iconRoot: {
            textAlign: 'center'
          },
          divider: {
            height: 28,
            margin: 4,
          },
          searchField :{
          padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',  
            [theme.breakpoints.down("xs")]: {
                display: "none",
                // backgroundColor:"#FFDFDC",
                // paddingBottom:"30px"
              },
          },
          shoppingCart :{
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',  
          },
          iconButton: {
            padding: 10,
          },
          toolbarLink: {
            padding: theme.spacing(1),
            flexShrink: 0,
            "&:hover": {
                color: "#ff6d00",
                // borderBottom: `2px solid ${theme.palette.success.dark}`,
              },
          },
          
  }))

  
  export default function Header(props) {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();


    const sections = [
        {
          name: "Elektronika",
          url: "/",
        },
        {
          name: "Erkek geyim",
          url: "/photo",
        },
        {
          name: "Ayal geyim",
          url: "/blogs",
        },
        {
          name: "Kitap",
          url: "/portfolio",
        },
        {
            name: "Kosmetika",
            url: "/",
          },
          {
            name: "Öy",
            url: "/photo",
          },
        
      ];
        return (
            <React.Fragment>
                <Toolbar className = {classes.toolbar} >
                <Typography
          component="h2"
          variant="h6"
          color="inherit"
          align="left"
          noWrap
          className={classes.brandLogo}
        >
          
          <Link href="#" onClick={preventDefault} color="inherit" underline="none">
          Gelde Al
      </Link>
        </Typography> 

<div className ={classes.searchField}>
<form noValidate autoComplete="off">
            <Input placeholder="Gozle" inputProps={{ 'aria-label': 'description' }} />
            </form>
        
        <IconButton type="submit" aria-label="search" className={classes.iconButton}>
          <SearchIcon />
          
        </IconButton>
</div>

<div className ={classes.shoppingCart}>
  
        <IconButton>
         <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src="https://www.flaticon.com/svg/static/icons/svg/315/315552.svg"/>
</Icon>
        </IconButton>  
        <IconButton>
         <Icon classes={{root: classes.iconRoot}}>
  <img className={classes.imageIcon} src="https://www.flaticon.com/svg/static/icons/svg/2331/2331970.svg"/>
</Icon>
        </IconButton>  
</div>
         
        
                </Toolbar>
                {/* <div className ={classes.searchFieldHidden}>
<form noValidate autoComplete="off">
            <Input placeholder="Gozle" inputProps={{ 'aria-label': 'description' }} />
            </form>
        
        <IconButton type="submit" aria-label="search" className={classes.iconButton}>
          <SearchIcon />
          
        </IconButton>
</div> */}
                {/* <Divider className={classes.divider} orientation="horizontal" /> */}
                <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
          {sections.map((item) => (
          <Link
            // component={RouterLink}
            // to={item.url}
            color="inherit"
            noWrap
            key={item.name}
            variant="body2"
            href="#"
            underline="none"
            className = {classes.toolbarLink}
            // onClick={() => {
            //   setSelectedPage(item.name);
            // }}
            // className={
            //   SelectedPage === item.name
            //     ? classes.selectedPage
            //     : classes.toolbarLink
            // }
          >
            {item.name}
          </Link>
        ))}
          </Toolbar>
            </React.Fragment>
        )
}

