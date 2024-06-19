var numero = document.getElementById('inumero')
var valores = document.getElementById('ivalores')
var finalizar = document.querySelector('input#finalizar')
var resultado = document.getElementById('resultado')
var armazenarNumeros = []

function adicionar() {
    // CONVERSÃO DOS DADOS RECEBIDOS NO INPUT PARA TIPO NUMÉRICCO
    var num = Number(numero.value)

    if (numero.value.length == 0) {
        window.alert('Preencha o campo de texto com um número entre 1 e 100')
    } 
    else if (num < 1 || num > 100) {
        window.alert(`O número ${num} está fora dos limites do intervalo (1 a 100)`)
    } 

    // ANALISA SE O NÚMERO JÁ EXISTE DENTRO DO ARRAY
    else if (armazenarNumeros.indexOf(num) > -1) { 
        window.alert('O valor informado já se encontra presente na lista')
    } 
    else {

        // CRIA UM NOVO OPTION DINAMICAMENTE A CADA CLIQUE DO USUÁRIO
        let option = document.createElement('option')
        option.text = `Valor ${num} adicionado.`
        valores.appendChild(option)

        // LIMPA O CAMPO DE RESULTADO AO CLICAR NO BOTÃO DE ADICIONAR NOVAMENTE
        resultado.innerHTML = ''
        
        // JOGA OS NÚMEROS DIGITADOS PELO USUÁRIO NO ARRAY
        armazenarNumeros.push(num)
        }

        // LIMPA O INPUT DE TEXTO A CADA CLIQUE NO BOTÃO DE ADICIONAR
        numero.value = ''
        numero.focus()
}


finalizar.addEventListener('click', () => {
    if(armazenarNumeros.length === 0) {
        window.alert('Nenhum número armazenado para finalizar')
        } else {

        // SOMA DE TODOS OS DADOS DO ARRAY:
        var soma = 0
        for(var i = 0; i < armazenarNumeros.length; i++) {
            soma += armazenarNumeros[i]
        }

        resultado.innerHTML = `
        <ul>
            <li>Ao todo, temos ${armazenarNumeros.length} número(s) cadastrado(s)</li>
            <li>O maior valor informado foi ${Math.max.apply(null, armazenarNumeros)}</li>
            <li>O menor valor informado foi ${Math.min.apply(null, armazenarNumeros)}</li>
            <li>Somando todos os valores, temos ${soma}</li>
            <li>A média dos valores digitados é ${(soma / armazenarNumeros.length).toFixed(2)}</li>
        </ul>
        `
    }
})