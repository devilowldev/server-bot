const { Command } = require('klasa');
const { MessageEmbed } = require('discord.js')


module.exports = class ApiCommand extends Command {
	constructor(...args) {
		super(...args, {
			botPerms: ['EMBED_MESSAGE'],
			description: 'Shows Api Link.'
		});
	}

	async run(msg) {
		const embed = new MessageEmbed()
		.setTitle('Api')
			.addField('Link', `[Click Me](https://devilapi.js.org)`)
			.setColor(0x80ff00)
			.setTimestamp();
		await msg.send(embed);
	}
};