module.exports = (client, member) => {
	if (member.guild.id == client.userLib.guildAdm) {
		client.userLib.goneAdm.send(`Участник ${member.user.tag} (${member.user} ${member.user.id}) покинул сервер ${member.guild.name}`);
	}
	if (member.guild.id == client.userLib.guildCentre) {
		client.userLib.goneCentre.send(`Участник ${member.user.tag} (${member.user} ${member.user.id}) покинул сервер ${member.guild.name}`);
	}
	if (member.guild.id == client.userLib.guildCommunity) {
		client.userLib.goneCommunity.send('Хнык, хнык ' + member + ' покинул нас!');
	}
};