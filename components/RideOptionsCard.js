import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'


// Data
import { data } from '../data/driverforyoucars'
import { useSelector } from 'react-redux'
import { selecttravelTimeInformation, setTravelTimeInformation } from '../redux/slices/navSlice'



const RideOptionsCard = () => {
  const SURGE_CHANGE_RATE = 1.5
  const travelTimeInformation = useSelector(selecttravelTimeInformation)

  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        {/* HEADER */}
        <Text className="text-center text-xl py-5">
          Select A Ride - {travelTimeInformation?.distance.text}
        </Text>

        {/* CAR DATA */}  
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity className="flex-row items-center justify-between mx-10">
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizedMode: "contain"
                }}
                source={{ uri: item.image }}
              />
              <View>
                <Text className="text-xl font-semibold">{item.title}</Text>
                <Text> {travelTimeInformation?.duration.text}  </Text>
              </View>
              <Text className="text-xl">
                {/* Surge */}
                {new Intl.NumberFormat('en-gb', {
                  style: 'currency',
                  currency: 'GBP'
                }).format(
                  (travelTimeInformation?.duration.value * SURGE_CHANGE_RATE * item.multiplier) / 100
                )}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard