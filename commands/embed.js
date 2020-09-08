const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Invite Me!')
        .setURL('https://discord.com/oauth2/authorize?client_id=751792109110952007&scope=bot&permissions=2094394615')
        .setAuthor('Charles')
        .setDescription('⬆️ Click To Invite The Bot ')
        .setColor('RANDOM')
        .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
        .setFooter('⚠️ WARNING : All Command is BETA SomeTimes The Command Cant Be Loaded..')
        .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    description: "pUp :u",
    usage: "/invite",
    accessableby: "Members",
    aliases: []
}