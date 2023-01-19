module.exports = async (bot) => {
    bot.on("ready", () => {
        bot.user.setActivity("Application is on!")
        console.log("Application is on for Discord.")
    })
}