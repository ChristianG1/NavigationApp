import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthProvider, AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
  const { authState, logout } = useContext( AuthContext );

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>AlbumScreen</Text>
      
      {
        authState.isLoggedIn 
          && 
            <Button 
              title="Logout"
              onPress={ logout }
            />
      }
      
    </View>
  )
}
