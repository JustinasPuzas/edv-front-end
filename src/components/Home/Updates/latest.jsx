import React from 'react';
import { Notification } from '../../';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { updateMusicBotDefaultChannelMutation } from '../../../grpahql/mutations';
import { useStyles } from '../style';
import {MenuItem, FormControl, Select, Typography, Grid, Card, CardActionArea, CardContent, TextField, Container, Button } from '@material-ui/core';

export function Update({

}) {
    const classes = useStyles();
    return (
    <Grid item className={classes.card}>
        <Card direction='row'>
            <CardContent>
                <Typography h1> F.A.Q.</Typography>
                <p>
                    All info and support can be found in Lilu Discord
                </p>
            </CardContent>
        </Card>
    </Grid>
    )
}