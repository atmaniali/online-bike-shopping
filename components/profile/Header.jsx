import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import { Colors } from '@/constants/Color'

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name={"arrow-back"}  size={24} color={Colors.white} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Octicons name="gear" size={24} color={Colors.white} />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: Colors.black,
    }
})