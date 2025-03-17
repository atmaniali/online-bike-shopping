import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Color'
import Header from '@/components/profile/Header'

const profile = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackGray,
    }
})
