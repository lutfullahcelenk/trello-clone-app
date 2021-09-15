import React from "react";
import logo from "../assets/Trello-Logo.wine.png";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#f4e0a4",
    marginBottom: "30px",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  img: {
    height: "90px",
  },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.title}>
          <img className={classes.img} src={logo} />
        </Typography>
        <Button color="primary  ">
          <a
            target="_blank"
            href="https://github.com/lutfullahcelenk"
            style={{ textDecoration: "none", fontSize: "large" }}
          >
            GitHub
          </a>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
