import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import {useForm, Controller, SubmitErrorHandler} from 'react-hook-form';
import Feather from "react-native-vector-icons/Feather";
import { Colors } from '@/constants/Color';

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
  const {register, setValue, handleSubmit, control, reset, formState: {errors}} = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  const onError  = (errors) => {
    return console.log(errors);
  }

  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        <Text style={styles.textFieldContainer}>Email</Text>
        <Controller 
        control={control}
        render={({field: {onChange, onBlur, value}}) =>(
          <View>
            <Feather name="mail" size={24} color={Colors.white} style={styles.icon} />
            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={Colors.white}
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            />
          </View>
        )}
        rules={{
          required: true
          // required: 'Email is required',
          // pattern: {
          //   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          //   message: 'Invalid email format'
          // }
        }}
        />
      </View>
      <View style={styles.buttonSubmitContainer}>
        <TouchableOpacity>
          <Text>{true ? 'Sign Up' : 'Sign In'}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>{true ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default AuthForm

const styles = StyleSheet.create({
  container:{},
  fieldContainer:{},
  textFieldContainer:{},
  icon:{},
  input:{},
  buttonSubmitContainer:{},
})