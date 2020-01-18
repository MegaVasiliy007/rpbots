exports.help = {
	flag: 0,
	args: 1
}

exports.run = (client, msg, args) => {
	if (!require('fs').existsSync('/root/bots/tree/commands/' + args[1] + ".js")) return msg.reply(`СЛОЖНА СЛОЖНА НИХУРА НЕ ПОНЯТНО! КОМАНДЫ ${args[1]} НЕТ!`);
	delete require.cache[require.resolve(`/root/bots/tree/commands/${args[1]}.js`)];
	client.commands.delete(args[1]);
  	const props = require(`/root/bots/tree/commands/${args[1]}.js`);
  	client.commands.set(args[1], props);
  	msg.reply(`Команда ${args[1]} был перезапущена!`);
}