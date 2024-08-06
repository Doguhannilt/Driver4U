import { View, Text } from 'react-native'
import React from 'react'

// Map
import MapView, { Marker } from 'react-native-maps'

// Redux
import { useSelector } from 'react-redux'
import { selectOrigin } from '../redux/slices/navSlice'


const Map = () => {

    const origin = useSelector(selectOrigin)


    return (
        <MapView
            className="flex-1"
            mapType='mutedStandard'
            initialRegion={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}>
            {origin?.location && (
                <Marker
                    coordinate={{
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier='origin'
                />
            )}
        </MapView>
    )
}

export default Map