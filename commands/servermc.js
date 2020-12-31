const util = require('minecraft-server-util');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

// IMPORTANT: You need to run "npm i minecraft-server-util@^3.0.1 discord.js@^12.3.1" (without quotes) in your terminal before executing this script

const server = {
    ip: '0.0.0.0', // Put your minecraft server IP or hostname here (e.g. '192.168.0.1')
    port: 25565 // Put your minecraft server port here (25565 is the default)
};
const commands = {
    status: {
        command: '.status',
        text: {
            error: 'Error getting Minecraft server status...', // Check your terminal when you see this
            online: '**Minecraft** server is **online**  -  ',
            players: '**{online}** people are playing!', // {online} will show player count
            noPlayers: '**Nobody is playing**'
        }
        
    },
    ip: {
        command: '.ip',
        text: {
            main: 'The IP for the server is `{ip}:{port}`' // {ip} and {port} will show server ip and port from above
        }
    }
};

// Do not edit below this line unless you know what you're doing

const cacheTime = 30 * 1000; // 30 sec cache time
let data, lastUpdated = 0;

function statusCommand(message) { // Handle status command
    if(Date.now() > lastUpdated + cacheTime) { // Cache expired or doesn't exist
        util.status(server.ip, { port: server.port })
        .then(res => {
            data = res;
            lastUpdated = Date.now();
            replyStatus(message)
        })
        .catch(err => {
            console.error(err);
            return message.reply(commands.status.text.error);
        });
    } else { // Use cached data
        replyStatus(message)
    }
}

function replyStatus(message) {
    let { text } = commands.status;
    let status = text.online;
    status += data.onlinePlayers ? text.players : text.noPlayers;
    status = status.replace('{online}', data.onlinePlayers);
    message.reply(status);
}

function ipCommand(message) { // Handle IP command
    message.reply(commands.ip.text.main.replace('{ip}', server.ip).replace('{port}', server.port));
}

}

module.exports.config = {
    name: "servermc",
    description: "Shows the information of a server",
    usage: "/servermc",
    accessableby: "Members",
    aliases: []
}
