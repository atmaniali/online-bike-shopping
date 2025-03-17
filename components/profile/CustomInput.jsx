import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { Colors } from '@/constants/Color';

const CustomInput = ({label, icon, placeholder, keyboardType, type, ...rest}) => {
    const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.inputFieldContent}>
        <Text style={styles.inputFieldText}>{label}</Text>
        <View style={styles.inputFieldDataContainer}>
            <Feather name={icon} size={24} color={Colors.white} />
            <TextInput 
            style={styles.inputFieldData} 
            placeholder={placeholder} 
            keyboardType={keyboardType}
            secureTextEntry={type === 'password' && showPassword} 
            />
            {type === 'password' && (
                <Feather 
                name={showPassword ? "eye" : "eye-off"} 
                size={24} 
                color={Colors.white} 
                onPress={() => setShowPassword(!showPassword)} 
                />
            )}
        </View>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputFieldContent: {
        marginVertical:10,
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