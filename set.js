const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL || "mongodb+srv://anwarhussain4019:M9LBdNPponDJYemV@cluster0.nvgfeb1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUI5QXRoR203UVNTV0J6NjhScGlHcW1vK1VQemhZNkNXb2hLa1FzWFRYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGlEbHk0dXQ5SDVZOWNOVzVKemdjbUc5ak9Hblc0N0xVSmRyRGQ1VHBtVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5Rnp4L2xMVWVIZS9Xc2tZNGx5SmthaHpqdDVLZ05JbmJ4VFFySmFGSDNZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTlJza1FjRFdENDVNZFlpR3AxTThNaDVTSWx6LzdPZXgxMlQzL0Jyb1dvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitKR0U5dkNNYURZTHQ4QlRJUEx5WTluVWF4NHZaeTdqUVhIUnoxaWU1V1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHZ01QYnUwbTdjNlpQVmxDVnMzOXRXNCtMMzJObGJFSmFsSi9teklBMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUtjVTJQbVJvczdodXdLTXJVckFOM0haZ3g0dlh5ckZFUWk3MThJZ3BWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDl3bzEwUDVwYndhcURRb245SEcvL1VBb1k5Q01nLzNMSnhnNDN3S1gzND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE2WEhnRVRSZVJidm5BRlo5TzJDcVJ4eHp1bVpHQzJ2aWpEUGx1cHgweWxIcGNQUlE5aDIwU2NQam9UVTk2NlVRRnNVYjFMMndKbmZuYUdkaVZzS2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUxLCJhZHZTZWNyZXRLZXkiOiJHV3FWVm03MGRZcDduRXdiYmRRbG5XU3d6RVhBUVBSSUd3cWVkUUgwWmJNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzA1MjQzMjM4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCOUFGRjA1RkEzNTFBQ0FENUE0MDFEMjZFQjAzN0I3QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4NDcyMTA0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMwNTI0MzIzODJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREM5NTU3QzlBMzY2NDMxRjJGNjZDQTAxOTIxMDU0OUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODQ3MjEwNH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTDdEZ2h6ZE5RZTJTV0dkRU03NXZjZyIsInBob25lSWQiOiI5Y2VjZmI1ZS03MDhkLTQ5MTgtYjhlMC1mY2M4Yjg1MWZhNjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9Rc2d6WHN3R0hRTUt1ZmRoZmdNVm5KRVRjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoQlI0NWtpczFvV3Y1dU1TRStnWnVPN21nalk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNakR4ZFVDRUptYnQ3TUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIyYjdXckdYTVE0UDZIL2dtV0dodjg5NDFNY3hLanBDaDA0ZTFnOEZYY0FvPSIsImFjY291bnRTaWduYXR1cmUiOiJmR29VV25rdDVWbXFwdzdmYmhFY1Z1cW44QzFTbEVCaFpKL2tvVyt6NDNVNEVpNldSYU5TeE1uQk5VbitlUjdtc3p4TVgvS25ocWlMQ0dleExCUi9DQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWnRBam80Nm9RcU9xRjJKWDRRcWtkZGM1akZmN3dMeUQyTFJvM3ZvRkxuczJjc2svdWJDbFEydE9uYnZQTzhGL1QwazJFQXQzaWV0OE1oQ2JYY1dOanc9PSJ9LCJtZSI6eyJpZCI6IjkyMzA1MjQzMjM4Mjo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRfWSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwNTI0MzIzODI6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkbSsxcXhsekVPRCtoLzRKbGhvYi9QZU5USE1TbzZRb2RPSHRZUEJWM0FLIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE4NDcyMTAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJacyJ9',
    PREFIXE: process.env.PREFIX || "+",
    OWNER_NAME: process.env.OWNER_NAME || "T_Y_A",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "T_Y_A",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'T_Y😎_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/dcce2ddee6cc7597c859a.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
