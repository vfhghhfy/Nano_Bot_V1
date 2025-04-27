//*كود التفاعل علي القنوات بي اشكال ايموجيات كثيره ✅*
// By Z4cK ⚡ 

const handler = async (m, { text, command, conn, args }) => {
  if (!text) return conn.reply(m.chat, `*❐『🎭』*\n*مـثـال ╿↶*\n*┇↞『 .${command} رابط القناة + نص الريأكشن 』*`, m);

  console.log(`Received command: ${command}, text: ${text}`);

  await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

  const hurufGaya = {
    a: '🄰', b: '🄱', c: '🄲', d: '🄳', e: '🄴', f: '🄵', g: '🄶',
    h: '🄷', i: '🄸', j: '🄹', k: '🄺', l: '🄻', m: '🄼', n: '🄽',
    o: '🄾', p: '🄿', q: '🅀', r: '🅁', s: '🅂', t: '🅃', u: '🅄',
    v: '🅅', w: '🅆', x: '➖', y: '🅈', z: '🅉',
    '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
    '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
  };

  const [mainText, offsetStr] = text.split('|');
  const link = mainText.trim().split(" ")[0];

  if (!link.includes("https://whatsapp.com/channel/")) {
    return conn.reply(m.chat, "❌ الرابط غير صحيح!\nمثال: .reactch https://whatsapp.com/channel/xxx/id الرسالة ❤️|5", m);
  }

  const channelId = link.split('/')[4];
  const rawMessageId = parseInt(link.split('/')[5]);
  if (!channelId || isNaN(rawMessageId)) return conn.reply(m.chat, "❌ الرابط غير مكتمل!", m);

  const offset = parseInt(offsetStr?.trim()) || 1;
  const teksNormal = mainText.trim().split(" ").slice(1).join(' ');
  const teksTanpaLink = teksNormal.replace(link, '').trim();
  if (!teksTanpaLink) return conn.reply(m.chat, "❌ اكتب النص أو الإيموجي الذي تريد التفاعل به.", m);

  const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
    if (c === ' ') return '―';
    return hurufGaya[c] || c;
  }).join('');

  try {
    const metadata = await conn.newsletterMetadata("invite", channelId);
    let success = 0, failed = 0;

    for (let i = 0; i < offset; i++) {
      const msgId = (rawMessageId - i).toString();
      try {
        await conn.newsletterReactMessage(metadata.id, msgId, emoji);
        success++;
      } catch (e) {
        failed++;
      }
    }

    await conn.reply(m.chat, `✅ تم إرسال الريأكشن *${emoji}* بنجاح إلى ${success} رسالة في قناة *${metadata.name}*\n❌ فشل الإرسال في ${failed} رسائل`, m);
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
  } catch (err) {
    console.error(err);
    await conn.reply(m.chat, "❌ حدث خطأ أثناء تنفيذ العملية!", m);
    await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
  }
};

handler.command = ["reactch3", "تفاعل"];

export default handler;
