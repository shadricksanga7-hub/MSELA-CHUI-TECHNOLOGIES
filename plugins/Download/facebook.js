const { blazetz } = require('../../devblaze/blazetz');
const fs = require('fs');
const getFBInfo = require("@xaviabot/fb-downloader");
const { default: axios } = require('axios');

// VCard Contact
const quotedContact = {
  key: {
    fromMe: false,
    participant: `0@s.whatsapp.net`,
    remoteJid: "status@broadcast"
  },
  message: {
    contactMessage: {
      displayName: "MSELA CHUI XMD VERIFIED ?",
      vcard: "BEGIN:VCARD\nVERSION:3.0\nFN:MSELA CHUI XMD VERIFIED ? nORG:𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 BOT;\nTEL;type=CELL;type=VOICE;waid=260774358600:+260774358600\nEND:VCARD"
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

blazetz({
  nomCom: "fb",
  categorie: "Download",
  reaction: "🔁"
}, async (dest, client, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insert a public facebook video link!');
    return;
  }

  const queryURL = arg.join(" ");

  try {
    getFBInfo(queryURL)
      .then(async (result) => {
        let caption = `
titre: ${result.title}
Lien: ${result.url}
        `;
        await client.sendMessage(dest, {
          image: { url: result.thumbnail },
          caption: caption,
          contextInfo: newsletterContext
        }, { quoted: quotedContact });
        await client.sendMessage(dest, {
          video: { url: result.hd },
          caption: 'facebook video downloader powered by 𝐌selachui',
          contextInfo: newsletterContext
        }, { quoted: quotedContact });
      })
      .catch((error) => {
        console.log("Error:", error);
        repondre('try fb2 on this link');
      });
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.', error);
  }
});

blazetz({
  nomCom: "fb2",
  categorie: "Download",
  reaction: "🔁"
}, async (dest, client, commandeOptions) => {
  const { repondre, ms, arg } = commandeOptions;

  if (!arg[0]) {
    repondre('Insert a public facebook video link! !');
    return;
  }

  const queryURL = arg.join(" ");

  try {
    getFBInfo(queryURL)
      .then(async (result) => {
        let caption = `
titre: ${result.title}
Lien: ${result.url}
        `;
        await client.sendMessage(dest, {
          image: { url: result.thumbnail },
          caption: caption,
          contextInfo: newsletterContext
        }, { quoted: quotedContact });
        await client.sendMessage(dest, {
          video: { url: result.sd },
          caption: 'facebook video downloader powered by 𝐌selachui',
          contextInfo: newsletterContext
        }, { quoted: quotedContact });
      })
      .catch((error) => {
        console.log("Error:", error);
        repondre(error);
      });
  } catch (error) {
    console.error('Erreur lors du téléchargement de la vidéo :', error);
    repondre('Erreur lors du téléchargement de la vidéo.', error);
  }
});
