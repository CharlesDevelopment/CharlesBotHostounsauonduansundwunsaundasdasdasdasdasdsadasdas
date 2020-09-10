const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    const subReddits = ["fox"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`fox <3`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);

}

module.exports.config = {
    name: "panda",
    description: "",
    usage: "/panda",
    accessableby: "Members",
    aliases: []
}
