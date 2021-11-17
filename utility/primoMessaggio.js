const aggiungiReazioni = (message, reazioni) => {
    if (reazioni.length > 0) {
        message.react(reazioni[0]);
        reazioni.shift();

        if (reazioni.length > 0) {
            setTimeout(() => aggiungiReazioni(message, reazioni), 800);
        }
    }
}

module.exports = async (client, idCanale, testoMessaggio, reazioni = []) => {
    const canale = await client.channels.cache.get(idCanale);

    canale.messages.fetch().then(messages => {
        if (messages.size === 0) {
            canale.send( testoMessaggio).then(message => {
                aggiungiReazioni(message, reazioni);
        })
        } else {
            for (const message of messages) {
                message[1].edit(testoMessaggio);
                message[1].reactions.removeAll();
                aggiungiReazioni(message[1], reazioni);
            }
            
        }
    })
}