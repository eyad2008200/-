const { MessageEmbed, Permissions } = require("discord.js");
module.exports = {
    name: 'ping',//اسم الامر
    desription: 'show bot Ping',//اكتب اي شي
    aliases: ['بنق'],//اختصارات تقدر تضيف بعد
    cooldown: 5000,//تكرار الامر كل وقت معين
    permission: ["SEND_MESSAGES"],//الصلاحيات المطلوبة
   async execute(client, message, args){
        const ping = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true, size: 2048}))
            .setDescription(`🏓 PONG: Bot Api Latency Is ${client.ws.ping}`)
            .setColor('GREEN') .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL({dynamic: true})}`)
            .setTimestamp()
            await message.reply({embeds: [ping]})
     }
}