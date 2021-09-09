import { Typography, IconButton, Collapse } from "@material-ui/core";
import { PostAdd } from "@material-ui/icons";
import React, { useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core";
import DetailedCard from "../List/DetailedCard";

const useStyle = makeStyles((theme) => ({
  //theme's spacing default value : 8px
  cardInside: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    fontSize: "1.2rem",
    display: "flex",
    justifyContent: "space-between",
  },
  root: {
    width: "300px",
    marginTop: theme.spacing(2),
  },
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(0, 1, 1, 1),
    background: "#lightgray",
  },
}));

const CardContainer = ({ card, index }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {

  };

  return (
    <Typography className={classes.cardInside}>
      {card.content}

      <Collapse in={open}>
        <DetailedCard setOpen={setOpen} />
      </Collapse>

      <Collapse in={!open} >
        <IconButton className={classes.addCard} onClick={() => setOpen(!open)}>
          <PostAdd />
        </IconButton>

        <IconButton className={classes.addCard} onClick={() => handleDelete()}>
          <ClearIcon />
        </IconButton>
      </Collapse>
    </Typography>
  );
};

export default CardContainer;
