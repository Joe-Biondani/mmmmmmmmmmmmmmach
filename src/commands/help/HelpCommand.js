const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super("help", "Help", ["commands", "cmds"]);
  }

  run(client, message, args) {
    let embed = new Discord.MessageEmbed()
      /* Embed */
      .setTitle("Commands")
      .setColor(process.env.EMBED_COLOR)

      /* Main */
      .addField(
        "Customisation",
        "**prefix** - Set your server's prefix! (Requires Manage Server permission)",
        false
      )
      .addField(
        "Development",
        "**suggest** - Make a suggestion for our bot!\n**bug** - Report a bug!",
        false
      )
      .addField(
        "Fun",
        "**meme** - Sends you a meme!\n**dog** - Sends you a picture of a dog!\n**cat** - Sends you a cute picture of a cat!\n**8ball** - Tells you what mach thinks."
      )
      .addField(
        "Help",
        "**credits** - View credits for the bot.\n**help** - Show this menu.\n**ping** - View the bot's ping, and latency!\n**stats** - View the bot's stats!\n**announce** - Sends your message as a nice embed.\nInvite - Sends the invite for the bot and Discord server.\nWebsite - Sends the link to the website!",
        false
      )
      .addField(
        "Moderation",
        "**ban** - Bans a user.\n**kick** - Kicks a user.\n**purge** - Purge an amount of messages from 2-100!",
        false
      )
      .addField(
        "Owner",
        "**eval** - Evaluate code on the server.\n**servercount** - Tells you the amount of servers Mach is in.\n**usercount** - Tells you the amount of users Mach can see.",
        false
      )
      .addField(
        "Premium",
        "**premium** - Tests if your server has premium perks.",
        false
      )

      /* Footer */
      .setFooter("Mach")
      .setTimestamp();
    message.reply("check your DMs!");
    message.member.send(embed);
  }
};
