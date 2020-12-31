const prefix = require('../exports/exports.js');

module.exports.run = async (bot, message, args) => {
        //send server's prefix if there're no arguments
        if(!args.length) {
            message.channel.send('This server\'s prefix is ' + prefix.getPrefix(message.guild.id));
            return;
        }
        //set new prefix if there are arguments
        prefix.setPrefix(message.guild.id, args[0])
        .then(response => {
            message.channel.send(response);
        })
        .catch(err => {
            message.channel.send('There was an error while tryng to change prefix');
            console.error(err);
        });
    
}

module.exports.config = {
    name: "prefix",
    description: "",
    usage: "/prefix",
    accessableby: "Members",
    aliases: []
}
