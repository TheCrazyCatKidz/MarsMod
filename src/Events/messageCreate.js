/** @format */

const Event = require("../Structures/Event.js");
const { MessageEmbed, MessageActionRow, MessageButton, Message } = require('discord.js')
module.exports = new Event("messageCreate", (client, message) => {
	if (message.author.bot) return;

	if (!message.content.startsWith(client.prefix)) return;

	const args = message.content.substring(client.prefix.length).split(/ +/);

	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`${args[0]} is not a valid command!`);

	const embed = new MessageEmbed()
	.setAuthor(client.user.username, client.user.displayAvatarURL())
	.setColor("BLURPLE")
	.setDescription("I'm sorry to say this but, we have moved to **slash commands** since discord is attempting to push all bots to use slash commands. If slash commands arn't working, please **reinvite** the bot using the button below!")
	
	const row = new MessageActionRow()
	.addComponents(
		new MessageButton()
		.setStyle("LINK")
		.setURL("https://discord.com/oauth2/authorize?client_id=885142445115965490&permissions=8&scope=applications.commands%20bot")
		.setLabel("Re-Invite Bot w/ Correct Permissions")
	)

	if (!["BOTH", "TEXT"].includes(command.type))
		return message.reply(
			{ embeds: [embed], components: [row] }
		);

	const permission = message.member.permissions.has(command.permission, true);

	if (!permission)
		return message.reply("You need `" + command.permission + "` to use this command.");

	command.run(message, args, client);
});
