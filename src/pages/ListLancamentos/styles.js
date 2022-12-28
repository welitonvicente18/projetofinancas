import styled from "styled-components/native";

export const Container = styled.View`
flex:1;
background-color:#FFFFFF;
`;
export const Body = styled.ScrollView`
flex:7;
padding:10px;
`;

export const ListMeses = styled.View`
`;
export const Head = styled.View.attrs({
    shadowColor: "#000000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 20,
})`
justify-content:flex-start;
align-items:center;
padding:10px;
margin-bottom:10px;
border-bottom-right-radius: 30;
border-bottom-left-radius: 30;
background-color: #00d884;
`;

export const List = styled.FlatList`
padding:5px;
`;

export const Title = styled.Text`
color:#FFF;
font-size:25px;
`;

export const Texto = styled.Text`
color:#A7ADAC;
font-size:17px;
`;
