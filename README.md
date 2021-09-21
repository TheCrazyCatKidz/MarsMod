# MarsMod Tutorial
1. Installing
* Git clone this repository so you can get updates.
* Extract the source code into a folder.
* Install Packages. (drink break!)
```bash
npm i
```
* Run Source
```bash
node /src/index.js
```

## /src/Structures/Client.JS:
> Adds on a class to client which is the client.start() which contains the constructor of commands collection, and it loads command files with having a simple clean index.js.

## /src/Structures/Command.JS:
> Makes the code below work:
```js
const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "commandName",
	description: "commandDesc",
	type: "SLASH",
	slashCommandOptions: [],
	permission: "SEND_MESSAGES",
	async run(message, args, client) {
        message.reply("Hello, Discord!")
	}
});

```
---

# Edit this text and make a pull request and you'll be featured as a contibuitor (Only if you add stuff.)