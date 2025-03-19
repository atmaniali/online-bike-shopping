import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Button } from 'react-native';
import {useForm, Controller, SubmitErrorHandler} from 'react-hook-form';
import Feather from "react-native-vector-icons/Feather";
import { Colors } from '@/constants/Color';
import Constants from 'expo-constants';

// type FormData = {
//     email: string;
//     password: string;
//     confirmPassword?: string;
// }

// interface Props{
//   isRegister: boolean;
//   setIsRegister?: (value: boolean) => void;
// }

const AuthForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [isRegister, setIsRegister] = React.useState(false);
  const {register, setValue, handleSubmit, control, reset, formState: {errors}} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  const onError  = (errors) => {
    return console.log(errors);
  }
 // TODO: customize the eye button to select only one field 
  return (
    <View style={styles.container}>
        {/* Email  */}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Email</Text>
        <Controller
         control={control}
         name="email"
         rules={{required: true}}
         render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.inputFieldContainer}>
                <Feather name="mail" size={24} color={Colors.white} />
                <TextInput 
                    style={styles.input} 
                    value={value} 
                    onChangeText={onChange} 
                    onBlur={onBlur} placeholder="Enter your email" 
                    keyboardType="email-address" 
                    autoCapitalize="none" 
                    autoCorrect={false}/>
            </View>
         )}
         />
      </View>
    {/* password */}
      <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Password</Text>
        <Controller
         control={control}
         name="password"
         rules={{required: true}}
         render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.inputFieldContainer}>
                <Feather name="lock" size={24} color={Colors.white} />
                <TextInput 
                    style={styles.input} 
                    value={value} 
                    onChangeText={onChange} 
                    onBlur={onBlur} placeholder="Enter your password" 
                    keyboardType="default" 
                    autoCapitalize="none" 
                    autoCorrect={false}
                    secureTextEntry={showPassword}/>
                <Feather 
                        name={showPassword ? "eye" : "eye-off"}
                        size={24} 
                        color={Colors.white} 
                        style={styles.icon}
                        onPress={() => setShowPassword(!showPassword)}
                    />    
            </View>
         )}
         />
      </View>
         {/* confirm password */}
      {isRegister && <View style={styles.fieldContainer}>
        <Text style={styles.fieldLabel}>Confirm Password</Text>
        <Controller
         control={control}
         name="confirmPassword"
         rules={{required: true}}
         render={({field: {onChange, onBlur, value}}) => (
            <View style={styles.inputFieldContainer}>
                <Feather name="lock" size={24} color={Colors.white} />
                <TextInput 
                    style={styles.input} 
                    value={value} 
                    onChangeText={onChange} 
                    onBlur={onBlur} placeholder="Enter your confirm password" 
                    keyboardType="default" 
                    autoCapitalize="none" 
                    autoCorrect={false}
                    secureTextEntry={showConfirmPassword}/>
                <Feather 
                        name={showConfirmPassword ? "eye" : "eye-off"}
                        size={24} 
                        color={Colors.white} 
                        style={styles.icon}
                        onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                    />    
            </View>
         )}
         />
      </View>}
    {/* Buttons  */}
      <View style={styles.buttonContainer}>
        <Button 
        title={isRegister ? "Register" : "Login"} 
        onPress={handleSubmit(onSubmit)} 
        // color={Colors.gray} 
        style={styles.button} />
        <TouchableOpacity onPress={() => setIsRegister(!isRegister)}>
            <Text style={styles.buttonText}>{isRegister ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default AuthForm

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        marginTop:5
    },
    fieldContainer: {
        marginBottom: 10
    },
    fieldLabel: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    inputFieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderColor: Colors.white,
        borderWidth: 1,
        padding: 10,
        height: 56,
        marginBottom: 10
    },
    input: {
        flex: 1,
        color: Colors.white,
        height: 56
    },
    buttonContainer:{
        flex:1,
        // justifyContent: 'center',
        
    },
    button:{
        // width: '100%',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    buttonText:{
        color: Colors.white,
        fontSize: 16,
        // fontWeight: 'bold'
    }
})