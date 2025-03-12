let handler = async (m, { conn }) => {
  if (global.conn.user.jid === conn.user.jid) {
   console.log("fromMe")
  } else {
    //Si el número no coincide, se detiene el bot.
    await conn.reply(m.chat, `✅ تم الايقاف`, m);
    conn.ws.close();
  }
};
handler.help = ['stop']
handler.tags = ['bebot']
handler.command = ['stop', 'ايقاف', 'اقف']
handler.owner = true

export default handler
