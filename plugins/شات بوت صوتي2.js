//حقوق boudy رقمي 01151094460
let handler = m => m;
handler.all = async function (m) {
  let chat = global.db.data.chats[m.chat];

  if (/^نعم$/i.test(m.text)) {
    const vn =     './media/نعم.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^احلي جروب|تحية|احلي تحية$/i.test(m.text)) {
    const vn =     './media/احلي_تحية_لأحلي_جروب.m4a'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^يشاعر|قول يشاعر$/i.test(m.text)) {
    const vn =     './media/قول_يشاعر.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^كود كير|حفاضه|بامبرز$/i.test(m.text)) {
    const vn =     './media/جود_كير.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^قول السؤال تاني|انت هنا|مش فاهم|مشفاهم$/i.test(m.text)) {
    const vn =     './media/قول السؤال تاني.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^زهقان|انا زهقان$/i.test(m.text)) {
    const vn =     './media/متزهقش.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^دا وقتو|مش وقتو|مش وقتك$/i.test(m.text)) {
    const vn =     './media/دا وقتو.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^رقم فيك|رقم غريب$/i.test(m.text)) {
    const vn =     './media/رقم فيك.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^وكلاك|متغاظ|متغاظ مني|هتموت من غيظك|خليها تاكلك|موت متغاظ$/i.test(m.text)) {
    const vn =     'media/وكلاك.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^عيب|عيب يجدعان|متشتمش|عيب يستا|بلاش شتايم$/i.test(m.text)) {
    const vn =     './media/عيب.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^نانو$/i.test(m.text)) {
    const vn =     './media/نانو.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^يسطا|يسطاا|يصطا|50 جنيه$/i.test(m.text)) {
    const vn =     './media/يسطا.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^ايوه$/i.test(m.text)) {
    const vn =     './media/ايوه.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^🙂|🗿$/i.test(m.text)) {
    const vn =     './media/خت-الصدمه.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^عدغري$/i.test(m.text)) {
    const vn =     './media/ع-دغري.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^كلب|الكلب|الي جوايا$/i.test(m.text)) {
    const vn =     './media/الكلب.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^كول خرا|خرا$/i.test(m.text)) {
    const vn =     './media/كول.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^شلبي|السعدي$/i.test(m.text)) {
    const vn =     './media/بو.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^منور|نورت$/i.test(m.text)) {
    const vn =     './media/منور.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^العنكبوت|عنكبوت|العنكبوة|عنكبوة$/i.test(m.text)) {
    const vn =     './media/العنكبوت.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^صفير|البلبل|البلبلي$/i.test(m.text)) {
    const vn =     './media/صفير.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^المعين|مساعده|مساعدة$/i.test(m.text)) {
    const vn =     './media/المعين.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^سبونج$/i.test(m.text)) {
    const vn =     './media/سبونج.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^ايفون$/i.test(m.text)) {
    const vn =     './media/ايفون.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^ابعت|يارب|الحلال|ارزقنا$/i.test(m.text)) {
    const vn =     './media/ابعت.mp3'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }


  return !0;
};
export default handler;
