import { View, FlatList, StyleSheet, Text, Platform } from 'react-native'
import React from 'react'
import BikeItem from './BikeItem'

const BikeList = ({modalVisible, setModalVisible, like, setLike, data, setModalItem}) => {
  const numberColumn = Platform.OS === 'web' ? 4 : 2


  return (
    <View style={styles.grid}>
      <FlatList  
      data={data} 
      renderItem={({item}) => <BikeItem item={item} like={like} setLike={setLike} modalVisible={modalVisible} setModalVisible={setModalVisible} setModalItem={setModalItem} />} 
      keyExtractor={item => item.id.toString()} 
      numColumns={numberColumn} 
      ListFooterComponent={Footer}
      scrollEnabled={false}
      />
    </View>
  )
}

export default BikeList

const styles = StyleSheet.create({
    grid: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

const Footer = () => {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white'}}>No more articles at the moment</Text>
        </View>
    )
}