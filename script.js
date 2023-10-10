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