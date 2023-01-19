// Dependences:
const Discord = require("discord.js");
const bot = new Discord.Client({ intents:32767 });
const Config = require("./application/config/index");

//Inicalize events:
require("./application/events/inicialize")(bot)

//Login on application for Discord:
bot.login(Config.bot.token);