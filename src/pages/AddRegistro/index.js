import React, { useContext, useState } from 'react';
import { View } from 'react-native'
import { Container, Head, Form, Title, InputTexto, InputCurto, Input, Submit, } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from '../../services/firebaseConnection';

import { AuthContext } from '../../contexts/auth';

export default function AddRegistro() {

    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [data, setData] = useState('');
    const [categoria, setCategoria] = useState('');
    const [repetir, setRepetir] = useState('');
    const { user } = useContext(AuthContext);

    async function saveLancamento() {

        let uid = user.uid;
        let key = await firebase.database().ref('lancamentos').child(uid).push().key;
        await firebase.database().ref('lancamentos').child(uid).child(key).set({
            id: key,
            descricao: descricao,
            valor: valor,
            data: data,
            categoria: categoria,
            repetir: repetir,
        })
    }

    return (
        <Container>
            <Head>
                <Title>Inserir Lançamento</Title>
            </Head>
            <Form>
                <InputTexto>Descrição</InputTexto>
                <Input value={descricao} onChangeText={(text) => setDescricao(text)} autoFocus={true} autoCorrect={true} />
                <View style={{ flexDirection: 'row', alignContent: 'flex-start' }}>
                    <Container>
                        <InputTexto>Valor</InputTexto>
                        <InputCurto value={valor} onChangeText={(text) => setValor(text)} keyboardType='numeric' />
                    </Container>
                    <Container>
                        <InputTexto>Data</InputTexto>
                        <InputCurto value={data} onChangeText={(text) => setData(text)} />
                    </Container>
                </View>
                <InputTexto>Categoria</InputTexto>
                <Input value={categoria} onChangeText={(text) => setCategoria(text)} />
                <InputTexto>Repetir Registro</InputTexto>
                <InputCurto value={repetir} onChangeText={(text) => setRepetir(text)} />
                <Container style={{ marginTop: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Submit onPress={saveLancamento}>
                        <Icon name="check-circle" color="#00d884" size={70} />
                    </Submit>
                </Container>
            </Form >
        </Container >
    );
}