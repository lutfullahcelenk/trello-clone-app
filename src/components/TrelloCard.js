import React from "react";
import { Card, makeStyles, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles({
  cardsBox: {
    marginBottom: 8,
  },
});

const TrelloCard = ({ text, id, index }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.cardsBox}>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloCard;
