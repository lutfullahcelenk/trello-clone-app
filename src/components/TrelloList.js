import { makeStyles } from '@material-ui/core';
import React from 'react';
import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';



const useStyles = makeStyles ({
    container: {
        backgroundColor: "#dfe3e6",
        borderRadius : 3,
        width: 300,
        padding: 8,
        height: "100%",
        margin: "0 20px",
    },
    
})

const TrelloList = ({title , cards , listId}) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>

            <h3>{title}</h3>

            {cards.map(card=> <TrelloCard text={card.text} key={card.id} />)}

            <TrelloActionButton type="card" listId = {listId} />

        </div>
    )
}

export default TrelloList
