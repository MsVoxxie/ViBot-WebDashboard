import axios from 'axios';

export function getUserDetails() {
	return axios.get('https://api.voxxie.me/api/auth/', {
		withCredentials: true,
	});
}

export async function getBotDetails() {
	return await axios.get('https://api.voxxie.me/api/discord/vibot', {
		withCredentials: true,
	});
}

export function getGuilds() {
	return axios.get('https://api.voxxie.me/api/discord/guilds', {
		withCredentials: true,
	});
}

export function updateGuild(guildID, datatype, data) {
	try {
		return axios.put(`https://api.voxxie.me/api/discord/guilds/${guildID}/${datatype}`, { data }, { withCredentials: true });
	} catch (error) {
		console.error(error);
	}
}

export function getGuildConfig(guildID) {
	return axios.get(`https://api.voxxie.me/api/discord/guilds/${guildID}/config`, { withCredentials: true });
}
