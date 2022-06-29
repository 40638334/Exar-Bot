import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
    

let str = `

♡;ℂℍ𝔸𝕋 𝔸ℕ𝕆ℕ𝕀𝕄𝕆🐝꒱⋆⑅˚

• . .
     ╰─►೫` ${usedPrefix}start ⚜️
• . .
     ╰─►೫` ${usedPrefix}next⚜️
• . .
     ╰─►೫` ${usedPrefix}leave ⚜️
♡;𝔹𝕌𝕊ℂ𝔸𝔻𝕆ℝ𝔼𝕊🦁꒱⋆⑅˚

𖨆+✨ ${usedPrefix}xnxxsearch <texto>
𖨆+✨ ${usedPrefix}animeinfo <texto>
𖨆+✨ ${usedPrefix}google <texto>
𖨆+✨ ${usedPrefix}letra <texto>
𖨆+✨ ${usedPrefix}wikipedia <texto>
𖨆+✨ ${usedPrefix}ytsearch <texto>
𖨆+✨ ${usedPrefix}apkdone <texto> 
𖨆+✨${usedPrefix}apkgoogle <texto> 
𖨆+✨ ${usedPrefix}apkmody <texto>
𖨆+✨ ${usedPrefix}apkshub <texto>
𖨆+✨ ${usedPrefix}happymod <texto>
𖨆+✨ ${usedPrefix}hostapk <texto>
𖨆+✨ ${usedPrefix}revdl <texto>
𖨆+✨ ${usedPrefix}toraccino <texto>
𖨆+✨ ${usedPrefix}uapkpro <texto>

♡;𝔸𝕌𝔻𝕀𝕆𝕊🦚꒱⋆⑅˚

⇨⊹𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .) ⊹
(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)


° ඬ⃟🔊 _Quien es tu sempai botsito 7w7_

° ඬ⃟🔊 _Te diagnostico con gay_

° ඬ⃟🔊 _A nadie le importa_

° ඬ⃟🔊 _Fiesta del admin_

° ඬ⃟🔊 _Fiesta del administrador_ 

° ඬ⃟🔊 _Vivan los novios_

° ඬ⃟🔊 _Feliz cumpleaños_

° ඬ⃟🔊 _Noche de paz_

° ඬ⃟🔊 _Buenos dias_

° ඬ⃟🔊 _Buenos tardes_

° ඬ⃟🔊 _Buenos noches_

° ඬ⃟🔊 _Audio hentai_

° ඬ⃟🔊 _Chica lgante_

° ඬ⃟🔊 _Feliz navidad_

° ඬ⃟🔊 _Vete a la vrg_

° ඬ⃟🔊 _Pasa pack Bot_

° ඬ⃟🔊 _Atencion grupo_

° ඬ⃟🔊 _Marica quien_

° ඬ⃟🔊 _Murio el grupo_

° ඬ⃟🔊 _Oh me vengo_

° ඬ⃟🔊 _tio que rico_

° ඬ⃟🔊 _Viernes_

° ඬ⃟🔊 _Baneado_

° ඬ⃟🔊 _Sexo_

° ඬ⃟🔊 _Hola_

° ඬ⃟🔊 _Un pato_

° ඬ⃟🔊 _Nyanpasu_

° ඬ⃟🔊 _Te amo_

° ඬ⃟🔊 _Yamete_

° ඬ⃟🔊 _Bañate_

° ඬ⃟🔊 _Es puto_

° ඬ⃟🔊 _La biblia_

° ඬ⃟🔊 _Onichan_

° ඬ⃟🔊 _Mierda de Bot_

° ඬ⃟🔊 _Siuuu_

° ඬ⃟🔊 _Rawr_

° ඬ⃟🔊 _UwU_

° ඬ⃟🔊 _:c_

° ඬ⃟🔊 _a_

♡;ℍ𝔼ℝℝ𝔸𝕄𝕀𝔼ℕ𝕋𝔸𝕊🦧꒱⋆⑅˚

°•°➳  ${usedPrefix}afk  <motivo>⚒️ •°
°•°➳ ${usedPrefix}acortar <enlace / link / url> ⚒️ •°
°•°➳ ${usedPrefix}calc <operacion math> ⚒️ •°
°•°➳ ${usedPrefix}del <respondre a mensaje del Bot> ⚒️ •°
°•°➳ ${usedPrefix}qrcode <texto> ⚒️•°
°•°➳ ${usedPrefix}readmore <texto1| texto2> ⚒️ •°
°•°➳ ${usedPrefix}spamwa <numero|texto|cantidad> ⚒️ •°
°•°➳ ${usedPrefix}styletext <texto> ⚒️ •°
°•°➳ ${usedPrefix}traducir <texto> ⚒️ •°
⋆♡;ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸🪺꒱⋆⑅˚

𝄢💰 ${usedPrefix}balance♮ 
𝄢💰 ${usedPrefix}claim♮
𝄢💰 ${usedPrefix}top♮
𝄢💰 ${usedPrefix}levelup♮
𝄢💰 ${usedPrefix}myns♮
𝄢💰 ${usedPrefix}perfil♮
𝄢💰 ${usedPrefix}work♮
𝄢💰 ${usedPrefix}minar♮
𝄢💰 ${usedPrefix}buy♮
𝄢💰 ${usedPrefix}buyall ♮
𝄢💰 ${usedPrefix}transfer <tipo> <cantidad> <@tag>♮
𝄢💰 ${usedPrefix}verificar♮
𝄢💰 ${usedPrefix}unreg <numero de serie>♮

<𝕊𝕋𝕀ℂ𝕂𝔼ℝ𝕊/>

° ඬ⃟👽 ${usedPrefix}sticker <responder a imagen o video>
° ඬ⃟👽 ${usedPrefix}sticker <enlace / link / url>
° ඬ⃟👽 ${usedPrefix}s <responder a imagen o video>
° ඬ⃟👽 ${usedPrefix}s <enlace / link / url>
° ඬ⃟👽 ${usedPrefix}emojimix <emoji 1>&<emoji 2>
° ඬ⃟👽 ${usedPrefix}semoji <tipo> <emoji>
° ඬ⃟👽 ${usedPrefix}attp <texto>
° ඬ⃟👽 ${usedPrefix}ttp <texto>
° ඬ⃟👽 ${usedPrefix}pat <@tag>
° ඬ⃟👽 ${usedPrefix}slap *<@tag>
° ඬ⃟👽 ${usedPrefix}kiss <@tag>
° ඬ⃟👽 ${usedPrefix}dado
° ඬ⃟👽 ${usedPrefix}wm <packname> <author>
° ඬ⃟👽 ${usedPrefix}stickermarker <efecto> <responder a imagen>
° ඬ⃟👽 ${usedPrefix}stickerfilter <efecto> <responder a imagen>
 
♡;𝕆𝕎ℕ𝔼ℝ 𝕐 𝕄𝕆𝔻𝔼ℝ𝔸𝔻𝕆ℝ𝔼𝕊🦦꒱⋆⑅˚

🥗☞︎ {usedPrefix}cajafuerte☜︎︎︎༄
🥗☞︎ {usedPrefix}enable restrict☜︎︎︎༄
🥗☞︎ {usedPrefix}disable restrict☜︎︎︎༄
🥗☞︎ {usedPrefix}enable autoread ☜︎︎︎༄
🥗☞︎ {usedPrefix}disable autoread ☜︎︎︎༄
🥗☞︎ {usedPrefix}enable public☜︎︎︎༄
🥗☞︎ {usedPrefix}disable public☜︎︎︎༄
🥗☞︎  {usedPrefix}enable pconly☜︎︎︎༄
🥗☞︎ {usedPrefix}disable pconly☜︎︎︎༄
🥗☞︎ {usedPrefix}enable gconly☜︎︎︎༄
🥗☞︎ {usedPrefix}disable gconly☜︎︎︎༄
🥗☞︎ {usedPrefix}banchat☜︎︎︎༄
🥗☞︎ {usedPrefix}unbanchat☜︎︎︎༄
🥗☞︎ {usedPrefix}banuser <@tag>☜︎︎︎༄
🥗☞︎ {usedPrefix}unbanuser <@tag>☜︎︎︎༄
🥗☞︎ {usedPrefix}banuser <@tag>☜︎︎︎༄
🥗☞︎ {usedPrefix}bc <texto>☜︎︎︎༄
🥗☞︎ {usedPrefix}bcchats <texto>☜︎︎︎༄
🥗☞︎ {usedPrefix}bcgc <texto>☜︎︎︎༄ 
🥗☞︎ {usedPrefix}cleartpm☜︎︎︎༄
🥗☞︎ {usedPrefix}restart☜︎︎︎༄
🥗☞︎ {usedPrefix}update☜︎︎︎༄
🥗☞︎ {usedPrefix}addprem <@tag>☜︎︎︎༄
🥗☞︎ {usedPrefix}delprem <@tag>☜︎︎︎༄
🥗☞︎ {usedPrefix}listprem☜︎︎︎༄


`.trim()
conn.sendHydrated2(m.chat, str, wm, pp, 'https://www.paypal.me/TheShadowBrokers133', '𝙿𝙰𝚈𝙿𝙰𝙻', 'https://github.com/BrunoSobrino/TheMystic-Bot-MD', '𝙶𝙸𝚃𝙷𝚄𝙱', [
['📮 𝙳𝙾𝙽𝙰𝚁 📮', '/donasi'],
['🌹 𝙾𝚆𝙽𝙴𝚁 🌹', '/owner'],
['🐾 𝙸𝙽𝙵𝙾𝙱𝙾𝚃 🐾', '/infobot']
], m,)
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true})
} catch (e) {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
throw e
}}
handler.command = /^(menucompleto|menu3|menú3|memu3|memú3|help3|info3|comandos3|allmenu3|ayuda3|commands3|commandos3)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
