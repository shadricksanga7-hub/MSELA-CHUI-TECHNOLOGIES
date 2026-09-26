const axios = require("axios");
const { blazetz } = require("../../devblaze/blazetz");

// VCard Contact (MSELA CHUI XMD VERIFIED ✅)
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "MSELA CHUI XMD VERIFIED ✅",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:MSELA CHUI XMD VERIFIED ✅\nORG:𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 BOT;\nTEL;type=CELL;type=VOICE;waid=260774358600:+260 774 358600\nEND:VCARD"
    }
  }
};

// Newsletter context
const newsletterContext = {
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363405040601085@newsletter",
      newsletterName: "𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃",
      serverMessageId: 1
    }
  }
};

blazetz({
  nomCom: "apk",
  categorie: "Download",
  reaction: "📦"
}, async (dest, client, commandeOptions) => {
  const { arg, repondre, ms } = commandeOptions;

  if (!arg[0]) return repondre("❌ Please provide an app name to search.");

  try {
    const q = arg.join(" ");
    await client.sendMessage(dest, { react: { text: "⏳", key: ms.key } });

    const apiUrl = `http://ws75.aptoide.com/api/7/apps/search/query=${encodeURIComponent(q)}/limit=1`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (!data?.datalist?.list?.length) {
      return repondre("⚠️ No results found for the given app name.");
    }

    const app = data.datalist.list[0];
    const appSizeMB = (app.size / 1048576).toFixed(2);

    const caption = `┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 📦 Name: ${app.name}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 🏋 Size: ${appSizeMB} MB
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 📦 Package: ${app.package}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 📅 Updated On: ${app.updated}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 👨‍💻 Developer: ${app.developer.name}
┗━━━━━━━━━━━━━━━━━━━━━━━
🔗 Powered by 𝗕.𝗠.𝗕-𝗫𝗠𝗗`;

    await client.sendMessage(dest, {
      image: { url: app.icon },
      caption,
      ...newsletterContext
    }, { quoted: quotedContact });

    await client.sendMessage(dest, {
      document: { url: app.file.path_alt },
      fileName: `${app.name}.apk`,
      mimetype: "application/vnd.android.package-archive",
      ...newsletterContext
    }, { quoted: quotedContact });

  } catch (error) {
    console.error("APK Error:", error);
    repondre("❌ An error occurred while fetching the APK.");
  }
});
