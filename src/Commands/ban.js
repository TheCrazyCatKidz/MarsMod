/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ban",
	description: "Banish a user from this guild.",
	type: "SLASH",
	slashCommandOptions: [{
        name: "user",
		description: "User to Ban",
		type: "USER",
		required: true
    }],
	permission: "BAN_MEMBERS",
	async run(message, args, client) {
        const victim = message.guild.members.fetch(args[0])
        if(victim == client.user) return message.reply("You cannot ban me; silly!")

        victim.ban("Reason: Unspecified.")
	}
});
