import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://i.imgur.com/JP52fdP.jpg')
let img = await res.buffer()
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let caption = `╭─────────────◆
│✯𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙼𝙸𝙺𝚄-𝚄𝙻𝚃𝚁𝙰
│✯╭──────────◆
│✯│ʜᴏʟᴀ:${taguser}✯
│✯╰───────────◆
│✯╭──────────◆
┃✯│✯-𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒-⦿
┃✯╰────────────◆
┃✯╭──────────◆
┃✯│▢/ᴍᴏᴅᴀᴘᴋ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃✯│▢/sᴛɪᴄᴋᴇʀsᴇᴀʀᴄʜ2➟ᴛᴇxᴛᴏ
┃✯│▢/xɴxxsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴀɴɪᴍᴇɪɴғᴏ➟ᴛᴇxᴛᴏ
┃✯│▢/ɢᴏᴏɢʟᴇ➟ᴛᴇxᴛᴏ
┃✯│▢/ʟᴇᴛʀᴀ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴡɪᴋɪᴘᴇᴅɪᴀ➟ᴛᴇxᴛᴏ
┃✯│▢/ʏᴛsᴇᴀʀᴄʜ➟ᴛᴇxᴛᴏ
┃✯│▢/ᴘʟᴀʏsᴛᴏʀᴇ➟ᴛᴇxᴛᴏ
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.command = /^(buscadoresgoogle|Buscadoresgoogle)$/i
handler.fail = null
export default handler




