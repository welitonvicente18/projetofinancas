import React, { useContext } from 'react'
import { Conteiner, ButtonMenu } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

// import AuthContext from '../../contexts/auth';

export default function Header() {

    // const { singOut } = useContext(AuthContext);

    function deslogar() {
        // singOut();
        // () => deslogar()
    }

    return (
        <Conteiner>
            <ButtonMenu onPress={{}}>
                <Icon name="power-off" color="#FFF" size={35} />
            </ButtonMenu>
        </Conteiner>
    );
}
// user-circle-o