import React from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/client';
import { Update} from './Updates/latest'
import { Discord } from './Discord/invite'

import {    
            Menu as MenuIcon,
            ChevronLeft as ChevronLeftIcon,
            ChevronRight as ChevronRightIcon,
            Mail as MailIcon,
            Inbox as InboxIcon,

} from '@material-ui/icons';
import { Card, CardContent, Divider, List, ListItem, Tab, Tabs, Box, Typography, Grid, Container, Button } from '@material-ui/core';
import { useStyles } from './style';


export function HomePage({
    match,
    history,
}){
    const classes = useStyles();

      return(

        <div className={classes.root} color="primary">

            <Grid container className={classes.panel}>
                <Grid item xs>
                  <Grid item className={classes.card}>
                      <Card>
                        <CardContent>
                          <List>
                            <ListItem>
                            <Typography>First Launch</Typography>
                            </ListItem>
                            <Divider />
                            <ListItem>
                            <Typography>Alpha test Launches</Typography>
                            </ListItem>
                            <Divider />
                            <ListItem>
                            
                            </ListItem>
                          </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item xs>
                    <Update />
                </Grid>
                <Grid item xs>
                    <Discord />

                </Grid>
            </Grid>
          
        
      </div>
      )
}