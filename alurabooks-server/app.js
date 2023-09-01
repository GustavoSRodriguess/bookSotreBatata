const express = require("express")
const rotaLivro = require("./routes/book")
const rotaFavoritos = require("./routes/favoritos")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

const port = 8000

app.use("/livros", rotaLivro)
app.use("/favoritos", rotaFavoritos)

app.listen(port, () => {
    console.log(`escutando a porta  ${port}`)
})