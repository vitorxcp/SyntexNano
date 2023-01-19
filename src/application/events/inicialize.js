module.exports = (bot) => {
    //Inicialize events all:
    require("./app/interactionCreate")(bot); // event interaction on Discord.
    require("./app/messageCreate")(bot); // event message on Discord.
    require("./app/ready")(bot); // event application.
    require("./guilds/guildAddMember")(bot); // event member join server.
    require("./guilds/guildCreate")(bot); // event application join server.
    require("./guilds/guildDelete")(bot); // event application left server.
    require("./guilds/guildRemoveMember")(bot); // event member left server.
}