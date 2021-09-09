import { Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";




const useStyle = makeStyles((theme) => ({
  //theme's spacing default value : 8px
  card: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    fontSize: "1.2rem",
  },
}));


const Card = ({ card, index }) => {
  const classes = useStyle();
  

  return (
    <div>
      <Draggable draggableId={card.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <Paper className={classes.card}>
              {card.content}
              
            </Paper>
          </div>
        )}
      </Draggable>
    </div>
  );
};

export default Card;
