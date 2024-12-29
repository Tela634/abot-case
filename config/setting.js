const fs = require("fs");
const chalk = require("chalk");
global.creAtor = "yournumber@s.whatsapp.net";
global.owner = ["yournumber"];
global.ownerNumber = ["yournumber@s.whatsapp.net"];
global.nomerOwner = "yournumber";
global.namabotnya = "Tela634";
global.namaownernya = "Veronica";

//Web Api
global.APIs = {
  betabotz: "https://tools.betabotz.eu.org/",
  ryzendesu: "https://api.ryzendesu.vip/",
};

global.APIKeys = {
  "https://tools.betabotz.eu.org/": "", //your apikeyhere,
  "https://api.ryzendesu.vip/": "", //your apikeyhere,
};

// Sticker Creator
global.packname = "© Created By";
global.author = "tela634";

global.sessionName = "session";
global.group = "";
global.youtube = "";
global.website = "";
global.github = "";
global.keyopenai = "ISI_APIKEY_OPENAI_DISINI";
global.keyopenai = "2d2703d1";
global.nomorowner = "https://wa.me/254716223069";

// Scrap Lib
global.scrap = new (require("../function/lib/lib.scrap.js"))();

global.region = "I`m From Indonesia";
global.prefa = ["", "!", ".", "#", "-", "•"];
global.thumb = fs.readFileSync("./function/image/thumb.jpg");
global.krmd = {
  success: "```Success✅```",
  admin: "```Fitur Khusus Admin Group!!!```",
  botAdmin: "```Bot Harus Menjadi Admin Terlebih Dahulu!!!```",
  owner: "```Fitur Khusus Owner Bot!!!```",
  group: "```Fitur Digunakan Hanya Untuk Group!!!```",
  private: "```Fitur Digunakan Hanya Untuk Private Chat!!!```",
  bot: "```Fitur Khusus Pengguna Nomor Bot!!!```",
  error:
    "```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```",
  wait: "```Waittt...```",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
