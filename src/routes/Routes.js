import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../pages/login/Login';
import Cadastrar from '../pages/cadastrar/Cadastrar';
import Home from '../pages/home/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Details from '../pages/details/Details';
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import AddPacote from '../pages/pacotes/AddPacote';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Home"  options={{ headerShown: false }}  component={Home} />
        </Tab.Navigator>

    )
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
                <Stack.Screen name="Cadastrar"  component={Cadastrar} />
                <Stack.Screen name="Home"  component={Home} />
                <Stack.Screen name="Details"  component={Details} options= {{headerRight: () => (<TouchableOpacity style={{marginRight: 18}}>
                    <Feather
                     name='shopping-cart'
                     size={24}
                     color= 'black'
                    />
                </TouchableOpacity>) }} />
                <Stack.Screen name="AddPacote"  component={AddPacote} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes