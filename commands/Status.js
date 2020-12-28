const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Check The Status Bot')
        .setURL('http://bit.ly/Statusbot')
        .setAuthor('Charles')
        .setDescription('⬆️ Click The Link ')
        .setColor('RANDOM')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "Status",
    description: "Status",
    usage: "/status",
    accessableby: "Members",
    aliases: []
}
