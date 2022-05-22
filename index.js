const text1 = "eu vou para a escola"
const text2 = "o dia esta lindo hoje"

const vogais = 'aeiou'

contadorVogais = 0
function contaVogais(texto) {
    for (const iText of texto) { 
        index = 0
        for(let iVogais = 0; iVogais <= vogais.length; iVogais++){
            if (iText == vogais[iVogais]) contadorVogais++
        }
    }
    return contadorVogais
}

console.log(contaVogais(text2))
