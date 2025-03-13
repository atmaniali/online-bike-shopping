import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from "@/constants/Color";
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { icons } from '@/constants/Icons';

const BikeItem = ({item, like, setLike, modalVisible, setModalVisible, setModalItem}) => {
    console.log(item.name)
    const handleLike = () => {
        if (like === item.id ) {setLike(null)}
        else{setLike(item.id)}
    }
    const handleModalItem = () => {
        setModalItem(item)
        setModalVisible(!modalVisible)
    }

  return (
    <TouchableWithoutFeedback onPress={handleLike} onLongPress={handleModalItem}>
        <View style={styles.gridItem}>
            <TouchableOpacity  style={styles.gridItemButton}>
                <FontAwesome name="heart" size={24} color={like === item.id ? 'red' : 'white'}  />
                {/* <Image source={like ? icons.like : icons.dislike} style={styles.icon} /> */}
            </TouchableOpacity>
            <Image source={item.image} style={styles.gridItemImage} />
            <View style={{alignItems:"flex-start", marginVertical:10, justifyContent:'space-between'}}>
                <Text style={styles.gridItemPrice}>{item.type}</Text>
                <Text style={styles.gridItemTitle}>{item.name}</Text>
                <Text style={styles.gridItemPrice}>${item.price}</Text>
            </View>    
        </View>
    </TouchableWithoutFeedback>
  )
}

export default BikeItem


const styles = StyleSheet.create({
    gridItem:{
        borderWidth: 1,
        borderRadius: 12,
        borderColor: Colors.black,
        marginHorizontal: 10,
        marginVertical: 10,
        width: 150,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        // padding:5
    },
    gridItemImage:{
        width: '100%',
        height: 100,
        marginVertical: 10
    },
    gridItemButton:{
        position: 'absolute',
        top: 10,
        right: 10,
        marginBottom:10
    },
    gridItemTitle:{
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'left'
    },
    gridItemPrice:{
        fontSize: 12,
        // fontWeight: 'bold',
        color: Colors.gray,
        textAlign: 'left'
    },
    icon:{
        padding: 5,
        width: 24,
        height: 24,
        tintColor: Colors.white,
        marginHorizontal: 10
    }
})