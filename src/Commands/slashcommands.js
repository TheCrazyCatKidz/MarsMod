/** @format */

const Command = require("../Structures/Command.js");
const Discord = require('discord.js')
module.exports = new Command({
	name: "slashcommands",
	description: "Info about slash commands!",
	type: "SLASH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
		message.reply(
            new Discord.MessageEmbed()
            .setAuthor(client.user.username, client.user.displayAvatarURL())
            .setColor("BLURPLE")
            .setDescription("I'm sorry to say this but, we have moved to **slash commands** since discord is attempting to push all bots to use slash commands. If slash commands arn't working, please **reinvite** the bot using the button below!")
        )
	}
});
