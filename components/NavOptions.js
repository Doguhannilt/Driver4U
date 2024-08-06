import React from 'react';
import { View, Text } from 'react-native';

// Data
import { data } from '../data/data';
import NavOptionsCard from './NavOptionsCard';

// Redux
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlice';

const HomeScreen = () => {
    const origin = useSelector(selectOrigin)

    return (
        <View className="flex-1 bg-white">

            <View className="p-4 bg-white shadow-md">
                <Text className="text-2xl font-bold">
                    {!origin
                        ? <Text>You have to specify the location</Text>
                        : <Text>Where to?</Text>
                    }
                </Text>
            </View>

            <NavOptionsCard data={data} />
        </View>
    );
};

export default HomeScreen;
