const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Join Support Server !')
        .setURL('https://bit.ly/3n0hhcc')
        .setAuthor('Charles Community')
        .setDescription('⬆️ Click To Join Support Server ')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .setFooter('If You Need Help Just join To The Server Support')
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "support",
    description: "pUp u",
    usage: "/support",
    accessableby: "Members",
    aliases: []
}
