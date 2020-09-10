const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()

        if(!message.mentions.users.first()){
            embed.setTitle(`${user.tag} Avatar`)
            embed.setImage(message.author.displayAvatarURL())
            embed.setDescription("This is your avatar.")
            embed.setColor("RANDOM")
            return message.channel.send(embed)
        }            
    }
}
