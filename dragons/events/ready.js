module.exports = (client) => {
	client.user.setPresence({ game: { name: `за драконами`, type: 'WATCHING' }});

	let now = +new Date();

	Object.keys(client.userLib.bans).forEach(i => {
		if (client.userLib.bans[i] <= now) client.userLib.delBan(i, 1);
		else setTimeout(() => client.userLib.delBan(i, 1), client.userLib.bans[i] - now);
	});

	console.log(`Бот авторизован как ${client.user.tag}!`);
};