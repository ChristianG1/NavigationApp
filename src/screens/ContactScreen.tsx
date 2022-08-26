import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContactScreen = () => {
  const { authState, signIn } = useContext( AuthContext );

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>ChatScreen</Text>
        {
          authState.isLoggedIn 
            === false 
              &&
              <Button 
              title='Sign in'
              onPress={ signIn }
        /> 
        }

        
    </View>
  )
}
