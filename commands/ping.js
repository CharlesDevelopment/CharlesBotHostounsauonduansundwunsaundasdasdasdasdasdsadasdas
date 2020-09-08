const Discord = require('discord.js');
const config = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("🏓 Pong!")
    .addField("Your Ping !", `\`${Math.round(bot.ws.ping)} ms\``)
    .setTimestamp()
    message.channel.send(pingembed)
}

module.exports.config = {
    name: "ping",
    description: "",
    usage: "/ping",
    accessableby: "Members",
    aliases: []
}
