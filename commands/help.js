const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'gaming') {
        return message.reply("This is a Gaming information Command.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`Here is the Avaible Commands to use:`)
            .setDescription('```rps(still BUG) | slowmode | nuke | clear | invite | memberinfo | status | dog | cat | meme | ping | panda | serverinfo | ban | kick```')
            .setThumbnail('https://cdn.discordapp.com/attachments/741546722400010281/752138723839442954/uwuken.jpg')
            .addFields({ name: 'Prefix', value: '```/```', inline: true})
            .setColor('RANDOM')
            .setFooter('Sometimes The Command Will Be Updates..')
            return message.author.send(response, {  split: true  })
            .then(() => {
                //tell user the repsonse is in the DMs if the command's been sent in a server
                if(message.channel.type === 'dm') return;
                message.reply('check your DMs for a full list of commands');
            })
            .catch(error => {
                message.reply('please be sure to activate DMs from this server\'s members');
            })
            
        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Command's Description** __${command.config.description || "There is no Description for this command."}__
            - **Command's Usage:** __${command.config.usage || "No Usage"}__
            - **Command's Permissions:** __${command.config.accessableby || "Members"}__
            - **Command's Aliases:** __${command.config.aliases || "No Aliases"}__
            `)
            .setColor('#2EFF00')

        message.channel.send(embed);
    }}
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "/help",
    accessableby: "Members",
    aliases: []
}
