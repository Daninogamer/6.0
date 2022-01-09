const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'regolamentocommunity',
    description: 'sends all commands',
    execute(client, message, args, Discord){

                 //Invio messaggio
                 message.channel.send(`Hai postato il regolamento`).then(msg => {
                    msg.delete({ timeout: 5000 });
                    message.delete({ timeout: 5000 });
                })
    
       
        const administrator = new Discord.MessageEmbed()
        .setTitle(`Regolamento_Community`)
        .setDescription('Non puoi usare questo comando perchè non sei DANI oppure DANI versione Hot')
        .setColor('RANDOM')
       
           if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(administrator)


           const regolamentocommunity = new Discord.MessageEmbed()
           .setTitle(`Regolamento_Community`)
           .setDescription('Qua sotto verra elencato il regolamento dei **Community**')
           .addFields(
                {name: '**1.**', value: '🔵- i **Community Staffer** rispondono solo al **Community Manager** e non possono agire nelle sanzioni senza il suo consenso per quelle qua non citate.'},
                {name: '**2.**', value: '🔵- Il **Community Manager** può sanzionare un utente a suo piacimento purché infranga il **regolamento.**'},
                {name: '**3.**', value: '🔵- I __**BAN**__ li può attuare __**SOLO**__ il **Community Manager** e nessun altro'},
                {name: '**4.**', value: '🔵- Tutte le sanzioni che i **Community Staffer** possono effettuare devono essere prima decretate dal **Community Manager** (Es. Spam = mute 2h)'},
                {name: '**5.**', value: '🔵- Gli articoli del regolamento possono essere usati solo per come sono scritti e in alcun altro modo.'},
                {name: '**6.**', value: '🔵- I **Community Staffer** sono __**OBBLIGATI**__ a interagire con la community periodicamente e a invogliarla a partecipare a eventi e/o allo staff. '},
                {name: '**7.**', value: '🔵- La presenza alle riunioni è fortemente consigliabile per gli **Staffer** e obbligatoria per il **Manager.**'},
                {name: '**8.**', value: '🔵- La rimozione dello staff può essere fatta solo dal **Community Manager** in collaborazione con un **Capo Staffer o superiore.** '},
                {name: '**9.**', value: '🔵- **Chiunque infranga questo regolamento verrà sanzionato con uno strike e successivamente depexato (degradato). P.S. Le sanzioni potranno variare a discrezione degli __Admin__ **'},
           )
           .setColor('RANDOM')

           message.channel.send(regolamentocommunity)
    
        }
    }