import React, { useState, useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ContainerHome, Head, Body, ConteinerHead, Texto, List } from './styles';
import Lancamentos from '../../Component/Lancamentos';
import Header from '../../Component/Header';

import { AuthContext } from '../../contexts/auth';

export default function Home() {

    const { user } = useContext(AuthContext);
    const [lancamentos, setLancamentos] = useState([]);
    const uid = user.uid;
    const data = [
        {
            id: '1',
            lancamento: 'seguto do carro',
            categoria: 'carro',
            data: '05/12/2022',
            valor: '100',
        },
        {
            id: '2',
            lancamento: 'Parcela da casa',
            categoria: 'casa',
            data: '05/12/2022',
            valor: '100',
        },
    ];

    useEffect(() => {
        async function list() {
            await firebase.database().ref('lancamentos').child(uid).on('value', (snapshot) => {
                snapshot.forEach((childItem) => {
                    let list = {
                        key: childItem.key,
                        lancamento: childItem.val().lancamento,
                        categoria: childItem.val().categoria,
                        data: childItem.val().data,
                        valor: childItem.val().valor
                    };
                    setLancamentos(oldArray => [...oldArray, list]);
                });
            })
        }
        list(); // Chama a função de list
    }, []);

    return (
        <ContainerHome>
            <Head>
                <View style={{ justifyContent: 'flex-start', alignContent: 'flex-start', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, color: "#FFF", fontWeight: 'bold' }}> {user && user.name} </Text>
                    <Header />
                </View>
                <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
                    <ConteinerHead>
                        <Texto style={{ fontSize: 20, color: "#003F38" }}> Saldo do mês </Texto>
                        <Texto style={{ fontSize: 35, color: "#00d884", marginBottom: 10 }}> R$ 5000,00 </Texto>
                        <Texto style={{ fontSize: 20, color: "#003F38" }}> Gastos do mês </Texto>
                        <Texto style={{ fontSize: 35, color: "#fc5555", marginBottom: 10 }}> R$ 350,00 </Texto>
                    </ConteinerHead>
                </View>
            </Head>
            <Body >
                <Texto style={{ fontSize: 20, color: "#003F38", fontWeight: 'bold', marginBottom: 10 }}>Registros deste mês</Texto>
                <List data={data}
                    renderItem={({ item }) => <Lancamentos data={item} />}
                    keyExtrator={item => item.key}
                />
            </Body>
        </ContainerHome >
    );
}