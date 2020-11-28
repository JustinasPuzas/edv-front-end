import React from 'react';
import { getUserDetails } from '../../utils/api';
import { useStyles } from './style';
import {Grid, Button, Typography } from '@material-ui/core';


export function ShopPage ( {
    history,
}  ) {
    const [user, setUser] = React.useState( null );
    const [loading, setLoading] = React.useState( true );
    const classes = useStyles();

    const ghostButtonFullSizeRightRound = {
        variant:'ghost',
        color:'#ffff78',
        h:'75px', 
        roundedRight:'50px'
    }

    const YellowButton_hover = {
        backgroundColor: '#ffff78', 
        color: '#23272A',
    }

    React.useEffect ( () => {
        getUserDetails()
            .then(({data}) => {
                setUser ( data );
                setLoading( false )
            }).catch( (err) => {
                history.push('/')
                setLoading( false )
            } )
    },[])

    return !loading && (
        <Grid container className={classes.root}>
            <Button onClick={() => window.open(`https://paypal.me/mmJust`, `_blank`)} color='primary' variant='outlined' className={classes.payPalDonate}>
                <Typography variant='h3' className={classes.excludedGuildsText}>
                    Support development of Lilu Bot via PayPal
                </Typography>
            </Button>
            <Button onClick={() => window.open(`https://discord.com/channels/@me/741601001173417994`, `_blank`)} color='primary' variant='outlined' className={classes.payPalDonate}>
                <Typography variant='h3' className={classes.excludedGuildsText}>
                    Contact me on Discord IGORIS#1569
                </Typography>
            </Button>
        </Grid>
    );
}