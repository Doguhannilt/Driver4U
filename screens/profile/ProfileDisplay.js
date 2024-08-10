import { View, Text, Image, Button, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

{/* Image Icon */ }
import Person from '../../images/person.png'
import { fetchUserInfoFromStorage } from '../../redux/api/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

{/* Logout Screen */ }
import Logout from '../auth/LogoutButton';
import { useNavigation } from '@react-navigation/native';

const ProfileDisplay = () => {

    const dispatch = useDispatch();

    {/* USE EFFECT STATE */ }
    useEffect(() => {
        dispatch(fetchUserInfoFromStorage());
    }, [dispatch]);

    const userInfo = useSelector(state => state.auth.userInfo);
    console.log(userInfo)

    const navigation = useNavigation();

    return (
        <View className="flex-row items-end justify-between mt-6 mb-0 pb-0">
            <View className="flex-1">
                <Logout />
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Profile') }}
                >
                    <Image
                        className="h-10 w-10 rounded-full"
                        source={Person}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ProfileDisplay