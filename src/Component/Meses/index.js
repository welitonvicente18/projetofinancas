import React from 'react';
import { ScrollView } from 'react-native';
import { Mes, Texto, ScrollViewContainer } from './styles';

export default function Meses() {
    return (
        <ScrollViewContainer horizontal={true} showsHorizontalScrollIndicator={false}>
            <Mes>
                <Texto>Jan</Texto>
            </Mes>
            <Mes>
                <Texto>Fev</Texto>
            </Mes>
            <Mes>
                <Texto>Mar</Texto>
            </Mes>
            <Mes>
                <Texto>Abr</Texto>
            </Mes>
            <Mes>
                <Texto>Mai</Texto>
            </Mes>
            <Mes>
                <Texto>Jun</Texto>
            </Mes>
            <Mes>
                <Texto>Jul</Texto>
            </Mes>
            <Mes>
                <Texto>Ago</Texto>
            </Mes>
            <Mes>
                <Texto>Set</Texto>
            </Mes>
            <Mes>
                <Texto>Out</Texto>
            </Mes>
            <Mes>
                <Texto>Nov</Texto>
            </Mes>
            <Mes>
                <Texto>Dez</Texto>
            </Mes>
        </ScrollViewContainer>
    );
}