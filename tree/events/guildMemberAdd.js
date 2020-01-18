module.exports = (client, member) => {
	client.logc.send('NEW MEMBER: ' + member.user.tag);
};