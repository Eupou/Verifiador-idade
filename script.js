function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano  = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique as informações e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var paragrafo = document.createElement('p')
        paragrafo.setAttribute('id', 'texto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                // criança
                paragrafo.innerHTML = 'Você é uma criança vá viver a vida'
                paragrafo.style.font = 'normal 20pt arial'
            } else if (idade < 21) {
                // jovem
                paragrafo.innerHTML = 'Você é um jovem vá viver a vida'
                paragrafo.style.font = 'normal 20pt arial'
            } else if (idade < 50) {
                // adulto
                paragrafo.innerHTML = 'Você é um adulto vá viver a vida!'
                paragrafo.style.font = 'normal 20pt arial' 
            } else {
                // idoso
                paragrafo.innerHTML = 'Você é um idoso vá viver a vida'
                paragrafo.style.font = 'normal 20pt arial'
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                // criança
                paragrafo.innerHTML = 'Você é uma criança vá viver a vida'
                paragrafo.style.font = 'normal 20pt arial'
            } else if (idade < 21) {
                // jovem
                paragrafo.innerHTML = 'Você é uma jovem vá viver a vida'
                paragrafo.style.font = 'normal 20pt arial'
            } else if (idade < 50) {
                // adulto
                paragrafo.innerHTML = 'Você é uma adulta vá viver a vida'
                paragrafo.style.font = 'normal 20pt arial'
            } else {
                // idoso
                paragrafo.innerHTML = 'Você é uma idosa vá viver a vida'
                paragrafo.style.font = 'normal 20pt arial'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(paragrafo)
    }
}

