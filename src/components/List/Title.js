import { Typography, InputBase } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyle = makeStyles((theme) => ({
  //theme's spacing default value : 8px
  editedTitle: {
    //margin is sent to editcontainer
    fontSize: "1.5rem",
    fontWeight: "bolder",
  },

  editedTitleContainer: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },

  input: {
    margin: theme.spacing(2),
    fontSize: "1.5rem",
    fontWeight: "bolder",

    "&:focus": {
      backgroundColor: "#ddd",
    },
  },
}));

const Title = ({title}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            autoFocus //without autofocus we need to click twice but with autofocus we just click one
            value={title}
            inputProps={{
              className: classes.input,
            }}
            fullWidth // input part is fulled in that section
            onBlur={() => setOpen(!open)}
            //onblur sayfada başka bir yere tıklandığında focus ile gelen özellik yokedilir.
          />
        </div>
      ) : (
        <div className={classes.editedTitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.editedTitle}
          >
            {title}
          </Typography>
          <MoreHorizIcon />
        </div>
      )}
    </div>
  );
};

export default Title;
