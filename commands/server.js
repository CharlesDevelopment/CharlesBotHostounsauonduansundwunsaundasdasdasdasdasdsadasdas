const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Server')
        .setColor('RANDOM')
        .setDescription(`This Bot Is Playing In ${bot.guilds.cache.size} Server !`)
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .setFooter('Want Invite The Bot ? Use Command /invite!')
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "server",
    description: "example of an Embed.",
    usage: "/server",
    accessableby: "Members",
    aliases: []
}