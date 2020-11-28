import React from 'react';
import { Notification } from '../../'
import { Formik, Field, Form } from 'formik';
import { useMutation } from '@apollo/client';
import { updateMusicBotShuffleMutation } from '../../../grpahql/mutations';

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

export function ShuffleSwitch({
    shuffle,
    setShuffle,
    match
}) { 
    const [ updateMusicBotShuffle ] = useMutation(updateMusicBotShuffleMutation);
    const [ params, setParams] = React.useState({
        open: false,
        type: "success", 
        msg: {
            head: 'Prefix Updated Successfully',
            info: `new Prefix: ${shuffle}`
        }
    });
    const classes = useStyles();

    const updateShuffle = async ( shuffle ) =>{
        try{
            await updateMusicBotShuffle({
                variables:{
                    guildId: match.params.id,
                    shuffle: shuffle,
                }
            });
            await setShuffle(shuffle)
            setParams({
                open: true,
                type: "success",
                msg: {
                    head: "Guild Display Updated Successfully",
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
                    initialValues = {{ shuffle: shuffle }}
                    onSubmit={async (data, {setSubmitting}) => {
                        setSubmitting(true)
                        await updateShuffle(!shuffle)
                        setSubmitting(false)
                    }}
                    // onChange={async (data, {}) =>{
                    //     setShuffle(data.shuffle)
                    //     console.log(`handle change fire ` + data.shuffle)
                    // }} state display shuffle
                    
                    >
                    

                    {({values,  isSubmitting, handleChange}) =>(
                            <Form>
                                <Grid container justify = 'center' direction='column' className={classes.cardContent}>
                                        <Grid item xs className={classes.cardContentChildren}>
                    <                   Typography>{shuffle ? "Shuffle is ON" : "Shuffle is OFF" }</Typography>
                                        </Grid>
                                        <Grid item xs className={classes.cardContentChildren}>
                                            <Button disabled={isSubmitting} color='primary' variant='outlined' type="submit" children={shuffle? "Turn Off" : "Turn On"} />
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