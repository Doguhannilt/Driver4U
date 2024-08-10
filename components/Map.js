import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

// Map
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { selectOrigin, selectdestination, setTravelTimeInformation } from '../redux/slices/navSlice'

// Google
import { GOOGLE_KEY } from '@env'

const Map = () => {

    {/* ORIGIN |DESTINATION | DISPATCH */}
    const origin = useSelector(selectOrigin)
    const destination = useSelector(selectdestination)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!origin || !destination) return
    
        {/* getTravelTime */}
        const getTravelTime = async () => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_KEY}`)
                .then(res => res.json())
                .then(data => {
                    {/* setTravelTimeInformation */}
                    dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
                    console.log(data.rows[0].elements[0])
            })
            
        }

        getTravelTime()
    }, [origin, destination, GOOGLE_KEY]);


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

            {origin && destination && (
                <MapViewDirections
                    origin={origin.description}
                    destination={destination.description}
                    apikey={GOOGLE_KEY}
                    strokeWidth={3}
                    strokeColor='red'
                />
            )}

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