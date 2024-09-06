// Seleciona o botão com o atributo onclick="pesquisar"
const botaoPesquisar = document.querySelector('button[onclick="pesquisar"]');

// Adiciona um ouvinte de evento para o botão, que dispara a função pesquisar() quando clicado
botaoPesquisar.addEventListener('click', pesquisar);

// Função para realizar a pesquisa e exibir os resultados
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos pelo seu ID
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "<b>Nada foi encontrado</b>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada objeto (atleta) no array de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase()
        descricao = dado.descricao.toLocaleLowerCase()
        tags = dado.tags.toLocaleLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_self">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `
        }        
    }

    if (!resultados) {
        resultados = "<b>Não é possível encontrar nenhum atleta com base na sua pesquisa.</b>"
    }

    // Substitui o conteúdo HTML da seção pelos resultados da pesquisa
    section.innerHTML = resultados
}