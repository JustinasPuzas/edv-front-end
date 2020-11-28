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

    const { loading, error, data} = useQuery(menuPageQuery);
    const classes = useStyles();
    // const [user, setUser] = React.useState( null );
    // const [loading, setLoading] = React.useState( true );
    // const [guilds, setGuilds] = React.useState([]);

    // React.useEffect ( () => {
    //     getUserDetails()
    //         .then(({data}) => {
    //             console.log(data)
    //             setUser ( data );
    //             return getGuilds();
    //         }).then(
    //             ({data}) =>{
    //                 console.log(data)
    //                 setGuilds(data);
    //                 setLoading( false )
    //         }).catch( (err) => {
    //             history.push('/')
    //             setLoading( false )
    //         })
    // },[])

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
        <Grid container justifyContent='center' alignItems='center' alignContent='center'>
            <CircularProgress color="secondary" />
        </Grid>
    )

    // return !loading && (
    //     <div>
    //         <h1>Menu Page UWU</h1>
    //         <MenuComponent guilds={ guilds }/>
    //     </div>
    // );


}