import {Tabs } from "expo-router";
import { Image } from 'react-native';
import { icons } from '@/constants/Icons';
import { Colors } from '@/constants/Color';

export default function TabsLayout() {
    return (
        <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.blueLight,
            tabBarInactiveTintColor: Colors.white,
            tabBarStyle: {
                height: 60,
                backgroundColor: Colors.black,  
                borderTopWidth: 0,  
                elevation: 0,  
                shadowOpacity: 0,  
            },
            tabBarIconStyle: {
                marginTop: 5
            },
            tabBarLabelStyle: {
                fontSize: 12,
                marginBottom: 5
            },
            tabBarShowLabel: false,
        }}
        >
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: ({color, size}) => (
                    <Image 
                        source={icons.bikeIcon}
                        style={{ 
                            width: 32,
                            height: 32,
                            tintColor: color 
                        }}
                    />
                )
            }} />
            <Tabs.Screen name="map" options={{
                title: 'Map',
                tabBarIcon: ({color, size}) => (
                    <Image 
                        source={icons.map}
                        style={{ 
                            width: 32,
                            height: 32,
                            tintColor: color 
                        }}
                    />
                )
            }} />
            <Tabs.Screen name="shop" options={{
                title: 'Shop',
                tabBarIcon: ({color, size}) => (
                    <Image 
                        source={icons.shop}
                        style={{ 
                            width: 32,
                            height: 32,
                            tintColor: color 
                        }}
                    />
                )
            }} />
        </Tabs>
    );
}
