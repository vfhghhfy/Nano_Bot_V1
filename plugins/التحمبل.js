sendwaiting: {
async value(jid, text = '', quoted) {
let txt;
	
  if (!text) {
	  txt = 'جاري التحميل ...'
  } else {
	  txt = text;
  }
		   
const img = 'https://telegra.ph/file/ba984d78fa802662438ee.jpg';

    const loadingStages = [
      "جاري التحميل ... 《 ▒▒▒▒▒▒▒▒▒▒》0%,",
      "جاري التحميل ... 《 █▒▒▒▒▒▒▒▒▒》10%,",
      "جاري التحميل ... 《 ██▒▒▒▒▒▒▒▒》20%,",
      "جاري التحميل ... 《 ███▒▒▒▒▒▒▒》30%,",
      "جاري التحميل ... 《 ████▒▒▒▒▒▒》40%,",
      "جاري التحميل ... 《 █████▒▒▒▒▒》50%,",
      "جاري التحميل ... 《 ██████▒▒▒▒》60%,",
      "جاري التحميل ... 《 ███████▒▒▒》70%,",
      "جاري التحميل ... 《 ████████▒▒》80%,",
      "جاري التحميل ... 《 █████████▒》90%,",
      "جاري التحميل ... 《 ██████████》100%,"
    ];
    
    const loadingStages2 = [
    "0% □□□□□□□□□□□ جاري التحميل ...",
    "5% ■□□□□□□□□□□ جاري التحميل ...",
    "10% ■■□□□□□□□□□ جاري التحميل ...",
    "20% ■■■□□□□□□□□ جاري التحميل ...",
    "30% ■■■■□□□□□□□ جاري التحميل ...",
    "40% ■■■■■□□□□□□ جاري التحميل ...",
    "50% ■■■■■■□□□□□ جاري التحميل ...",
    "60% ■■■■■■■□□□□ جاري التحميل ...",
    "70% ■■■■■■■■□□□ جاري التحميل ...",
    "80% ■■■■■■■■■□□ جاري التحميل ...",
    "90% ■■■■■■■■■■□ جاري التحميل ...",
    "100% ■■■■■■■■■■■ جاري التحميل ..."
    ];

let loading = [loadingStages, loadingStages2];
let selectloading = loading[Math.floor(Math.random() * loading.length)];

 const { key } = await conn.sendMessage(jid, { 
 text: txt, 
 contextInfo: { 
 forwardingScore: 2023,
 isForwarded: true
 }}, {quoted: quoted});


  
 for (let i = 0; i < selectloading.length; i++) {
      
 await new Promise(resolve => setTimeout(resolve, 1000)); 
      
  await conn.sendMessage(jid, {
  text: selectloading[i], 
  edit: key, 
  contextInfo: { 
  forwardingScore: 2000, 
  isForwarded: true
  }}, {quoted: quoted}); 
        
      }
    
 await conn.sendMessage(jid, {
  text: 'اكتملت عملية التحميل', 
  edit: key, 
  contextInfo: { 
  forwardingScore: 2000, 
  isForwarded: true, 
  externalAdReply: {  
 title: wm, 
 body: 'waiting...', 
 sourceUrl: 'https://www.atom.bio/shawaza-2000/',
 thumbnailUrl: img, 
 mediaType: 1,
 containsAutoReply: true,
 showAdAttribution: true, 
 renderLargerThumbnail: true, 
 mentionedJid: [quoted.sender]
	}}}, 
  {quoted: quoted}); 
}
},
