import _0x13f843 from'node-fetch';import _0x41980f from'fs';import _0x397f40 from'axios';const handler=async(_0x32221f,{conn:_0x4ac214,text:_0x57c8ca})=>{if(!_0x57c8ca)throw'*[❗𝐈𝐍𝐅𝐎❗]\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙴\x20𝙴𝙻\x20𝙽𝙾𝙼𝙱𝚁𝙴\x20𝙳𝙴\x20𝙰𝙻𝙶𝚄𝙽𝙰\x20𝙲𝙰𝙽𝙲𝙸𝙾𝙽\x20𝙰\x20𝙱𝚄𝚂𝙲𝙰𝚁*';try{const _0x452298=await _0x13f843(global['API']('ApiEmpire','/api/spotifysearch?text='+_0x57c8ca)),_0x4536d2=await _0x452298['json'](),_0x3a608=_0x4536d2['spty']['resultado'][0x0]['link'],_0x4fa694=await _0x13f843(global['API']('ApiEmpire','/api/spotifydl?text='+_0x3a608)),_0x1bb478=await _0x4ac214['getFile'](_0x4fa694['url']),_0x49bca6=await _0x13f843(global['API']('ApiEmpire','/api/spotifyinfo?text='+_0x3a608)),_0x3ab663=await _0x49bca6['json'](),_0x5710ba=_0x3ab663['spty']['resultado'],_0x46dc4c=await(await _0x13f843(''+_0x5710ba['thumbnail']))['buffer']();let _0xa3040c='';_0xa3040c+='📌*𝚃𝙸𝚃𝚄𝙻𝙾:*:\x20'+_0x5710ba['title']+'\x20✰乂\x0a',_0xa3040c+='𝙰𝚁𝚃𝙸𝚂𝚃𝙰:*\x20'+_0x5710ba['artist']+'\x20✰乂\x0a',_0xa3040c+='Published:\x20'+_0x5710ba['year']+'\x20✰乂\x0a\x0a',await _0x4ac214['sendMessage'](_0x32221f['chat'],{'text':_0xa3040c['trim'](),'contextInfo':{'forwardingScore':0x98967f,'isForwarded':!![],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'renderLargerThumbnail':!![],'title':global['titulowm2'],'containsAutoReply':!![],'mediaType':0x1,'thumbnail':_0x46dc4c,'thumbnailUrl':_0x46dc4c,'mediaUrl':_0x3a608,'sourceUrl':_0x3a608}}},{'quoted':_0x32221f}),await _0x4ac214['sendMessage'](_0x32221f['chat'],{'audio':_0x1bb478['data'],'fileName':_0x5710ba['name']+'.mp3','mimetype':'audio/mpeg'},{'quoted':_0x32221f});}catch(_0x2ec35d){console['error'](_0x2ec35d);throw'*❌ʟᴏ\x20sᴇɴᴛɪᴍᴏs\x20sᴇ\x20ʜᴀ\x20ɢᴇɴᴇʀᴀᴅᴏ\x20ᴜɴ\x20ᴇʀʀᴏʀ\x20ᴠᴜᴇʟᴠᴇ\x20ɪɴᴛᴇɴᴛᴀʀ❌*';}};handler['command']=/^(spotify)$/i;export default handler;