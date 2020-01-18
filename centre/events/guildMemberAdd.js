module.exports = (client, member) => {
	if (member.guild.id == client.userLib.guildAdm) {
		client.userLib.welcomeAdm.send('Йоу, йоу, йоу ' + member + ' с нами!');
	}
	if (member.guild.id == client.userLib.guildCentre) {
		//
		member.addRole(client.userLib.roleAddСentre);
	}
	if (member.guild.id == client.userLib.guildCommunity) {
		//
		member.addRole(client.userLib.roleAddCommunity);
	}
};