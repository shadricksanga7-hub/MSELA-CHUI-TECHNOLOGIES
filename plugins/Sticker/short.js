const { blazetz } = require("../../devblaze/blazetz");
const axios = require("axios");

// VCard Contact (BLAZE VERIFIED ✅)
const quotedContact = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "BLAZE VERIFIED ✅",
      vcard: `BEGIN:VCARD
VERSION:3.0
FN:BLAZE VERIFIED ✅
ORG:𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 BOT;
TEL;type=CELL;type=VOICE;waid=260774358600:+260774358600
END:VCARD`
    }
  }
};

// Newsletter context
const newsletterContext = {
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363405040601085@newsletter",
    newsletterName: "𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃",
    serverMessageId: 1
  }
};

blazetz(
  {
    nomCom: "short",
    alias: ["tiny", "shorturl", "shorten", "urlshort"],
    categorie: "Sticker",
    author: "𝐌selachui",
    reaction: "General"
  },
  async (from, conn, context) => {

    const { arg, repondre } = context;

    if (!arg[0]) {
      return repondre("*🏷️ Please provide a link.*\n\nExample: .short https://example.com");
    }

    try {
      const link = arg[0].trim();
      let parsedUrl;
      try {
        parsedUrl = new URL(link);
      } catch {
        return repondre("❌ Please provide a valid URL beginning with http:// or https://.");
      }
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        return repondre("❌ Only http:// and https:// links can be shortened.");
      }

      const response = await axios.get(
        `https://tinyurl.com/api-create.php?url=${encodeURIComponent(link)}`
      );

      const shortenedUrl = String(response.data || '').trim();
      if (!/^https?:\/\//i.test(shortenedUrl)) {
        return repondre("❌ The shortening service returned an invalid result.");
      }

      // Box style caption
      const caption = `┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🛡️ *URL Shortener*
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ 🔗 Original:
┃ ${link}
┣━━━━━━━━━━━━━━━━━━━━━━━
┃ ✂️ Shortened:
┃ ${shortenedUrl}
┗━━━━━━━━━━━━━━━━━━━━━━━
🔗 Powered by 𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃`;

      await conn.sendMessage(
        from,
        {
          text: caption,
          contextInfo: newsletterContext
        },
        { quoted: quotedContact }
      );

    } catch (error) {
      console.error("TINY ERROR:", error);
      repondre("❌ An error occurred while shortening the URL. Please try again.");
    }
  }
);
