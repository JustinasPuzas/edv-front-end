import React from 'react';
import { Notification } from '../../'
import { Formik, Field, Form } from 'formik';
import { useMutation } from '@apollo/client';
import { updateMusicBotDisplayMutation } from '../../../grpahql/mutations';

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

export function DisplaySwitch({
    display,
    setDisplay,
    match
}) { 
    const [ updateMusicBotDisplay ] = useMutation(updateMusicBotDisplayMutation);
    const [ params, setParams] = React.useState({
        open: false,
        type: "success", 
        msg: {
            head: 'Prefix Updated Successfully',
            info: `new Prefix: ${display}`
        }
    });
    const classes = useStyles();

    const updateState = async ( display ) =>{
        try{
            await updateMusicBotDisplay({
                variables:{
                    guildId: match.params.id,
                    display: display,
                }
            });
            await setDisplay(display)
            setParams({
                open: true,
                type: "success",
                msg: {
                    head: "Guild Display Updated Successfully",
                    info: '',
                }
            });
        }catch (err){
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
                    initialValues = {{ state: display }}
                    onSubmit={async (data, {setSubmitting}) => {
                        setSubmitting(true)
                        await updateState(!display)
                        setSubmitting(false)
                    }}
                    onChange={async (data, {}) =>{
                        setDisplay(data.state)
                    }}
                    
                    >
                    

                    {({values,  isSubmitting, handleChange}) =>(
                            <Form>
                                <Grid container justify = 'center' direction='column' className={classes.cardContent}>
                                        <Grid item xs className={classes.cardContentChildren}>
                    <                   Typography>{display ? "Music Display is Enabled" : "Music Display is Disabled" }</Typography>
                                        </Grid>
                                        <Grid item xs className={classes.cardContentChildren}>
                                            <Button disabled={isSubmitting} color='primary' variant='outlined' type="submit" children={display? "Turn Off" : "Turn On"} />
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