const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   let MSG = message.content.split(`/F `).join("")
   if(!MSG)return message.channel.send(`You Did Not Specify Your Message To Send!`)
   message.channel.send(MSG)
   message.delete()
   message.react('🇫')
}

module.exports.config = {
    name: "F",
    description: "Shows the information of a member/user",
    usage: "/F",
    accessableby: "Members",
    aliases: []
}
