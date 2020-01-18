module.exports.run = (client, msg, args) => {

	if (isNaN(+args[2])) return msg.reply('Введите время числом минут!');

	args.shift();
	let user = msg.mentions.members.first() ? msg.mentions.members.first() : msg.guild.members.get(args[0]);
	args.shift();

	let time = +args.shift();

	client.userLib.addBan(user.id, time);
	user.addRole('');

	setTimeout(() => {
		client.userLib.delBan(user.id); 
		user.removeRole('');
	}, time * 60 * 1000);

	msg.channel.send(user + ' выдан мут на ' + time + ' минут(ы) за ' + args.join(' ').toLowerCase());
}

module.exports.help = {
  flag: 1,
  args: 1
}