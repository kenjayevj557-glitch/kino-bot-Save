const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🎬 Salom! Kino nomini yuboring."
  );
});

bot.on("message", (msg) => {
  if (msg.text === "/start") return;

  bot.sendMessage(
    msg.chat.id,
    `🔎 ${msg.text} topildi ✅`
  );
});

console.log("Bot ishlayapti...");
