import React from 'react';
import PropTypes from 'prop-types';
import { PrefixField } from './Settings';
import { DefaultRoleField } from './Roles'
import { useQuery, useMutation } from '@apollo/client';
import { dashboardPageQuery } from '../../grpahql/queries';

import {    
            Menu as MenuIcon,
            ChevronLeft as ChevronLeftIcon,
            ChevronRight as ChevronRightIcon,
            Mail as MailIcon,
            Inbox as InboxIcon,

} from '@material-ui/icons';
import { IconButton, Paper, Tab, Tabs, Box, Typography, Grid, Container } from '@material-ui/core';
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


export function General({
    match,
    history,
}){
    const {loading, error, data} = useQuery(dashboardPageQuery, {variables: {guildId: match.params.id}});
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [prefix, setPrefix] = React.useState(undefined);
    const [defaultRole, setDefaultRole] = React.useState('0');

    const handleChange = (event, newValue) => {
      setValue(newValue);
      if(newValue === 1){
        if(!prefix){
          setPrefix(data.getGuildConfig.prefix)
        }
      }else if(newValue === 2){
        if(defaultRole === '0'){
          setDefaultRole(data.getGuildConfig.defaultRole)
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
    }else{
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
            <Tab  label={'Settings'} {...a11yProps(1) } />
            <Tab  label={'Roles'} {...a11yProps(2)} />
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
          <Container fixed>
            <Grid container className={classes.panel}>
                <Grid item xs>
                    <PrefixField
                      match={match}
                      prefix={prefix}
                      setPrefix={setPrefix}
                    />
                </Grid>
            </Grid>
          </Container>
          
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Container fixed>
            <Grid container className={classes.panel}>
              <Grid item xs>
                <DefaultRoleField
                  match = {match}
                  roles = {data.getGuildRoles}
                  defaultRole = {defaultRole}
                  setDefaultRole = {setDefaultRole}
                />
              </Grid>
              <Grid>
                <PrefixField
                  match={match}
                  prefix={prefix}
                  setPrefix={setPrefix}
                />
            </Grid>
            <Grid>
                <PrefixField
                  match={match}
                  prefix={prefix}
                  setPrefix={setPrefix}
                />
            </Grid>
              <Grid item xs>
                <DefaultRoleField
                  match = {match}
                  roles = {data.getGuildRoles}
                  defaultRole = {defaultRole}
                  setDefaultRole = {setDefaultRole}
                />
              </Grid>
              <Grid item xs>
                <DefaultRoleField
                  match = {match}
                  roles = {data.getGuildRoles}
                  defaultRole = {defaultRole}
                  setDefaultRole = {setDefaultRole}
                />
              </Grid>
              <Grid item xs>
                <DefaultRoleField
                  match = {match}
                  roles = {data.getGuildRoles}
                  defaultRole = {defaultRole}
                  setDefaultRole = {setDefaultRole}
                />
              </Grid>
              <Grid item xs>
                <DefaultRoleField
                  match = {match}
                  roles = {data.getGuildRoles}
                  defaultRole = {defaultRole}
                  setDefaultRole = {setDefaultRole}
                />
              </Grid>
              <Grid item xs>
                <DefaultRoleField
                  match = {match}
                  roles = {data.getGuildRoles}
                  defaultRole = {defaultRole}
                  setDefaultRole = {setDefaultRole}
                />
              </Grid>
              <Grid item xs>
                <DefaultRoleField
                  match = {match}
                  roles = {data.getGuildRoles}
                  defaultRole = {defaultRole}
                  setDefaultRole = {setDefaultRole}
                />
              </Grid>
            </Grid>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={3}>
            <Container fixed>
                <Grid container className={classes.panel}>
                  <Grid item xs>
                    HELP
                  </Grid>
                </Grid>
            </Container>
        </TabPanel>
      </div>
      )
    }

}