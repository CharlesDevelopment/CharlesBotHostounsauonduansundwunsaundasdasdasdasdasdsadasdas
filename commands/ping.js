const Discord = require('discord.js');
const config = require('../botsettings.json');

module.exports.run = async (bot, message, args) => {

        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);


        message.channel.send(ping);
    }
}

module.exports.config = {
    name: "ping",
    description: "",
    usage: "/ping",
    accessableby: "Members",
    aliases: []
}
