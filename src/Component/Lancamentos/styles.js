import styled from "styled-components/native";

export const List = styled.FlatList`

`;

export const ConteinerLancamentos = styled.View.attrs({
    flex: 1,
})`

`;

export const ConteinerValor = styled.View.attrs({
    flex: 1, alignItems:'flex-end', justifyContent: 'center'
})`,
`;

export const Texto = styled.Text`
color:#A7ADAC;
font-size:15px;
`;

export const TextoValor = styled.Text`
color:#00d884;
font-size:25px;
font-weight: bold;
`;

export const Separator = styled.View`
margin-top:10px;
margin-bottom:10px;
border-bottom-width: 0.2px;
width:100%;
justify-content: center;
align-content: center;
`;