const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity(`${bot.guilds.cache.size} Server! | /help :D`, {type: "WATCHING"});
}