module.exports = (client, msg) => {
  
  if (msg.author.bot || msg.channel.type == 'dm') return;

  if (msg.channel.id == '561962037333327881' && msg.content.toLowerCase() == 'очнулся') {client.commands.get('очнулся').run(client, msg); return;}
  if (msg.channel.id == '561962880883228692' && msg.content.toLowerCase() == 'память') {client.commands.get('память').run(client, msg); return;}

  if (msg.content.toLowerCase() == 'очнулся' || msg.content.toLowerCase() == 'память') return;

  if (!msg.content.toLowerCase().startsWith('..')) return;

  const args = msg.content.slice(2).trim().split(/ +/g);
  const command = args[0].toLowerCase();

  const cmd = client.commands.get(command);
  if (!cmd) return;

  if (cmd.help.flag && client.userLib.admins.indexOf(msg.author.id) == -1) return msg.reply('Недостаточно прав!');

  if (cmd.help.args && !args[1]) return msg.reply('Укажите аргумент команды!');

  cmd.run(client, msg, args);
};