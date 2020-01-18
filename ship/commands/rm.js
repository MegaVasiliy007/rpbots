module.exports.run = (client, msg, args) => {

	if (!require('fs').existsSync('/root/rpbots/ship/commands/' + args[1] + ".js")) return msg.reply(`СЛОЖНА СЛОЖНА НИХУРА НЕ ПОНЯТНО! КОМАНДЫ ${args[1]} НЕТ!`);
	delete require.cache[require.resolve(`/root/rpbots/ship/commands/${args[1]}.js`)];
	client.commands.delete(args[1]);
	const props = require(`/root/rpbots/ship/commands/${args[1]}.js`);
	client.commands.set(args[1], props);
	msg.reply(`Команда ${args[1]} был перезапущена!`);

}

module.exports.help = {
  flag: 1,
  args: 1
}