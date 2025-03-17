import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Feather from "react-native-vector-icons/Feather";
import { Colors } from '@/constants/Color'
import Header from '@/components/profile/Header'
import { images } from '@/constants/Icons'

const profile = () => {
  const [showPassword, setShowPassword] = React.useState(false);


  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.profileImageContainer}>
        <Image source={images.profileImage} style={styles.profileImage}/>
        <TouchableOpacity style={styles.editButton}>
            <Feather name="edit-3" size={24} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>John Doe</Text>
      </View>

      <View style={styles.inputFieldContainer}>
        <View style={styles.inputFieldContent}>
          <Text style={styles.inputFieldText}>Your Email</Text>
          <View style={styles.inputFieldDataContainer}>
            <Feather name="mail" size={24} color={Colors.white} />
            <TextInput style={styles.inputFieldData} placeholder="Enter your email" keyboardType='email-address' />
          </View>
        </View>
      </View>

      <View style={styles.inputFieldContainer}>
        <View style={styles.inputFieldContent}>
          <Text style={styles.inputFieldText}>Phone Number</Text>
          <View style={styles.inputFieldDataContainer}>
            <Feather name="phone" size={24} color={Colors.white} />
            <TextInput style={styles.inputFieldData} placeholder="Enter your email" keyboardType='phone-pad' />
          </View>
        </View>
      </View>

      <View style={styles.inputFieldContainer}>
        <View style={styles.inputFieldContent}>
          <Text style={styles.inputFieldText}>Web Site</Text>
          <View style={styles.inputFieldDataContainer}>
            <Feather name="layout" size={24} color={Colors.white} />
            <TextInput style={styles.inputFieldData} placeholder="Enter your email" keyboardType='url' />
          </View>
        </View>
      </View>

      <View style={styles.inputFieldContainer}>
        <View style={styles.inputFieldContent}>
          <Text style={styles.inputFieldText}>Password</Text>
          <View style={styles.inputFieldDataContainer}>
            <Feather name="lock" size={24} color={Colors.white} />
            <TextInput style={styles.inputFieldData} placeholder="Enter your email" secureTextEntry={showPassword} />
            <Feather name={showPassword ? "eye" : "eye-off"} size={24} color={Colors.white} onPress={() => setShowPassword(!showPassword)} />
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackGray,
        padding: 4
    },
    profileImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop:20,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 50
    },
    editButton:{
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: Colors.blueLight,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft:90,
      marginTop:-27,
      backgroundColor:"orange",
    },
    nameContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      marginTop:10,
    },
    name: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.white
    },
    inputFieldContainer: {
      // backgroundColor: 'red',
      flex:1,
      padding: 10,
      marginVertical:10,
    },
    inputFieldContent: {
      
    },
    inputFieldText: {
      fontSize: 16,
      color: Colors.white,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    inputFieldDataContainer:{
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
      borderColor: Colors.white,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10
    },
    inputFieldData: {
      flex:1,
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
      padding: 10,
    }
})
