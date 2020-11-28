import React from 'react';
import PropTypes from 'prop-types';
import { Spinner, Flex} from '@chakra-ui/core';
import { DashboardMenu, MusicModule} from '../../components'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Tab, Tabs, Box, Typography, ButtonGroup, IconButton } from '@material-ui/core';
import theme from '../../theme'
import { TabList } from '@chakra-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

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

export function DashboardPage({
    match,
    history
}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(3);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <div color="primary">
            <Tabs
                variant="scrollable"
                scrollButtons="on"
                value={value}
                onChange={handleChange} 
                aria-label="simple tabs example"
            >   
                <Tab disabled={true} label={'General'} {...a11yProps(0)} />
                <Tab disabled={true}  label={'Moderation'} {...a11yProps(1)} />
                <Tab disabled={true} label={'Voice'} {...a11yProps(2)} />
                <Tab label={'Music'} {...a11yProps(3)} />
                <Tab disabled={true} label={'Modules'} {...a11yProps(4)} />
            </Tabs>
            <TabPanel color="secondary" value={value} index={0}>
                <DashboardMenu match={match} history={history}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Moderation Panel Coming Soon... (jk not soon :D)
            </TabPanel>
            <TabPanel value={value} index={2}>
                Main Focus of this bot and main goal
            </TabPanel>
            <TabPanel color="secondary" value={value} index={3}>
                <MusicModule match={match} history={history}/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                Module Management
            </TabPanel>
        </div>
    )
}