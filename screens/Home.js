import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

import Logo from '../images/logo.png'

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="">
        <Image
          className = "w-28 h-28 rounded-full object-cover"
          source={Logo}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home