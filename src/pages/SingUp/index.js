import React, { useState, useContext } from 'react';
import { ContainerPrincipal, Container, AreaInput, InputText, ButtonCadastrar, TextButton, Logo } from './styles'

import { AuthContext } from '../../contexts/auth';

export default function SingUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { cadastroSingUp } = useContext(AuthContext);

    function handleSingUp() {
        cadastroSingUp(name, email, password);
    }

    return (
        <ContainerPrincipal>
            <Container>
                <Logo source={require('../../assets/bolsa-de-dinheiro.png')} />
                <AreaInput>
                    <InputText placeholder="Nome" value={name} autoCorrect={true} autoFocus={true} onChangeText={(text) => setName(text)} />
                </AreaInput>
                <AreaInput>
                    <InputText placeholder="E-mail" value={email} onChangeText={(text) => setEmail(text)} />
                </AreaInput>
                <AreaInput>
                    <InputText placeholder="Senha" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
                </AreaInput>
                <ButtonCadastrar onPress={handleSingUp}>
                    <TextButton style={{ color: "#FFF" }}> CADASTRAR </TextButton>
                </ButtonCadastrar>
            </Container>
        </ContainerPrincipal>
    );
}