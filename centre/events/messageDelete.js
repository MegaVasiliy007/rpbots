module.exports = (client, msg) => {
  
	if (msg.author.bot) return;

	client.userLib.logAdm.send(`Пользователь: ${msg.author.tag} \n Удалил: ${msg.content}`);

};