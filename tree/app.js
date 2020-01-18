console.log('Инициализация ядра...\nПодключение библиотек...');
let color = require('colors');
const Discord = require('discord.js'),
client = new Discord.Client({disableEveryone: true, messageCacheMaxSize: 1, messageCacheLifetime: 1, messageSweepInterval: 1, fetchAllMembers: false});
const Enmap = require("enmap"),
  fs = require("fs");
// let con = require('mysql').createConnection({user: "tree", password: "8uqJby", database: "tree", charset: "utf8mb4"});
// con.on('error', (err) => {console.log(err)});
// con.connect((err) => {if (err) return console.error('error connecting: ' + err.stack); console.log('connected as id ' + con.threadId); delete err;});
// let util = require('mysql-utilities');
// util.upgrade(con);
// util.introspection(con);
client.discord = Discord;
// client.db = con;
// client.promise = require('/root/site/promise.js');

// con.queryKeyValue('SELECT id, tier FROM admins WHERE 1', (err, result) => client.admins = result);
console.log(`Библиотеки`.black.bgWhite+` подключены!\n`.white);

fs.readdir("/root/bots/tree/events/", (err, files) => {
  if (err) return console.error(err);
  let counter = files.length;
  let counteris = 0;
  files.forEach(file => {
    counteris++;
    if (!file.endsWith(".js")) return;
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log(`Ивент `.white+`${eventName}`.black.bgWhite+` загржен. [${counteris}/${counter}]`.white);
    delete require.cache[require.resolve(`./events/${file}`)];
  });
  if (counter == counteris) console.log('Все ивенты загружены!\n'.white);
});

client.commands = new Enmap();

fs.readdir("/root/bots/tree/commands/", (err, files) => {
  if (err) return console.error(err);
  let counter = files.length;
  let counteris = 0;
  files.forEach(file => {
    counteris++;
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log(`Команда `.white+`${commandName}`.black.bgWhite+` загржена. [${counteris}/${counter}]`.white);
  });
  if (counter == counteris) console.log('Все команды загружены!\n'.white);
});

client.login("NTg3NzMyNzY0NDQzNTQxNTE1.XP63MA.9gW79hHV9FzLMbA--WEULf4rhBs");