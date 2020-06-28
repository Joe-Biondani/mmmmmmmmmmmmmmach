const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class SuggestCommand extends BaseCommand {
  constructor() {
    super('suggest', 'Development', ["s"]);
  }
  
  run(client, message, args) {
    if (!args) return message.channel.send("Please input arguments!")
    
    let channel = client.guilds.cache.get("696756108349538386").channels.cache.get("711280060593864705")
    
    if (args[0] == "deny") {
      channel.messages.fetch({around: args[1], limit: 1})
      .then(messages => {
      const targetMessage = messages.first(); 
        
      if (!args[2]) return message.react("❎")
      try {
        targetMessage.edit(
          new Discord.MessageEmbed()
           /* Embed */
          .setTitle("Suggestion Denied")
          .setColor("RED")

          /* Main */
          .setDescription(targetMessage.embeds[0].description)
          .addField("Denied by: " + message.author.tag, args.slice(2).join(" "), false)

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
    })} else if (args[0] == "approve") {
      channel.messages.fetch({around: args[1], limit: 1})
      .then(messages => {
      const targetMessage = messages.first(); 
      
      if (!args[2]) return message.react("❎")
        
      try {
        targetMessage.edit(
          new Discord.MessageEmbed()
           /* Embed */
          .setTitle("Suggestion Approved")
          .setColor("GREEN")

          /* Main */
          .setDescription(targetMessage.embeds[0].description)
          .addField("Approved by: " + message.author.tag, args.slice(2).join(" "), false)

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
    })} else if (args[0] == "consider") {
      channel.messages.fetch({around: args[1], limit: 1})
      .then(messages => {
      const targetMessage = messages.first(); 
      
       if (!args[2]) return message.react("❎")
        
      try {  
        targetMessage.edit(
          new Discord.MessageEmbed()
           /* Embed */
          .setTitle("Suggestion Being Considered")
          .setColor("BLUE")

          /* Main */
          .setDescription(targetMessage.embeds[0].description)
          .addField("Being considered by: " + message.author.tag, args.slice(2).join(" "), false)

          /* Footer */
          .setFooter("Mach")
          .setTimestamp()
        )

        message.react("✅")
      } catch(e) {
        console.log("ERROR: " + e)
      }
      
      return 
    })} else if (args[0] == "done") {
      channel.messages.fetch({around: args[1], limit: 1})
      .then(messages => {
      const targetMessage = messages.first(); 
      
      if (!args[2]) return message.react("❎")
        
      try {
        targetMessage.edit(
          new Discord.MessageEmbed()
           /* Embed */
          .setTitle(":tada: Completed and added to bot!")
          .setColor("GREEN")

          /* Main */
          .setDescription(targetMessage.embeds[0].description)
          .addField("Approved by: " + message.author.tag, args.slice(2).join(" "), false)

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
      .setTitle("Suggestion | " + message.author.tag)
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
      message.channel.send("Successfully sent your suggestion ("+ args.join(" ") + ") to our discord server for the public to vote on!")
      message.delete()
    }
  }
}  