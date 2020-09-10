const Discord = require('discord.js');
 
module.exports.run = async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            const user = message.mentions.users.first()
            embed.setAuthor(member.user.tag, member.user.displayAvatarURL())
            embed.setTitle(`${user.tag}'s Avatar:`)
            embed.setThumbnail(user.displayAvatarURL())
            embed.setDescription(`This is ${user.tag}'s avatar.`)
            embed.setColor('RANDOM')
            embed.setFooter("")
            return message.channel.send(embed)
        }
    }


module.exports.config = {
    name: "avatar",
    description: "example of an Embed.",
    usage: "/avatar",
    accessableby: "Members",
    aliases: []
}
