/* const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const { inspect } = require("util")

module.exports = class EvalCommand extends BaseCommand {
  constructor() {
    super('eval', 'Owner', ["exec", "code"]);
  }

  run(client, message, args) {
    
    if(message.author.id == "249962411589763073" || message.author.id == "269832519577239552") {
        try {
          const toEvaluate = args.join(" ")
          const evaluated = eval(toEvaluate)

          let embed = new Discord.MessageEmbed()
            .setColor('965555')
            .setTitle('Eval')
            .setDescription('Evaluated without an error!')
            .addField(":inbox_tray: Input", args.join(" "), false)
            .addField(":outbox_tray: Output", `\`\`\`javascript\n${evaluated}\n\`\`\``, false)
            .setFooter("Mach")

            message.channel.send(embed)
        } catch(e) {
            let embed = new Discord.MessageEmbed()
            .setColor('965555')
            .setTitle('Eval')
            .setDescription('An error occurred!')
            .addField(':x: Error', `\`\`\`${e.message}\`\`\``, false)
            .setFooter("Mach")

            message.channel.send(embed)
        }
      } else {
       let embed = new Discord.MessageEmbed()
      .setColor('965555')
      .setTitle('Eval')
      .setDescription(':x: An error occured while attempting to evaluate! You have invalid permissions for this command.')
      .setFooter("Mach")
       
       message.channel.send(embed)
       return
    }
    
    function clean(text) {
      if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
          return text;
    }
    
  }
}  */