import React from 'react';
import { getUserDetails, getGuilds } from '../../utils/api';
import {Link} from 'react-router-dom';
import { config } from '../../config';
import { Avatar, Box,  Flex, SimpleGrid, Stack, Tab, Text} from '@chakra-ui/core';
import { useStyles } from './style';
import { Button, GridList, GridListTile, GridListTileBar, IconButton,MenuItem, Typography, Grid,} from '@material-ui/core';
import { Settings as SettingsIcon, Add as AddIcon } from '@material-ui/icons';

export function MenuComponent ( {
    guilds,
} ) {
    const dashboard = ({guild}) => window.location.href = `/dashboard/${guild.id}`;
    const classes = useStyles();

    return (
        
        <Grid className={classes.root}>

                <Box className={classes.includedGuildsText}>
                    <Typography variant='h4' className={classes.includedGuildsText}>
                        Manage Your Guilds O.o
                    </Typography>
                </Box>

                <Grid item>
                    <GridList  cols={'auto'} className={classes.gridListIncluded}>
                        {guilds.included.map((guild) => (
                            <GridListTile key={guild.id} className={classes.gridListItemIncluded}>
                                    <img
                                    src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}?size=512`}
                                    />
                            <GridListTileBar
                                title={guild.name}
                                subtitle={`powered by Lilu`}
                                className={classes.titleBar}
                                actionIcon={
                                    <Grid>
                                        <IconButton aria-label={`Settings of ${guild.name}`} className={classes.icon} onClick={ () => window.location.href = `/dashboard/${guild.id}`}>
                                        < SettingsIcon color="secondary"/>
                                        </IconButton>
                                    </Grid>
                                }
                            />
                            </GridListTile>
                        ))}    
                    </GridList>
                </Grid>

                <Box item className={classes.excludedGuildsText}>
                    <Button variant='outlined' onClick={ () => window.open(`https://discord.com/api/oauth2/authorize?client_id=734480676086218794&permissions=8&redirect_uri=http%3A%2F%2F192.168.0.101%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=bot`,'_blank')}>
                        <Typography variant='h5' className={classes.excludedGuildsText}>
                            Add Me to other guilds UwU*
                        </Typography>
                    </Button>
                </Box>
                
                <Grid item>
                    <GridList  cols={'auto'} className={classes.gridListExcluded}>
                        {guilds.excluded.map((guild) => (
                            <GridListTile key={guild.id} className={classes.gridListItemExcluded} onClick={ () => window.open(`https://discord.com/api/oauth2/authorize?client_id=734480676086218794&permissions=8&redirect_uri=http%3A%2F%2F192.168.0.101%3A3001%2Fapi%2Fauth%2Fdiscord%2Fredirect&scope=bot`,'_blank')}>

                                <img
                                src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}?size=512`}
                                />
                            <GridListTileBar
                                
                                subtitle={guild.name}
                                className={classes.titleBar}
                                />
                            </GridListTile>
                        ))}    
                    </GridList>
                </Grid>          
        </Grid>
    );
}