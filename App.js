import React, { useEffect } from 'react';

{/* REACT NAVIGATION */ }
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

{/* REDUX PACKAGES */ }
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { fetchUserInfoFromStorage } from './redux/api/auth/authSlice';

// SCREENS
import Home from './screens/Home';
import MapScreen from './screens/MapScreen';
import Signup from './screens/auth/Signup';
import LoginScreen from './screens/auth/Auth';
import Profile from './screens/profile/Profile';


const Stack = createNativeStackNavigator();

function AppNavigator() {

  {/* REACT REDUX */ }
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.auth.userInfo);

  {/* USE EFFECT STATE */ }
  useEffect(() => {
    dispatch(fetchUserInfoFromStorage());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo ? (
          <>
            {/* SCREENS */}
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

          </>
        ) : (
          <>
            {/* SCREENS */}
            <Stack.Screen name="Auth" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Sign Up" component={Signup} options={{ headerShown: false }} />
            </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
