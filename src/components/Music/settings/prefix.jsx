import React from 'react';
import { Notification } from '../../'
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { updateMusicBotPrefixMutation } from '../../../grpahql/mutations';

import {    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Mail as MailIcon,
    Inbox as InboxIcon,

} from '@material-ui/icons';
import { Snackbar, Typography, Grid, Card, CardActionArea, CardContent, TextField, Container, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './style';
 // import { useStyles } from './style';

export function PrefixField({
    prefix,
    setPrefix,
    match
}) { 
    const [ updateMusicBotPrefix ] = useMutation(updateMusicBotPrefixMutation);
    const [ params, setParams] = React.useState({
        open: false,
        type: "success", 
        msg: {
            head: 'Prefix Updated Successfully',
            info: `new Prefix: ${prefix}`
        }
    });
    const classes = useStyles();

    const updatePrefix = async ( musicBotPrefix ) =>{
        try{
            if(musicBotPrefix.length > 5){
                setParams({
                    open: true,
                    type: "warning",
                    msg: {
                        head: "Prefix can't be longer than 5 symbols",
                        info: ``
                    }
                });
                return
            }
            if(!musicBotPrefix){
                setParams({
                    open: true,
                    type: "warning",
                    msg: {
                        head: "You have to provide Prefix!",
                        info: ``
                    }
                });
                return
            }
            await updateMusicBotPrefix({
                variables:{
                    guildId: match.params.id,
                    prefix: musicBotPrefix,
                }
            });
            await setPrefix(musicBotPrefix)
            setParams({
                open: true,
                type: "success",
                msg: {
                    head: "Prefix Updated Successfully",
                    info: `New prefix: ${musicBotPrefix}`
                }
            });
        }catch (err){
            setParams({
                open: true,
                type: "error",
                msg: {
                    head: "Unknown Error",
                    info: `try again latter`
                }})
        }
    }

    return (

    <Grid item className={classes.card}>
        <Card direction='row'>
            <CardContent>
                <Formik
                    initialValues = {{ prefix: prefix }}
                    onSubmit={async (data, {setSubmitting}) => {
                    setSubmitting(true)
                    await updatePrefix(data.prefix)
                    setSubmitting(false)
                }}>

                    {({values,  isSubmitting, handleChange, handleBlur, handleSubmit}) =>(
                            <form onSubmit={handleSubmit}>
                                <Grid container justify = 'center' direction='column' className={classes.cardContent}>
                                        <Grid item xs className={classes.cardContentChildren}>
                                            <Typography>Music Bot Prefix</Typography>
                                        </Grid>
                                        <Grid item xs className={classes.cardContentChildren}>
                                            <TextField required id="standard"  name='prefix' onChange={handleChange} defaultValue={`${ values.prefix}`} />
                                        </Grid>
                                        <Grid item xs className={classes.cardContentChildren}>
                                            <Button disabled={isSubmitting} color='primary' variant='outlined' type="submit" children="Update Prefix" />
                                        </Grid>
                                        <Notification
                                            params = {params}
                                            setParams = {setParams}
                                        />
                                </Grid>
                            </form>
                        )
                    }
                </Formik>
            </CardContent>
        </Card>
    </Grid>
    )
}