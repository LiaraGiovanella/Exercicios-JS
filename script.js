//AJAX

function carregarPagina(busca) {
    let localPagina = document.querySelector('.paginas')

    let requisicao = new XMLHttpRequest();

    requisicao.onreadystatechange = () => {
        if (requisicao.readyState == 4 && requisicao.status == 200) {
            localPagina.innerHTML = requisicao.response
        }
    }

    requisicao.open('GET', `${busca}.html`)
    requisicao.send()
}

// Media

var lista = []

function adicionar() {
    var num = document.querySelector('#num')
    var valores = document.querySelector('#valores')

    if (num.value.length == 0) {
        alert('Insira um valor para calcular a média!')
    } else {
        lista.push(num.value)
        valores.innerHTML = ''

        for (var i = 0; i < lista.length; i++) {
            var item = document.createElement('option')
            item.text = `Valor ${lista[i]} adicionado`
            valores.appendChild(item)
        }
    }

    num.value = ''
    num.focus()
    return lista
}

function limpar() {
    lista = []
    valores.innerHTML = '<option>Adicione um valor acima</option>'
}

function calcular() {
    var res = document.querySelector('#res')

    if (lista == '') {
        alert('Adicione valores para calcular!')
        res.innerHTML = 'Insira valores acima para ter a resposta...'
    } else {
        var soma = 0
        for (var i = 0; i < lista.length; i++) {
            soma += Number(lista[i])
        }

        var media = soma / lista.length
        res.innerHTML = `A média dos valores é <b>${media.toFixed(2)}</b>`
    }
}

// Par ou Impar

function parImpar() {
    var num = document.querySelector('#num')
    var res = document.querySelector('#res')


    if (num.value.length == 0) {
        alert("Insira um valor para verificar!")
        res.innerHTML = "Insira um número acima para obter a resposta..."

    } else {
        num = Number(num.value)
        if (num % 2 == 0) {
            res.innerHTML = `O número ${num} é <b>par</b>!`

        } else {
            res.innerHTML = `O número ${num} é <b>ímpar</b>!`
        }
    }
}

// Fatoração

function fatoracao() {
    var num = document.querySelector('#num')
    var res = document.querySelector('#res')
    res.innerHTML = ''

    if (num.value.length == 0) {
        alert('Insira um valor para calcular!')
    } else {
        num = Number(num.value)
        var mult = 1
        for (var i = num; i > 1; i--) {
            mult *= i
        }
        res.innerHTML = `O fatorial de ${num} é <b>${mult}</b>`
    }
}