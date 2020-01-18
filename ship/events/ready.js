module.exports = (client) => {
	client.user.setPresence({ game: { name: `за людьми`, type: 'WATCHING' }});
	console.log(`Бот авторизован как ${client.user.tag}!`);
};