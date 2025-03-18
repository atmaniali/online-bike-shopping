import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, {useCallback, useState} from 'react'
import { Colors } from '@/constants/Color';
import { images } from '@/constants/Icons';
import CustomInput from '@/components/profile/CustomInput';

const index = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
      });
      const [register, setRegister] = useState(false);

      const handleInputChange = useCallback((field, value) => {
        setFormData(prev => ({
          ...prev,
          [field]: value
        }));
      }, []);

      const handleLogin = useCallback(() => {
        // Add login logic here
      }, []);

      const handleRegister = useCallback(() => {
        // Add register logic here
      }, []);

      const handleSwitchLoginOrRegister = useCallback(() => {
        setRegister(prev => !prev);
      }, []);


  return (
    <View style={styles.container}>
        <ImageBackground source={images.background} style={{flex:1, resizeMode: 'center'}}>
            <View style={styles.logoContainer}>
                <Image source={images.logo} style={styles.logo} />
            </View>
            <Text style={styles.title}>Welcome to Online Bike Shopping</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
            <View style={styles.inputFieldContainer}>
                <CustomInput
                label="Email"
                icon="mail"
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
                />
            </View>

            <View style={styles.inputFieldContainer}>
                <CustomInput
                label="Password"
                icon="lock"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                onChangeText={(value) => handleInputChange('password', value)}
                />
            </View>

            {register && (
                <View style={styles.inputFieldContainer}>
                <CustomInput
                    label="Confirm Password"
                    icon="lock"
                    placeholder="Confirm your password"
                    type="password"
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleInputChange('confirmPassword', value)}
                />
                </View>
            )}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={register ? handleRegister : handleLogin}>
                <Text style={styles.loginButtonText}>{register ? 'Sign Up' : 'Sign In'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSwitchLoginOrRegister}>
                <Text style={styles.text}>{register ? 'Already have an account? Login' : 'Don\'t have an account? Sign Up'}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackGray,
        padding: 10,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
        marginTop: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: Colors.white,
        marginTop: 10,
        textAlign: 'center'
    },
    inputFieldContainer: {
        // flex:1,
        // padding: 10,
      },
      buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 10
      },
      loginButton: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: Colors.white,
        borderWidth: 1,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center'
    },
      loginButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
      },
      registerText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold'
      },
      text:{
        color: Colors.white,
        fontSize: 16,
        // fontWeight: 'bold'
      }
})