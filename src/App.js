import React from "react";
import "./App.css";
import TrelloList from "./components/TrelloList";
import { useSelector } from "react-redux";
import TrelloActionButton from "./components/TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { sort } from "./actions/listsActions";


const App = () => {
  const myLists = useSelector((state) => state.lists);
  // console.log(myLists);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="all-lists" direction="horizontal" type="list">
          {(provided) => (
            <div
              style={{ display: "flex", marginRight: 8 }}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {myLists.map((list, index) => (
                <TrelloList
                  key={list.id}
                  listId={list.id}
                  title={list.title}
                  cards={list.cards}
                  index={index}
                />
              ))}
              <TrelloActionButton type="list" />
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default App;
