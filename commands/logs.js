const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Status Bot')
        .setURL('https://bit.ly/Statusbot')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "status",
    description: "status update",
    usage: "/status",
    accessableby: "Members",
    aliases: []
}
