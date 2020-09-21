import React from 'react';
import { dashboardPageQuery } from '../../grpahql/queries';
import { updateDefaultRoleMutation, updateGuildPrefixMutation } from '../../grpahql/mutations';
import { PrefixField, DefaultRoleField} from './DashboardConfig';
import { useQuery, useMutation } from '@apollo/client';
import { Spinner, Box, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid} from '@chakra-ui/core';

export function DashboardMenu({
    match,
    history,
}){
    const {loading, error, data} = useQuery(dashboardPageQuery, {variables: {guildId: match.params.id}});

    if(!loading && !error){
        const {getGuildConfig, getUser, getGuildRoles } = data;
        if(!data.getUser){
            history.push('/')
                return(
                    null
                )
        }
        console.log(getUser)

        return(

            <Tabs variant='unstyled'>
                <TabList color='electroGreen.500'>
                    <Tab 
                        borderBottom='1px'
                        borderColor='electroGreen.500'
                        borderX='0px'
                        bg='blacks.800'
                        _active={{color:'blacks.800', bg:'electroGreen.700'}}
                        _hover={{color:'blacks.800', bg:'electroGreen.500'}}
                        _selected={{color:'blacks.800', bg:'electroGreen.500'}}
                        >Commands</Tab>
                    <Tab
                        borderBottom='1px'
                        borderColor='electroGreen.500'
                        borderX='0px'
                        bg='blacks.800'
                        _active={{color:'blacks.800', bg:'electroGreen.700'}}
                        _hover={{color:'blacks.800', bg:'electroGreen.500'}}
                        _selected={{color:'blacks.800', bg:'electroGreen.500'}}
                    >Configuration</Tab>
                    <Tab
                        borderBottom='1px'
                        borderRight='1px'
                        borderColor='electroGreen.500'
                        roundedBottomRight='50px'
                        borderLeft='0px'
                        bg='blacks.800'
                        _active={{color:'blacks.800', bg:'electroGreen.700'}}
                        _hover={{color:'blacks.800', bg:'electroGreen.500'}}
                        _selected={{color:'blacks.800', bg:'electroGreen.500'}}
                        >Help?</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Flex marginTop='20px' color='white'>
                            <p>Commands</p>
                        </Flex>
                    </TabPanel>
                    <TabPanel>
                            <SimpleGrid marginTop='20px' color='black' direction='row'  minChildWidth='200px' spacing='40px' alignItems='center' justifyItems='center'>
                                <Box maxW='300px'  bg='blacks.800' rounded='md' roundedTopLeft='25px' roundedBottomRight='25px' spacing='2%'>
                                    <PrefixField
                                        match={match}
                                        config={getGuildConfig}
                                        />
                                </Box>
                                <Box maxW='300px'  bg='blacks.800' rounded='md' roundedTopLeft='25px' roundedBottomRight='25px' spacing='2%'>
                                    <DefaultRoleField 
                                        match={match}
                                        config={getGuildConfig}
                                        roles={getGuildRoles}
                                        />
                                </Box>
                            </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <Flex marginTop='20px' color='white'>
                            <p>Help?</p>
                        </Flex>
                    </TabPanel>
                </TabPanels>
                </Tabs>
        )

    }return(
        <Flex minH='98vh' w='100%' direction='column' justify='center' align='center'>
            <Spinner
            cursor='progress'
            thickness="4px"
            speed="0.65s"
            emptyColor="#00000000"
            color="blue.500"
            size="xl"
            />
        </Flex>
    )
}