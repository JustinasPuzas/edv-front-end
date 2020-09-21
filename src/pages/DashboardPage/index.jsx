import React from 'react';
import { DashboardMenu } from '../../components';
import { useQuery, useMutation } from '@apollo/client';
import { dashboardPageQuery } from '../../grpahql/queries';
import { updateGuildPrefixMutation, updateDefaultRoleMutation } from '../../grpahql/mutations';
import {
    Flex,
  } from "@chakra-ui/core";

export function DashboardPage ( {
    history,
    match
} ) {      
        return (
            <Flex minH='98vh' w='100%' direction='column'>
                <DashboardMenu match={match} />
            </Flex>
        )
}