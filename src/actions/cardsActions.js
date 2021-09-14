
export const addCard = (listId, text) => {
    return{
        type: "ADD_CARD",
        payload : { text ,listId }
    }
}