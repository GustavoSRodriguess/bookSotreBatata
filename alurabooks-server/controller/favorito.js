const { getTodosFavoritos, insereFavoritoId, deletaFavoritoPorId } = require("../services/favorito")

function getFavoritos(req, res) {
    try{
        const livros = getTodosFavoritos()
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try{
        const id = req.params.id
        insereFavoritoId(id)
        res.send(201)
        res.send("Livro inserido com sucesso")
    }catch(e){
        res.status(500)
        res.send(e.message)
    }
}

function deleteFavorito(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)){
            deletaFavoritoPorId(id)
            res.send("item dletado")
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
   
    }catch(e){
        res.status(500)
        res.send(e.message)
    }
}

module.exports = {
    getFavoritos, postFavorito, deleteFavorito
}