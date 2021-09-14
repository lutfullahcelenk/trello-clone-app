
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
        
        default:
            return state;
    }
}

export default listsReducer;