const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class StatsCommand extends BaseCommand {
  constructor() {
    super("stats", "Help", []);
  }

  run(client, message, args) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    
    let embed = new Discord.MessageEmbed()
      /* Embed */
      .setTitle("Stats")
      .setColor(process.env.EMBED_COLOR)
        
      /* Main */
      .setDescription(`Mach, coded by Lofe and Aviation_Joe.\n\n**Prefix:** \`${process.env.PREFIX}\` \n **Version:** ${process.env.VERSION}\n**Uptime:** ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds `)
      .addField("Status", "View our status [here!](https://mach.statuspage.io)")

      /* Footer */
      .setFooter("Mach")
      .setTimestamp();

    message.channel.send(embed);
  }
};
