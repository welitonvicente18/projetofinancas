import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [logado, setLogado] = useState(false); // Se o usuário está logado
    const [loading, setLoading] = useState(false); // Carregando
    const [user, setUser] = useState(''); // Dados 

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if (storageUser) {
                serUser(JSON.parse(storageUser));
            }
        }
    }, []);

    async function logarSingIn(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            name: snapshot.val().name,
                            email: value.user.email,
                        }
                        storageUser(data);
                        setLogado(true);
                        setUser(data);
                    })
            })

            .catch(() => { });
    }

    async function storageUser(data) {
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    //Cadastro de usuário
    async function cadastroSingUp(name, email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    name: name
                }).then(() => {
                    let data = {
                        uid: uid,
                        name: value.user.name,
                        email: value.user.email,
                    }
                    setUser(data);
                    setLogado(true);
                    alert("Cadastrado com sucesso.");
                    // navigation.navigate('SingIn');
                })
            })
            .catch((err) => {
                alert(err.code);
            }
            );
    }

    async function singOut() {
        alert('sdf');
        await firebase.auth().signOut();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, logarSingIn, cadastroSingUp, logado, singOut }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;