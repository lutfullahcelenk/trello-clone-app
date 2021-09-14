import { makeStyles } from '@material-ui/core';
import React from 'react';
import TrelloCard from './TrelloCard';



const useStyles = makeStyles ({
    container: {
        backgroundColor: "#ccc",
        borderRadius : 3,
        width: 300,
        padding: 8,
    }
})

const TrelloList = ({title}) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h3>{title}</h3>
            <TrelloCard />
        </div>
    )
}

export default TrelloList
