const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Logs Updates Bot')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .setFooter('+ Means Added , = Means Updated And - Means Deleted')
        .addFields(
            { name: 'Update 07/09/2020', value: '`+ Added /logs`   `+ Changes All Command With Photos Charles!`', inline: true},
            { name: 'Update 08/09/2020', value: '`+ Added /meme`   `+ Added /cat`  `+ Added /dog`  `= Updated /help`   `+ Added /ping`', inline: true},
            { name: 'Update 09/09/2020', value: '`+ Added /serverinfo` `= Updated /clear`  `= Updated /help`', inline: true},
            { name: 'Update 10/09/2020', value: '`+ Added /support` `+ Added Support Server`  `= Updated /help`', inline: true},
            { name: 'Update 21/09/2020', value: '`= Updated /help`   `+ Added /ban`   `+ Added /kick`' , inline: true},
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "logs",
    description: "example of an Embed.",
    usage: "/logs",
    accessableby: "Members",
    aliases: []
}
