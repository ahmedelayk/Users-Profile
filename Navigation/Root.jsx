import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Screens/home/Home';
import User from '../Screens/profile/User';

const Stack = createNativeStackNavigator();

const Root = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="userdetails" component={User} />
        </Stack.Navigator>
    );
}

export default Root;
