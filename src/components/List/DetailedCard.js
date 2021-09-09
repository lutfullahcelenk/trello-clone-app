import React, { useState } from "react";
import { Paper, InputBase, Button, IconButton } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core";



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

const DetailedCard = ({ setOpen }) => {
  const classes = useStyle();
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
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
            placeholder = "Enter more details..."
            value={content}
          />
        </Paper>
      </div>
      <div className={classes.confirm}>
        <Button className={classes.btn}>
            Add more details...
        </Button>
        <IconButton onClick={() => setOpen(false)}>
          <ClearIcon />
        </IconButton>
      </div>
    </div>
    
  );
};

export default DetailedCard;
