import styled from "styled-components/native";

export const ContainerHome = styled.View`
flex:1;
`;

export const Head = styled.View.attrs({
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 5,
    elevation: 20,
})`
flex:1;
padding-bottom:3px;
background-color: #00d884;
border-bottom-right-radius: 30;
border-bottom-left-radius: 30;
`;
// align-items:center;
// justify-content: center;

export const ConteinerHead = styled.View.attrs({
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 20,
})`
flex:1;
width: 95%;
margin: 10px;
align-items:center;
justify-content: center;
background-color: #FFF;
border-radius: 30;
`;

export const Body = styled.View`
flex:2;
background-color: #FFF;
padding-top: 20;
padding-left:10;
padding-reight:10;
`;

export const List = styled.FlatList`
padding:5px;
`;

export const Texto = styled.Text`
color:#A7ADAC;
font-size:17px;
`;

export const TextHeader = styled.Text`
color:#FFFFFF;
font-size:17px
`;