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

export function MusicModuleHelpTabPlaylistCard({
    match
}) { 
    const classes = useStyles();

    return (
            <Grid container justify = 'center' direction='column' className={classes.cardContent}>
                    <Grid item xs className={classes.cardContentChildren}>
                        <Typography variant="h6" >Tips on managing playlist</Typography>
                    </Grid>
                    <Grid item xs className={classes.cardContentChildren}>
                        <Typography>
                            <p>
                                1. You can add links of songs from Youtube<br/>
                                2. Don't forget to update playlist after adding or removing songs from playlist<br/>
                                3. Update Playlist button will appear at left top corner in playlist<br/>
                                4. If you remove all songs bot will disconnect from voice channel until you add atleat one song<br/>
                                5. You can add and remove songs before updating<br/>
                                6. If you switch tabs all unsaved changes will be lost<br/>
                                7. By pressing on Playlist before making any changes you can access your playlists list of links<br/>
                            </p>
                        </Typography>
                    </Grid>
            </Grid>
    )
}