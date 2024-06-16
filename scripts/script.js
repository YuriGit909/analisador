// ADICIONAR()
// input text: inumero
// input button : addbutton
// select : ivalores

// RESUME()
// input button : finalizar
// div : resultado

function adicionar() {
    var numero = document.getElementById('inumero')
    var num = Number(numero.value)

    if (numero.value.length == 0) {
        window.alert('Preencha o campo de texto com um número de 0 a 100')
    } else if (num > 100) {
        window.alert(`O número ${num} está acima do valor máximo permitido!`)
    } else {
        
    }
}