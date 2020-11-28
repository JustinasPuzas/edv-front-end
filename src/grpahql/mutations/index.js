import { gql } from '@apollo/client';

export const updateGuildPrefixMutation = gql`
    mutation UpdateGuildPrefix($guildId: String, $prefix: String){
        updateGuildPrefix(guildId: $guildId, prefix: $prefix){
            prefix
            guildId
        }
    }
`;

export const updateDefaultRoleMutation = gql`
    mutation UpdateGuildPrefix($guildId: String, $defaultRole: String){
        updateDefaultRole(guildId: $guildId, defaultRole: $defaultRole){
            defaultRole
            guildId
        }
    }
`;

export const updateMusicBotPrefixMutation = gql`
    mutation updateMusicBotPrefix($guildId: String, $prefix: String){
        updateMusicBotPrefix(guildId: $guildId, prefix: $prefix){
            prefix
            guildId
        }
    }
`;

export const updateMusicBotStateMutation = gql`
    mutation updateMusicBotState($guildId: String, $on: Boolean){
        updateMusicBotState(guildId: $guildId, on: $on){
            on
            guildId
        }
    }
`;

export const updateMusicBotDisplayMutation = gql`
    mutation updateMusicBotDisplay($guildId: String, $display: Boolean){
        updateMusicBotDisplay(guildId: $guildId, display: $display){
            display
            guildId
        }
    }
`;

export const updateMusicBotShuffleMutation = gql`
    mutation updateMusicBotShuffle($guildId: String, $shuffle: Boolean){
        updateMusicBotShuffle(guildId: $guildId, shuffle: $shuffle){
            shuffle
            guildId
        }
    }
`;

export const updateMusicBotDefaultChannelMutation = gql`
    mutation updateMusicBotDefaultChannel($guildId: String, $defaultChannel: String){
        updateMusicBotDefaultChannel(guildId: $guildId, defaultChannel: $defaultChannel){
            defaultChannel
            guildId
        }
    }
`;

export const updateMusicBotActivePlaylistMutation = gql`
    mutation updateMusicBotActivePlaylist($guildId: String, $newMusic: [String], $removeMusic: [String] ){
        updateMusicBotActivePlaylist(guildId: $guildId, newMusic: $newMusic, removeMusic: $removeMusic){
            link
            title
            thumbnail
            author
        }
    }
`;

