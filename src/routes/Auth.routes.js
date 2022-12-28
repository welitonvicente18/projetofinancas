import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SingIn" component={SingIn} options={{ headerShown: false }} />
            <AuthStack.Screen name="SingUp" component={SingUp} options={{
                title: 'Criar conta',
                headerStyle: {
                    backgroundColor:'#00d884',
                    borderBottomWidth:1,
                    borderBottomColor: '#003F38',
                },
                headerTintColor: '#003F38',
            }} />
        </AuthStack.Navigator>
    );
}