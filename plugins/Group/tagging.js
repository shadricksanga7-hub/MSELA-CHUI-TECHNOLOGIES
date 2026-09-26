const { blazetz } = require('../../devblaze/blazetz');

blazetz({
  nomCom: 'all',
  alias: ['hidetag'],
  desc: 'Notify every group member without printing visible mentions.',
  categorie: 'Group',
  author: '𝐌selachui',
  reaction: '📣'
}, async (dest, client, options) => {
  const { repondre, verifGroupe, verifAdmin, superUser, verifBlazetzAdmin, arg, infosGroupe } = options;
  if (!verifGroupe) return repondre('❌ This command is for groups only.');
  if (!verifAdmin && !superUser) return repondre('❌ Only group admins or the bot owner can use this command.');
  if (!verifBlazetzAdmin) return repondre('❌ Please make 𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 a group admin first.');

  const members = usableMembers(infosGroupe?.participants);
  if (!members.length) return repondre('❌ No group members were available to mention.');
  const message = arg?.length ? arg.join(' ') : '𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 group announcement';
  await client.sendMessage(dest, {
    text: `📣 ${message}`,
    mentions: members,
    contextInfo: { mentionedJid: members }
  });
});

blazetz({
  nomCom: 'tagall',
  desc: 'Mention every group member visibly.',
  categorie: 'Group',
  author: '𝐌selachui',
  reaction: '📣'
}, async (dest, client, options) => {
  const { repondre, verifGroupe, verifAdmin, superUser, verifBlazetzAdmin, arg, infosGroupe } = options;
  if (!verifGroupe) return repondre('❌ This command is for groups only.');
  if (!verifAdmin && !superUser) return repondre('❌ Only group admins or the bot owner can use this command.');
  if (!verifBlazetzAdmin) return repondre('❌ Please make 𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 a group admin first.');
  const members = usableMembers(infosGroupe?.participants);
  if (!members.length) return repondre('❌ No group members were available to mention.');
  const message = arg?.length ? arg.join(' ') : '𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 group announcement';
  await client.sendMessage(dest, {
    text: `📣 *${message}*\\n\\n${members.map((jid) => `• @${jid.split('@')[0]}`).join('\\n')}`,
    mentions: members,
    contextInfo: { mentionedJid: members }
  });
});

blazetz({
  nomCom: 'tagadmins',
  alias: ['admins', 'tagadmin'],
  desc: 'Mention all group administrators.',
  categorie: 'Group',
  author: '𝐌selachui',
  reaction: '🛡️'
}, async (dest, client, options) => {
  const { repondre, verifGroupe, verifAdmin, superUser, verifBlazetzAdmin, arg, infosGroupe } = options;
  if (!verifGroupe) return repondre('❌ This command is for groups only.');
  if (!verifAdmin && !superUser) return repondre('❌ Only group admins or the bot owner can use this command.');
  if (!verifBlazetzAdmin) return repondre('❌ Please make 𝐌𝐒𝐄𝐋𝐀-𝐂𝐇𝐔𝐈-𝐗𝐌𝐃 a group admin first.');

  const admins = usableMembers((infosGroupe?.participants || []).filter((member) => member.admin));
  if (!admins.length) return repondre('❌ No group administrators were available to mention.');
  const message = arg?.length ? arg.join(' ') : 'Group administrators';
  await client.sendMessage(dest, {
    text: `🛡️ *${message}*\n\n${admins.map((jid) => `• @${jid.split('@')[0]}`).join('\n')}`,
    mentions: admins,
    contextInfo: { mentionedJid: admins }
  });
});

function usableMembers(participants) {
  return [...new Set((participants || []).map((member) => {
    if (typeof member === 'string') return member;
    return member?.jid || member?.id || member?.phoneNumber || member?.lid || member?.participantAlt;
  }).filter((jid) => typeof jid === 'string' && jid.includes('@')))].slice(0, 1024);
}
