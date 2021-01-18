const { Command } = require('klasa');
const { MessageAttachment } = require("discord.js");

module.exports = class LevelCommand extends Command {
	constructor(...args) {
		super(...args, {
			botPerms: ['EMBED_MESSAGE'],
			description: 'LEvel.'
		});
	}

	async run(message, args) {
		let user = message.mentions.users.first() || this.client.users.cache.get(args[0]) || message.author;

    return message.send(`${user.tag} are currently level ${user.settings.level}!`);
	}
};