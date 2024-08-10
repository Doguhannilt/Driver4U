import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'

{/* REACT REDUX */}
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/api/auth/authSlice';
import { useLogoutMutation } from '../../redux/slices/userSlices';

const Logout = () => {

  const [logoutDisp] = useLogoutMutation();
  const dispatch = useDispatch();

  const logoutButton = async () => {
    try {
      // Dispatch logout action
      dispatch(logout());
      
      // Perform logout mutation
      const data = await logoutDisp().unwrap();
      
      // Optional: Handle success (e.g., redirect or show a success message)
      Alert.alert('Logout Successful', 'You have been logged out.');
    } catch (error) {
      // Handle error
      console.error('Logout failed', error);
      Alert.alert('Logout Failed', 'An error occurred during logout.');
    }
  }

  return (
    <View className="ml-2">
      <TouchableOpacity
        onPress={logoutButton}
        className=" text-white rounded-lg shadow-lg">
        <Text className="text-lg text-gray-800">Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Logout