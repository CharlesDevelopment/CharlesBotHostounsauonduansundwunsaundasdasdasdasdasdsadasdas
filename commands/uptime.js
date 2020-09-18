const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {
    message.channel.send(`Bot  \`${ms(this.client.uptime, { long: true })}\` `)
}

module.exports.config = {
    name: "uptime",
    description: "example of an Embed.",
    usage: "/uptime",
    accessableby: "Members",
    aliases: ["online"]
}


