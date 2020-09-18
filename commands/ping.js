const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

        const ping = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


        message.channel.send(ping);
    }

module.exports.config = {
    name: "ping",
    description: "Shows the information of a member/user",
    usage: "/ping",
    accessableby: "Members",
    aliases: []
}
