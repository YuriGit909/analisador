// ADICIONAR()
// input text: inumero
// input button : addbutton
// select : ivalores

// RESUME()
// input button : finalizar
// div : resultado

function adicionar(num) {
    var numero = document.getElementById('inumero')
    var num = Number(numero.value)

    if (numero.value.length == 0) {
        window.alert('Preencha o campo de texto com um número entre 1 e 100')
    } else if (num < 1 || num > 100) {
        window.alert(`O número ${num} está fora dos limites do intervalo (1 a 100)`)
    } else {
        var valores = document.getElementById('ivalores')
        let button = document.getElementById('addbutton')
        var opcao = document.getElementById('opcaoRemover')
        
        // CONDIÇÃO PARA REMOVER O OPTION INSERIDO NO HTML
        var removido = false
        button.addEventListener('click', () => {
            if(!removido) {
                opcao.remove()
                removido = true    
            }
        })
            
        // CRIA UM NOVO OPTION DINAMICAMENTE A CADA CLIQUE DO USUÁRIO
        let option = document.createElement('option')
        option.text = `Valor ${num} adicionado`
        valores.appendChild(option)
    }
}

var armazenarNumeros = []

var finalizar = document.getElementById('finalizar')
finalizar.addEventListener('click', () => {
    var numAdd = armazenarNumeros.push()
    var resultado = document.getElementById('res')
    resultado.innerHTML = `<p>${numAdd}</p>`
})