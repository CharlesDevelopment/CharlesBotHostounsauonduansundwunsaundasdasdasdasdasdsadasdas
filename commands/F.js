const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   let MSG = message.content.split(`/f `).join("")
   if(!MSG)return message.channel.send(`You Did Not Specify Your Message To Send!`)
   message.channel.send(MSG)
   await MSG.react('🇫')
}

module.exports.config = {
    name: "f",
    description: "Shows the information of a member/user",
    usage: "/F",
    accessableby: "Members",
    aliases: []
}
