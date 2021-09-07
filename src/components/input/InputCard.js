import React, { useContext, useState } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core";
import storeApi from "../../utils/storeApi";

const useStyle = makeStyles((theme) => ({
  //theme's spacing default value : 8px
  card: {
    margin: theme.spacing(0, 1, 1, 1),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(1),
  },
  btn: {
    background: "green",
    color: "white",
    "&:hover": {
      background: "#5aac44",
    },
  },
  confirm: {
    margin: theme.spacing(0, 1, 1, 1),
  },
}));

const InputCard = ({ setOpen, listId }) => {
  const classes = useStyle();
  const { addMoreCard } = useContext(storeApi);
  const [cardTitle, setCardTitle] = useState("");

  const handleChange = (e) => {
    setCardTitle(e.target.value);
    // console.log(cardTitle)
  };

  const handleApprove = () => {
    addMoreCard(cardTitle, listId);
    setCardTitle("");
  };

  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={handleChange}
            multiline //you can write more than one line
            fullWidth // again it is expand the width to 100%
            inputProps={{
              className: classes.input,
            }}
            placeholder = "Enter a title of the card..."
           
            value={cardTitle}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btn} onClick={handleApprove}>
            Add Card
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default InputCard;
