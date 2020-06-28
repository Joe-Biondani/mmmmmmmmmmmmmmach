const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'Moderation', []);
  }

  run(client, message, args) {
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.reply("❗ | You can't use this command.");

    if (message.mentions.members.size === 0)
      return message.reply("❗ | Please mention a user to ban!");

    if (!message.guild.me.hasPermission("BAN_MEMBERS"))
      return message.channel.send("❗ | An error occured: I don't seem to have permissions to ban members. Please check my permissions then try again.");

    const target = message.mentions.members.first();
    
    if (target.id == message.guild.owner.id) {
      return message.channel.send("❗ | You cannot ban the server owner! Bad.")
    }
    
    if(target.id == message.author.id) {
      return message.channel.send("❗ | Don't be like Lofe. Ban another user that isn't yourself.")
    }

    let embed = new Discord.MessageEmbed()
     /* Embed */
    .setTitle("⚒️ | You have been **banned** from " + message.guild.name + " by " + message.author.tag + " for " + args.slice(1).join(" ") + "!")
    .setColor(process.env.EMBED_COLOR)
    
    /* Footer */
    .setFooter("Mach")
    .setTimestamp();
    
    try {
      target.send(embed).then(
        target.ban(args.join(" ")).then(member => {
          message.reply(`✅ | ${member.user.username} was succesfully banned for ${args.slice(1).join(" ")}.  <:banhammer:720632087119659138>`);
        })
      )
    } catch(e) {
      message.channel.send("❗ | Could not ban user:\n" + e + "\nPlease report this to a developer.")
    }
  }     
}
    
    