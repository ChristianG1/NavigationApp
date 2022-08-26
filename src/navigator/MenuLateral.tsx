import React from "react";

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContent, DrawerContentScrollView } from "@react-navigation/drawer";
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, useWindowDimensions, View, TouchableOpacity } from "react-native";
import { styles } from "../theme/appTheme";
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front'
            }}
            drawerContent={ (props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" options={{ headerShown: false }}  component={ Tabs }/>
            <Drawer.Screen name="SettingsScreen" options={{ headerShown: false }} component={ SettingsScreen }/>
        </Drawer.Navigator>
    )
}

const MenuInterno = ( { navigation } : DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* PArte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: "https://www.seekpng.com/png/full/110-1100707_person-avatar-placeholder.png"
                    }}
                />
            </View>

            {/* Opcionesa del menú  */}
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuBoton}
                    onPress={ () => navigation.navigate('StackNavigator') }
                >
                    <Text style={styles.menuTexto}>Navegación</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.menuBoton }
                    onPress={ () =>  navigation.navigate('SettingsScreen') }
                >
                    <Text style={ styles.menuTexto }>Ajustes</Text>
                </TouchableOpacity>

            </View>
        </DrawerContentScrollView>
    )
}