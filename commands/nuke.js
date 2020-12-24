const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("You do not have the perms to use this cmd!")
        }
        let reason = args.join(" ") || "No Reason"
        if(!message.channel.deletable) {
            return message.reply("This channel cannot be nuked!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle("Channel Nuked")
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
        await newchannel.send(embed)
    }

module.exports.config = {
    name: "nuke",
    description: "Shows the information of a member/user",
    usage: "/nuke",
    accessableby: "Admins",
    aliases: []
}