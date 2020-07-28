// © Lofe 2020
// Mach Discord Bot
// bot.js

require("dotenv").config();
const { Client } = require("discord.js");
const { registerCommands, registerEvents } = require("./utils/registry");
const client = new Client();
const express = require("express");
const slash = require("express-slash");
const app = express();
const fs = require("fs");
const fetch = require("node-fetch");

(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.queue = new Map();
  await registerCommands(client, "../commands");
  await registerEvents(client, "../events");
  await client.login(process.env.BOT_TOKEN);
})();
