const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Logs Updates Bot')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .setFooter('+ Means Added , = Means Updated And - Means Deleted')
        .addFields(
            { name: 'Update 24/12/2020', value: '`+ Added /slowmode command`   `+Reset Logs`  `+ Added /rps (still Bug)`   `+ Added /nuke command`', inline: true},
        )
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "logs",
    description: "logs update",
    usage: "/logs",
    accessableby: "Members",
    aliases: []
}
