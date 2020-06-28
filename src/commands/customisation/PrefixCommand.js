const BaseCommand = require("../../utils/structures/BaseCommand");
const Discord = require("discord.js");
const fs = require("fs");

module.exports = class PrefixCommand extends BaseCommand {
  constructor() {
    super("prefix", "Customisation", []);
  }

  run(client, message, args) {
    try { 
      if (!message.member.hasPermission("MANAGE_SERVER")) { return message.channel.send("⚠️ | You do not have permissions to do that! You require MANAGE_SERVER perms.") }
    } catch(e) {
      console.log(e)
    }
    
    if (!args[0]) { return message.channel.send("⚠️ | Invalid usage! Usage: `prefix (PREFIX)`") }

    let prefixes = JSON.parse(fs.readFileSync("prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
      prefixes: args[0]
    };

    fs.writeFile("prefixes.json", JSON.stringify(prefixes), err => {
      if (err) {
        console.log(err);
        message.channel.send(err)
        message.channel.send("⚠️ | An error occurred! You should never see a message like this - please contact a developer and quote the error message!");
      } else {
        message.channel.send("Success! Your prefix has been set to: " + args[0])
      }
    });
  }
}