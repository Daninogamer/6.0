const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'sposta',
  description: 'Sposta un utente',
  execute(client, message, args){
    if (!message.member.permissions.has("ADMINISTRATOR")) return; 
  
  const member = message.mentions.members.first();
if (!member) return message.reply("Seleziona un utente da spostare **MONA**");
if (!member.voice.channel)
  return message.reply(
    "Il membro che hai selezionato non è in un canale vocale **PIRLA**"
  );

  if (!message.member.voice.channel)
    return message.reply("Joina in un canale vocale **COGLIONE**");
  member.voice.setChannel(message.member.voice.channel);
 let spostautente = new MessageEmbed()
 .setDescription(`L'utente <@${member.id}> è stato spostato correttamente nel canale ${message.member.voice.channel}!`)
 .setColor('RANDOM')
 message.channel.send(spostautente)
  }
}