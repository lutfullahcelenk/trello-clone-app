import { makeStyles } from "@material-ui/core";
import React from "react";
import TrelloActionButton from "./TrelloActionButton";
import TrelloCard from "./TrelloCard";
import { Draggable, Droppable } from "react-beautiful-dnd";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    margin: "0 20px",
  },
});

const TrelloList = ({ title, cards, listId, index }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={String(listId)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listId)} type="card">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={classes.container}
              >
                <h3>{title}</h3>

                {cards.map((card, index) => (
                  <TrelloCard
                    text={card.text}
                    index={index}
                    key={card.id}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton listId={listId} type="card" />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default TrelloList;
