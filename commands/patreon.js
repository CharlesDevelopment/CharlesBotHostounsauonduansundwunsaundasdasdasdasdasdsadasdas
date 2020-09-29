const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Donate !')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .setDescription('Patreon')
        .setURL('https://bit.ly/30gIXzD')
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "donate",
    description: "example of an Embed.",
    usage: "/patreon",
    accessableby: "Members",
    aliases: []
}
