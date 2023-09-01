import { livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../images/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    
`

const Resultado = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform .2s;

    &:hover{
        transform: scale(1.1);
    }
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            cor="#EB9B00" 
            tamanhoFonte="35px" 
            alinhamento="center">ÚLTIMOS LANCAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <Resultado>
                        <img src={livro.src}/>
                    </Resultado>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma plataforma"
                img={imagemLivro}/>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos
