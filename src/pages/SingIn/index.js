import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ContainerPrincipal, Container, ButtonCadastrar, AreaInput, InputText, Button, TextButtonSingIn, TextButtonCadastar, Logo } from './styles';
import { AuthContext } from '../../contexts/auth';

export default function SingIn() {

    const [email, setEmail] = useState('welitonvicente4@gmail.com');
    const [password, setPassword] = useState('Codigo18');
    const { logado, user, logarSingIn } = useContext(AuthContext);
    const navigation = useNavigation();


    function handleSingIn() {
        logarSingIn(email, password)
    }

    return (
        <ContainerPrincipal>
            <Container>
                <Logo source={require('../../assets/bolsa-de-dinheiro.png')} />
                <AreaInput>
                    <InputText placeholder="E-mail" value={email} onChangeText={(value) => setEmail(value)} keyboardType="email-address" autoFocus={true} autoCorrect={false} />
                </AreaInput>
                <AreaInput>
                    <InputText placeholder="Senha" value={password} onChangeText={(value) => setPassword(value)} secureTextEntry autoCapitalize="none" />
                </AreaInput>
                <Button onPress={handleSingIn}>
                    <TextButtonSingIn> ACESSAR </TextButtonSingIn>
                </Button>
                <ButtonCadastrar onPress={() => navigation.navigate('SingUp')}>
                    <TextButtonCadastar> Criar uma conta! </TextButtonCadastar>
                </ButtonCadastrar>
            </Container>
        </ContainerPrincipal>
    );
}