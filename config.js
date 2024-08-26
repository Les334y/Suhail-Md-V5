const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2348037252467" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348037252467";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_09_08_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICA4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5NSxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODcsXG4gICAgICAgIDI5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA0NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MixcbiAgICAgICAgMjA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDM4LFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICA3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTksXG4gICAgICAgIDMxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRXlPUnllVFNwZTg0dFhnclUzdHl3RGYwemwwdjNwaGJaMEgvRWRaNmhUbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVhERmJjMkFSVnlYcEhaVUx5WjJLQVwiLFxuICBcInBob25lSWRcIjogXCJkMmZmODM2Zi0zOTg0LTQwNzEtYTllMC1jZmYyOTJiYTg3ZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxMjksXG4gICAgICAzMCxcbiAgICAgIDIzNyxcbiAgICAgIDIxLFxuICAgICAgMzQsXG4gICAgICAyMDEsXG4gICAgICAxNjEsXG4gICAgICAyMzQsXG4gICAgICAxMzYsXG4gICAgICA0OSxcbiAgICAgIDIwNyxcbiAgICAgIDM0LFxuICAgICAgMTEyLFxuICAgICAgMTY4LFxuICAgICAgMjM1LFxuICAgICAgMTIwLFxuICAgICAgMTYwLFxuICAgICAgMzIsXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA0LFxuICAgICAgMTY1LFxuICAgICAgNzMsXG4gICAgICAxNixcbiAgICAgIDExNyxcbiAgICAgIDIyNyxcbiAgICAgIDEwNCxcbiAgICAgIDExMCxcbiAgICAgIDExMyxcbiAgICAgIDIzMixcbiAgICAgIDIwNSxcbiAgICAgIDI0NCxcbiAgICAgIDIwOSxcbiAgICAgIDY1LFxuICAgICAgMjA1LFxuICAgICAgNTgsXG4gICAgICAyNDQsXG4gICAgICAxNjcsXG4gICAgICAxODgsXG4gICAgICA3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYUTRZTlFaSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzNzI1MjQ2Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTA3ODc1MDI1MzQ2NTg6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNLzYvTVVCRUozUXFiWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZxRmt2S0oxWm5ENWFzbXpFN1FkMEJYWUZaSzQ5aGowRFY3cEh0UnJnU1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiKzdzQTlxaGFLa3ZnUXJ6RkJYQVRuRG9EcWVTVm1rd2MxRGtpMVYzVWZVcHRkbTNVYjl2Vm9KNk5lb2hIOHNRSW1sSDBMUzF2T1c2NnoxbDYzSWJoQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM3hyMGd2a0lHaWpZanorTjFySzBTTGhSU00vNnZnZHlGQ1JtR3pvbEtaVGZiYXZWS08wR0tuVFB1dzExbnBINER5N21pZGMrczdMcTJSR1lOYUhsQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzNzI1MjQ2Nzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI0NTQwOTYwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ŁÊSĹËÝ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Adams",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
