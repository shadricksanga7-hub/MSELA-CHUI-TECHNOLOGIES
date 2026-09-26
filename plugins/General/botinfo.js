const os = require('os');
const { blazetz } = require('../../devblaze/blazetz');
const settings = require('../../settings');

blazetz({
  nomCom: 'botinfo',
  alias: ['aboutbot', 'systeminfo'],
  categorie: 'General',
  reaction: 'ℹ️'
}, async (dest, client, context) => {
  const { repondre, ms, superUser } = context;
  if (!superUser) return repondre('❌ This command is available to the bot owner or sudo users only.');

  const uptime = Math.floor(process.uptime());
  const days = Math.floor(uptime / 86400);
  const hours = Math.floor((uptime % 86400) / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const memory = process.memoryUsage();
  const usedMb = (memory.rss / 1024 / 1024).toFixed(1);

  const text = [
    '╭━━━〔 𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 INFO 〕━━━╮',
    `┃ Bot: ${settings.BOT_NAME || '𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃'}`,
    `┃ Developer: ${settings.DEV || '𝐌selachui'}`,
    `┃ Uptime: ${days}d ${hours}h ${minutes}m`,
    `┃ Memory: ${usedMb} MB`,
    `┃ Node: ${process.version}`,
    `┃ Platform: ${os.platform()}`,
    `┃ Mode: ${settings.MODE === 'on' ? 'Public' : 'Private'}`,
    '╰━━━━━━━━━━━━━━━━━━━━━━╯'
  ].join('\n');

  return repondre(text);
});
