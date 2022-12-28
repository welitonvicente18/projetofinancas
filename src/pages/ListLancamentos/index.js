import React from 'react';
import { Container, Head, List, Title, Texto, Body, ListMeses, TextoMes } from './styles'
import Lancamentos from '../../Component/Lancamentos';
import Meses from '../../Component/Meses';

export default function ListLancamentos() {

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

    return (
        <Container>
            <Head>
                <Title> Lançamentos</Title>
            </Head>
            <ListMeses>
                <Meses />
            </ListMeses>
            <Body vertical={true} showsHorizontalScrollIndicator={false}>
                <Texto style={{ fontSize: 20, color: "#003F38", fontWeight: 'bold' }}>Registros deste mês</Texto>
                <List data={data}
                    renderItem={({ item }) => <Lancamentos data={item} />}
                    keyExtrator={item => item.id}
                />
                {/* <Texto>TOTAL</Texto> */}
            </Body>
        </Container>
    );
}