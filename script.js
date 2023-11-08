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
    res.innerHTML = "Insira um número acima para obter a resposta..."
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
        res.innerHTML = 'Insira um número acima para obter a resposta...'
    } else {
        num = Number(num.value)
        var mult = 1
        for (var i = num; i > 1; i--) {
            mult *= i
        }
        res.innerHTML = `O fatorial de ${num} é <b>${mult}</b>`
    }
}

// Soma ABC

function somaabc() {
    var a = document.querySelector('#num-a')
    var b = document.querySelector('#num-b')
    var c = document.querySelector('#num-c')
    var res = document.querySelector('#res')

    if (a.value.length == 0 || b.value.length == 0 || c.value.length == 0) {
        alert("Confira os campos e tente novamente :)")
        res.innerHTML = "Preencha acima para obter a resposta..."

    } else {
        a = Number(a.value)
        b = Number(b.value)
        c = Number(c.value)
        var soma = a + b

        res.innerHTML = `A soma entre A e B é ${soma} <br><br>`

        if (soma > c) {
            res.innerHTML += `A soma é <b>MAIOR</b> (C = ${c})`
        } else if (soma < c) {
            res.innerHTML += `A soma é <b>MENOR</b> (C = ${c})`
        } else {
            res.innerHTML += `A soma é <b>IGUAL</b> (C = ${c})`
        }

    }
}

// Desconto

function desconto() {
    let valor = document.querySelector('#valor')
    let desconto = document.querySelector('#desconto')
    let res = document.querySelector('#res')

    if (valor.value.length == 0 || desconto.value.length == 0) {
        alert("Verifique os campos e tente novamente :)")
        res.innerHTML = 'Preencha acima para obter a resposta...'
    } else {
        valor = Number(valor.value)
        desconto = Number(desconto.value)

        let porc = (desconto / 100) * valor
        let valor_novo = valor - porc

        res.innerHTML = `Com um deconto de ${desconto}% o novo valor é de <b>${valor_novo.toFixed(2)}</b>`
    }
}