import { View, Text, SafeAreaView, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'

import Logo from '../images/logo.png'

// Google
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

// ENV
import { GOOGLE_KEY } from '@env'

// Components
import NavOptions from '../components/NavOptions'
import { setDestination, setOrigin } from '../redux/slices/navSlice'
import ProfileDisplay from './profile/ProfileDisplay'


// Redux
import { useDispatch } from 'react-redux'


const Home = () => {

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ProfileDisplay />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={Logo}
        />
      </View>
     

      <GooglePlacesAutocomplete
        placeholder='Where From?'
        query={{
          key: GOOGLE_KEY,
          language: 'en'
        }}
        onPress={(data, details = null) => {
          dispatch(setOrigin({
            location: details.geometry.location,
            description: data.description
          }))

          dispatch(setDestination(null))
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        minLength={2}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        styles={autocompleteStyles}
      />
      <NavOptions />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 0,
    paddingBottom: 0,
    paddingTop: Platform.OS === 'android' ? 0 : 20 // Android'da ek boşluk olmaması için
  },
  logoContainer: {
    paddingBottom: 20,
    alignItems: 'center',
    marginBottom: 2 // Gerekirse burayı ayarlayın
  },
  logo: {
   marginTop:0,
    width: 288, // 72 * 4
    height: 208, // 52 * 4
    resizeMode: 'cover'
  }
});

const autocompleteStyles = {
  container: {
    flex: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
  textInput: {
    paddingBottom: 0,
  },
  listView: {
    marginBottom: 0,
  }
};

export default Home;