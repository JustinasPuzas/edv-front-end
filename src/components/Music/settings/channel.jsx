import React from 'react';
import { Notification } from '../../';
import { Formik } from 'formik';
import { useMutation } from '@apollo/client';
import { updateMusicBotDefaultChannelMutation } from '../../../grpahql/mutations';
import { useStyles } from './style';
import {MenuItem, FormControl, Select, Typography, Grid, Card, CardActionArea, CardContent, TextField, Container, Button } from '@material-ui/core';

export function DefaultChannelSelect({
    defaultChannel,
    setDefaultChannel,
    match,
    voiceChannels
}) {
    const classes = useStyles();
    const [ updateDefaultChannel ] = useMutation(updateMusicBotDefaultChannelMutation);

    const [ params, setParams] = React.useState({
        open: false,
        type: "success", 
        msg: {
            head: '',
            info: ``
        }
    });

    const updateChannel = async (defaultChannel) =>{
        try{

            const response = await updateDefaultChannel({
                variables:{
                    guildId: match.params.id,
                    defaultChannel: defaultChannel,
                }
            })

            setParams({
                open: true,
                type: "success",
                msg: {
                    head: "Default Channel has been set",
                    info: ``
                }
            });

            setDefaultChannel(defaultChannel)
        }catch (err) {

            setParams({
                open: true,
                type: "error",
                msg: {
                    head: "Unknown Error",
                    info: `try again later`
                }
            });
        }
    }

    return (
    <Grid item className={classes.card}>
        <Card direction='row'>
            <CardContent>
                <Formik
                    initialValues = {{ defaultChannel: defaultChannel}}
                    onSubmit={async (data, {setSubmitting}) => {
                        setSubmitting(true)
                        await updateChannel(data.defaultChannel)
                        setSubmitting(false)
                    }}
                >
                    {({values,  isSubmitting, handleChange, handleBlur, handleSubmit}) =>(

                            <form onSubmit={handleSubmit}>
                                <Grid container justify = 'center' direction='column' className={classes.cardContent}>
                                    <Grid item xs className={classes.cardContentChildren}>
                                        <Typography>Radio Station Channel</Typography>
                                    </Grid>
                                    <Grid item xs className={classes.cardContentChildren}>
                                        <Select name="defaultChannel" onChange={handleChange} value={values.defaultChannel}>
                                            <MenuItem  value={'0'} selected={null == values.defaultChannel || '0' == values.defaultChannel} key={'0'}>No default channel</MenuItem>
                                            {voiceChannels.map((channel) =>(
                                                <MenuItem  value={channel.id} selected={channel.id === values.defaultChannel} key={channel.id}>{channel.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </Grid>
                                    <Grid item xs className={classes.cardContentChildren}>
                                    <Button disabled={isSubmitting} variant='outlined' type="submit" children="Set Channel" />
                                    </Grid>
                                </Grid>
                                
                            </form>
                        )
                    }
                </Formik>
            </CardContent>
        </Card>
        <Notification
            params = {params}
            setParams = {setParams}
        />
    </Grid>
    )
}