const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class CreditsCommand extends BaseCommand {
  constructor() {
    super('credits', 'Help', []);
  }

  run(client, message, args) {
    let embed = new Discord.MessageEmbed()
     /* Embed */
    .setTitle("Credits")
    .setColor(process.env.EMBED_COLOR)
    
    /* Owners */
    .addField("**Aviation_Joe#7389**", "Owner\nPrograms a lot of the bots fun commands.", true)
    .addField("**UhTrue#9274**", "Owner\nHelps with support and management.", true)
    
    /* Development Team */
    .addField("**Lofe#1820**", "Lead Developer\nPrograms a lot of the bots backend.", true)
    
    /* Footer */
    .setFooter("Mach")
    .setTimestamp();
    
    message.channel.send(embed)
  }
}  