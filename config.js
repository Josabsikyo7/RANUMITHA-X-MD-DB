const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "93MiwAKa#8UE3sr-Njy3uZtceZDAZdej_jAMIMnzh5I8O9lTGXUY",
// add your Session Id (මුලට "ranu& keella oni naha")
MONGODB: process.env.MONGODB || "mongodb://mongo:QjtJtedrwrBJzomUcSFgAXflYqwCGqTD@yamanote.proxy.rlwy.net:54323",
// Enter your mongoDB public URL
OWNER_NUM: process.env.OWNER_NUM || "94762095304",
// add owner number 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94762095304",
// add your bot owner number
DEV: process.env.DEV || "94762095304"
//replace with your whatsapp number

};