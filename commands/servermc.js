const Discord = require('discord.js');
const client = new Client();

module.exports.run = async (bot, message, args) => {
const commands = {
	'mcserver': (msg) => {
			let serverip = msg.content.split(' ').splice(1).join(' ');
			let serverip_fromfield = serverip.substring(0,serverip.indexOf(":"));
			let serverport_fromfield = serverip.split(':')[1];
			if (!serverip) {

				msg.channel.sendMessage(msg.author + " | No server IP entered. :x:");

			} else {
				
				if (!serverip.includes(":")) {
					serverip_final = serverip;
				} else {
					serverip_final = serverip_fromfield;
				}
				
				if (!serverport_fromfield) {
					var serverport_final = "25565";
				} else {
					var serverport_final = serverport_fromfield;
				}
				
				const embed = new Discord.RichEmbed()
			  .setTitle("Minecraft Server Status")
			  .setColor(0x00AE86)
			  .setFooter("Minecraft server status snippet by MarioLatifFathy#2793", "http://i.imgur.com/w1vhFSR.png")
			  .setImage("http://status.mclive.eu/Server/" + serverip_final + "/" + serverport_final + "/banner.png")
			  .setTimestamp()
			  .addField("Server IP",
				serverip)

			  msg.channel.send({embed});
				
				
			}
		
		}
};


client.on('message', msg => {
	if (!msg.content.startsWith(prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(prefix.length).split(' ')[0]](msg);
});

}

module.exports.config = {
    name: "test",
    description: "",
    usage: "?test",
    accessableby: "Members",
    aliases: []
}
