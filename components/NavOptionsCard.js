import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'


const NavOptionsCard = ({ item, data }) => {
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                horizontal
                className="mt-4"
                renderItem={({ item }) => (
                    <TouchableOpacity className="bg-white p-4 m-2 rounded-lg shadow-md border border-gray-200">
                        <Image
                            className="h-40 w-40 rounded-lg"
                            source={{ uri: item.image }}
                        />
                        <Text className="text-lg font-semibold mt-2">{item.title}</Text>
                        <Text className="text-sm text-gray-600 mt-1 overflow-hidden whitespace-nowrap w-32">{item.description}</Text>
                        <View className="flex-row items-center mt-2">
                            <Text className="text-yellow-500 font-bold">⭐ {item.rating}</Text>
                            <Text className="text-gray-500 ml-2">{item.estimatedTime}</Text>
                        </View>
                        <Text className="text-sm text-gray-400 mt-1">{item.category}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptionsCard