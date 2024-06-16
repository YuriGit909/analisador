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
        window.alert('Preencha o campo de texto com um número de 1 a 100')
    } else if (num <= 0 || num > 100) {
        window.alert(`O número ${num} está fora dos limites do intervalo (1 a 100)`)
    } else {
        let valores = document.getElementById('ivalores')

        /* AJUSTAR EVENTO DEPOIS
        let button = document.getElementById('addbutton')
        let opcao = document.getElementById('opcao')
        opcao.remove()
        button.removeEventListener('click', this)
        */

        let option = document.createElement('option')
        option.text = `Valor ${num} adicionado`
        valores.appendChild(option)
    }
}