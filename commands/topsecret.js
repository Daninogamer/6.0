const Discord = require('discord.js');

module.exports = {
    name: 'pianodiemergenzaattivato',
    description: 'pianodiemergenza attivato',
    async execute(client, message, args, Discord) { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Non usare questo comando**')

let server = client.guilds.cache.get("777851672193662976");
let player = await server.members.fetch('855049985456209950');
player.roles.remove('927633612231290911');


    }
}