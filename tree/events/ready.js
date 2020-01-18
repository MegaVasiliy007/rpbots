module.exports = (client) => {
	client.user.setPresence({ game: { name: `за совами`, type: 'WATCHING' }});
	client.logc = client.channels.get('581571939882237963');

	client.channels.get('581571446212657152').setName('🕒 ' + ('00' + new Date().getHours()).slice(-2) + ':' + ('00' + new Date().getMinutes()).slice(-2) + " " + ('00' + new Date().getDate()).slice(-2) + '.' + ('00' + (new Date().getMonth() + 1)).slice(-2) + '.' + new Date().getFullYear());
	client.channels.get('581571482065436677').setName('👬 ALL: ' + (client.guilds.first().memberCount - 2));
	client.channels.get('581571502785298432').setName('🌳 RP: ' + client.guilds.first().roles.get('587656217380388874').members.size);

	setInterval(() => {client.channels.get('581571446212657152').setName('🕒 ' + ('00' + new Date().getHours()).slice(-2) + ':' + ('00' + new Date().getMinutes()).slice(-2) + " " + ('00' + new Date().getDate()).slice(-2) + '.' + ('00' + (new Date().getMonth() + 1)).slice(-2) + '.' + new Date().getFullYear());
						client.channels.get('581571482065436677').setName('👬 ALL: ' + (client.guilds.first().memberCount - 2));
						client.channels.get('581571502785298432').setName('🌳 RP: ' + client.guilds.first().roles.get('587656217380388874').members.size);}, 60000);
	console.log(`Бот авторизован как `.white + `${client.user.tag}`.black.bgWhite + `!`.white);
};