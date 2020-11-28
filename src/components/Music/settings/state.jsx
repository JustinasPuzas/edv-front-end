import React from 'react';
import { Notification } from '../../'
import { Formik, Field, Form } from 'formik';
import { useMutation } from '@apollo/client';
import { updateMusicBotStateMutation } from '../../../grpahql/mutations';

import {    Menu as MenuIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    Mail as MailIcon,
    Inbox as InboxIcon,

} from '@material-ui/icons';
import { Snackbar, Typography, Grid, Card, CardActionArea, CardContent, TextField, Container, Switch, Button } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useStyles } from './style';
 // import { useStyles } from './style';

export function StateSwitch({
    state,
    setState,
    match
}) { 
    const [ updateMusicBotState ] = useMutation(updateMusicBotStateMutation);
    const [ params, setParams] = React.useState({
        open: false,
        type: "success", 
        msg: {
            head: 'Prefix Updated Successfully',
            info: `new Prefix: ${state}`
        }
    });
    const classes = useStyles();

    const updateState = async ( state ) =>{
        try{
            await updateMusicBotState({
                variables:{
                    guildId: match.params.id,
                    on: state,
                }
            });
            await setState(state)
            setParams({
                open: true,
                type: "success",
                msg: {
                    head: "Guild State Updated Successfully",
                    info: '',
                }
            });
        }catch (err){
            console.log(err)
            setParams({
                open: true,
                type: "error",
                msg: {
                    head: "Unknown Error",
                    info: `try again latter`
                }
            });
        }
    }

    return (
                <Formik
                    initialValues = {{ state: state }}
                    onSubmit={async (data, {setSubmitting}) => {
                        setSubmitting(true)
                        await updateState(!state)
                        setSubmitting(false)
                    }}
                    onChange={async (data, {}) =>{
                        setState(data.state)
                    }}
                    
                    >
                    

                    {({values,  isSubmitting, handleChange}) =>(
                            <Form>
                                <Grid container justify = 'center' direction='column' className={classes.cardContent}>
                                        <Grid item xs className={classes.cardContentChildren}>
                                        <Typography>{state ? "Radio Bot is Enabled" : "Radio Bot is Disabled" }</Typography>
                                        </Grid>
                                        <Grid item xs className={classes.cardContentChildren}>
                                            <Button disabled={isSubmitting} color='primary' variant='outlined' type="submit" children={state? "Turn Off" : "Turn On"} />
                                        </Grid>
                                        <Notification
                                            params = {params}
                                            setParams = {setParams}
                                        />
                                </Grid>
                            </Form>
                        )
                    }
                </Formik>
    )
}