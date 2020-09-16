const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let totalSeconds = client.uptime / 1000
    let days = Math.floor(totalSeconds / 86400)
    let hours = Math.floor(totalSeconds / 3600)
    totalSeconds = 3600 
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Number.parseInt(totalSeconds = 60)

    let dDay = `${days} Day`
    let dHour = `${hours} Hour`
    let dMinute = `${minutes} Minute`
    let dSecond = `${seconds} Second`
    if (days == 0) dDay == ""
    else if (days > 1) dDay == "s, "
    else dDay == ", "
    if (hours == 0) dHour == ""
    else if (hours > 1) dHour == "s, "
    else dHour == ", "
    if (minutes == 0) dMinute == ""
    else if (minutes > 1) dMinute == "s, "
    else minutes == ", "
    if (seconds == 0) dSecond = 0
    else if (seconds > 1) dSecond =="s"

    message.channel.send(`:watch **Bot Uptime:** ${dDay+dHour+dMinute+dSecond}`)
}

module.exports.config = {
    name: "uptime",
    description: "example of an Embed.",
    usage: "/uptime",
    accessableby: "Members",
    aliases: ["online"]
}
