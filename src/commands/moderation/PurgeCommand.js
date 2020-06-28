const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'Moderation', ["clear", "prune"]);
  }

  run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You can't use this command.");
    
    if (!args[0])
    return message.reply("Please select a number between 2-100!")
    
    if (args[0] < 2)
    return message.reply("Please select a number above 1!")
    
    if (args[0] > 100)
    return message.reply("Please select a number below 100!")
    
    let embed = new Discord.MessageEmbed()
     /* Embed */
    .setTitle(message.author.tag + " cleared " + Math.floor(args[0]) + " messages!")
    .setColor(process.env.EMBED_COLOR)
    
    /* Footer */
    .setFooter("Mach")
    .setTimestamp();
    
    let messagecount = args[0];
    message.channel.messages.fetch({ limit: messagecount })
    .then(messages => message.channel.bulkDelete(messages))
    .then(message.channel.send(embed))
  }
}  
    
    