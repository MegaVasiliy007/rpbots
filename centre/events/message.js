module.exports = (client, msg) => {
  
  if (msg.author.bot || !msg.content.toLowerCase().startsWith('..') || msg.channel.type == 'dm') return;

  const args = msg.content.slice(2).trim().split(/ +/g);
  const command = args[0].toLowerCase();

  const cmd = client.commands.get(command);
  if (!cmd) return;

  if (cmd.help.flag && client.userLib.admins.indexOf(msg.author.id) == -1) return msg.reply('Недостаточно прав!');

  if (cmd.help.args && !args[1]) return msg.reply('Укажите аргумент команды!');

  cmd.run(client, msg, args);
};