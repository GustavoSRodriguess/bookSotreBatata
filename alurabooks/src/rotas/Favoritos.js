import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getFavoritos } from '../servicos/favoritos';
import livroImg from '../images/livro2.png'
import { deleteFavorito } from '../servicos/favoritos';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`
const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Resultado = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    margin-botton: 20px;
    transition: transform .2s;
    padding: 15px 0;
    flex-direction:row;
    color: #FFF;
   

    p { 
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        transform: scale(1.1);
    }

`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`






function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  async function fetchFavoritos() {
    const favoritosDaAPI = await getFavoritos()
    setFavoritos(favoritosDaAPI)
  }

 async function deletarFavorito(id) {
  await deleteFavorito(id)
  await fetchFavoritos()
  alert(`Livro de id:${id} deletado!`)
}

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <Titulo>Seus Favoritos Estão Aqui</Titulo>
        <ResultadoContainer>
          {favoritos.map(favorito => (
            <Resultado onClick={() => deletarFavorito(favorito.id)}>
               <img src={livroImg}/>
               <p>{favorito.nome}</p>
          </Resultado> ))}
        </ResultadoContainer>
    </AppContainer>
  );
}

export default Favoritos;
