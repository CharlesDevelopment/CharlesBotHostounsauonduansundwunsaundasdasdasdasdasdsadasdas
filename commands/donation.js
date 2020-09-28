const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setAuthor('Support Developer!')
        .setDescription('Saweria')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')

        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    description: "pUp :u",
    usage: "/donate",
    accessableby: "Members",
    aliases: []
}
