const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'usereport',
    description: 'automatizzazzione processo report utente',
    async execute(client, message, args) {
        const author = message.member;
        const target = args[0]

        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('**Non puoi usare il comando. Questo comando è riservato ai community!**')
        client.users.cache.find(user => user.id === 'USER-ID')

        const member = message.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Nessuna ragione specificata";

        if (!args[0]) return message.channel.send('**Devi taggare l\'utente**');


        const reportEmbed = new MessageEmbed()
        .setTitle("**__User Report__**")
        .setColor('RANDOM')
        .addField(`**Utente:**`, `\`${target}\``)
        .addField(`**Motivo:**`, `\`${reason}\``)
        .addField(`**Provvedimenti:**`, `\`Si aspettano i 2 giorni per la risposta dell'utente\``)
        .addField(`**Aggiornamento:**`, `\`Se l'utente dopo 2 giorni non da risposta il moderatore deve aggiornare i provvedimenti\``)
        .addField(`**Immagine:**`, `\`Il moderatore allegherà il report effettuato in privato.\``)
        .addField(`**Moderatore:**`, `${message.author}`)
        message.channel.send(reportEmbed)


    
        }
    }