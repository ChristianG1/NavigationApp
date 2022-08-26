import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Text } from 'react-native'
import { colores, styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();
 
  return (
    <View style={{ 
      ...styles.globalMargin,
      marginTop: top + 10
    }}>
        <Text style={ styles.title }> Iconos </Text>
        <Text>
          <TouchableIcon iconName='airplane-outline' />
          <TouchableIcon iconName='attach-outline' />
          <TouchableIcon iconName='bonfire-outline' />
          <TouchableIcon iconName='calculator-outline' />
        </Text>
    </View>
  )
}
