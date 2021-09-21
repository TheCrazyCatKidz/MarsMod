/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "invite",
	description: "Gives the bot invite link.",
	type: "SLASH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		message.reply(
			"https://discord.com/oauth2/authorize?client_id=885142445115965490&permissions=8&scope=applications.commands%20bot"
		);
	}
});
