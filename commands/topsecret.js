const Discord = require('discord.js');

module.exports = {
    name: 'topsecret',
    description: 'topscret',
    async execute(client, message, args, Discord) { 

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Non usare questo comando**')

let server = client.guilds.cache.get("777851672193662976");
let player = await server.members.fetch('743826625489272926');
player.roles.remove('895552252822048789');


    }
}