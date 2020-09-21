import axios from 'axios';
import { config } from '../config';

export function getUserDetails() {
    return axios.get(`${config.BACK_END_URL}/api/auth`, {
        withCredentials: true,  
    })
}

export function getGuilds(){
    return axios.get(`${config.BACK_END_URL}/api/discord/guilds`, {
        withCredentials: true,  
    })
}

export function getGuildConfig(guildId){
    return axios.get(`${config.BACK_END_URL}/api/discord/guilds/${guildId}/config`, {
        withCredentials: true,  
    })
}

export function getGuildRoles(guildId){
    return axios.get(`${config.BACK_END_URL}/api/discord/guilds/${guildId}/roles`, {
        withCredentials: true,
        }
    );
}

// export function updateGuildPrefix(guildId, prefix){

//     return axios.put(`${config.BACK_END_URL}/api/discord/guilds/${guildId}/prefix`, {
//         prefix
//     },{
//         withCredentials: true,
//     })
// }

// export function updateDefaultRole(guildId, defaultRole){
//     return axios.put(`${config.BACK_END_URL}/api/discord/guilds/${guildId}/roles/default`, {
//         defaultRole
//     },{
//         withCredentials: true,
//     })
// }