module.exports = (client) => {
	client.user.setPresence({ game: { name: `за центром`, type: 'WATCHING' }});

	client.userLib.welcomeAdm = client.channels.get(client.userLib.welcomeAdm);
	// client.userLib.welcomeCentre = client.channels.get(client.userLib.welcomeCentre);
	// client.userLib.welcomeCommunity = client.channels.get(client.userLib.welcomeCommunity);

	client.userLib.logAdm = client.channels.get(client.userLib.logAdm);
	// client.userLib.logCentre = client.channels.get(client.userLib.logCentre);
	// client.userLib.logCommunity = client.channels.get(client.userLib.logCommunity);

	client.userLib.goneAdm = client.channels.get(client.userLib.goneAdm);
	// client.userLib.goneCentre = client.channels.get(client.userLib.goneCentre);
	// client.userLib.goneCommunity = client.channels.get(client.userLib.goneCommunity);
	
	client.userLib.baneAdm = client.channels.get(client.userLib.baneAdm);
	// client.userLib.baneCentre = client.channels.get(client.userLib.baneCentre);
	// client.userLib.baneCommunity = client.channels.get(client.userLib.baneCommunity);

	let now = +new Date();
	Object.keys(client.userLib.bans).forEach(i => {
		if (client.userLib.bans[i] <= now) client.userLib.delBan(i, 1);
		else setTimeout(() => client.userLib.delBan(i, 1), client.userLib.bans[i] - now);
	});

	console.log(`Бот авторизован как ${client.user.tag}!`);
};