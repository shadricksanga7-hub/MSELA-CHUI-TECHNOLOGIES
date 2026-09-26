const axios = require("axios");
const { blazetz } = require("../../devblaze/blazetz");

// VCard Contact (optional)
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
  nomCom: "instagram",
  categorie: "Download",
  reaction: "📸",
  alias: ["ig", "igdl", "instadl"]
}, async (dest, client, commandeOptions) => {
  const { arg, repondre, ms } = commandeOptions;

  if (!arg[0]) return repondre("❌ Please provide an Instagram link.");
  const q = arg.join(" ");
  if (!q.includes("instagram.com")) return repondre("❌ Invalid Instagram link.");

  try {
    await client.sendMessage(dest, { react: { text: "⏳", key: ms.key } });

    const apiUrl = `https://blaze-api.zone.id/api/instagram/download?url=${encodeURIComponent(q)}`;
    const { data } = await axios.get(apiUrl);

    if (!data.success || !data.data || !data.data.status) {
      return repondre("⚠️ Failed to fetch Instagram media.");
    }

    const items = data.data.data;
    if (!items || !items.length) return repondre("⚠️ Media not found in response.");

    const caption =
      "╔══════════════════❒\n" +
      `║ 📸 *Instagram Media*\n` +
      "╚══════════════════❒";

    // 1. Send caption only
    await client.sendMessage(dest, {
      text: caption,
      ...newsletterContext
    }, { quoted: quotedContact });

    // 2. Send each media item (handles carousel posts with multiple items)
    for (const item of items) {
      if (!item.url) continue;
      const isVideo = /\.mp4(\?|$)/i.test(item.url);

      await client.sendMessage(dest, isVideo
        ? { video: { url: item.url }, ...newsletterContext }
        : { image: { url: item.url }, ...newsletterContext }
      , { quoted: quotedContact });
    }

  } catch (error) {
    console.error("Instagram Error:", error);
    repondre("❌ An error occurred while downloading the Instagram media.");
  }
});
