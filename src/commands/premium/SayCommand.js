const BaseCommand = require("../../utils/structures/BaseCommand");
const Database = require("../../premium.json");
const Discord = require("discord.js");

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super("say", "Premium", []);
  }

  run(client, message, args) {
    if (Database.includes(message.guild.owner.id)) {
      message.channel.send(args.join(" "));
      message.delete();
    } else {
      let embed = new Discord.RichEmbed()
        /* Embed */
        .setTitle("Whoops!")
        .setColor(process.env.EMBED_COLOR)

        .setDescription(
          message.author.id == message.guild.owner.id
            ? process.env.DONATE_OWNER
            : process.env.DONATE_USER
        );
      message.channel.send(embed);
    }
  }
};
