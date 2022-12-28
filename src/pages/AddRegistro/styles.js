import styled from "styled-components/native";

export const Container = styled.View`
flex:1;
background-color:#FFFFFF;
`;
export const Form = styled.View`
flex:4;
justify-content:flex-start;
padding:10px;
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

export const Title = styled.Text`
color:#FFF;
font-size:25px;
`;

export const Texto = styled.Text`
color:#A7ADAC;
font-size:17px;
`;

export const InputTexto = styled.Text`
color:#A7ADAC;
font-size:15px;
margin-bottom:5px;
`;

export const Input = styled.TextInput`
background-color:#F5F6F8;
font-size:15px;
padding:5px;
border-radius:12px;
margin-bottom:10px
`;

export const InputCurto = styled.TextInput`
background-color:#F5F6F8;
font-size:15px;
padding:5px;
border-radius:12px;
margin-bottom:10px
width:90%;
`;


export const Submit = styled.TouchableOpacity`
align-items: center;
height:65px;
border-radius:12px;
width:20%;
`;