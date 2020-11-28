import React from 'react'
import {Flex, Box, Link, Stack , Button, Text , Avatar} from "@chakra-ui/core";
import { config } from '../../config'
import { navigationBarQuery } from '../../grpahql/queries';
import { useQuery} from '@apollo/client';


export function NavigationBar({

}){

  const home = () => window.location.href = `/`;
  const menu = () => window.location.href = `/menu`;
  const shop = () => window.location.href = `/shop`;

    return(
      <Flex minHeight='2vh' bg='black' direction='row' align='center' justify='space-between' >
        
        <Flex  w='33%' justify='flex-start' marginLeft='1%' >
                <Text color='#00FFC2' fontSize='4xl'>
                  Lilu Inc
                </Text>
        </Flex>

        <Flex>
             <Stack isInline color='white' spacing='0px'>
                <Button _hover={{ backgroundColor: '#EEEEFF', color: '#000000',}} variant='ghost'  size='lg' paddingX='20px' rounded='0' onClick={home} >Home</Button>
                <Button _hover={{ backgroundColor: '#EEEEFF', color: '#000000',}} variant='ghost'  size='lg' paddingX='20px' rounded='0' onClick={menu}>Guilds</Button>
                <Button _hover={{ backgroundColor: '#EEEEFF', color: '#000000',}} variant='ghost'  size='lg' paddingX='20px' rounded='0'  onClick={shop}>Shop</Button>
              </Stack>
        </Flex>

        <Flex  w='33%' justify='flex-end'> 
                  <UserInfo />
          </Flex>
      </Flex>  
    )

};

function UserInfo({

}){
  const {loading, error, data} = useQuery(navigationBarQuery);
  const login = () => window.location.href = `${config.BACK_END_URL}/api/auth/discord`;


  if(!loading && !error){

    if(data.getUser){
      const { avatar, discordTag, discordId } = data.getUser;
      return (
        <Flex direction='row' align='center' marginRight='2%'>
          <Text color='white' fontSize='1xl'>{discordTag}</Text>
          <Avatar marginLeft='10px' src={`https://cdn.discordapp.com/avatars/${discordId}/${avatar}`} />
        </Flex>
      )
    }else{
      return (
        <Button
          paddingX='30px'         
          bg='#00FFC2'
          onClick={login}
          roundedRight='0'
        >
        Login
        </Button>
      )
    }
  }return(
    null
  )

}