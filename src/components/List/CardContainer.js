import { Typography } from '@material-ui/core';
import { PostAdd } from "@material-ui/icons";
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    //theme's spacing default value : 8px
    cardInside: {
      padding: theme.spacing(1, 1, 1, 2),
      margin: theme.spacing(1),
      fontSize: "1.2rem",
      display: "flex",
      justifyContent: "space-between",
    },
  }));

  

const CardContainer = ({card}) => {

    const classes = useStyle();

    return (
        <Typography className={classes.cardInside}>
            {card.content}
            <PostAdd />
        </Typography>
    )
}

export default CardContainer
