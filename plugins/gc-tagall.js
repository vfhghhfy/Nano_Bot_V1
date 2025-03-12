let handler = async (m, { text, conn, command, usedPrefix, groupMetadata, participants }) => {
  // استخراج الأعضاء المشاركين في المجموعة
  let users = participants.map(u => u.id).filter(v => v !== conn.user.jid);

  // جلب صورة المجموعة
  let groupImage;
  try {
    groupImage = await conn.profilePictureUrl(m.chat, 'image'); // الحصول على صورة المجموعة
  } catch (e) {
    groupImage = ''; // في حال لم توجد صورة
  }

  // جملة الترحيب
  let welcomeMessage = `❏ مجموعة : *${groupMetadata.subject}*\n❏ ID المجموعة : *${m.chat}*\n❏ أعضاء : *${participants.length}*${text ? `\n❐ رسالة : ${text}\n` : ''}\n*NANO↳🐢↲𝐁𝐎𝐓*\n*⤹⚜⊰تعالة يا بهيمة منك ليه 🐤⊱⚜⤸*\n*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*\n*⤹⚜ المنشن ⊰⚡⊱ الجماعي ⚜⤸*\n`;

  // عمل منشن للمنشئ
  let creator = groupMetadata.owner;
  let creatorMention = `│◦❈↲ منشئ: @${creator.split('@')[0]}`;

  // عمل منشن للمشرفين
  let admins = participants.filter(p => p.admin === 'admin').map(p => p.id);
  let adminMentions = admins.map(a => `│◦❈↲ مشرف: @${a.split('@')[0]}`).join('\n');

  // عمل منشن للأعضاء العاديين
  let userMentions = users.map(u => `│◦❈↲ عضو: @${u.split('@')[0]}`).join('\n');

  // دمج الرسالة النهائية مع المنشن
  let finalMessage = welcomeMessage + creatorMention + '\n' + adminMentions + '\n' + userMentions;

  // إرسال الرسالة مع المنشن وصورة المجموعة
  await conn.sendMessage(m.chat, {
    text: finalMessage,
    mentions: [creator, ...admins, ...users], // تضمين المنشن لجميع الأعضاء
    jpegThumbnail: groupImage // إرسال صورة المجموعة
  });
};

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler;