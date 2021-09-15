let listId = 2;
let cardID = 5;

const initialState = [
  {
    title: "TODO",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Learn react and redux",
      },
      {
        id: `card-${1}`,
        text: "Learn material ui",
      },
    ],
  },
  {
    title: "DOING",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "Learn html and css",
      },
      {
        id: `card-${3}`,
        text: "Learn bootstrap",
      },
      {
        id: `card-${4}`,
        text: "Learn Javascript",
      },
    ],
  },
];


const listsReducer =  ( state= initialState ,action) => {
    switch (action.type) {
        
        case "ADD_LIST" : 
            const newList = {
                title : action.payload,
                cards : [],
                id : `list-${listId}`,
            }
            listId +=1;
            return [...state, newList];

        case "ADD_CARD" :
            const newCard = {
                text : action.payload.text,
                id :`card-${cardID}`
            }
            cardID++;
            const newState = state.map(list => {
                if(list.id === action.payload.listId){
                    return {
                        ...list,
                        cards: [...list.cards ,newCard]
                    }
                }else{
                    return list;
                }
            })
            return newState;

            case "DRAG_HAPPENED":
                {
                const {
                  droppableIdStart,
                  droppableIdEnd,
                  droppableIndexStart,
                  droppableIndexEnd,
                //   draggableId,
                  type
                } = action.payload
                const newState = [...state]
        
                //dragging lists around
        
                if(type === "list"){
                  const list = newState.splice(droppableIndexStart,1)
                  newState.splice(droppableIndexEnd,0,...list)
                  return newState
                }
        
        
                //In the same list
                if(droppableIdStart === droppableIdEnd){
                  const list = state.find(list => droppableIdStart === list.id)
                  const card = list.cards.splice(droppableIndexStart,1)
                  list.cards.splice(droppableIndexEnd,0,...card)
                }
        
                //otherList
                if(droppableIdStart !== droppableIdEnd){
                  // find the List where drag happened
                  const listStart = state.find(list => droppableIdStart === list.id)
                  // pull out the card from this list
                  const card = listStart.cards.splice(droppableIndexStart,1)
                  // find the list where drag ended
                  const listEnd = state.find(list => droppableIdEnd === list.id)
                  // put the card in the new list
                  listEnd.cards.splice(droppableIndexEnd,0,...card)
                }
        
                return newState
              }
            
            

        default:
            return state;
            
    }
}

export default listsReducer;