import { gql } from '@apollo/client';

export const navigationBarQuery = gql`
    query getNavigationBarQuery {
        getUser{
            discordId
            discordTag
            avatar
        }
    }
`



export const menuPageQuery = gql`
    query getMenuPageQuery {
        getUser {
            discordId
            discordTag
            avatar
        }
        getMutualGuilds {
            included {
                name
                id
                icon
            }
            excluded {
                name
                id
                icon
            }
        }
    }
`;

export const landingPageQuery = gql`
    query getLandingPageData{
        getUser{
            discordId
            discordTag
            avatar
          }
    }
`

export const musicModuleQuery = gql`

    query getMusicModuleData($guildId: String){
        getUser {
            discordId
            discordTag
            avatar
        }
        getGuildVoiceChannels(guildId: $guildId) {
            id
            name
        }
        getMusicModule(guildId: $guildId){
            prefix
            display
            shuffle
            moduleType
            on
            status
            defaultChannel
            activePlaylist{
              songs
            }
            savedPlaylists{
                author
                songs
            }
        }
        getUser{
            discordId
            discordTag
            avatar
        }
    }
`

export const dashboardPageQuery = gql`
    query getDashboardPageData($guildId: String){
        getUser {
            discordId
            discordTag
            avatar
        }
        getGuildConfig(guildId: $guildId) {
            prefix
            guildId
            defaultRole
        }
        getGuildRoles(guildId: $guildId) {
            id
            name
        }
    }
`