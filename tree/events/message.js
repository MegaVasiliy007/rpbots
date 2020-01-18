module.exports = (client, msg) => {
  if (msg.author.bot) return;
  if (msg.channel.type == 'dm') return msg.channel.send("Команды недоступны в личных сообщениях.");

  if (msg.channel.id == '587653322002137109' && msg.content == 'Корин') {msg.member.addRole('587654149215223821'); return msg.delete();}
  if (msg.channel.id == '587653322002137109') return msg.delete();

  if (!msg.content.toLowerCase().startsWith('..')) return;

  const args = msg.content.slice(2).trim().split(/ +/g);
  const cmd = client.commands.get(args[0].toLowerCase());
  if (!cmd) return;

  if (!cmd.help.flag && msg.author.id != '321705723216134154') return msg.author.send('У вас недостаточно прав!');

  if (cmd.help.args && !args[1]) {const embed = new client.discord.RichEmbed().setAuthor("Ошибка! Отстутствует аргумент команды!", "https://cdn.discordapp.com/attachments/470556903718649856/470821090835300363/error-and-problems.png").setColor('#D0021B').setTimestamp().setFooter(msg.author.tag); return msg.reply({embed})}

  cmd.run(client, msg, args);
};