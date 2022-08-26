import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from "react-native";

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigation" options={{ title: "Home", headerShown: false }} component={ StackNavigation } />
            <Drawer.Screen name="SettingScreen" options={{ title: "Settings", headerShown: false }} component={ SettingsScreen } />
        </Drawer.Navigator>
    )
}