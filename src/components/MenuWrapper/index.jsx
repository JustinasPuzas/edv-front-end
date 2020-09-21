import React from 'react';
import { getUserDetails, getGuilds } from '../../utils/api';
import {Link} from 'react-router-dom';
import { config } from '../../config';
import { Avatar, Box, Button, Flex, SimpleGrid, Stack, Tab, Text} from '@chakra-ui/core';

export function MenuComponent ( {
    guilds,
} ) {
    const dashboard = ({guild}) => window.location.href = `/dashboard/${guild.id}`;


    return (
        
        <Flex direction='column'>
            <Flex color='white' direction='column' justify='center' align='center' paddingBottom='1%'>
                    <Text fontSize='4xl'>Manage Your Guilds</Text>
                </Flex>
            <Flex  marginY='4' marginX='15%' direction='column'>
                <Stack spacing='10px'>
                    {
                    guilds.included.map((guild) => (
                        <Flex bg='blacks.800' rounded='md' paddingLeft='0' direction='column' roundedRight='50px' roundedLeft='50px'>
                            <Flex key={guild.id} justify='space-between'>
                                <Stack isInline alignItems='center' spacing='0'>
                                    <Button h='100%' marginY='0' _hover={{ backgroundColor: '#ff8378', color: 'blacks.800',}} variant='ghost' color='#ff8378' border='1px' borderRight='0' roundedRight='0' roundedLeft='50px' >Remove</Button>
                                    <Button h='100%' marginY='0' _hover={{ backgroundColor: '#78fff1', color: 'blacks.800',}} variant='ghost' color='#78fff1' rounded='0' borderTop='1px' borderBottom='1px' onClick={ () => window.location.href = `/dashboard/${guild.id}`}>Dashboard</Button>
                                    <Button h='100%' marginY='0' _hover={{ backgroundColor: '#ffff78', color: 'blacks.800',}} variant='ghost' color='#ffff78' border='1px' borderRight='1px' borderLeft='0' rounded='0'>Shop</Button>
                                </Stack>
                                <Stack isInline color='white' overflow='hidden' align='center' spacing='15px' justify='space-between'>
                                    <Text>{guild.name}</Text>
                                    <Avatar size='lg' src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`}></Avatar>
                                </Stack> 
                            </Flex>
                        </Flex>
                    ))}
                </Stack>
            </Flex>

            <Flex direction='column' marginTop='20px' paddingY='20px' justify='center'>
                <Flex color='white' direction='column' justify='center' align='center' paddingBottom='5%'>
                    <Text fontSize='4xl'>Lets be Friends in all your guilds uwu !!!</Text>
                </Flex>
                <SimpleGrid direction='column' minChildWidth='200px' spacing="15px" alignItems='center' justifyItems='center'>
                    {guilds.excluded.map((guild) =>(
                        
                        <Box w='200px' bg='blacks.800' rounded='md' roundedTopLeft='25px' roundedBottomRight='25px' spacing='2%' isInline paddingRight='15px' >
                            <Stack isInline align='center' spacing='10px' justify='space-between'>
                                    <Avatar size='md' src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}`}></Avatar>
                                    <Text  overflow='hidden' color='white'>{guild.name}</Text>
                                </Stack>
                                <Stack color='#00FFC2'>
                                    
                                        <Button _hover={{ backgroundColor: '#00FFC2', color: '#23272A',}} onClick={ () => window.open(`https://discord.com/oauth2/authorize?client_id=${config.clientId}&permissions=8&redirect_uri=${config.redirect}`,`_blank`)} margin='0' marginY='10px' marginRight='15px' padding='7px'  borderLeft='0' borderColor='#00FFC2' variant='outline' roundedLeft='0' roundedRight='20px'>Invite</Button>
                                    
                                </Stack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}