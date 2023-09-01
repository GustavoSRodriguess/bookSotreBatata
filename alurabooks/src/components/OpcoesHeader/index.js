import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Options = styled.ul`
    display: flex;
`

const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    padding: 0 5px;
`

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return (
        <Options>
          { textOptions.map( (texto) => (
            <Link to={`/${texto.toLowerCase()}`}><Option><p>{texto}</p></Option></Link>
          ) ) }
        </Options>
    )
}

export default OpcoesHeader;