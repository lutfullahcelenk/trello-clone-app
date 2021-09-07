import { Collapse, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { AddBox } from "@material-ui/icons";
import InputCard from "./InputCard";

const useStyle = makeStyles((theme) => ({
  //theme's spacing default value : 8px

  root: {
    width: "300px",
    marginTop: theme.spacing(2),
  },

  addCard: {
    display: "flex",
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#lightgray",
    "&:hover": {
      backgroundColor: "green",
      color: "white",
    },
  },

  addBox: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

const InputContainer = ({ listId }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      {/*TERNARY */
      /* {open ? (
        <InputCard setOpen={setOpen} />
      ) : (
        <Paper className={classes.addCard} onClick={() => setOpen(!open)}>
          <AddBox className={classes.addBox} />
          <Typography>Add a New Card</Typography>
        </Paper>
      )} */}

      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} />
      </Collapse>

      <Collapse in={!open}>
        <Paper className={classes.addCard} onClick={() => setOpen(!open)}>
          <AddBox className={classes.addBox} />
          <Typography>
               Add a new Card
          </Typography>
        </Paper>
      </Collapse>
      
    </div>
  );
};

export default InputContainer;
