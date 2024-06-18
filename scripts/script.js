function adicionar() {
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
        option.text = `Valor ${num} adicionado.`
        valores.appendChild(option)
        
        armazenarNumeros.push(num)
    }
}

var armazenarNumeros = []

var finalizar = document.querySelector('input#finalizar')

finalizar.addEventListener('click', () => {
    if(armazenarNumeros.length === 0) {
        window.alert('Nenhum número armazenado para finalizar')
        } else {
        var resultado = document.getElementById('resultado')

        // SOMA DE TODOS OS DADOS DO ARRAY:
        var soma = 0
        for(var i = 0; i < armazenarNumeros.length; i++) {
            soma += armazenarNumeros[i]
        }

        resultado.innerHTML = `
        Ao todo, temos ${armazenarNumeros.length} número(s) cadastrado(s). <br><br>
        O maior valor informado foi ${Math.max.apply(null, armazenarNumeros)} <br><br>
        O menor valor informado foi ${Math.min.apply(null, armazenarNumeros)} <br><br>
        Somando todos os valores, temos ${soma} <br><br>
        A média dos valores digitados é ${(soma / armazenarNumeros.length).toFixed(2)} <br><br>
        `
    }
})

/*
var limpar = document.querySelector('input#limpar')
limpar.addEventListener('click', () => {
    var numero = document.getElementById('inumero')
    var valores = document.getElementById('ivalores')
    var resultado = document.querySelector('input#resultado')
    var opcao = document.querySelector('option#opcaoRemover')

    if (numero.length != 0 || valores != '' || armazenarNumeros.length != 0) {
        numero.value = ''
        valores.innerHTML = ''
        resultado.innerHTML = ''
        armazenarNumeros.value = []
    }
})
*/