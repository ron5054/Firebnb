'use client'
import React from 'react'
import { Space } from '../types'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
    width: '100%',
    height: '480px'
}

function MyComponent({ space }: { space: Space }) {

    const center = {
        lat: space.loc.lat,
        lng: space.loc.lan
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "process.env.GMAPS_API_KEY",
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map: google.maps.Map) {

        setMap(null)
    }, [])

    const onUnmount = React.useCallback(function callback(map: google.maps.Map) {
        setMap(null)
    }, [])

    return (
        <section>
            <h1>Where you'll be</h1>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                    onLoad={onLoad}
                    onUnmount={onUnmount}
                >
                    <Marker position={center} />
                </GoogleMap>
            ) : <></>}
            <h2>{space.loc.city}, {space.loc.country}</h2>
        </section>
    )
}

export default React.memo(MyComponent)