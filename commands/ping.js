const Discord = require('discord.js');
const config = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {

    let pingembed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle("🏓 Pong!")
    .addField("Your Ping !", `\`${Date.now() - message.createdTimestamp}\`ms``)
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
