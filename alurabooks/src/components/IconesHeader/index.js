import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`
const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icons = [perfil, sacola]

function IconesHeader(){
    return (
        <Icones>
          { icons.map((icones) => (
            <Icone><img src={icones}/></Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader;