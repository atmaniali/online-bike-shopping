import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonItemWithImage from './ButtonItemWithImage';
import ButtonItemWithText from './ButtonItemWithText';
import { icons } from "@/constants/Icons";

const ButtonGroup = ({handleBikesFilter, handleAllBikes}) => {
    return ( 
    <View style={styles.cardButtons}>
        <ButtonItemWithText content="All" onPress={handleAllBikes}/>
        <ButtonItemWithImage imgSrc={icons.electric} addStyle={styles.item} onPress={() => handleBikesFilter('electric')} />
        <ButtonItemWithImage imgSrc={icons.road} addStyle={styles.item} onPress={() => handleBikesFilter('road')} />
        <ButtonItemWithImage imgSrc={icons.mountain} addStyle={styles.item} onPress={() => handleBikesFilter('mountain')} />
        <ButtonItemWithImage imgSrc={icons.accessory} addStyle={styles.item} onPress={() => handleBikesFilter('accessory')} />
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
        width: '50%',
        height: 24
    }
})
