const fs = require('fs-extra');
const path = require('path');
const { blazetz } = require(__dirname + '/../../devblaze/blazetz');
const settings = require(__dirname + '/../../settings');
const quotedContact = { key: { fromMe: false, participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: 'MSELA CHUI XMD VERIFIED', vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:MSELA CHUI XMD VERIFIED\nORG:𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 BOT;\nTEL;type=CELL;type=VOICE;waid=260774358600:+260774358600\nEND:VCARD' } } };
const newsletterContext = { contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363405040601085@newsletter', newsletterName: '𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃', serverMessageId: 1 } } };
const imageDir = path.join(__dirname, '../scs');
function getMenuImage() { try { const f = fs.readdirSync(imageDir).filter(x => /^leopard-menu-\d+\.png$/i.test(x)); return f.length ? path.join(imageDir, f[Math.floor(Math.random() * f.length)]) : null; } catch (_) { return null; } }
function botInfo(total) { const mode = String(settings.MODE || 'on').toLowerCase() === 'off' ? 'PRIVATE' : 'PUBLIC'; return `╭─「 *𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃* 」\n│ ⚙️ Mode: *${mode}*\n│ ⌨️ Prefix: *${settings.PREFIXE}*\n│ 📟 Commands: *${total}*\n│ 🌐 github.com/shadricksanga7-hub/MSELA-CHUI-TECHNOLOGIES\n╰──────────────────\n\n`; }
blazetz({ nomCom: 'menu', categorie: 'General', reaction: '📜' }, async (dest, client, context) => {
  const { cm } = require(__dirname + '/../../devblaze/blazetz');
  const { repondre, prefixe, ms } = context;
  const grouped = {};
  for (const command of cm) (grouped[command.categorie] ||= []).push(command.nomCom);
  const categories = Object.keys(grouped);
  let text = botInfo(cm.length) + '📑 *TOOL MENU*\n\nReply with a category number:\n\n';
  categories.forEach((category, index) => { text += `${index + 1} ➠ ${category.toUpperCase()}\n`; });
  text += `\n*Send a number from 1-${categories.length}*`;
  const image = getMenuImage();
  let sent;
  try { sent = await client.sendMessage(dest, image ? { image: fs.readFileSync(image), caption: text, ...newsletterContext } : { text, ...newsletterContext }, { quoted: quotedContact }); } catch (_) { sent = await client.sendMessage(dest, { text }, { quoted: quotedContact }); }
  const listener = async update => {
    const message = update.messages?.[0];
    const reply = message?.message?.extendedTextMessage;
    if (!reply || reply.contextInfo?.stanzaId !== sent.key.id) return;
    client.ev.off('messages.upsert', listener);
    const index = Number(reply.text.trim()) - 1;
    if (!Number.isInteger(index) || index < 0 || index >= categories.length) return repondre(`❌ Invalid number. Send 1-${categories.length}`);
    const category = categories[index];
    const body = botInfo(cm.length) + `📂 *${category.toUpperCase()}*\n\n` + grouped[category].map(command => `🔹 *${prefixe}${command}*`).join('\n');
    const categoryImage = getMenuImage();
    try { await client.sendMessage(dest, categoryImage ? { image: fs.readFileSync(categoryImage), caption: body, ...newsletterContext } : { text: body }, { quoted: ms }); await client.sendMessage(dest, { react: { text: '✅', key: message.key } }); } catch (error) { await repondre(`❌ Menu error: ${error.message}`); }
  };
  client.ev.on('messages.upsert', listener);
});
