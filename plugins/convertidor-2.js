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
┃✯│✯𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 &
┃✯│✯𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒--⦿
┃✯╰────────────◆
┃✯╭──────────◆
┃✯│▢/ᴛᴏɢɪғᴀᴜᴅ➟ᴠɪᴅᴇᴏ
┃✯│▢/ᴛᴏɪᴍɢ➟sᴛɪᴄᴋᴇʀ
┃✯│▢/ᴛᴏᴍᴘ3➟ᴠɪᴅᴇᴏ
┃✯│▢/ᴛᴏᴍᴘ3➟ɴᴏᴛᴀ➟ᴅᴇ➟ᴠᴏᴢ
┃✯│▢/ᴛᴏᴘᴛᴛ➟ᴠɪᴅᴇᴏ➟ᴀᴜᴅɪᴏ
┃✯│▢/ᴛᴏᴠɪᴅᴇᴏ➟sᴛɪᴄᴋᴇʀ
┃✯│▢/ᴛᴏᴜʀʟ➟ᴠɪᴅᴇᴏ➟ɪᴍᴀɢᴇɴ➟ᴀᴜᴅɪᴏ
┃✯│▢/ᴛᴛs➟ᴇs➟ᴛᴇxᴛᴏ
┃✯│▢/ʙᴀss
┃✯│▢/ʙʟᴏᴡɴ
┃✯│▢/ᴅᴇᴇᴘ
┃✯│▢/ᴇᴀʀʀᴀᴘᴇ
┃✯│▢/ғᴀsᴛ
┃✯│▢/ғᴀᴛ
┃✯│▢/ɴɪɢʜᴛᴄᴏʀᴇ
┃✯│▢/0ʀᴇᴠᴇʀsᴇ
┃✯│▢/ʀᴏʙᴏᴛ
┃✯│▢/sʟᴏᴡ
┃✯│▢/sᴍᴏᴏᴛʜ
┃✯│▢/ᴛᴜᴘᴀɪ
┃✯╰───────────◆
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟ʏᴏᴠᴀɴɪ
ɴᴜᴍᴇʀᴏ:Wa.me/5212412377467`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.command = /^(audiosconvertidores|Audiosconvertidores)$/i
handler.fail = null
export default handler




