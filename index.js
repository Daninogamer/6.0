const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client()


client.login(process.env.token);


client.on("message", (message) => {

})

const prefix = config.prefix;

client.commands = new Discord.Collection();

const fs = require('fs');
const command = require('nodemon/lib/config/command');

client.once('ready', () => {
    console.log("6.0 è online!");
})


const status = [
    `| $help |`,
    `il server`,
];
    
    let index = 0;
    setInterval(() => {
        if(index === status.length) index = 0;
        const status2 = status[index];
        
        client.user.setActivity(status2, { type: "WATCHING" }).catch(console.error)
        index++;
    }, 7500)

    const welcome = require("./commands/welcome");

    welcome(client);

    //Member count
    const snipes = new Discord.Collection()
    
    client.on("guildMemberAdd", member => {
        var canale = client.channels.cache.get("888683364192768020")
        canale.setName("👫| Membri: " + member.guild.memberCount) //Impostare il nome del canale
    });
    client.on("guildMemberRemove", member => {
        var canale = client.channels.cache.get("888683364192768020")
       canale.setName("👫| Membri: " + member.guild.memberCount) //Impostare il nome del canale
    });


    
        //clear
        client.on("message", message => {
    if (message.content.startsWith("$clear")) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('non hai il permesso di eseguire questo comando!');
            return;
        }
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send('non ho il permesso di eseguire questo comando');
            return;
        }

        var count = message.content.slice(7);
        count = parseInt(count);

        if (!count) {
            message.channel.send("inserisci un numero valido!")
            return
        }

        message.channel.bulkDelete(count, true)
        message.channel.send("**Ho eliminato " + count + " messaggi**").then(msg => {
            msg.delete({ timeout: 5000 })
        })

    }
})



client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);
    
})

    //Reaction rules

    client.on("message", message => {
        if (message.content == ".eeeeeesapessiilcomandopirla!") {
            var embed = new Discord.MessageEmbed() //Crea il tuo embed o messaggio normale
                .setTitle("Reaction roles")
                .setDescription("Clicca sulle reazioni per ottenere i ruoli")
    
            message.channel.send(embed)
                .then(msg => {
                    //Inserire tutte le reazioni che si vogliono
                    msg.react("🤟")
                    msg.react("🖐️")
                })
        }
    })
    //Quando viene cliccata una reazione
    client.on("messageReactionAdd", async function (messageReaction, user) {
        if (user.bot) return //Le reaction dei bot verranno escluse
    
        if (messageReaction.message.partial) await messageReaction.message.fetch();
    
        if (messageReaction.message.id == "907912528321978391") { //Settare id messaggio
            if (messageReaction._emoji.name == "🤟") {
                var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
                utente.roles.add("861523272365113344"); //Settare ruolo
            }
            if (messageReaction._emoji.name == "🖐️") {
                var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
                utente.roles.add("861523329592721428");
            }
        }
    })
    //Quando viene rimossa una reazione
    client.on("messageReactionRemove", async function (messageReaction, user) {
        if (user.bot) return
    
        if (messageReaction.message.partial) await messageReaction.message.fetch();
    
        if (messageReaction.message.id == "907912528321978391") {
            if (messageReaction._emoji.name == "🤟") {
                var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
                utente.roles.remove("861523272365113344");
            }
            if (messageReaction._emoji.name == "🖐️") {
                var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
                utente.roles.remove("861523329592721428");
            }
        }
    })

    client.on('guildMemberAdd', member => {
        //Autoruolo
    const ruolo = member.guild.roles.cache.find(r => r.name === 'Membro');
    member.roles.add(ruolo);
})

const commandFiles = fs.readdirSync('./commands/').filter(File => File.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'online'){
       client.commands.get('online').execute(message, args);
    } else if(command == 'staff'){
        client.commands.get('staff').execute(message, args);
    } else if(command == 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command == 'unban'){
        client.commands.get('unban').execute(client, message, args, Discord);
    } else if(command == 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord)
    }
    else if(command == 'serverinfo'){
        client.commands.get('serverinfo').execute(message, args);
    }
    else if(command == 'userinfo'){
        client.commands.get('userinfo').execute(message, args);
    }
    else if(command == 'botinfo'){
        client.commands.get('botinfo').execute(client, message, args);
    }
    else if(command == 'avatar'){
        client.commands.get('avatar').execute(client, message, args);
    }
    else if(command == 'ticket'){
        client.commands.get('ticket').execute(client, message, args);
    }
});    
