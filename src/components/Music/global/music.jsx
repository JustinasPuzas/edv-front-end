import React from 'react';
import PropTypes from 'prop-types';
import { useQuery, useMutation } from '@apollo/client';
import { musicModuleQuery } from '../../../grpahql/queries';
import { PrefixField, StateSwitch, DisplaySwitch, DefaultChannelSelect, ShuffleSwitch } from '../settings';
import { ActivePlaylistManager } from '../playlists';

import {    
            Menu as MenuIcon,
            ChevronLeft as ChevronLeftIcon,
            ChevronRight as ChevronRightIcon,
            Mail as MailIcon,
            Inbox as InboxIcon,

} from '@material-ui/icons';
import { Card, CardContent, Divider, List, ListItem, Tab, Tabs, Box, Typography, Grid, Container, Button } from '@material-ui/core';
import { useStyles } from './style';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
  <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
  >
      {value === index && (
      <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
      </Box>
      )}
  </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export function MusicModule({
    match,
    history,
}){
    const {loading, error, data} = useQuery(musicModuleQuery, {variables: {guildId: match.params.id}});
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    //Settings
    const [prefix, setPrefix] = React.useState(null);
    const [state, setState] = React.useState(null);
    const [display, setDisplay] = React.useState(null);
    const [defaultChannel, setDefaultChannel] = React.useState(null);
    const [shuffle, setShuffle] = React.useState(null);
    //Playlist
    const [activePlaylist, setActivePlaylist] = React.useState([]);
    const [user, setUser] = React.useState([null, null]);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      if(newValue === 1){
        if(!prefix){
          //settings page
          setPrefix(data.getMusicModule.prefix)
          setState(data.getMusicModule.on)
          setDisplay(data.getMusicModule.display)
          setShuffle(data.getMusicModule.shuffle)
          if(data.getMusicModule.defaultChannel) setDefaultChannel(data.getMusicModule.defaultChannel)
          else setDefaultChannel("0")
        }
      }else if(newValue === 2){
        if(!activePlaylist[0]){
          let map = new Map(Object.entries(data.getMusicModule.activePlaylist.songs))
          let SongsArray = Array.from( map.values())
          setActivePlaylist(SongsArray)
          setUser(data.getUser)
        }
      }
    };

    // React.useEffect(() =>{
    //   if(!loading){
    //     setReload(true)
    //     refetch();
    //     console.log(`FIRE`)
    //     setGuildConfig(data.getGuildConfig)
    //     if(guildConfig){
    //       setPrefix(guildConfig.prefix)
    //     }
    //   }
    // },[])


    if(error){
      return(
        <div>Error</div>
      )
    }else if(loading){
      return(
        <div>loading...</div>
      )
    }else if(data.getMusicModule){
      return(

        <div className={classes.root} color="primary">
        <Tabs
            color="primary"
            orientation="vertical"
            variant="scrollable"
            hidden={false}
            scrollButtons="on"
            value={value}
            onChange={handleChange} 
            aria-label="simple tabs example"
        >   
            <Tab  label={'Home'} {...a11yProps(0)} ></Tab>
            <Tab  label={'Settings'} {...a11yProps(1)} />
            <Tab  label={'Playlists'} {...a11yProps(2)} />
            <Tab  label={'HELP'} {...a11yProps(3)} />
        </Tabs>


        <TabPanel value={value} index={0}>
          <Container fixed>
            <Grid container className={classes.panel}>
              <Grid item xs>
                Guilds Home Page stats etc...
              </Grid>
            </Grid>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={1}>
            <Grid container className={classes.panel}>
                <Grid item xs>
                  <Grid item className={classes.card}>
                      <Card>
                        <CardContent>
                          <List>
                            <ListItem>
                            <StateSwitch 
                              state = {state}
                              setState = {setState}
                              match = {match}
                              />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <DisplaySwitch
                                display = {display}
                                setDisplay = {setDisplay}
                                match = {match}
                              />
                            </ListItem>
                            <Divider />
                            <ListItem>
                              <ShuffleSwitch
                                shuffle = {shuffle}
                                setShuffle = {setShuffle}
                                match = {match}
                              />
                            </ListItem>
                          </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
                <Grid item xs>
                  <PrefixField 
                    prefix = {prefix}
                    setPrefix = {setPrefix}
                    match = {match}
                  />
                </Grid>
                <Grid item xs>
                  <DefaultChannelSelect
                    defaultChannel = {defaultChannel}
                    setDefaultChannel = {setDefaultChannel}
                    match = {match}
                    voiceChannels = {data.getGuildVoiceChannels}
                  />
                </Grid>
            </Grid>
          
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Container fixed>
            <Grid container className={classes.panel}>
              <ActivePlaylistManager
                activePlaylist={activePlaylist}
                setActivePlaylist={setActivePlaylist}
                user = {user}
                match={match}
              />
            </Grid>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={3}>
        <Container fixed>
            <Grid container className={classes.panel}>
              Sveiki
            </Grid>
          </Container>
        </TabPanel>
      </div>
      )
    }else{
      return (
        <Grid>
          <Typography>
            You haven't added Lilu Radio to your guild
          </Typography>
          <Button onClick={ () => window.open(`https://discord.com/api/oauth2/authorize?client_id=778330268490137642&permissions=8&scope=bot`,'_blank')}>
            Add Lilu Radio
          </Button>
        </Grid>
      )
    }

}