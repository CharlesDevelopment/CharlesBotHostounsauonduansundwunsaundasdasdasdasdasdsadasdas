const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You don't have enough perms to use this command!")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.reply("Please give the time in seconds.")
        let reason = args.slice(1).join(" ")
        
        message.channel.setRateLimitPerUser(duration, reason)
        message.reply(`Successfully set the slowmode to ${duration} Seconds`)
    }

module.exports.config = {
    name: "slowmode",
    description: "Shows the information of a member/user",
    usage: "/slowmode",
    accessableby: "Admins",
    aliases: []
}