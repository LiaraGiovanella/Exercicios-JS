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

function adicionar() {

}

function calcular() {

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