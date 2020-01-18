module.exports.run = (client, msg, args) => {

	if (isNaN(+args[1])) return msg.reply('Введите число!');

	msg.reply('Ваше число:' + Math.round(Math.random() * (+args[1] + 1) - 0.5));
}

module.exports.help = {
  flag: 0,
  args: 1
}