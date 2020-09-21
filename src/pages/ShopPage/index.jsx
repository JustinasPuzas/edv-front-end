import React from 'react';
import { getUserDetails } from '../../utils/api';
import {
    Badge,
    StarIcon,
    Flex,
    Box,
    Avatar, Button
  } from "@chakra-ui/core";


export function ShopPage ( {
    history,
}  ) {
    const [user, setUser] = React.useState( null );
    const [loading, setLoading] = React.useState( true );

    const ghostButtonFullSizeRightRound = {
        variant:'ghost',
        color:'#ffff78',
        h:'75px', 
        roundedRight:'50px'
    }

    const YellowButton_hover = {
        backgroundColor: '#ffff78', 
        color: '#23272A',
    }

    React.useEffect ( () => {
        getUserDetails()
            .then(({data}) => {
                console.log(data)
                setUser ( data );
                setLoading( false )
            }).catch( (err) => {
                history.push('/')
                setLoading( false )
            } )
    },[])

    return !loading && (
        <Flex direction='column' paddingX='5%' paddingTop='2%' paddingBottom='2%' align='center'>
            <Flex  color='white' marginBottom='50px' bg='#1e2124' rounded='50px' w='100%' h='100%' direction='column' align='space-around' justify='space-around'>
                <Flex h='100%' direction='row' justify='space-between' align='center' paddingX='0'>
                    <Box>
                        <Avatar size='lg' src={null}></Avatar>
                    </Box>
                    <Box color='yellow'>
                        Your Gold Coins: 100
                    </Box>
                    <Box color='white'>
                        Your Silver Coins: 500
                    </Box>
                    <Box >
                        <Button ghostButtonFullSizeRightRound _hove={{YellowButton_hover}}>
                            Buy More uwu
                        </Button>
                    </Box>
                </Flex>
            </Flex>
            <Flex  w='100%' direction='row' align='space-around' justify='space-between'>
                
            </Flex>
        </Flex>
    );
}