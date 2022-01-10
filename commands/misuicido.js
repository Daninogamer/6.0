const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'misuicido',
    description: 'misuicido',
    async execute(client, message, args, Discord){

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('**Brutto bastardo, non puoi fare il comando e non osare provare a farlo!**')

        const misuicidoEmbed = new MessageEmbed()
        .setTitle("**Suicidio in corso**")
            .setColor('RED')
            .setDescription(`**Ok, vado a prendere la pistola, un secchio pieno d'acqua e il mocio.**`)
            message.channel.send(misuicidoEmbed);

    
        }
    }