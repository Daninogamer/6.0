module.exports = (client) => {
    const channelid = "860856428722257941";
    client.on("guildMemberAdd", (member) => {

        const message = `👋 Heilà <@${member.id}> Benvenuto/a nel server **🎃 Gaming Community 6.0**\n\n🤔 Ti ricordiamo di leggere il regolamento in <#860795447844405268>.\n\n📡 Prenditi anche i ruoli in <#860795633635819520> per vedere dei canali segreti.\n\n📜Siamo alla ricerca di staff! Ti invito a dare un occhio al canale\n\n😁 Buona permanenza!`;
        
        const channel = member.guild.channels.cache.get(channelid);
        channel.send(message);
    });
};
