const fs = require('fs-extra');
const path = require('path');
const moment = require('moment-timezone');
const { blazetz } = require(__dirname + '/../../devblaze/blazetz');
const settings = require(__dirname + '/../../settings');
const quotedContact = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: 'MSELA CHUI XMD VERIFIED', vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:MSELA CHUI XMD VERIFIED\nORG:𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 BOT;\nTEL;type=CELL;type=VOICE;waid=260774358600:+260774358600\nEND:VCARD' } } };
blazetz({ nomCom: 'menu2', categorie: 'General' }, async (dest, client, options) => {
  const { cm } = require(__dirname + '/../../devblaze/blazetz');
  const { repondre, prefixe, nomAuteurMessage } = options;
  const grouped = {};
  for (const command of cm) (grouped[command.categorie] ||= []).push(command.nomCom);
  moment.tz.setDefault('Africa/Nairobi');
  let text = `┏━━━⚡ *𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃* ⚡━━━┓\n┃ 👋 Hello, *${nomAuteurMessage || 'user'}*!\n┃ 📱 Platform: *Android*\n┃ ⚙️ Mode: *${String(settings.MODE).toLowerCase() === 'off' ? 'PRIVATE' : 'PUBLIC'}*\n┃ 🚀 Prefix: *[ ${prefixe} ]*\n┃ ⏳ ${moment().format('HH:mm:ss')}  📆 ${moment().format('DD/MM/YYYY')}\n┃ 📟 Commands: *${cm.length}*\n┣━━━━━━━━━━━━━━━━━━━━━\n`;
  for (const [category, commands] of Object.entries(grouped)) text += `┃ 🔹 *${category.toUpperCase()}*\n┃   ${commands.map(command => `${prefixe}${command}`).join(' • ')}\n┣━━━━━━━━━━━━━━━━━━━━━\n`;
  text += '┗🌟 *𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 - Developed by 𝐌selachui!* 🌟';
  try {
    const image = path.join(__dirname, '../scs/leopard-menu-2.jpg');
    if (fs.existsSync(image)) {
      try {
        await client.sendMessage(dest, { image: fs.readFileSync(image), caption: text, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363405040601085@newsletter', newsletterName: '𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃', serverMessageId: 1 } } }, { quoted: quotedContact });
      } catch (mediaError) {
        console.warn('Menu2 image upload failed; using text fallback:', mediaError.message);
        await client.sendMessage(dest, { text }, { quoted: quotedContact });
      }
    } else {
      await client.sendMessage(dest, { text }, { quoted: quotedContact });
    }
  } catch (error) {
    await repondre(`❌ Menu error: ${error.message}`);
  }
});
