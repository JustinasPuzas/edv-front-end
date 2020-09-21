import React from 'react';
import { Formik } from 'formik';
import { Box, Stack, Text, useToast, Input, Button, Select } from '@chakra-ui/core';
import { useMutation } from '@apollo/client';
import { updateGuildPrefixMutation } from '../../../grpahql/mutations';

export function PrefixField({
   config,
   match

}) { 
    const toast = useToast();
    const [ updateGuildPrefix ] = useMutation(updateGuildPrefixMutation);
    const [ loading, setLoading ] = React.useState(false);

    const updatePrefix = async ( prefix ) =>{
        setLoading(true);
        try{
            if(prefix.length > 5){
                toast({
                    title: "Prefix can't be longer than 5 symbols",                    
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  })
                setTimeout(setLoading, 4750 , false )
                return
            }
            if(!prefix){
                toast({
                    title: "You have to provide Prefix!",                    
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  })
                setTimeout(setLoading, 4750 , false )
                return
            }
            const response = await updateGuildPrefix({
                variables:{
                    guildId: match.params.id,
                    prefix,
                }
            });
            setTimeout(setLoading, 2500 , false )
            toast({
                title: "Prefix Updated Successfully",
                description: `New prefix: ${prefix}`,
                status: "success",
                duration: 3000,
                isClosable: true,
              })
        }catch (err){
            console.log(err)
            toast({
                title: "Error",
                description: "try again latter :/",           
                status: "error",
                duration: 5000,
                isClosable: true,
              })
              setTimeout(setLoading, 4750 , false )
        }
    }

    return (
    <Formik
        initialValues={ { prefix: config.prefix } }
        onSubmit={({prefix}) => {updatePrefix(prefix)}}>
        {
            (props) => (
                <form onSubmit={props.handleSubmit}>
                    
                                <Stack w='full' align='center' spacing='10px' paddingTop='10px' justify='space-between'>
                                    <Text color='electroGreen.500'>Prefix</Text>
                                    <Input w='full' focusBorderColor="electroGreen.500" border='0px' bg='blacks.900' color='electroGreen.600' type='text' name='prefix' onChange={ props.handleChange} defaultValue={config.prefix} />
                                </Stack>
                                <Stack color='#00FFC2' isInline spacing='10px'>
                                    <Button w='full' isLoading={loading} _hover={{ 
  color: '#fff',
  webkitAnimation: 'glow 1s ease-in-out infinite alternate',
  mozAnimation: 'glow 1s ease-in-out infinite alternate',
  animation: 'glow 1s ease-in-out infinite alternate', backgroundColor: '#00FFC2', color: '#23272A',}} margin='0' marginY='10px' marginRight='15px' padding='7px'  borderLeft='0' borderColor='#00FFC2' variant='outline' roundedLeft='0' roundedRight='20px' type="submit" children="Update Prefix" />
                                </Stack>

                </form>
            )
        }
    </Formik>)
}