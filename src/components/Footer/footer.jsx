import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        ecommerce.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  brandLogo: {
    fontFamily: "Evander ExtraBold",
    color: theme.palette.secondary.main,
    padding:5,
    // fontSize: 35,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          align="center"
          noWrap
          className={classes.brandLogo}
        >
            Gelde Al
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Ashgabat - Turkmenistan
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}