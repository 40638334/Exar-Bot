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
╭┈ˍ‒ˍ‒ˍ‒ˍ‒┥🥗┝‒ˍ‒ˍ‒ˍ‒ˍ┈╮
╎               
╰╶╶ ▻  𝙷𝙾𝙻𝙰 ✨${name}✨, 𝙰𝚀𝚄𝙸 𝙴𝚂𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚄 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾 𝙳𝙴 𝚃𝙷𝙴 𝙼𝚈𝚂𝚃𝙸𝙲 - 𝙱𝙾𝚃 
╰◦·◦·◦·◦·◦·◦·◦·◦·◦·◦·◦·◦·◦·◦·◦·◦·◦➸(🌻)

ᥬ🖋 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}⌑🖋ᬊ

ᥬ🖋 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}⌑🖋ᬊ

ᥬ🖋 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}⌑🖋ᬊ

⇨⊹🌾｟𝕀ℕ𝔽𝕆ℝ𝕄𝔸ℂ𝕀𝕆ℕ 𝔻𝔼𝕃 𝔹𝕆𝕋🌾⊹

│⪩💫 ${usedPrefix}grupos
│➤💫 ${usedPrefix}estado
│⪩💫 ${usedPrefix}infobot
│➤💫 ${usedPrefix}donar
│⪩💫 ${usedPrefix}grouplist
│➤💫 ${usedPrefix}owner
│⪩💫 ${usedPrefix}script

Bot (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)✏️ ೃ

ˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇˇ
♡;𝕌ℕ𝔼 𝕌ℕ 𝔹𝕆𝕋 𝔸 𝕋𝕌 𝔾ℝ𝕌ℙ𝕆🍁꒱ ⋆⑅˚₊

〽️${usedPrefix}join <enlace / link / url>

🎮<𝕁𝕌𝔼𝔾𝕆𝕊/>🎮
▱▰▱▰▱▰▱▰▱▱▰▱▰▱▰▱
❐🧩  ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
❏🧩 ${usedPrefix}ppt <papel / tijera /piedra>
❑🧩 ${usedPrefix}prostituto <nombre / @tag>
❐🧩 ${usedPrefix}prostituta <nombre / @tag>
❏🧩 ${usedPrefix}gay2 <nombre / @tag>
❑🧩 ${usedPrefix}lesbiana <nombre / @tag>
❐🧩 ${usedPrefix}pajero <nombre / @tag>
❏🧩 ${usedPrefix}pajera <nombre / @tag>
❑🧩 ${usedPrefix}puto <nombre / @tag>
❐🧩 ${usedPrefix}puta <nombre / @tag>
❏🧩 ${usedPrefix}manco <nombre / @tag>
❑🧩 ${usedPrefix}manca <nombre / @tag>
❐🧩 ${usedPrefix}rata <nombre / @tag>
❏🧩 ${usedPrefix}love <nombre / @tag>
❑🧩 ${usedPrefix}doxear <nombre / @tag>
❐🧩 ${usedPrefix}pregunta <texto>
❏🧩 ${usedPrefix}slot <apuesta>
❑🧩 ${usedPrefix}pvp <@tag>
❐🧩 ${usedPrefix}simi <texto>
❏🧩 ${usedPrefix}topgays
❑🧩  ${usedPrefix}topotakus
❐🧩 ${usedPrefix}formarpareja
❏🧩 ${usedPrefix}verdad
❑🧩 ${usedPrefix}reto

♡;𝔸ℂ𝕋𝕀𝕍𝔸ℝ 𝕆 𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸ℝ🫧꒱ ⋆⑅˚₊


│⪩💥  ${usedPrefix}enable welcome
│➤💥  ${usedPrefix}disable welcome
│⪩💥  ${usedPrefix}enable modohorny
│➤💥  ${usedPrefix}disable modohorny
│⪩💥  ${usedPrefix}enable antilink
│➤💥  ${usedPrefix}disable antilink
│⪩💥  ${usedPrefix}enable antilink2
│➤💥  ${usedPrefix}disable antilink2
│⪩💥 ${usedPrefix}enable detect
│➤💥  ${usedPrefix}disable detect
│⪩💥  ${usedPrefix}enable audios
│➤💥  ${usedPrefix}disable audios
│⪩💥 ${usedPrefix}enable autosticker
│➤💥 ${usedPrefix}disable autosticker

♡;꒱ℝ𝔼ℙ𝕆ℝ𝕋𝔼𝕊 𝔻𝔼 𝔽𝔸𝕃𝕃𝕆𝕊🕹️⋆⑅˚₊

ᥬ🖋 ${usedPrefix}reporte <texto>⌑🖋ᬊ

♡;<𝔻𝔼𝕊ℂ𝔸ℝ𝔾𝔸𝕊/>📱꒱ ⋆⑅˚₊

✼ ҉⪧🍄 ${usedPrefix}facebook <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}instagram <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}mediafire <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}instagram <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}gitclone <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}gdrive <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}tiktok <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}xnxxdl <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}xvideosdl <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}ytmp3 <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}ytmp4 <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}ytmp3doc <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}ytmp4doc <enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}play.1 <texto / enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}play.2 <texto / enlace / link / url>
✼ ҉⪧🍄 ${usedPrefix}play <texto>
✼ ҉⪧🍄 ${usedPrefix}playdoc <texto>
✼ ҉⪧🍄 ${usedPrefix}playlist <texto>
✼ ҉⪧🍄 ${usedPrefix}playlist2 <texto>
✼ ҉⪧🍄 ${usedPrefix}spotify <texto>
✼ ҉⪧🍄 ${usedPrefix}spotify <texto>
✼ ҉⪧🍄 ${usedPrefix}imagen <texto>
✼ ҉⪧🍄 ${usedPrefix}pinteret <texto>
✼ ҉⪧🍄 ${usedPrefix}wallpaper <texto>
✼ ҉⪧🍄 ${usedPrefix}wallpaper2 <texto>
✼ ҉⪧🍄 ${usedPrefix}pptiktok <nombre de usuario>
✼ ҉⪧🍄 ${usedPrefix}igstalk <nombre de usuario>
✼ ҉⪧🍄 ${usedPrefix}igstory <nombre de usuario>
✼ ҉⪧🍄 ${usedPrefix}tiktokstalk <nombre de usuario>

♡;<𝔾ℝ𝕌ℙ𝕆𝕊⛩️꒱ ⋆⑅˚₊

˗ˏ🫧✎ ${usedPrefix}add <numero>❞
˗ˏ🫧✎  ${usedPrefix}kick <@tag>❞
˗ˏ🫧✎ ${usedPrefix}grupo <abrir / cerrar>❞
˗ˏ🫧✎ ${usedPrefix}promote <@tag>❞
˗ˏ🫧✎ ${usedPrefix}demote <@tag>❞
˗ˏ🫧✎  admins <texto> (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)❞
˗ˏ🫧✎ ${usedPrefix}demote <@tag>❞
˗ˏ🫧✎ ${usedPrefix}infogroup❞
˗ˏ🫧✎ ${usedPrefix}link❞
˗ˏ🫧✎ ${usedPrefix}setname <texto>❞
˗ˏ🫧✎ ${usedPrefix}setdesc <texto>❞
˗ˏ🫧✎ ${usedPrefix}invocar <texto>❞
˗ˏ🫧✎ ${usedPrefix}setwelcome <texto>❞
˗ˏ🫧✎ ${usedPrefix}setbye <texto>❞
˗ˏ🫧✎ ${usedPrefix}hidetag <texto>❞

♡;ℂ𝕆ℕ𝕍𝔼ℝ𝕋𝕀𝔻𝕆ℝ𝔼𝕊⚡꒱⋆⑅˚₊

⊰⊹ฺ📍 ${usedPrefix}toimg <responde a un sticker>
 ⊰⊹ฺ📍  ${usedPrefix}tomp3 <responde a un video / nota de voz>
⊰⊹ฺ 📍 ${usedPrefix}tovideo <responde a un audio>
⊰⊹ฺ 📍 ${usedPrefix}tovideo <responde a un audio>
⊰⊹ฺ 📍  ${usedPrefix}tourl <responde a un video / imagen / audio>
⊰⊹ฺ📍${usedPrefix}tts es <texto>

♡;𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝕐 𝕃𝕆𝔾𝕆𝕊🌼꒱⋆⑅˚

⌞🦥⌝ ${usedPrefix}logos <efecto> <texto>
⌞🦥⌝ ${usedPrefix}simpcard <@tag>
⌞🦥⌝ ${usedPrefix}hornycard <@tag>
⌞🦥⌝ ${usedPrefix}lolice <@tag>
⌞🦥⌝ ${usedPrefix}ytcomment <texto>
⌞🦥⌝ ${usedPrefix}pixelar
⌞🦥⌝ ${usedPrefix}itssostupid
⌞🦥⌝ ${usedPrefix}blur

♡;ℝ𝔸ℕ𝔻𝕆𝕄🦜꒱⋆⑅˚
▓╻🎀 ${usedPrefix}cristianoronaldo
░╻ 🎀  ${usedPrefix}messi
▓╻🎀 ${usedPrefix}meme
░╻🎀 ${usedPrefix}itzy
▓╻🎀 ${usedPrefix}blackpink
░╻🎀  ${usedPrefix}kpop <blackpink / exo / bts>
▓╻🎀  ${usedPrefix}lolivid
░╻🎀 ${usedPrefix}loli
▓╻🎀  ${usedPrefix}navidad
░╻🎀  ${usedPrefix}ppcouple
▓╻🎀  ${usedPrefix}neko
░╻🎀  ${usedPrefix}waifu
▓╻🎀 ${usedPrefix}akira
░╻🎀 ${usedPrefix}akiyama
▓╻🎀 ${usedPrefix}anna
░╻🎀  ${usedPrefix}asuna
▓╻🎀 ${usedPrefix}ayuzawa
░╻🎀 ${usedPrefix}boruto
▓╻🎀 ${usedPrefix}chiho
░╻🎀 ${usedPrefix}chitoge
▓╻🎀  ${usedPrefix}deidara
░╻🎀  ${usedPrefix}erza
▓╻🎀  ${usedPrefix}elaina
░╻🎀 ${usedPrefix}eba
▓╻🎀  ${usedPrefix}emilia
░╻🎀 ${usedPrefix}hestia
▓╻🎀  ${usedPrefix}hinata
░╻🎀  ${usedPrefix}inori
▓╻🎀 ${usedPrefix}isuzu
░╻🎀 ${usedPrefix}itachi
▓╻🎀  ${usedPrefix}itori
░╻🎀 ${usedPrefix}kaga
▓╻🎀 ${usedPrefix}kagura
░╻🎀 ${usedPrefix}kaori
▓╻🎀  ${usedPrefix}keneki
░╻🎀  ${usedPrefix}kotori
▓╻🎀 ${usedPrefix}kurumi
░╻🎀 ${usedPrefix}madara
▓╻🎀 ${usedPrefix}mikasa
░╻🎀 ${usedPrefix}miku
▓╻🎀 ${usedPrefix}minato
░╻🎀 ${usedPrefix}naruto
▓╻🎀 ${usedPrefix}nezuko
░╻🎀 ${usedPrefix}sagiri
▓╻🎀 ${usedPrefix}sasuke
░╻🎀  ${usedPrefix}sakura
▓╻🎀 ${usedPrefix}cosplay

♡;ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊 +𝟙𝟠🐙꒱⋆⑅˚

․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}pack
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}pack2
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}pack3
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}videoxxx
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫ ${usedPrefix}tetas
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}booty
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}ecchi
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}furro
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}imagenlesbians
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}panties
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}pene
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}porno
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}porno2
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}randomxxx
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}pechos
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}yaoi
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}yaoi2
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}yuri
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}yuri2
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫  ${usedPrefix}trapito
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}hentai
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}pies
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}nsfwloli
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}nsfworgy
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}nsfwfoot
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}nsfwass
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫   ${usedPrefix}nsfwbdsm
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}nsfwcum
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}nsfwero
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫  ${usedPrefix}nsfwero
}nsfwfemdom
․•⃝ᜓް⃘֯۬🔞ฺ̥̊ํໍᜓ᮫᮫ ${usedPrefix}nsfwglass

♡;𝔼𝔽𝔼ℂ𝕋𝕆𝕊 𝔻𝔼 𝔸𝕌𝔻𝕀𝕆𝕊🐍꒱⋆⑅˚

⇨⊹𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉⊹

𓂃᜔ ๋˖ִ ${usedPrefix}bass⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ ${usedPrefix}blown⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ ${usedPrefix}deep⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ ${usedPrefix}earrape⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ  ${usedPrefix}fast ⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ  ${usedPrefix}fat ⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ ${usedPrefix}nightcore ⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ  ${usedPrefix}reverse⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ ${usedPrefix}robot ⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ  ${usedPrefix}slow⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ  ${usedPrefix}smooth ⭑ׁ⁠݂🌻 ָ࣪ ˖
𓂃᜔ ๋˖ִ   ${usedPrefix}tupai⭑ׁ⁠݂🌻 ָ࣪ ˖

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
