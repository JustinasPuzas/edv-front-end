import React from 'react';
import { Formik } from 'formik';
import { useQuery, useMutation } from '@apollo/client';
import { Text, Box, Stack, useToast, Input, Button, Select } from '@chakra-ui/core';
import { updateDefaultRoleMutation } from '../../../grpahql/mutations'

export function DefaultRoleField({
    config,
    match,
    roles
}) {
    const toast = useToast();
    const [ loading, setLoading ] = React.useState(false)
    const [ updateDefaultRole ] = useMutation(updateDefaultRoleMutation);
    const defaultRoleId = config.defaultRole ? config.defaultRole : '';
    const updateRole = async (defaultRole) =>{
        try{
            setLoading(true)
            const response = await updateDefaultRole({
                variables:{
                    guildId: match.params.id,
                    defaultRole,
                }
            })
            toast({
                title: "Default role was changed",                    
                status: "success",
                duration: 3000,
                isClosable: true,
              })
              setTimeout(setLoading, 2500 , false )
        }catch (err) {
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
                initialValues = {{ defaultRole: defaultRoleId}}
                onSubmit={({defaultRole}) => {updateRole(defaultRole)}}
            >
                {
                    (props) =>(

                        <form onSubmit={props.handleSubmit}>
                            
                                <Stack w='full' align='center' spacing='10px' paddingTop='10px' justify='space-between'>
                                    <Text color='electroGreen.500'>Verified Role</Text>
                                    <Select color='electroGreen.600' border='0px' backgroundColor="blacks.900" name="defaultRole" onChange={props.handleChange}>
                                            <option value={'0'} selected={!defaultRoleId} key={'0'} bg='white' color='white'>NO DEFAULT ROLE</option>
                                        {roles.map((role) =>(
                                            <option value={role.id} selected={role.id === defaultRoleId} key={role.id}>{role.name}</option>
                                        ))}
                                    </Select>
                                </Stack>
                                <Stack color='#00FFC2' isInline spacing='10px'>
                                    <Button w='full' isLoading={loading} _hover={{ backgroundColor: '#00FFC2', color: '#23272A',}} margin='0' marginY='10px' marginRight='15px' padding='7px'  borderLeft='0' borderColor='#00FFC2' variant='outline' roundedLeft='0' roundedRight='20px' type="submit" children="Update Role" />
                                </Stack>
                            
                        </form>
                    )
                }
            </Formik>
    )
}