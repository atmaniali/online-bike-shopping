import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color';

const ModalInfoCard = ({handleShowDescription}) => {
  return (
    <View style={styles.modalInfoCard}>
        <View style={styles.modalCardFooter}>
        <TouchableOpacity style={styles.ModalButton} onPress={handleShowDescription}>
            <Text style={styles.ModalButtonText}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ModalButton}>
            <Text style={styles.ModalButtonText}>Specification</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    modalInfoCard:{
        flex:1,
        width: '100%',
        // backgroundColor :'red',
        padding: 30,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    ModalButton:{
        borderWidth:1,
        borderColor:Colors.blackgray,
        borderRadius: 12,
        padding: 10
    },
    ModalButtonText:{
        fontSize:16,
        color: Colors.white
    },
    modalCardFooter:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height: 100,
        flexDirection: 'row',
        borderWidth:1,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor: Colors.blackGray
    },
})


export default ModalInfoCard