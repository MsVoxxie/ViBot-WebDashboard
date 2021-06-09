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