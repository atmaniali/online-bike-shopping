import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { images, icons } from "@/constants/Icons";
import { Colors } from "@/constants/Color";

const map = () => {
    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);

    const initialRegion = {
        latitude: 35.69765,
        longitude: -0.63374,
        latitudeDelta: 0.0422,
        longitudeDelta: 0.0421,
      }

      const bikesMarkers = [
        {
          id: 1,
          latlang: {
            latitude: 35.689793,
            longitude: -0.624763
          },
          title: 'Bike 1',
          description: 'Bike 1'
        },
        {
          id: 2,
          latlang: {
            latitude: 35.702721,
            longitude: -0.639792
          },
          title: 'Bike 2',
          description: 'Bike 2'
        },
        {
          id: 3,
          latlang: {
            latitude: 35.682728,
            longitude: -0.652709
          },
          title: 'Bike 3',
          description: 'Bike 3'
        }
      ]
    
    useEffect(()=>{
        async function getLocation() {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);
        }

        getLocation();
    },[])


    return ( 
        <View style={{flex:1, backgroundColor: Colors.blackGray}}>
            <ImageBackground source={images.background} style={{flex:1}}>
                <View style={styles.container}>
                    <MapView 
                        style={styles.map} 
                        initialRegion={initialRegion}
                    >
                        {bikesMarkers.map(bike => (
                            <Marker
                                key={bike.id}
                                coordinate={bike.latlang}
                                title={bike.title}
                                description={bike.description}
                            >
                                <View style={styles.markerContainer}>
                                    <Image 
                                        source={icons.bike}
                                        style={styles.markerImage}
                                    />
                                </View>
                            </Marker>
                        ))}
                    </MapView>
                </View>
            </ImageBackground>
        </View>
     );
}
 
export default map;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
    markerContainer: {
        padding: 8,
    },
    markerImage: {
        width: 32,
        height: 32,
        tintColor: '#ff0000'
    }
  });
