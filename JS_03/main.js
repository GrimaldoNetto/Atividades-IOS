// var all = m + a + u 
// var allup = all.toUpperCase

var m = 'Morango'

document.write(`${m}<br>`)
document.write('A palavra morango tem ' + m.length + ' letras <br><br>')

var a = 'Abacate'
var corte = a.substring(1,4)

document.write(`${a}<br>`)
document.write(`${corte} está cortado <br><br>`)

var u = 'Uva'
var nospace = u.trim()
var reu = u.replace()

document.write("       " + u + '<br>')
document.write(`${nospace} sem espaço <br><br>`)

document.write(`${reu} repetido <br><br>`)

var l = 'Laranja'
var lup = l.toLowerCase()

document.write(`${lup} em minúsculo <br><br>`)

document.write(`${m + '; ' + a + '; ' + u + '; ' + l + ', ' } foram recebidos no mercado. <br><br>`)