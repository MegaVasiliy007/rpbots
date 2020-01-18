const Discord = require('discord.js'),
	client = new Discord.Client(),
	Enmap = require("enmap"),
	fs = require("fs");

client.userLib = {};

client.userLib.discord = Discord;
client.userLib.admins = ['321705723216134154', '332073651723567106'];


client.userLib.guildAdm = '593867384637489155';
client.userLib.guildCentre = '431138674235932682';
client.userLib.guildCommunity = '593832530793332737';

client.userLib.logAdm = '593925039762702340';
client.userLib.logCentre = '431523021287587843';
client.userLib.logCommunity = '593925090031304734';

client.userLib.welcomeAdm = '593885797166350337';
client.userLib.welcomeCentre = '537266300146417684';
client.userLib.welcomeCommunity = '593838907532247082';

client.userLib.goneAdm = '593885844977352715';
client.userLib.goneCentre = '431513509671469056';
client.userLib.goneCommunity = '593885883799699476';

client.userLib.baneAdm = '593888649142075403';
client.userLib.baneCentre = '431511227563507732';
client.userLib.baneCommunity = '593888874007101461';

client.userLib.roleAddСentre = '';
client.userLib.roleAddCommunity = '';


client.userLib.bans = require('./bans.json');

client.userLib.saveBans = () => {
	fs.writeFile('./bans.json',  JSON.stringify(client.userLib.bans), 'utf8', () => {});
};

client.userLib.addBan = (id, time) => {
	let now = new Date();
	client.userLib.bans[id] = now.setMinutes(now.getMinutes() + time);
	client.userLib.saveBans();
};

client.userLib.delBan = (id, flag = false) => {
	delete client.userLib.bans[id];
	if (flag) client.guilds.first().members.get(id).removeRole('');
	client.userLib.saveBans();
};

// client.userLib.promise = require('/root/site/modules/promise');

fs.readdir("/root/rpbots/centre/events/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		try {
			const event = require(`./events/${file}`);
			let eventName = file.split(".")[0];
			client.on(eventName, event.bind(null, client));
			delete require.cache[require.resolve(`./events/${file}`)];
		} catch (e) {console.warn(e)}
	});
});

client.commands = new Enmap();

fs.readdir("/root/rpbots/centre/commands/", (err, files) => {
	if (err) return console.error(err);
	files.forEach(file => {
		if (!file.endsWith(".js")) return;
		try {
			let props = require(`./commands/${file}`);
			let commandName = file.split(".")[0];
			client.commands.set(commandName, props);
		} catch (e) {console.warn(e)}
	});
});

client.login('NTk0ODUzOTk1MzYxNzMwNTcx.XRvCqg.iVR_HdTLMim3ZzLgeYV00vGyYXw');