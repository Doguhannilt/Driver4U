import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'

import Logo from '../images/logo.png'


// Components
import NavOptions from '../components/NavOptions'

const Home = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="">
        <Image
          className = "w-72 h-52 self-center object-cover"
          source={Logo}
        />
      </View>
      <NavOptions/>
    </SafeAreaView>
  )
}

export default Home