const fs = require("fs")
const { listenerCount } = require("process")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter( livro => livro.id === id )[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const novaListaLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListaLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex( livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes } //olha pra todos os objetos nos atuais, ai por tem outro ... ele ve o 
    //segundo e caso nao exista ele modifica e se n tiver ele cria
    //livrosAtuais[indiceModificado] -> {id:2, nome: "fadfas"}
    //modificacoes -> {nome: mucho legal} 
    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivro(id) {
    let livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter( livro => livro.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))

}

module.exports = {
    getTodosLivros, getLivroId, insereLivro, modificaLivro, deletaLivro
}