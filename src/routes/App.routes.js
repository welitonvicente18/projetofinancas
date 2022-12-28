import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../pages/Home';
import AddRegistro from '../pages/AddRegistro';
import ListLancamentos from '../pages/ListLancamentos';

const Tab = createBottomTabNavigator();

export default function AuthRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false, tabBarIcon: ({ color, size }) => (<Icon name="home" color={color} size={size} />),
            }} />
            <Tab.Screen name="Adicionar Registro" component={AddRegistro} options={{
                activeTintColor: '#003F38',
                headerShown: false,
                tabBarIcon: ({ color, size }) => (<Icon name="plus" color={color} size={size}
                />),
            }} />
            <Tab.Screen name="Lancamentos" component={ListLancamentos} options={{ headerShown: false, tabBarIcon: ({ color, size }) => (<Icon name="signal" color={color} size={size} />), }} />
        </Tab.Navigator>
    );
}