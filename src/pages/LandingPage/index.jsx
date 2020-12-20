import React from 'react';
import { Flex } from '@chakra-ui/core';
import {Grid, Typography} from '@material-ui/core';
import { HomePage } from '../../components/Home'

export function LandingPage ( props ) {
    console.log(props)
    return (
        <Flex minH='98vh' w='100%' direction='column' alignContent='center' alignItems='center' paddingTop='1%'>
            <Grid>
                <Typography>
                OwO  Home Page  UwU
                </Typography>
            </Grid>
            <HomePage />
        </Flex>
    )
}