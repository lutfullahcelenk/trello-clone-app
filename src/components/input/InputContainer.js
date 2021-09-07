import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  //theme's spacing default value : 8px

  root: {
    marginTop: theme.spacing(2),
  },

  addCard: {
    display: "flex",
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#lightgray",
    "&:hover" : {
        backgroundColor : "green",
        color: "white",
    }
  },

  addBox: {
      margin: theme.spacing(0,1,1,1),
  }
}));

const InputContainer = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Paper className={classes.addCard}>
        <AddBox className={classes.addBox} />
        <Typography>Add a New Card</Typography>
      </Paper>
    </div>
  );
};

export default InputContainer;
