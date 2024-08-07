import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

// Google Auto Complete
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_KEY } from '@env'

// Redux
import { useDispatch } from 'react-redux'
import { setDestination } from '../redux/slices/navSlice'
import { useNavigation } from '@react-navigation/native'

const NavigateCard = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation()


    return (
        <SafeAreaView className="bg-white flex-1">
            <Text className="text-3xl font-bold text-center text-gray-600 py-5 ">Hi,</Text>
            <View className="border-t border-gray-200 flex-shrink">
                <View>
                    <GooglePlacesAutocomplete
                        placeholder='Where to?'
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        returnKeyType={"search"}
                        onPress={(data, details = null) => {
                            dispatch(
                                setDestination({
                                    location: details.geometry.location,
                                    description: data.description
                                }))
                            navigation.navigate('RideOptionsCard')
                        }}
                        minLength={2}
                        nearbyPlacesAPI='GooglePlacesSearch'
                        debounce={400}
                        enablePoweredByContainer={false}
                        query={{
                            key: GOOGLE_KEY,
                            language: 'en'
                        }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard


const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 10
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})