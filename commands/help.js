module.exports = {
    name: 'help',
    description: 'sends all commands',
    execute(message, args, Discord){
        const Embed = new Discord.MessageEmbed()
        .setTitle('Comandi:')
        .setColor('ORANGE')
        .setDescription("Qui sono elencati i comandi per 6.0")
        .addFields(
            {name: 'help', value: 'Manda questo elenco'},
            {name: 'ban', value: 'Banna un utente'},
            {name: 'unban', value: 'Sbanna un utente'},
            {name: 'kick', value: 'Espelli un utente'},
            {name: 'serverinfo', value: 'Visualizza le informazioni del server'},
            {name: 'userinfo', value: 'Visualizza le informazione dell utente'},
            {name: 'botinfo', value: 'Visualizza le informazione del bot'},
            {name: 'clear', value: 'Elimina un numero di messaggi'},
        )
        .setImage('https://cdn.discordapp.com/attachments/888702291878764564/888702340033552404/logo.png')
        .setFooter('6.0 by 𝕯𝖆𝖓𝖎#7604 copyright©2021');

        message.channel.send(Embed);
    }
}