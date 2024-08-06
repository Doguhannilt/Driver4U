import React from 'react';
import { View, Text } from 'react-native';

// Data
import { data } from '../data/data';
import NavOptionsCard from './NavOptionsCard';

const HomeScreen = () => {
    return (
        <View className="flex-1 bg-white">
            
            <View className="p-4 bg-white shadow-md">
                <Text className="text-2xl font-bold">Where to?</Text>
            </View>

            <NavOptionsCard data={data} />
        </View>
    );
};

export default HomeScreen;
