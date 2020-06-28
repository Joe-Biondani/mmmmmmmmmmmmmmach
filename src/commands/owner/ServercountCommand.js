const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class ServercountCommand extends BaseCommand {
  constructor() {
    super("servercount", "Owner", ["sc", "serverc", "scount"]);
  }

  run(client, message, args) {
    if (
      message.author.id == "249962411589763073" ||
      message.author.id == "269832519577239552"
    ) {
      let size = client.guilds.cache.size;
      message.channel.send(size + " servers!");
    } else {
      message.channel.send("Invalid permissions.");
    }
  }
};
