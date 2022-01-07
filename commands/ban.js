const { MessageEmbed } = require('discord.js')
const config = require('../config.json');

module.exports = {
    name: 'ban',
    description: 'bans user',
    async execute(client, message, args, Discord){
        const author = message.member;
        const target = message.mentions.members.first();

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('**Non hai il permesso di bannare**')


        const member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "**Nessuna ragione specificata**";

        const embed = new Discord.MessageEmbed()
        .setTitle("**__ban__**")
        .setColor('RANDOM')
        .setDescription(`**Sei stato Bannato dal server ${message.guild.name}**`)
        .addField(`**Motivo:**`, `\`${reason}\``)
        .addField(`**Azione:**`, `\`ban\``)
        .addField(`**Moderatore:**`, `${message.author}`)



        if (!args[0]) return message.channel.send('**Non hai taggato nessuno!**');

        if(!member)  return message.channel.send("**L'utente non è valido o non è più nel server!**");

        if(target === author) {
            return message.reply('**Non puoi bannare te stesso**')
        }

        if(!member.bannable) return message.channel.send("**Non è stato possibile bannare questo utente!**");

        await member.send(embed);
        await member.ban({
            reason: reason
        })
        
        const banEmbed = new MessageEmbed()
        .setTitle("**__Ban Report__**")
        .setColor('RANDOM')
        .setDescription(`**L'utente <@${member.id}> è stato bannato da <@${message.author.id}>**`)
        .addField(`**Motivo:**`, `\`${reason}\``)
        .addField(`**Azione:**`, `\`ban\``)
        .addField(`**Moderatore:**`, `${message.author}`)
        message.channel.send(banEmbed)

        message.client.channels.cache.get(config.canali.Ban_log).send({ embed: banEmbed });

    }
}