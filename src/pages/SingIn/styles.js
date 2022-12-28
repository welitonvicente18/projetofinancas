import styled from "styled-components/native";

export const ContainerPrincipal = styled.View`
flex:1;
background-color: #00d884;
`;

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items:center;
justify-content: center;
`;
export const AreaInput = styled.View`
flex-direction:row
`;
export const InputText = styled.TextInput`
 background-color: #FFF;
 width: 90%;
 font-size: 17px;
 margin-bottom: 15px;
 padding: 10px;
 border-radius: 7px;
 color:"#FFF"
;`;
export const Button = styled.TouchableOpacity`
flex-direction:row
padding:10px;
margin-bottom:15px;
font-size:17px;
width:90%;
align-items: center;
justify-content: center;
height:50px;
background-color: #E2F8E6;
border-radius:10px;
`;

export const ButtonCadastrar = styled.TouchableOpacity`
flex-direction:row
padding:10px;
margin-bottom:15px;
font-size:17px;
width:90%;
align-items: center;
justify-content: center;
height:50px;
`;
export const ButtonCadastrar2 = styled.TouchableOpacity`
flex-direction:row
padding:10px;
margin-bottom:15px;
font-size:17px;
width:90%;
align-items: center;
justify-content: center;
height:50px;
background-color: #003F38;
border-radius:10px;
`;

export const TextButtonSingIn = styled.Text`
color:#00d884;
font-size:17px;
font-weight: bold;
`;


export const TextButtonCadastar = styled.Text`
color:#FFF;
font-size:17px;
font-weight: bold;
`;

export const TextHeader = styled.Text`
color:#FFFFFF;
font-size:17px
`;

export const Logo = styled.Image`
height:128px;
width:128px;
margin-bottom:40px;
`;
