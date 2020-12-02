import React from 'react';
import { Notification } from '../..';
import { Formik, FieldArray, Field, Form } from 'formik';
import { useMutation } from '@apollo/client';
import { updateMusicBotActivePlaylistMutation } from '../../../grpahql/mutations';
import { useStyles } from './style';
import {

        DeleteForever as DeleteForeverIcon, RestaurantMenuTwoTone

} from '@material-ui/icons';
import {MenuItem, List, ListItemAvatar, ListSubheader, ListItem, ListItemText, ListItemSecondaryAction, IconButton, FormControl, Divider, Select, Typography, Grid, Card, CardActionArea, CardContent, TextField, Container, Button } from '@material-ui/core';

import { RawPlaylist } from './rawPlaylist'

export function ActivePlaylistManager({
    activePlaylist,
    setActivePlaylist,
    user,
    match,
}) {
    const classes = useStyles();
    const [ uploadNewSongs ] = useMutation(updateMusicBotActivePlaylistMutation);
    const [ newSongs, setNewSongs] = React.useState([])
    const [ removeSongs, setRemoveSongs] = React.useState([])
    const [ updated, setUpdated] = React.useState(false)

    //rawPlaylist Dialog
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
      };

    //notifications
    const [ params, setParams] = React.useState({
        open: false,
        type: "success", 
        msg: {
            head: '',
            info: ``
        }
    });



    const uploadSongs = async () =>{
        try{
            const response = await uploadNewSongs({
                variables:{
                    guildId: match.params.id,
                    newMusic: newSongs,
                    removeMusic: removeSongs,
                }
            })

            setParams({
                open: true,
                type: "success",
                msg: {
                    head: "Playlist Updated Successfully",
                    info: ``
                }
            });
            console.log(response.data.updateMusicBotActivePlaylist)
            setActivePlaylist(response.data.updateMusicBotActivePlaylist)
            setUpdated(false)
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

    const addSong = async (link) => {
        if(newSongs.includes(link)) return 
        setNewSongs([...newSongs, link])
        setUpdated(true)
    }

    const removeSong = async (link) => {
        if(removeSongs.includes(link)) return 
        setRemoveSongs([...removeSongs, link])
        setUpdated(true)
    }

    return (
    <Grid item className={classes.card}>
        <Card direction='row'>
            <CardContent>
                <Formik
                    enableReinitialize
                    initialValues = {{ 
                        tempLink: '',
                        songs: activePlaylist
                    }}
                    onSubmit={async (data, {setSubmitting}) => {
                        setSubmitting(true)
                        await uploadSongs()
                        setSubmitting(false)
                        
                    }}
                >
                    {({ values, errors, isSubmitting}) => (
                        <Form>
                            {updated? <Button disabled={isSubmitting} type='submit' children="Update Playlist" /> : <Button onClick={handleClickOpen}>Playlist</Button>}
                            <FieldArray name='songs'>
                                {(arrayHelpers) => (
                                    <Grid xl className={classes.form}>
                                        <List className={classes.list}>
                                        {values.songs.map((song, index) =>{ 
                                        return (
                                            <ListItem key={song.link} dense button>
                                                        <ListItemAvatar>
                                                            <img src={`${song.thumbnail}`} width="75"/>
                                                        </ListItemAvatar>
                                                        <ListItemText className={classes.listItemText}>{song.title? song.title : song.link}</ListItemText>
                                                            <ListItemSecondaryAction onClick={() => {removeSong(song.link);  arrayHelpers.remove(index)}}>
                                                                <IconButton edge="end" aria-label="remove">
                                                                    <DeleteForeverIcon />
                                                                </IconButton>
                                                        </ListItemSecondaryAction>
                                                <Divider />
                                            </ListItem>
                                        )})}
                                        </List>
                                        <Field name='tempLink' type='input' id="standard-basic" autoComplete='off' value={values.tempLink} label='Youtube Link' as={TextField}></Field>
                                        <Button disabled={isSubmitting} onClick={() => {
                                            if(!(values.tempLink.startsWith(`https://www.youtube.com`) ||  values.tempLink.startsWith(`https://youtu.be`))){
                                                setParams({
                                                    open: true,
                                                    type: "error",
                                                    msg: {
                                                        head: "Only links from youtube are allowed",
                                                        info: `link has to start with https://www.youtube.com or https://youtu.be`
                                                    }
                                                });
                                                return
                                            }
                                            if(values.tempLink.length > 80) return;
                                            const song = values.songs.find( song => song.link == (values.tempLink.trim()) )
                                            if(song){   
                                                setParams({
                                                    open: true,
                                                    type: "error",
                                                    msg: {
                                                        head: "this song is already added",
                                                        info: ``
                                                    }
                                                });
                                                return
                                            }
                                            addSong(values.tempLink)
                                            arrayHelpers.push({
                                            author: `${user.discordId}`,
                                            title: '',
                                            thumbnail: '',
                                            link: `${values.tempLink}`
                                            })
                                            values.tempLink=''
                                        }}>Add Song</Button>
                                    </Grid>
                                )}
                            </FieldArray>

                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>
        <Notification
            params = {params}
            setParams = {setParams}
        />
        <RawPlaylist open={open} setOpen={setOpen} match={match} playlist={activePlaylist}/>
    </Grid>
    )
}