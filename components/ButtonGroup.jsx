import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonItemWithImage from './ButtonItemWithImage';
import ButtonItemWithText from './ButtonItemWithText';
import { icons } from "@/constants/Icons";

const ButtonGroup = () => {
    return ( 
    <View style={styles.cardButtons}>
        <ButtonItemWithText content="All" />
        <ButtonItemWithImage imgSrc={icons.electric} addStyle={styles.item} />
        <ButtonItemWithImage imgSrc={icons.road} />
        <ButtonItemWithImage imgSrc={icons.mountain} />
        <ButtonItemWithImage imgSrc={icons.accessory} />
    </View> 
);
}
 
export default ButtonGroup;

const styles = StyleSheet.create({
    cardButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        marginVertical: 10
    },
    item:{
        width: '70%',
        height: 24
    }
})
