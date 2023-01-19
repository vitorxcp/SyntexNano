// Dependences:
const Discord = require("discord.js");
const bot = new Discord.Client({ intents:32767 });
const Config = require("./aplication/config/index");

//Inicalize events:
require("./aplication/events/inicialize")(bot)

//Login on application for Discord:
bot.login(Config.bot.token);