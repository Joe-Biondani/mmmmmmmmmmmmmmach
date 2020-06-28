const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super("avatar", "Help", ["av"]);
  }

  run(client, message, args) {
    const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.MessageEmbed()
      .setColor(0x333333)
      .setImage(
        client.users.cache.get(user.id).displayAvatarURL({ dynamic: true, format: "png", size: 1024 })
      )
      .setAuthor(user.tag)
      .setTimestamp();
    message.channel.send(avatarEmbed);
  }
};
