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

export function MusicModuleHelpTabSetUpTab({
    match
}) { 
    const classes = useStyles();

    return (
            <Grid container justify = 'center' direction='column' className={classes.cardContent}>
                    <Grid item xs className={classes.cardContentChildren}>
                        <Typography variant="h6" >First launch?</Typography>
                    </Grid>
                    <Grid item xs className={classes.cardContentChildren}>
                        <Typography>
                            <p>
                                - Set channel channel you want bot to play music<br/>
                                - Make sure bot has permission to join and speak in that channel<br/>
                                - After that you can turn on the bot<br/>
                                - Display stands for showing song name as bots nickname for this to work bot has to have change nickname permission enabled<br/>
                                - Shuffle is self explanatory<br/>
                                - After changing default channel don't forget to save changes otherwise your made changes won't take effect<br/>
                                - Bot has one song in it's playlist by default if you done everything correctly you should see it in your guilds voice channel<br/>
                                - If you find some things unclear or bot setup fails contact us in Lilu discord, links in bottom of page and in HOME page <br/>
                            </p>
                        </Typography>
                    </Grid>
            </Grid>
    )
}