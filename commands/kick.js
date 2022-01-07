const { MessageEmbed } = require('discord.js')
const config = require('../config.json');


module.exports = {
    name: 'kick',
    description: 'kicks user',
    async execute(client, message, args, Discord){
        const author = message.member;
        const target = message.mentions.members.first();
        
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('**Non usare questo comando se non hai il permesso di kikare**')

        const member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Nessuna ragione specificata";

        const embed = new Discord.MessageEmbed()
        .setTitle("**__Kick__**")
        .setColor('RANDOM')
        .setDescription(`**Sei stato kickato  dal server ${message.guild.name}*`)
        .addField(`**Motivo:**`, `\`${reason}\``)
        .addField(`**Azione:**`, `\`Kick\``)
        .addField(`**Moderatore:**`, `${message.author}`)



        if (!args[0]) return message.channel.send('**Non hai taggato nessuno!**');

        if(!member)  return message.channel.send("**L'utente non è valido o non è più nel server!**");

        if(target === author) {
            return message.reply('**Non puoi kickare te stesso**')
        }

        if(!member.kickable) return message.channel.send("**Non è stato possibile kickare questo utente!**");

        await member.send(embed);
        await member.kick({
            reason: reason
        })

        const kickEmbed = new MessageEmbed()
        .setTitle("**__Kick Report__**")
        .setColor('RANDOM')
        .setDescription(`**L'utente <@${member.id}> è stato kickato da <@${message.author.id}>**`)
        .addField(`**Motivo:**`, `\`${reason}\``)
        .addField(`**Azione:**`, `\`Kick\``)
        .addField(`**Moderatore:**`, `${message.author}`)
        message.channel.send(kickEmbed)


        message.client.channels.cache.get(config.canali.Kick_log).send({ embed: kickEmbed });



    }
}