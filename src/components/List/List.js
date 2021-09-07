import React from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Title from './Title';
import Card from './Card';
import InputContainer from '../input/InputContainer';

const useStyle = makeStyles((theme) => ({
    //theme's spacing default value : 8px
    root: {
        width: "300px",
        backgroundColor: "lightgray",
        color: "blue",
        marginLeft: theme.spacing(2)      
    },

}))

const List = ({list}) => {
    const classes = useStyle()
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title title={list.title}/>
                {list.cards.map((card) => {
                    return <Card key={card.id} card={card}/>
                })}
                <InputContainer />
            </Paper>
            
        </div>
    )
}

export default List
