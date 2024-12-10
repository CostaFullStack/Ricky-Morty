const pesquisa = document.querySelector("#pesquisa")
const container = document.querySelector("#container")

function montarCard(lista_personagens) {
    lista_personagens.forEach ((element) => {
        const novo_card = document.createElement("div")
        novo_card.className = "card"

        const nova_imagem = document.createElement("img")
        nova_imagem.src = element.image
        nova_imagem.className = "foto"

        const novo_nome = document.createElement("h2")
        novo_nome.textContent = `Nome: ${element.name}`

        const nova_especie = document.createElement("p")
        nova_especie.textContent = `Espécie: ${element.species}`

        const novo_status = document.createElement("p")
        novo_status.textContent = `Status: ${element.status}`

        const nova_localizacao = document.createElement("p")
        nova_localizacao.textContent = `Localização: ${element.location.name}`


        novo_card.append(nova_imagem, novo_nome, nova_especie, novo_status, nova_localizacao)

        container.appendChild(novo_card)
    })
}

async function mostrarPersonagens() {
    try {
        const resposta = await fetch("https://rickandmortyapi.com/api/character") 
        const dados = await resposta.json()
        const lista_dos_personagens = dados.results
        montarCard(lista_dos_personagens)
    } catch(error) {
        console.log(error)
    }
}

mostrarPersonagens()

pesquisa.addEventListener("input", async () => {
    try {
        const resposta = await fetch(`https://rickandmortyapi.com/api/character/?name=${pesquisa.value}`)
        const dados = await resposta.json()
        const lista_dos_personagens = dados.results
        container.textContent = ""
        montarCard(lista_dos_personagens)
    } catch(error) {
        console.log(error)
    }
})