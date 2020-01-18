module.exports = (client, guild, user) => {
	if (guild.id == client.userLib.guildAdm) {
		client.userLib.baneAdm.send('Айайай ' + user + ' был забанен!');
	}
	if (guild.id == client.userLib.guildCentre) {
		client.userLib.baneCentre.send('Айайай ' + user + ' был забанен!');
	}
	if (guild.id == client.userLib.guildCommunity) {
		client.userLib.baneCommunity.send('Айайай ' + user + ' был забанен!');
	}
};