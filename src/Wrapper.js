import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import InputContainer from "./components/input/InputContainer";
import List from "./components/List/List";
import store from "./utils/store";
import StoreApi from "./utils/storeApi";
import { makeStyles } from "@material-ui/core";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "cadetblue",
  },
}));

function Wrapper() {
  const classes = useStyle();
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    // en güzel key verme ve id oluşturma yöntemlerinden biriymiş.Stackoverflow sağolsun...
    const newCard = {
      id: newCardId,
      content: title,
      //title = e.target.value ile gelen değer
    };

    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uuid();
    const newList = {
      id: newListId,
      title: title,
      cards: [],
    };

    const newState = {
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
      listIds: [...data.listIds, newListId],
    };
    setData(newState);
  };

  const updateListTitle = (title, listId) => {
    // console.log(title)
    const list = data.lists[listId];
    list.title = title;

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    // console.log(`destination`, destination);
    // console.log(`source`, source);
    // console.log(`draggableId`, draggableId);

    if (!destination) {
      return;
    }

    if (type === "list") {
      const newListIds = data.listIds;
      newListIds.splice(source.index, 1);
      newListIds.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter(
      (card) => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      const newnewState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      // console.log(newnewState);
      setData(newnewState);
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="app" type="list" direction="horizontal">
          {(provided) => (
            <div
              className={classes.root}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {data.listIds.map((listId, index) => {
                const list = data.lists[listId];
                return <List list={list} key={listId} index={index} />;
              })}
              <InputContainer type="list" />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </StoreApi.Provider>
  );
}

export default Wrapper;