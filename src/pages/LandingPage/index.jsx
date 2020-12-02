import React from 'react';
import { Flex } from '@chakra-ui/core';
import {Grid} from '@material-ui/core';

export function LandingPage ( props ) {
    console.log(props)
    return (
        <Flex minH='98vh' w='100%' direction='column' alignContent='center' alignItems='center' paddingTop='1%'>
            <Grid>owo Home Page uwu</Grid>
            <Grid>if you want to manage your music bot go to GUILDS</Grid>
        </Flex>
    )
}