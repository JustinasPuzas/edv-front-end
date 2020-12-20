import React from 'react'
import {Flex, Box, Link, Stack , Button, Text} from "@chakra-ui/core";

export function Footer({
}){

    return(
        <Flex height='11vh' bg='black' color='white' direction='row' align='center' justify='space-around'>
            <Flex>
                Discord: https://discord.gg/JWECz5crCA
            </Flex>
            <Flex>
                Lilu Inc.
            </Flex>
        </Flex>
    )

};