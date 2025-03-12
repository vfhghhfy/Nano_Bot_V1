import fs from 'fs';

let handler = async (m, { text }) => {
  if (!text) throw `أدخل اسمًا لملف الصور الخاص بك والتمديد المطلوب (على سبيل المثال ، name.png ، name.jpg ، إلخ)`;
  if (!m.quoted || !m.quoted.fileSha256) throw `الصوره محفوظه ف ملف السورس..`;
  let media = await m.quoted.download();
  /*o donde quieras guardar las imágenes*/
  const path = `src/${text}`;
  await fs.writeFileSync(path, media);
  m.reply(`الصوره محفوظه في ${path}`);
};

handler.help = ['saveimage <nome>'];
handler.tags = ['tools'];
handler.command = /^(src|حفظ)$/i;
handler.owner = true;

export default handler;
