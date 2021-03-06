function sendLog(channel, author, type, strength = 0) {
	channel.send('Медицинский отчет по ' + author + ' \n У него: ' + type + (strength ? '\n Степень: ' + strength : ''));
}

module.exports.run = async (client, msg) => {

	let member = msg.member;

	let msgs = await msg.channel.send(`Добро пожаловать. Вы находитесь на борту корабля "Ковчег". Я компьютер, обслуживающий реабилитационный отсек корабля. Я буду находиться рядом на время прохождения курса реабилитации. Как вы себя чувствуете? Возможные симптомы длительного нахождения в стазисе: \n -A Тошнота. \n -B Головная боль. \n -C Зуд. \n -D Сердечная боль. \n -E Головокружение. \n Если вы себя чувствуете хорошо - нажмите -ОК.`);
	msg.delete();
	await msgs.react('🇦');await msgs.react('🇧');await msgs.react('🇨');await msgs.react('🇩');await msgs.react('🇪');await msgs.react('🆗');

	let collector = await msgs.awaitReactions((reaction, user) => ['🇦', '🇧', '🇨', '🇩', '🇪', '🆗'].indexOf(reaction.emoji.name) != -1 && user.id == member.id, {max: 1, time: 15000 }).then(coll => coll.first() ? coll.first().emoji.name : 0);
	await msgs.clearReactions();
	if (!collector) {msgs.edit('Истекло Время ожидания ответа. Введите кодовое слово заново.'); msgs.delete(5000); return;}
	let gg = 0;
	switch (collector) {
		case '🇦':
			msgs.edit('Вы назвали букву A. Оцените степень тошноты от 1 до 3, где 1 - лёгкая тошнота, 3 - вас сейчас стошнит.');
			break;
		case '🇧':
			msgs.edit('Вы назвали букву B. Оцените степень головной боли от 1 до 3, где 1 - лёгкая головная боль, 3 - невыносимая головная боль.');
			break;
		case '🇨':
			msgs.edit('Вы назвали букву C. Оцените степень зуда от 1 до 3, где 1 - лёгкий зуд, 3 - ужасный зуд.');
			break;
		case '🇩':
			msgs.edit('Вы назвали букву D. Оцените степень сердечной боли от 1 до 3, где 1 - лёгкая сердечная боль, 3 - сильная сердечная боль.');
			break;
		case '🇪':
			msgs.edit('Вы назвали букву E. Оцените степень головокружения от 1 до 3, где 1 - лёгкое головокружение, 3 - сильнейшее головокружение, отсутствие понимания происходящего.');
			break;
		default:
			msgs.edit('Хорошо. Вношу данные в базу... \n *Ваша кушетка передвигается в комнату загрузки памяти*');
			msgs.delete(5000);
			gg = 1;
			break;
	}

	if (gg) {sendLog(msgs.channel, member, 'OK'); return;}

	await msgs.react('1⃣');await msgs.react('2⃣');await msgs.react('3⃣');

	let collector2 = await msgs.awaitReactions((reaction, user) => ['1⃣', '2⃣', '3⃣'].indexOf(reaction.emoji.name) != -1 && user.id == member.id, {max: 1, time: 15000 }).then(coll => coll.first() ? coll.first().emoji.name : 0);
	msgs.clearReactions();
	if (!collector2) {msgs.edit('Истекло Время ожидания ответа. Введите кодовое слово заново.'); msgs.delete(5000); return;}
	let type = 0, strength = 0;
	switch (collector) {
		case '🇦':
			if (collector2 == '1⃣') {
				msgs.edit('Уровень тошноты в норме. После прохождения реабилитации отдохните. \n *Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 1;
			}
			else if (collector2 == '2⃣') {
				msgs.edit('*Из кпельницы, присоедененной к кушетке на которой вы лежите, полилась желтоватая жидкость. Вам становится легче. \n Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 2;
			}
			else {
				msgs.edit('*Из кпельницы, присоедененной к кушетке на которой вы лежите, полилась красная жидкость. Вам становится легче. \n Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 3;
			}
			type = 'Тошнота';
			break;
		case '🇧':
			if (collector2 == '1⃣') {
				msgs.edit('Уровень головной боли в норме. После прохождения реабилитации отдохните или обратитесь к врачу. \n *Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 1;
			}
			else if (collector2 == '2⃣') {
				msgs.edit('*Из кпельницы, присоедененной к кушетке на которой вы лежите, полилась прозрачная жидкость. Вам становится легче. \n Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 2;
			}
			else {
				msgs.edit('*Вы видете открывающиеся двери в маленькую комнату с какими-то излучателями. Ваша кушетка передвигается в эту комнату. Комната закрылась. Вы слышите голос робота:* \n -Проводится процедура разгрузки. \n *Шум. Вы отключились. Проснувшись вы были в совсем другой комнате. На стене светилась надпись "Комната загрузки памяти". Ваше самочувствие пришло в норму.*');
				strength = 3;
			}
			type = 'Головная боль';
			break;
		case '🇨':
			if (collector2 == '1⃣') {
				msgs.edit('Ваш уровень зуда в норме, учитывая текущие условия. \n *Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 1;
			}
			else if (collector2 == '2⃣') {
				msgs.edit('*Вы резко почувствовали холод, видимость ухудшилась. Спустя некоторое время, вы поняли, что манипулятор выпрыснул какой-то спрей... \n Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 2;
			}
			else {
				msgs.edit('*Вы видете открывающиеся двери в маленькую комнату с какими-то трубами. Ваша кушетка передвигается в эту комнату. Комната закрылась. Вы слышите голос робота:* \n -Проводится процедура обеззараживания. \n *Шум. Вы отключились. Проснувшись вы были в совсем другой комнате. На стене светилась надпись "Комната загрузки памяти". Ваше самочувствие пришло в норму.*');
				strength = 3;
			}
			type = 'Зуд';
			break;
		case '🇩':
			if (collector2 == '1⃣') {
				msgs.edit('Ваша сердечная боль в пределах нормы. После прохождения реабилитации отдохните или обратитесь к врачу. \n *Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 1;
			}
			else if (collector2 == '2⃣') {
				msgs.edit('*Вы почувствовали, как через капельницу вам интенсивно вводят неизвестный вам препарат.* \n *Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 2;
			}
			else {
				msgs.edit('*Ваша кушетка приняла горизонтальное положение. Вы услышали звук открывающихся дверей. Ваша кушетка переместилась в открывшуюся яркую комнату с множеством выключенных роботов. Вы неожиданно уснули.* \n *Проснувшись вы были в совсем другой комнате. На стене светилась надпись "Комната загрузки памяти". Ваше самочувствие пришло в норму.*');
				strength = 3;
			}
			type = 'Сердечная боль';
			break;
		case '🇪':
			if (collector2 == '1⃣') {
				msgs.edit('Головокружение в пределах нормы. \n *Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 1;
			}
			else if (collector2 == '2⃣') {
				msgs.edit('*Ваша кушетка приняла горизонтальное положение. Вы лежали несколько минут, пока головокружение не утихло, затем вернулись в исходное положение.* \n *Ваша кушетка передвигается в комнату загрузки памяти*');
				strength = 2;
			}
			else {
				msgs.edit('*Вы видете открывающиеся двери в маленькую комнату с какими-то излучателями. Ваша кушетка передвигается в эту комнату. Комната закрылась. Вы слышите голос робота:* \n -Проводится процедура восстановления. \n *Шум. Вы отключились. Проснувшись вы были в совсем другой комнате. На стене светилась надпись "Комната загрузки памяти". Ваше самочувствие пришло в норму.*');
				strength = 3;
			}
			type = 'Головокружение';
			break;
	}

	sendLog(msgs.channel, member, type, strength);
	msgs.delete(5000);

	setTimeout(() => {client.channels.get('561962037333327881').overwritePermissions(member.user, {VIEW_CHANNEL: false});
										client.channels.get('561962880883228692').overwritePermissions(member.user, {VIEW_CHANNEL: true});}, 5000)

}

module.exports.help = {
  flag: 1,
  args: 0
}