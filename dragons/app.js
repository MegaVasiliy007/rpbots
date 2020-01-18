const Discord = require('discord.js'),
	client = new Discord.Client(),
	Enmap = require("enmap"),
	fs = require("fs");

client.userLib = {};

client.userLib.discord = Discord;
client.userLib.admins = ['321705723216134154', '447370661435015168'];

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
	if (flag) client.guilds.first().members.get(id).removeRole('592754388192460810');
	client.userLib.saveBans();
};

// client.userLib.promise = require('/root/site/modules/promise');

fs.readdir("/root/rpbots/dragons/events/", (err, files) => {
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

fs.readdir("/root/rpbots/dragons/commands/", (err, files) => {
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

client.login('NTg3NzMyOTA5NDk1MDI1NzI5.XRPtiQ.kgFftyUUZ8XRQfe_7RcrePKVn5I');