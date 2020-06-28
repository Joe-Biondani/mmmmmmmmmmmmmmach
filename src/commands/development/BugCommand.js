const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class BugCommand extends BaseCommand {
  constructor() {
    super('bug', 'Development', ["b"]);
  }
  
  run(client, message, args) {
    if (!args) return message.channel.send("Please input arguments!")
    
    let channel = client.guilds.cache.get("696756108349538386").channels.cache.get("696788468294221975")
    
    if (args[0] == "urgent") {
      channel.messages.fetch({around: args[1], limit: 1})
      .then(messages => {
      const targetMessage = messages.first(); 
        
      if (!args[2]) return message.react("❎")
      try {
        targetMessage.edit(
          new Discord.MessageEmbed()
           /* Embed */
          .setTitle("Bug Urgent State")
          .setColor("RED")

          /* Main */
          .setDescription(targetMessage.embeds[0].description)
          .addField("Made urgent by: " + message.author.tag, args.slice(2).join(" "), false)

          /* Footer */
          .setFooter("Mach")
          .setTimestamp()
        )
        
        targetMessage.clearReactions()
        message.react("✅")
      } catch(e) {
        console.log("ERROR: " + e)
      }
      
      return
    })} else if (args[0] == "fixed") {
      channel.messages.fetch({around: args[1], limit: 1})
      .then(messages => {
      const targetMessage = messages.first(); 
      
      if (!args[2]) return message.react("❎")
        
      try {
        targetMessage.edit(
          new Discord.MessageEmbed()
           /* Embed */
          .setTitle("Bug Fixed")
          .setColor("GREEN")

          /* Main */
          .setDescription(targetMessage.embeds[0].description)
          .addField("Fixed by: " + message.author.tag, args.slice(2).join(" "), false)

          /* Footer */
          .setFooter("Mach")
          .setTimestamp()
        )
        
        targetMessage.clearReactions()
        message.react("✅")
      } catch(e) {
        console.log("ERROR: " + e)
      }
      
      return
    })} else {
      let embed = new Discord.MessageEmbed()
       /* Embed */
      .setTitle("Bug | " + message.author.tag)
      .setColor(process.env.EMBED_COLOR)

      /* Main */
      .setDescription(args.join(" "))
      /* Footer */
      .setFooter("Mach")
      .setTimestamp();

      channel.send(embed).then(m => {
        m.react("✅").then(
          m.react("❎")
        )
      })
      message.channel.send("Successfully sent your bug report ("+ args.join(" ") + ") to our dev team!")
      message.delete()
    }
  }
}  