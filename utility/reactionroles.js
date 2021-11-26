const primoMessaggio = require('./primoMessaggio');

module.exports = (client) => {
    //Dati
    const idCanale = "860795633635819520";

    const listaEmoji = {
        '➕': '<@&861523272365113344>',

        '➖': '<@&861523329592721428>',

        '♂️': '<@&861523533380583435>',

        '♀️': '<@&861523570256248855>',

        '💻': '<@&888726918059401256>',

        '<:xbox:861875192170545172>': '<@&888789084347179079>',

        '<:PlayStation:910575346859016263>': '<@&888726928306077736>',

        '<:NintendoSwitch:910575711964762192>': '<@&888727038427533402>',

        '<:Fortnite:861876388939825192>': '<@&860587426754199614>',

        '<:rainbowsixSiege:861876454404128768>': '<@&860593327154135072>',

        '<:rocketleague:861876570254868481>': '<@&860593339544240148>',
        
        '<:twitch:913790803640467516>' : '<@&861167094044295188>',
    };

    //lista reazioni e testo del messaggio
    const listaReazioni = [];
    let testoMessaggio = '**Clicca una reazione per ottenere il suo ruolo!** \n\n';

    for (const emoji in listaEmoji) {
        const emojiFinale = emoji.includes('<') ? client.emojis.cache.find(e => e.name === emoji.split(':')[1]) : emoji;

        listaReazioni.push(emojiFinale);

        testoMessaggio += `${emojiFinale} ${listaEmoji[emoji]}\n\n`;
    }

    //invio messaggio
    primoMessaggio(client, idCanale, testoMessaggio, listaReazioni);

    const gestisciReazione = (reaction, user, aggiungi) => {
        const reactionEmoji = reaction._emoji;
        const { guild } = reaction.message;

        const emoji = reactionEmoji.id === null ? reactionEmoji.name : `<:${reactionEmoji.name}:${reactionEmoji.id}>`;

        const nomeRuolo = listaEmoji[emoji];
        if (!nomeRuolo) return;



        const member = guild.members.cache.find(m => m.id === user.id);

        if (aggiungi) member.roles.add(role);
        if (aggiungi) member.roles.add(role1);
        if (aggiungi) member.roles.add(role2);
        if (aggiungi) member.roles.add(role3);
        if (aggiungi) member.roles.add(role4);
        if (aggiungi) member.roles.add(role5);
        if (aggiungi) member.roles.add(role6);
        if (aggiungi) member.roles.add(role7);
        if (aggiungi) member.roles.add(role8);
        if (aggiungi) member.roles.add(role9);
        if (aggiungi) member.roles.add(role10);

        else member.roles.remove(role);


    }
    const elenco_reazioni = [{
        name: "➕",
        roleID: "861523272365113344",
    }, {
        name: "➖",
        roleID: "861523329592721428",
    }, {
        name: "♂️",
        roleID: "861523533380583435",
    }, {
        name: "♀️",
        roleID: "861523570256248855",
    }, {
        name: "💻",
        roleID: "888726918059401256",
    }, {
        name: "xbox",
        roleID: "888789084347179079",
    }, {
        name: "PlayStation",
        roleID: "888726928306077736",
    }, {
        name: "NintendoSwitch",
        roleID: "888727038427533402",
    }, {
        name: "Fortnite",
        roleID: "860587426754199614",
    }, {
        name: "rainbowsixSiege",
        roleID: "860593327154135072",
    }, {
        name: "rocketleague",
        roleID: "860593339544240148",
    }, {
        name: "twitch",
        roleID: "861167094044295188"
    }]

    const reactionAdd = (reaction, user, item) => {
        reaction.message.guild?.members.cache.get(user.id)?.roles.add(item.roleID);

    }
    const reactionRemove = (reaction, user, item) => {
        reaction.message.guild?.members.cache.get(user.id)?.roles.remove(item.roleID);
    }


    //eventi
    client.on("messageReactionAdd", (reaction, user) => {
        const item = elenco_reazioni.find(x => x.name == reaction.emoji.name)
        if (typeof item != "undefined")
            reactionAdd(reaction, user, item)

    })

    client.on('messageReactionRemove', (reaction, user) => {
        const item = elenco_reazioni.find(x => x.name == reaction.emoji.name)
        if (typeof item != "undefined")
            reactionRemove(reaction, user, item)
    })
}