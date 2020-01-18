module.exports = (client, member) => {
	client.logc.send('REMOVE MEMBER: ' + member.user.tag);
};