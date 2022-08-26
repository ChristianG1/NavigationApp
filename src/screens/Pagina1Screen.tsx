import { DrawerScreenProps } from '@react-navigation/drawer'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

// interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any>{};

export const Pagina1Screen = ({ navigation }: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity 
          onPress={ () => navigation.toggleDrawer() }
        >
          <Text>Menú</Text>
        </TouchableOpacity>
      )
    })
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 screen</Text>
      <Button
        title='Ir a página 2'
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{ marginVertical: 20, fontSize: 20, marginLeft: 5}}>Navegar con argumentos</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: "Pedro"
          })}
          style={{
            ...styles.botonGrande,
            backgroundColor: "#5856D6"
          }}
        >
          <Text style={ styles.botonGrandeTexto }>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: "Maria"
          })}
          style={{
            ...styles.botonGrande,
            backgroundColor: "#FF9427"
          }}
        >
          <Text style={ styles.botonGrandeTexto }>María</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}