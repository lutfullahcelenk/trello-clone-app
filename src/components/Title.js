import { Typography, InputBase } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"


const useStyle = makeStyles((theme) => ({
  //theme's spacing default value : 8px
  editedTitle: {
    
  },

  editedTitleContainer: {
      margin : theme.spacing(2),
      display: "flex",
  },

  input:{
      margin: theme.spacing(2),
      "&:focus" : {
          backgroundColor : "#ddd"
      }
  }
}));

const Title = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return (
    <div>
      {open ? (
        <div>
          <InputBase value="Todo" 
            inputProps={{
                className: classes.input,
            }}
            fullWidth // input part is fulled in that section
            onBlur = {() => setOpen(!open)}
            //onblur sayfada başka bir yere tıklandığında focus ile gelen özellik yokedilir.
          />
        </div>
      ) : (
        <div className={classes.editedTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editedTitle}
          >
            ToDo
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
