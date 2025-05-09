let handler = async (m, { conn }) => {
  let totalreg = Object.keys(global.db.data.users).length;
  let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered === true).length;
  
  let txt = 'قائمة المستخدمين:\n\n';
  let mentions = [];
  let counter = 1; 
  
  for (let [id, user] of Object.entries(global.db.data.users)) {
  
    if (id.endsWith('s.whatsapp.net')) {
    
      let name = '@' + id.split('@')[0];
      
      let whatsappLink = `https://wa.me/${id.split('@')[0]}`;
      
      txt += `*رقم:* ${counter}\n*المستخدم:* ${name}\n*المعرف:* ${id}\n*رابط واتساب:* ${whatsappLink}\n\n`;
      
      mentions.push(id); 
      counter++; 
    }
  }
  
  
  conn.sendMessage(m.chat, { text: txt, mentions: mentions.map(id => id) }, { quoted: m });
};

handler.help = ['database', 'user'];
handler.tags = ['info'];
handler.command = /^(المستخدمين)$/i;
handler.owner = true;

export default handler;
