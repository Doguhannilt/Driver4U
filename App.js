import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// REDUX
import { Provider } from 'react-redux';
import { store } from './redux/store';

// SCREENS
import Home from './screens/Home';
import MapScreen from './screens/MapScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MapScreen" component={MapScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


