const Discord = require("discord.js")
const ping = require("minecraft-server-util")

module.exports.run = async (bot, message, args) => {
 
    let args = message.content.substring(PREFIX.length).split(' ')
 
    switch(args[0]){
        case 'mc':
 
            if(!args[1]) return message.channel.send('You must type a minecraft server ip')
            if(!args[2]) return message.channel.send('You must type a minecraft server port')
 
            ping(args[1], parseInt(args[2]), (error, reponse) =>{
                if(error) throw error
                const Embed = new RichEmbed()
                .setTitle('Server Status')
                .addField('Server IP', reponse.host)
                .addField('Server Version', reponse.version)
                .addField('Online Players', reponse.onlinePlayers)
                .addField('Max Players', reponse.maxPlayers)
                
                message.channel.send(Embed)
            })
        break
 
    }
 
}

module.exports.config = {
    name: "mcserver",
    description: "Shows the information of a member/user",
    usage: "/servermc",
    accessableby: "Members",
    aliases: []
}