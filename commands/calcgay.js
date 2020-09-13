const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let msg = message;
    if(!args[0]) return msg.reply("You didn't specify args 1")
    if(!args[1]) return msg.reply("You didn't specify args 2")
    msg.channel.send("Your random number is: " + Math.floor(Math.random() * args[1] + args[0]));
};

module.exports.config = {
    name: "number",
    description: "pUp :u",
    usage: "/number",
    accessableby: "Members",
    aliases: []
}
