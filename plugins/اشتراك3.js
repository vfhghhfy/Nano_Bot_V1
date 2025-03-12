import pkg from 'baileys';
const { prepareWAMessageMedia } = pkg;

const handler = async (m, { conn }) => {
    await conn.sendMessage(m.chat, { react: { text: '🚀', key: m.key } });

    const harley = 'https://telegra.ph/file/f2a1373202d370f14112e.jpg';

    let messageContent = {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    header: { title: 'HARLEY' },
                    body: {
                        text: `━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━
> 𝐍𝐎𝐍𝐀↳🏮↲𝐁𝐎𝐓
> 〔 الاشتراك اتنصيب اسبوع┊ ˼‏ 🚀˹ ↶〕
✯≼══━━﹂⛩️﹁━━══≽✯
            نـا🏮نو بــ🤖ــوت
✯≼══━━﹂⛩️﹁━━══≽✯
╗───¤﹝السعر ↶ 💵﹞
> •┊˹🏮˼┊- 30 جنيه مصري 
╝───────────────¤
╗───¤﹝السعر خارج مصر ↶ 💵﹞
> •┊˹🏮˼┊- ما يعادله بالمصري
╝───────────────¤
╗───¤﹝المميزات ↶ 🚀﹞
> •┊˹🏮˼┊- اشتراك سرفر عام
> •┊˹🏮˼┊- شغال 7/24 (قد يحدث بعض الاعطال المؤقته)
> •┊˹🏮˼┊- البوت تحت التطوير
╝───────────────¤
╗───¤﹝طرق الدفع ↶ 💰﹞
> •┊˹🏮˼┊- ItsalatCash او اي محفظه كاش 
╝───────────────¤
✯≼══━━﹂⛩️﹁━━══≽✯
> 〔تـوقـيـع┊ ˼‏📜˹ 〕↶
⌠𝐍𝐎𝐍𝐀↳🏮↲𝐁𝐎𝐓⌡
✯≼══━━﹂⛩️﹁━━══≽✯`,
                        subtitle: "HARLEY"
                    },
                    header: {
                        hasMediaAttachment: true,
                        ...(await prepareWAMessageMedia({ image: { url: harley } }, { upload: conn.waUploadToServer }, { quoted: m }))
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🚀╎𝐁𝐔𝐘 ˹💰˼ 𝐍𝐎𝐖╎🚀⌋","url":"https://api.whatsapp.com/send?phone=+201151094460","merchant_url":"https://api.whatsapp.com/send?phone=+201151094460"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈📲╎قـنـاة الـمـطـور╎📲⌋","url":"https://whatsapp.com/channel/0029VaiUhw5BFLgV89U3rT18","merchant_url":"https://whatsapp.com/channel/0029VaiUhw5BFLgV89U3rT18"}'
                            },
                            {
                                name: "cta_url",
                                buttonParamsJson: '{"display_text":"⌈🏮╎جروب دعم البوت╎⛩️⌋","url":"https://chat.whatsapp.com/CoAUgy0624LCKP81rNiMcB"}'
                            }
                        ]
                    }
                }
            }
        }
    };

    conn.relayMessage(m.chat, messageContent, {});
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['ش3', 'اشتراك_التنصيب', 'بمقابل','الاشتراك3','اشتراك3'];

export default handler;
