const { blazetz } = require('../../devblaze/blazetz');
const axios = require('axios');

// VCard Contact
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
const contextInfo = {
  forwardingScore: 999,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363405040601085@newsletter",
    newsletterName: "𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃",
    serverMessageId: 1
  }
};

blazetz({
  nomCom: "img",
  categorie: "Search",
  reaction: "📷"
}, async (dest, client, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    return repondre('❌ Please specify an image search term!');
  }

  const searchTerm = arg.join(" ");

  try {
    const apiUrl = `https://api.gifted.co.ke/api/search/googleimage?apikey=gifted&query=${encodeURIComponent(searchTerm)}`;
    const { data } = await axios.get(apiUrl);

    if (!data || !data.success || !data.results || data.results.length === 0) {
      return repondre('❌ No images found for your query.');
    }

    const results = data.results;
    // Send up to 5 images
    const sendCount = Math.min(results.length, 5);
    for (let i = 0; i < sendCount; i++) {
      await client.sendMessage(dest, {
        image: { url: results[i] },
        contextInfo
      }, { quoted: ms });
    }
  } catch (err) {
    console.error(err);
    return repondre('❌ An error occurred while searching for images.');
  }
});
