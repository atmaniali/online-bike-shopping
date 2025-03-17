import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Feather from "react-native-vector-icons/Feather";
import { Colors } from '@/constants/Color';
import { images } from '@/constants/Icons'

const ProfileImage = () => {
    const [image, setImage] = React.useState(images.profileImage);

    const pickImage = async () => {
        // No permissions request is necessary for photo library
        console.log('image picker')
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['image', 'video'],
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (result.canceled) {
          setImage(images.profileImage);
        } else {
          setImage(result.assets[0].uri);
        }
      };


  return (
    <View style={styles.profileImageContainer}>
        <Image source={image} style={styles.profileImage}/>
        <TouchableOpacity style={styles.editButton} onPress={pickImage}>
            <Feather name="edit-3" size={24} color={Colors.white} />
        </TouchableOpacity>
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
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
})