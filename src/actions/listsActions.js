
export const addList = (title) => {
    return{
        type: "ADD_LIST",
        payload : title
    }
}

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
  ) => {
    return {
      type: "DRAG_HAPPENED",
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
        type
      },
    };
  };