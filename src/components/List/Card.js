import { Paper } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    //theme's spacing default value : 8px
    card: {
       padding: theme.spacing(1,1,1,2),
       margin: theme.spacing(1),
       fontSize: "1.2rem",
    },

}))

const Card = ({card}) => {

    const classes = useStyle()

    return (
        <div>
            <Paper className={classes.card}>
                {card.content}
            </Paper>
        </div>
    )
}

export default Card
