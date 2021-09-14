import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";


const useStyles = makeStyles ({
    cardsBox: {
        marginBottom: 8,
    }
});



const TrelloCard = ({ text }) => {

    const classes = useStyles();

  return (
    <div>
      <Card className={classes.cardsBox}>
        <CardContent>
          <Typography gutterBottom>{text}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrelloCard;
