const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed }= require('discord.js')
const client = require('../../');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Show Bot Ping & Reply with pong.'),
    async execute(interaction){
        const ping = new MessageEmbed()
        .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({dynamic: true, size: 2048})) 
        .setDescription(`🏓 PONG: Bot api latency is ${client.ws.ping}`)
        .setColor('GREEN')
 .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL({dynamic: true})}`)
        .setTimestamp()
        interaction.reply({embeds: [ping]})
    }
}