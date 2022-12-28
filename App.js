// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';

import Routes from './src/routes/index'

export default function App() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <StatusBar backgroundColor="#00d884" barStyle="dark-content" />
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );
}