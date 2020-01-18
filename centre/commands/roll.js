module.exports.run = (client, msg, args) => {

	if (!args[1]) args[1] = '1d6';

	args = args[1].split('d');
	let sym = args[1].indexOf('+') != -1 ? 1 : args[1].indexOf('-') != -1 ? -1 : 0;

	if (args.length != 2) return msg.reply('Неправильный формат! (кол-во кубиков)d(кол-во граней)(+ или - от итогового числа)');
	if (isNaN(+args[0]) || +args[0] < 1 || +args[0] > 100) return msg.reply('Неправильное количество кубиков. Их может быть от 1 до 100.');
	if (sym === -1 || sym === 1) args = [args[0], ...(sym === 1 ? args[1].split('+') : args[1].split('-'))];
	if ((sym === -1 || sym === 1) && isNaN(+args[2])) args[2] = 0;
	args = args.map((val) => +val);
	if (sym === -1 || sym === 1) sym = sym === 1 ? args[2] : -args[2];
	if (isNaN(args[1]) || args[1] < 2 || args[1] > 100) return msg.reply('Неправильное количество сторон. Их может быть от 2 до 100.');

	if (args[0] == 1) return msg.reply('Ваше число:' + (Math.round(2 + Math.random() * (args[1] - 1) - 0.5) + sym ));

	let temp = [], tempStr = 'Выпавшие числа: ``';

	for (var i = 0; i < args[0]; i++) {
		temp.push(Math.round(2 + Math.random() * (args[1] - 1) - 0.5));
		tempStr += temp[i] + ', ';
	}

	tempStr = tempStr.slice(0, -2);
	tempStr += '``\nВ сумме вам выпало: ' + (temp.reduce((a, b) => a + b, 0) + sym);

	msg.reply(tempStr);
}

module.exports.help = {
  flag: 0,
  args: 0
}