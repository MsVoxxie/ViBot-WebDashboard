import axios from 'axios';

export function getUserDetails() {
    return axios.get('http://192.168.0.110:3001/api/auth/', {
        withCredentials: true
    })
}

export function getGuilds() {
    return axios.get('http://192.168.0.110:3001/api/discord/guilds', {
        withCredentials: true
    })
}

export function updateGuild(guildID, datatype, data) {
    try {
        return axios.put(`http://192.168.0.110:3001/api/discord/guilds/${guildID}/${datatype}`, { data }, { withCredentials: true })
    } catch (error) {
        console.error(error);
    }
}

export function getGuildConfig(guildID) {
    return axios.get(`http://192.168.0.110:3001/api/discord/guilds/${guildID}/config`, { withCredentials: true })
}