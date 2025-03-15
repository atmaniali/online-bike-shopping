import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Color";

const ButtonItemWithImage = ({imgSrc, onPress, addStyle = {}}) => {
    return ( 
        <TouchableOpacity style={styles.cardButton} onPress={onPress}>
            <Image source={imgSrc} style={[styles.icon, addStyle]} />
        </TouchableOpacity>
     );
}
 
export default ButtonItemWithImage;

const styles = StyleSheet.create({
    cardButton: {
        width: '15%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.blueLight,
        borderRadius: 12,
        borderColor: Colors.black,
        borderWidth: 1,
        marginHorizontal: 2,
        // backgroundColor:"red",
    }, 
    icon:{
        padding: 5,
        width: 24,
        height: 24,
        tintColor: Colors.white,
        marginHorizontal: 10
    }
})