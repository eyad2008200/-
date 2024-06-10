const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
  intents: [32767],
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
let config = require ("./config")
let prefix = config.prefix
client.on("ready", () => {
  console.log(`${client.user.tag} Is Online!`);
});

module.exports = client;

client.SlashCommands = new Collection();
client.Events = new Collection();
client.Commands = new Collection();
client.aliases = new Collection();

["SlashCommand", "Events", "Command"].forEach((handler) => {
  require(`./Handlers/${handler}`)(client);
});

client.login(process.env.token);
