const { MessageEmbed } = require('discord.js')

    module.exports = {
        name: 'warn',
        description: 'warn',
        execute(bot, message, args){

        let warnPermErr = new MessageEmbed()
        .setTitle("**Erore nei permessi dell'utente**")
        .setDescription("**Non hai il permesso di usare questo comando! ❌**")
            if(!message.channel.permissionsFor(message.member).has(['BAN_MEMBER'])) return message.channel.send(warnPermErr);
    
            let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if(!member) return message.reply("Menziona un membro valido");
        
            let reason = args.slice(1).join(' ');
            if(!reason) reason = "(Nessuna ragione specificata)";
            
            member.send(`Sei stato warnato da <${message.author.username}> per questo motivo: ${reason}`)
            .catch(error => message.channel.send(`Scusa <${message.author}> non posso warnare perchè : ${error}`));
            let warnEmbed = new MessageEmbed()
            .setTitle("**__Warn Report__**")
            .setColor('RANDOM')
            .setDescription(`**<@${member.user.id}> è stato warnato/a da <@${message.author.id}>**`)
            .addField(`**Motivo:**`, `\`${reason}\``)
            .addField(`**Azione:**`, `\`Warn\``)
            .addField(`**Moderatore:**`, `${message.author}`)

            message.channel.send(warnEmbed)

            let warnEmbed1 = new MessageEmbed()
            .setTitle("**__Warn Report__**")
            .setColor('RANDOM')
            .setDescription(`**Sei stato warnato/a da <@${message.author.id}>**`)
            .addField(`**Motivo:**`, `\`${reason}\``)
            .addField(`**Azione:**`, `\`Warn\``)
            .addField(`**Moderatore:**`, `${message.author}`)
            member.send(warnEmbed1)

    }
}