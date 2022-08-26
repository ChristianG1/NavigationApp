import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform, Text } from "react-native";

import { Tab1Screen } from "../screens/Tab1Screen";
import { StackNavigation } from './StackNavigation';
import { colores } from '../theme/appTheme';
import { TopTabNavigator } from "./TopTabNavigator";


export const Tabs = () => {
    return Platform.OS === 'ios' 
        ? <TabsIOS />
        : <TabAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={ true }
            barStyle={{
                backgroundColor: colores.primary,
            }}

            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    borderTopColor: colores.primary,
                    elevation: 0
                },
                tabBarIcon: ({ focused, color }) => {
                    let iconName: string = ''; 
                    switch( route.name ) {
                        case "Tab1Screen":
                            iconName = "fitness-outline";
                            break;
                        
                        case "Tab2Screen":
                            iconName = "heart-dislike-outline";
                            break;

                        case "StackNavigator":
                            iconName = "nutrition-outline";
                            break;
                    }

                    return (
                            <Icon name={ iconName } size={ 22 } color={ color }/>
                    )
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: "Tab1" }} component={ Tab1Screen }/>
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: "Tab2" }} component={ TopTabNavigator }/>
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: "Stack" }} component={ StackNavigation }/>
        </BottomTabAndroid.Navigator>
       
    )
}



const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: "white",
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                tabBarLabelStyle: {
                    fontSize: 15
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    borderTopColor: colores.primary,
                    elevation: 0
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string = ''; 
                    switch( route.name ) {
                        case "Tab1Screen":
                            iconName = "fitness-outline";
                            break;
                        
                        case "Tab2Screen":
                            iconName = "heart-dislike-outline";
                            break;

                        case "StackNavigator":
                            iconName = "nutrition-outline";
                            break;
                    }

                    return (
                        <Text>
                            <Icon name={ iconName } size={ size} color={ colores.primary }/>
                        </Text>
                    )

                }
            })}
        >
            <BottomTabIOS.Screen name="Tab1Screen" options={{ headerShown: false, title: "Tab1" }}  component={ Tab1Screen }/>
            <BottomTabIOS.Screen name="Tab2Screen" options={{ headerShown: false, title: "Tab2" }} component={ TopTabNavigator }/>
            <BottomTabIOS.Screen name="StackNavigator" options={{ headerShown: false, title: "Stack" }}component={ StackNavigation }/>
        </BottomTabIOS.Navigator>
    )
}