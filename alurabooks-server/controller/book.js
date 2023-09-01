const { getTodosLivros, getLivroId, modificaLivro, insereLivro, deletaLivro } = require("../services/book")

function getLivros(req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

function getLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)){
            const livro = getLivroId(id)
        res.send(livro)
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
    
}

function postLivro(req, res) {
    try{
        const livroNovo = req.body

        if(req.body.nome) {
            insereLivro(livroNovo)
            res.send(201)
            res.send("Livro inserido com sucesso")
        }else {
            res.status(422)
            res.send("Campo nome é obrigatório")
        }

    }catch(e){
        res.status(500)
        res.send(e.message)
    }
}

function patchLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)) {
              const body = req.body

            modificaLivro(body,id)
         res.send("item modificado")
        } else {
            res.status(422)
            res.send("Id inválido")
        }
      

    }catch(e){
        res.status(500)
        res.send(e.message)
    }
}

function delLivro(req, res) {
    try{
        const id = req.params.id

        if(id && Number(id)){
            deletaLivro(id)
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
    getLivros, getLivro, postLivro, patchLivro, delLivro
}