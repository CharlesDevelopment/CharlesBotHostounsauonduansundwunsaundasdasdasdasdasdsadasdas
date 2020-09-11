const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    msg.channel.send(args.join(" "), { allowedMentions: { parse: ["user"]}});
}

module.exports.config = {
    name: "say",
    description: "Shows the information of a member/user",
    usage: "/say",
    accessableby: "Members",
    aliases: []
}
