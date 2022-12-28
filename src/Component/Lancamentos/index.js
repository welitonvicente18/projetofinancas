import React from 'react';
import { View } from 'react-native';
import { Texto, ConteinerLancamentos, ConteinerValor, Separator, TextoValor } from './styles';

export default function Lancamentos({ data }) {
    return (
        <View>
            <View style={{ flexDirection: "row" }} >
                <ConteinerLancamentos>
                    <Texto>{data.data}</Texto>
                    <Texto style={{ fontSize: 20, fontWeight: 'bold' }}>{data.lancamento}</Texto>
                    <Texto style={{ fontSize: 17, color: "#A7ADAC" }}>{data.categoria}</Texto>
                </ConteinerLancamentos>
                <ConteinerValor>
                    <TextoValor>R$ {data.valor}</TextoValor>
                </ConteinerValor>
            </View>
            <View>
                <Separator></Separator>
            </View>
        </View>
    );
}