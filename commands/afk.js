const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if (msg.startsWith(prefix + 'afk')) {
    const status = new db.table("AFKs");
    let afk = await status.fetch(message.author.id);
    const embed = new Discord.MessageEmbed().setColor(0xffffff)
    
    if (!afk) {
      embed.setDescription(`**${message.author.tag}** now AFK.`)
      embed.setFooter(`Reason: ${args.join(" ") ? args.join(" ") : "AFK"}`)
      status.set(message.author.id, args.join(" ") || `AFK`);
    } else {
      embed.setDescription("You are no longer AFK.");
      status.delete(message.author.id);
    }
    
    message.channel.send(embed)
  }
}

  module.exports.config = {
    name: "AFK",
    description: "AFK",
    usage: "/afk",
    accessableby: "Members",
    aliases: []
  }
