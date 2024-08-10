import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../redux/slices/navSlice'


const NavOptionsCard = ({ item, data }) => {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)
    
    return (
        <View className={`${!origin && 'opacity-20'}`}>
            {/* CARD */}
            <TouchableOpacity
                onPress={() => navigation.navigate("MapScreen")}
                className="bg-white p-4 m-2 rounded-lg shadow-md"
                disabled={!origin}>
                <Image
                    className="h-1/2 rounded-lg"
                    source={{ uri: "https://images.pexels.com/photos/977213/pexels-photo-977213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }}
                />
                <Text className="text-lg font-semibold mt-2">Driver</Text>
                <Text className="text-sm text-gray-600 mt-1 ">Find and book a ride quickly with our easy-to-use ride-hailing service.</Text>
                <View className="flex-row items-center mt-2">
                    <Text className="text-yellow-500 font-bold">⭐  4.8</Text>
                    <Text className="text-gray-500 ml-2">Avg 5-10 min</Text>
                </View>
                <Text className="text-sm text-gray-400 mt-1">Transport</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavOptionsCard