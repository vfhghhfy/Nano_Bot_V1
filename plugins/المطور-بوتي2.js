let handler  = async (m, { conn }) => { 
 let name = conn.getName(m.sender) 
 let teks = ` 
 ${pickRandom([`*محدش يقولي كده غير مطوري 😒🪚*
`])} 
 `.trim() 
 conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
 } 
 handler.customPrefix = /بوتي/i 
 handler.command = new RegExp 

 export default handler 

 function pickRandom(list) { 
 return list[Math.floor(Math.random() * list.length)] 
 }
