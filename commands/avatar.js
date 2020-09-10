const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    embed = new Discord.MessageEmbed()
    let user = message.mentions.users.first()
    embed
    .setTitle(`${user.tag}'s Avatar`)
    .setThumbnail(user.displayavatarURL())
    .addField(`UserName: ${user.tag}`, true)
    .setColor(`RANDOM`)
    message.channel.send(embed);


}

module.exports.config = {
    name: "Avatar",
    descrption: "",
    usage: "/avatar",
    accessableby: "Members",
    aliases: []
}
