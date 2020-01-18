module.exports = (client, oldmsg, newmsg) => {

	if (newmsg.author.bot || (oldmsg.content && newmsg.content && oldmsg.content == newmsg.content)) return;

	client.userLib.logAdm.send(`Пользователь отредактировал: ${newmsg.author.tag} \n Было: ${oldmsg.content} \n Стало: ${newmsg.content}`);
};