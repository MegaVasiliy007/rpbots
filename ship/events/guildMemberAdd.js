module.exports = async (client, member) => {
	await client.channels.get('561962880883228692').overwritePermissions(member.user, {VIEW_CHANNEL: false});
	member.addRole('561959142286295058');
};