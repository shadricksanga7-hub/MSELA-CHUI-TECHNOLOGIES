const { blazetz } = require("../../devblaze/blazetz");
const conf = require(__dirname + "/../../settings");

// VCard Contact kwa quoting
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "MSELA CHUI XMD VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:MSELA CHUI XMD VERIFIED ✅\nORG:𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 BOT;\nTEL;type=CELL;type=VOICE;waid=260774358600:+260774358600\nEND:VCARD"
    }
  }
};

// PROFILE COMMAND
blazetz({
  nomCom: "profile",
  aliases: ["pp", "whois"],
  desc: "to generate profile picture",
  categorie: "General"
}, async (dest, client, commandeOptions) => {
  const { repondre, auteurMessage, nomAuteurMessage, msgRepondu, auteurMsgRepondu } = commandeOptions;

  let jid = msgRepondu ? auteurMsgRepondu : auteurMessage;
  let nom = msgRepondu ? "@" + auteurMsgRepondu.split("@")[0] : nomAuteurMessage;

  let ppUrl = conf.URL;
  try {
    ppUrl = await client.profilePictureUrl(jid, 'image');
  } catch (error) {
    console.error("PP Error:", error);
  }

  let status = "About not accessible due to user privacy";
  try {
    const s = await client.fetchStatus(jid);
    if (s && s.status) status = s.status;
  } catch {}

  const caption = `┏━━━━━━━━━━━━━━━━━━
┃ 👤 *Name:* ${nom}
┃ 📝 *About:* ${status}
┗━━━━━━━━━━━━━━━━━`;

  await client.sendMessage(dest, {
    image: { url: ppUrl },
    caption,
    mentions: msgRepondu ? [auteurMsgRepondu] : [],
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: msgRepondu ? [auteurMsgRepondu] : [],
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363405040601085@newsletter",
        newsletterName: "𝙽𝙾𝚅𝙰-𝚇𝙼𝙳",
        serverMessageId: 1
      }
    }
  }, { quoted: quotedContact });
});

// PROFILE2 COMMAND (BUSINESS)
blazetz({
  nomCom: "profile2",
  aliases: ["pp2", "whois2"],
  desc: "to generate business profile picture",
  categorie: "General"
}, async (dest, client, commandeOptions) => {
  const { repondre, auteurMessage, nomAuteurMessage, msgRepondu, auteurMsgRepondu } = commandeOptions;

  let jid = msgRepondu ? auteurMsgRepondu : auteurMessage;
  let nom = msgRepondu ? "@" + auteurMsgRepondu.split("@")[0] : nomAuteurMessage;

  let ppUrl = conf.URL;
  try {
    ppUrl = await client.profilePictureUrl(jid, 'image');
  } catch (error) {
    console.error("PP Error:", error);
  }

  let status = "About not accessible due to user privacy";
  try {
    const s = await client.fetchStatus(jid);
    if (s && s.status) status = s.status;
  } catch {}

  let business = { description: "No business profile available", category: "Unknown" };
  try {
    const b = await client.getBusinessProfile(jid);
    if (b) business = b;
  } catch {}

  const caption = `┏━━━━━━━━━━━━━━━━━━
┃ 👤 *Name:* ${nom}
┃ 📝 *About:* ${status}
┃ 🏢 *Biz Desc:* ${business.description}
┃ 🏷️ *Biz Category:* ${business.category}
┗━━━━━━━━━━━━━━━━━`;

  await client.sendMessage(dest, {
    image: { url: ppUrl },
    caption,
    mentions: msgRepondu ? [auteurMsgRepondu] : [],
    contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      mentionedJid: msgRepondu ? [auteurMsgRepondu] : [],
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363405040601085@newsletter",
        newsletterName: "𝙽𝙾𝚅𝙰-𝚇𝙼𝙳",
        serverMessageId: 1
      }
    }
  }, { quoted: quotedContact });
});
