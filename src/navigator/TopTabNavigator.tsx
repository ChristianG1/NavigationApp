import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

import { LogBox, Text } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../theme/appTheme';

LogBox.ignoreLogs(['Sending'])

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
    const { top: paddingTop} = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{ paddingTop }}
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={ ({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary,
                    shadowColor: 'transparent',
                    elevation: 0
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName: string = ''; 
                    switch( route.name ) {
                        case "Chat":
                            iconName = "Ch";
                            break;
                        
                        case "Contacts":
                            iconName = "Co";
                            break;

                        case "Albums":
                            iconName = "All";
                            break;
                    }

                    return <Text style={{ color }}>{ iconName }</Text>
                }
            })}
        >
            <Tab.Screen name="Chat" component={ ChatScreen } />
            <Tab.Screen name="Contacts" component={ ContactScreen } />
            <Tab.Screen name="Albums" component={ AlbumsScreen } />
        </Tab.Navigator>
    )
}