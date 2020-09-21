import { gql } from '@apollo/client';

export const updateGuildPrefixMutation = gql`
    mutation UpdateGuildPrefix($guildId: String, $prefix:String){
        updateGuildPrefix(guildId: $guildId, prefix: $prefix){
            prefix
            guildId
        }
    }
`;

export const updateDefaultRoleMutation = gql`
    mutation UpdateGuildPrefix($guildId: String, $defaultRole:String){
        updateDefaultRole(guildId: $guildId, defaultRole: $defaultRole){
            defaultRole
            guildId
        }
    }
`;