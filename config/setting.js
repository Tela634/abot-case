const fs = require("fs");
const chalk = require("chalk");
global.creAtor = "254701309409@s.whatsapp.net";
global.owner = ["254701309409"];
global.ownerNumber = ["254701309409@s.whatsapp.net"];
global.nomerOwner = "254701309409";
global.namabotnya = "LESTA_ELIUD";
global.namaownernya = "ELIUD";

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
global.author = "lesta_eliud";

global.sessionName = "session";
global.group = "";
global.youtube = "";
global.website = "";
global.github = "";
global.keyopenai = "ISI_APIKEY_OPENAI_DISINI";
global.keyopenai = "2d2703d1";
global.nomorowner = "https://wa.me/254701309409";

// Scrap Lib
global.scrap = new (require("../function/lib/lib.scrap.js"))();

global.region = "I`m From Indonesia";
global.prefa = ["", "!", ".", "#", "-", "•"];
global.thumb = fs.readFileSync("./function/image/thumb.jpg");
global.krmd = {
  success: "```Success✅```",
  admin: "``` Admin of Group!!!```",
  botAdmin: "```Bot Harus Menjadi Admin Terlebih Dahulu!!!```",
  owner: "``` Owner of Bot!!!```",
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
