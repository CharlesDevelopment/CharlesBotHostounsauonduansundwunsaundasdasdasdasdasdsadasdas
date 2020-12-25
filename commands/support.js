const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Support')
        .setAuthor('Contact AkuRahasia#3857 To Support!')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .setTimestamp()
        
    message.channel.send(embed);
}

module.exports.config = {
    name: "support",
    description: "",
    usage: "/support",
    accessableby: "Members",
    aliases: []
}
