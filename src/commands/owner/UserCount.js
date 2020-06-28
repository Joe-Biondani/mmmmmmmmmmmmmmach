const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");

module.exports = class UsercountCommand extends BaseCommand {
  constructor() {
    super("usercount", "Owner", ["uc", "userc", "ucount"]);
  }

  run(client, message, args) {
    if (
      message.author.id == "249962411589763073" ||
      message.author.id == "269832519577239552"
    ) {
      let size = client.users.cache.size;
      message.channel.send(size + " users!");
    } else {
      message.channel.send("Invalid permissions.");
    }
  }
};
