const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
   let MSG = message.content.split(`/say `).join("")
   if(!MSG)return message.channel.send(`You Did Not Specify Your Message To Send!`)
   message.channel.send(MSG)
   message.delete()
}

module.exports.config = {
    name: "say",
    description: "Shows the information of a member/user",
    usage: "/say",
    accessableby: "Members",
    aliases: []
}
