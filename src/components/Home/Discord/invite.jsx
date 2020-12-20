import React from 'react';
import { Notification } from '../../';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { updateMusicBotDefaultChannelMutation } from '../../../grpahql/mutations';
import { useStyles } from '../style';
import {MenuItem, FormControl, Select, Typography, Grid, Card, CardActionArea, CardContent, TextField, Container, Button } from '@material-ui/core';

export function Discord({

}) {
    const classes = useStyles();
    return (
    <Grid item className={classes.card}>
        <Card direction='row'>
            <CardContent>
                <Button onClick={ () => window.open(`https://discord.gg/JWECz5crCA`,'_blank')}>
                <Typography h1>Join Lilu Discord</Typography>
                </Button>
            </CardContent>
        </Card>
        {/* https://discord.gg/HmekhJp5yK */}
    </Grid>
    )
}