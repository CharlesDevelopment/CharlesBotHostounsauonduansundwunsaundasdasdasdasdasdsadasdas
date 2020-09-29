const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Donate !')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .addFields(
            { name: '/donate patreon', inline: true},
            { name: '/donate saweria', inline: true},
            { name: '/support',inline: true},
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "donate",
    description: "example of an Embed.",
    usage: "/donate",
    accessableby: "Members",
    aliases: []
}
