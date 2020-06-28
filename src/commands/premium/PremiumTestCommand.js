const BaseCommand = require('../../utils/structures/BaseCommand');
const Database = require('../../premium.json')
const Discord = require('discord.js')

module.exports = class PremiumCommand extends BaseCommand {
  constructor() {
    super('premium', 'Premium', []);
  }

  run(client, message, args) {
    if (Database.includes(message.guild.owner.id)) {
      let embed = new Discord.MessageEmbed()
       /* Embed */
      .setTitle("Woohoo! This server has premium.")
      .setColor(process.env.EMBED_COLOR)

      message.channel.send(embed)
    } else {
      let embed = new Discord.MessageEmbed()
       /* Embed */
      .setTitle("Whoops!")
      .setColor(process.env.EMBED_COLOR)

      .setDescription(message.author.id == message.guild.owner.id ? process.env.DONATE_OWNER : process.env.DONATE_USER) 
      message.channel.send(embed)
    }
  }
}  