import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from "@/constants/Color";

const ButtonItemWithImage = ({content, onPress}) => {
    return (  
        <TouchableOpacity style={styles.cardButton} onPress={onPress}>
            <Text style={styles.textItem}>{content}</Text>
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
    textItem:{
        color: Colors.white,
    }
})