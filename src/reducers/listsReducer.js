let listId = 2;
let cardID = 4;

const initialState= [
    {
        title : "ToDo",
        id: 0,
        cards: [{
            id: 0,
            text: "Learn ReactJS and Redux",
        },
        {
            id:1,
            text: "Finish the case study",
        },]
    },

    {
        title : "In Progress",
        id: 1,
        cards: [{
            id: 0,
            text: "Trello React App",
        },
        {
            id:1,
            text: "Have a Nice Lunch",
        },
        {
            id:2,
            text: "Let's do some training",
        },
    
    ]
    }
]


const listsReducer =  ( state= initialState ,action) => {
    switch (action.type) {
        
        case "ADD_LIST" : 
            const newList = {
                title : action.payload,
                cards : [],
                id : listId
            }
            listId +=1;
            return [...state, newList];

        case "ADD_CARD" :
            const newCard = {
                text : action.payload.text,
                id : cardID
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
            
            

        default:
            return state;
            
    }
}

export default listsReducer;