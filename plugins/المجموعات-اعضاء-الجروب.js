const handler = async (conn, m) => {
    try {

        if (m.messageStubType === 'GROUP_INVITE') {
            const groupMetadata = await conn.groupMetadata(m.chat);
            const groupParticipants = groupMetadata.participants.length;
            if (groupParticipants < 30) {
                await conn.sendMessage(
                    m.chat,
                    { text: " مش انا قولت مش هدخل جروب اقل من  30 شخص" }
                );
               
                await conn.groupLeave(m.chat);
            }
        }
    } catch (error) {
        console.error('خطأ:', error.message);
    }
};

handler.event = 'group-participants-update';
handler.command = () => false; 

export default handler;
