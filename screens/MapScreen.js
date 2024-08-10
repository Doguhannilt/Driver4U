import { View, Text } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Components
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'

const MapScreen = () => {

  const Stack = createNativeStackNavigator()

  return (
    <View>

      {/* FIRST SECTION */}
      <View className="h-1/2">
        <Map />
      </View>

      {/* SECOND SECTION */}  
      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          
        {/* THIRD SECTION */}
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen