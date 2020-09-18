const Discord = require("discord.js")
const { Player } = require("discord-player")

module.exports.run = async (bot, message, args) => {
    
    if (command === 'play') {
        let track = await bot.player.play(message.member.voice.channel, args[0], message.member.user.tag);
        message.channel.send(`Currently playing ${track.name}! - Requested By ${track.requestedBy}`);
    }
}

module.exports.config = {
    name: "play",
    description: "Shows the information of a member/user",
    usage: "/play",
    accessableby: "Members",
    aliases: []
}