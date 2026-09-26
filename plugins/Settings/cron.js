const { blazetz } = require('../../devblaze/blazetz');
const { getCronById, addCron, delCron } = require('../../lib/cron');

function normalizeTime(value) {
  const match = String(value || '').trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return null;
  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour > 23 || minute > 59) return null;
  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

blazetz({
  nomCom: 'cron',
  alias: ['schedule', 'autoschedule'],
  categorie: 'Settings',
  author: '𝐌selachui'
}, async (chatId, client, context) => {
  const { arg = [], repondre, verifGroupe, verifAdmin, superUser } = context;
  if (!verifGroupe) return repondre('❌ Cron schedules can only be configured inside a group.');
  if (!superUser && !verifAdmin) return repondre('❌ Only a group admin or the bot owner can configure cron schedules.');

  const action = String(arg[0] || 'status').toLowerCase();
  const current = await getCronById(chatId);

  if (action === 'status') {
    return repondre(`⏰ *MSELA CHUI CRON*\n\nMute at: *${current?.mute_at || 'not set'}*\nUnmute at: *${current?.unmute_at || 'not set'}*\nTimezone: *Africa/Nairobi*\n\nUse:\n• .cron set 22:00 06:00\n• .cron clear`);
  }

  if (action === 'clear') {
    await delCron(chatId);
    return repondre('✅ Group cron schedule cleared.');
  }

  if (action === 'set') {
    const muteAt = normalizeTime(arg[1]);
    const unmuteAt = normalizeTime(arg[2]);
    if (!muteAt || !unmuteAt) return repondre('❌ Use 24-hour time: `.cron set 22:00 06:00`');
    await addCron(chatId, 'mute_at', muteAt);
    await addCron(chatId, 'unmute_at', unmuteAt);
    return repondre(`✅ Cron enabled.\n\nThe group will close at *${muteAt}* and open at *${unmuteAt}* (Africa/Nairobi).`);
  }

  return repondre('Use `.cron status`, `.cron set HH:MM HH:MM`, or `.cron clear`.');
});
