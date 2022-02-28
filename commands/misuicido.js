const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'misuicido',
    description: 'misuicido',
    async execute(client, message, args, Discord){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Brutto bastardo, non puoi fare il comando e non osare provare a farlo!**')

        let role = message.guild.roles.cache.find(r => r.id === "895552252822048789");

        // The member you want to add the role to
        let member = message.mentions.members.first();
        
        // Add role to the member
        member.roles.add(role);
        
    }
}        