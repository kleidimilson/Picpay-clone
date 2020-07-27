
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './telas/Home/index';
import Wallet from './telas/wallet/index';
import Pay from './telas/pay/index';
import PayButton from './components/payButton/index';
import {AntDesign, Ionicons,MaterialIcons} from '@expo/vector-icons';

export default function Routes(){
    const Tab = createBottomTabNavigator();
    const icons = {
        Home: {
            lib: AntDesign,
            name: 'home'
        },
        Wallet: {
            lib: AntDesign,
            name: 'creditcard'
        },
        Pay: {
            lib: MaterialIcons,
            name: 'attach-money'
        },
        Notifications: {
            lib: Ionicons,
            name: 'ios-notifications-outline'
        },
        Settings: {
            lib: AntDesign,
            name: 'setting'
        }
    }

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    if(route.name === 'Pay'){
                        return <PayButton/>
                    }
                   const {lib: Icon, name} = icons[route.name];  
                   return <Icon name={name} size={size} color={color}/>
                },
                
            })}
             tabBarOptions={{
                 style: {
                     backgroundColor: '#1F222B',
                     borderTopColor: 'rgba(255, 255, 255, 0.2)'
                 },
                 activeTintColor: '#fff',
                 inactiveTintColor: '#92929c'
             }}
            
            >
                <Tab.Screen  name="Home" component={Home} options={{title:'Inicio'}}/>
                <Tab.Screen name="Wallet" component={Wallet} options={{title: 'Carteira'}}/>
                <Tab.Screen name="Pay" component={Pay} options={{title: ''}}/>
                <Tab.Screen name="Notifications" component={Pay} options={{title: 'Notificações'}}/>
                <Tab.Screen name="Settings" component={Pay} options={{title: 'Ajustes'}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}