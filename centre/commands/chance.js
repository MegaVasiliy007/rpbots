module.exports.run = (client, msg, args) => {

	msg.reply(Math.round(Math.random() * 101 - 0.5) > 50 ? 'Вам повезло!' : 'Вам неповезло!');
}

module.exports.help = {
  flag: 0,
  args: 0
}