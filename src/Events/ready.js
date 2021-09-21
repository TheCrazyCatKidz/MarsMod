/** @format */

const Event = require("../Structures/Event.js");

module.exports = new Event("ready", client => {
	console.log("Bot is ready!");
	client.user.setActivity(`to ;slashcommands | In ${client.guilds.cache.size} guilds | Providing ${client.users.cache.size} members in total.`)
});
