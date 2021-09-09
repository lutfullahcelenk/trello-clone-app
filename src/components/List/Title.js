import { Typography, InputBase, IconButton } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import storeApi from "../../utils/storeApi";
import ClearIcon from "@material-ui/icons/Clear";



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

const Title = ({ title, listId }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(title);
  const { updateListTitle } = useContext(storeApi);
  const classes = useStyle();
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleBlur = () => {
    setOpen(false);
    updateListTitle(name, listId);
  };

  return (
    <div>
      {open ? (
        <div>
          <InputBase
            onChange={handleChange}
            autoFocus //without autofocus we need to click twice but with autofocus we just click one
            value={name}
            inputProps={{
              className: classes.input,
            }}
            fullWidth // input part is fulled in that section
            onBlur={handleBlur}
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
          <IconButton>
            <ClearIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default Title;
