const Discord = require('discord.js'),
  client = new Discord.Client(),
  Enmap = require("enmap"),
  fs = require("fs");

client.userLib = {};

client.userLib.discord = Discord;
client.userLib.admins = ['321705723216134154', '447370661435015168', '293844406950166530'];

// client.userLib.promise = require('/root/site/modules/promise');

fs.readdir("/root/rpbots/ship/events/", (err, files) => {
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

fs.readdir("/root/rpbots/ship/commands/", (err, files) => {
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

client.login('NTg3NzMyNDE2NjA1NzE2NDgx.XRP7mA.whSluQoXEVN5G_s6vM0rPPG2b8k');