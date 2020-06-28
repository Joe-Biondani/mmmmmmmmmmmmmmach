const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super("website", "Help", ["web"]);
  }

  run(client, message, args) {
    message.channel.send("https://www.machdiscord.co.uk")
  }
};
