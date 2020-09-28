const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Donate !')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .addFields(
            { name: '`Saweria: https://bit.ly/2GlCcoY`', inline: true},
            { name: '`Patreon: https://bit.ly/30gIXzD`', inline: true},
            { name: '`Support Server: https://bit.ly/3n0hhcc `',inline: true},
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
