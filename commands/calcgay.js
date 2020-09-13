const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let msg = message;
    msg.channel.send("Your random number is: " + Math.floor(Math.random)
};

module.exports.config = {
    name: "number",
    description: "pUp :u",
    usage: "/number",
    accessableby: "Members",
    aliases: []
}
