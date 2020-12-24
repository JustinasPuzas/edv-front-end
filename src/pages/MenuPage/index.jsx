import React from 'react';
import { getUserDetails, getGuilds } from '../../utils/api';
import { MenuComponent } from '../../components'
import { useQuery } from '@apollo/client';
import { menuPageQuery } from '../../grpahql/queries';
import { Grid, CircularProgress} from '@material-ui/core';
import { useStyles } from './style';

export function MenuPage ( {
    history,
} ) {
    console.log(history)
    const { loading, error, data} = useQuery(menuPageQuery);
    const classes = useStyles();

    if(!loading && !error) { 
        const { getMutualGuilds } = data;

        if(!getMutualGuilds){
            history.push('/')
            return(
                null
            )
        }

        return (

            <Grid className={classes.root}>
                <MenuComponent guilds={ getMutualGuilds } />
            </Grid>
        )
    }return(
        <Grid className={classes.root}>
            <CircularProgress color="secondary" />
        </Grid>
    )
}