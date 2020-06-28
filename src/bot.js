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

// © Lofe 2020
// Mach Discord Bot
// Express Stuff

const keepalive = require("express-glitch-keepalive");

app.enable("strict routing");

var router = express.Router({
  caseSensitive: app.get("case sensitive routing"),
  strict: app.get("strict routing")
});

app.use(keepalive);
app.use(router);
app.use(slash());

/* Primary Routes */

router.get("/home", (req, res) => {
  res.status(200);
  res.redirect("/Mach.Home/");
});

router.get("/", (req, res) => {
  res.status(200);
  res.redirect("/Mach.Home/");
});

router.get("/status", (req, res) => {
  res.redirect("/Mach.Status/");
});

router.get("/invite", (req, res) => {
  res.redirect("/Mach.Invite/");
});

router.get("/team", (req, res) => {
  res.redirect("/Mach.Team/");
});

router.get("/support", (req, res) => {
  res.redirect("/Mach.Support/");
});

router.get("/cmds", (req, res) => {
  res.redirect("/Mach.Commands/");
});

router.get("/commands", (req, res) => {
  res.redirect("/Mach.Commands/");
});

app.use(function(req, res, next) {
  res.render("404");
  console.log("Someone went on an invalid page.");
});

const maintenance = false;

if (maintenance == true) {
  router.get("*", (req, res) => {
    res.render("maintenance");
  });
}

/* Mach Router */

router.get("/Mach.Home/", (req, res) => {
  res.render("index", {
    users: client.users.cache.size,
    guilds: client.guilds.cache.size
  });
  res.status(200);
});

router.get("/Mach.Status/", (req, res) => {
  res.render("status");
});

router.get("/Mach.Invite/", (req, res) => {
  res.redirect(
    "https://discordapp.com/oauth2/authorize?client_id=696752082874531870&scope=bot&permissions=2105015799"
  );
});

router.get("/Mach.Team/", (req, res) => {
  res.render("team");
});

router.get("/Mach.Support/", (req, res) => {
  res.redirect("https://discord.gg/mYGH2MW");
});

router.get("/Mach.Commands/", (req, res) => {
  res.render("cmds");
});

/* Initialise Express */

app.set("view engine", "ejs");
app.listen(process.env.PORT);
