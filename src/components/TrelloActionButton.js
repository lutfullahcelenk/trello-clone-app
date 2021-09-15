import {
  Button,
  Paper,
  Icon,
  makeStyles,
  Collapse,
  InputBase,
} from "@material-ui/core";
import React, { useState } from "react";
import { addList } from "../actions/listsActions";
import { useDispatch } from "react-redux";
import {addCard}  from "../actions/cardsActions";

const useStyles = makeStyles({
  addCard: {
    padding: "15px",
    display: "flex",
    cursor: "pointer",
    color: "white",
    background: "#5AAC44",
    "&:hover": {
      opacity: 0.8,
    },
  },
  btnClose: {
    background: "#FC3D03",
    borderRadius: "10px",
    color: "white",
    marginLeft: "10px",
    padding: "10px",
  },
  confirm: {
    margin: "10px",
    display: "flex",
    justifyContent: "flex-start",
  },
  btnConfirm: {
    background: "#5AAC44",
    color: "#fff",
    padding: "10px",
    "&:hover": {
      opacity: 0.8,
    },
  },
});

const TrelloActionButton = ({ type, listId }) => {
  const classes = useStyles();
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddList = () => {
    if (text) {
      dispatch(addList(text));
      setText("");
    }
  };

  const handleAddCard = () => {
    if (text) {
      dispatch(addCard(listId,text));
      setText("");
    }
  };

  return (
    <div>
      <Collapse in={formOpen}>
        <InputBase
          multiline
          fullWidth
          value={text}
          placeholder={
            type === "card"
              ? "Enter a title of this card..."
              : "Enter a list title"
          }
          onBlur={() => setFormOpen(false)}
          onChange={(e) => setText(e.target.value)}
        />

        <div className={classes.confirm}>
          <Button
            className={classes.btnConfirm}
            onClick={type === "card" ? handleAddCard : handleAddList}
          >
            {type === "card" ? "Add Card" : "Add List"}
          </Button>
          <Icon
            onClick={() => setFormOpen(!formOpen)}
            className={classes.btnClose}
          >
            close
          </Icon>
        </div>
      </Collapse>

      <Collapse in={!formOpen}>
        <Paper
          className={classes.addCard}
          onClick={() => setFormOpen(!formOpen)}
        >
          <Icon>add</Icon>
          <Button className={classes.btnConfirm}>
            {type === "card" ? "Add a new card" : "Add a new List"}
          </Button>
        </Paper>
      </Collapse>
    </div>
  );
};

export default TrelloActionButton;
