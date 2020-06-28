const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super("invite", "Help", ["add"]);
  }

  run(client, message, args) {
    let embed = new Discord.MessageEmbed()
      /* Embed */
      .setTitle("Invite")
      .setColor(process.env.EMBED_COLOR)
      /* Main */
      .setDescription(
        "Bot: https://discord.com/api/oauth2/authorize?client_id=696752082874531870&permissions=8&redirect_uri=https%3A%2F%2Fmach-discord.glitch.me%2Finvited&scope=bot \nDiscord: https://discord.gg/sYkbxg8"
      )

      /* Footer */
      .setFooter("Mach")
      .setTimestamp();
    message.reply("check your DMs!");
    message.member.send(embed);
  }
};
