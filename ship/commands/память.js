module.exports.run = async (client, msg) => {

	let member = msg.member;

	let msgs = await msg.channel.send(`*голос робота* \n Мы проверим вашу память. Вы должны назвать три запомнившихся момента с вашей жизни....`);
	msg.delete();

	let collector = await msgs.channel.awaitMessages(message => message.author == member.user, {max: 3, time: 30 * 1000, errors: ["time"]}).then(col => {let ret = col.size != 3 ? 0 : col.map(el => el.content); col.forEach(el => el.delete()); return ret;}).catch(() => 0);
	console.log(collector);
	if (!collector) {
		msgs.edit('Истекло Время ожидания ответа. Введите кодовое слово заново.');
		let mess = await msgs.channel.fetchMessages({limit: 5}).then(col => col.filter(m => m.author.id == member.id));
  	if (mess.size > 0) msgs.channel.bulkDelete(mess, true);
		msgs.delete(5000); 
		return;
	}

	msgs.edit('Синхронизирую память... Поздравляю, вы прошли курс реабилитации и внесены в базу данных как житель корабля №13 "Ковчег". \n *вы встаете с кушетки и выходите из реабилитационного центра..*');

	setTimeout(() => msgs.channel.send('Отчет памяти по ' + member + ' \n Три события из его жизни: \n ' + collector.join(' \n ')), 8000);
	msgs.delete(10000);

	client.channels.get('561962037333327881').overwritePermissions(member.user, {VIEW_CHANNEL: null});
	client.channels.get('561962880883228692').overwritePermissions(member.user, {VIEW_CHANNEL: null});

	member.addRole('592420304052289549');
	let r = await member.guild.createRole({name: member.user.tag}, member.user.tag);
	member.addRole(r);

}

module.exports.help = {
  flag: 1,
  args: 0
}