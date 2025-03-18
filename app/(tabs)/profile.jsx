import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { Colors } from '@/constants/Color';
import Header from '@/components/profile/Header';
import ProfileImage from '@/components/profile/ProfileImage';
import CustomInput from '@/components/profile/CustomInput';
import { images } from '@/constants/Icons';

const Profile = () => {
  const router = useRouter();

  const [image, setImage] = useState(images.profileImage);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    website: '',
    password: ''
  });

  const pickImage = useCallback(async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log("result", result.assets[0].uri);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      setImage(images.profileImage);
      console.error("Error picking image:", error);
    }
  }, []);

  const handleInputChange = useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const handleLogin = useCallback(() => {
    router.push('/auth');
  }, []);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 15}}>
      <Header />
      <ProfileImage image={image} pickImage={pickImage} />

      <View style={styles.nameContainer}>
        <Text style={styles.name}>John Doe</Text>
      </View>

      <View style={styles.inputFieldContainer}>
        <CustomInput
          label="Your Email"
          icon="mail"
          placeholder="Enter your email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <CustomInput
          label="Phone Number"
          icon="phone"
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(value) => handleInputChange('phone', value)}
        />
      </View>

      <View style={styles.inputFieldContainer}>
        <CustomInput
          label="Web Site"
          icon="layout"
          placeholder="Enter your website"
          keyboardType="url"
          value={formData.website}
          onChangeText={(value) => handleInputChange('website', value)}
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      </View>

      

    </ScrollView>
  )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.blackGray,
        padding: 4
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
      flex:1,
      padding: 10,
    },
    loginButton:{
      borderRadius: 5,
      borderColor: Colors.white,
      borderWidth: 1,
      // backgroundColor: Colors.primary,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginButtonText:{
      color: Colors.white,
      fontSize: 16,
      fontWeight: 'bold',
      // marginHorizontal: 10,
    },
});


// Improvement to make  


// 1 Component Organization
// Consider breaking down this large component into smaller reusable components:
// - ProfileImage component for the image and edit button
// - CustomInput component for the repeated input field pattern
// This would improve maintainability and reusability

// 2 Form State Management
// Consider using a form management library like Formik or React Hook Form
// Current implementation lacks form validation and proper state management
// Also consider adding a submit handler for the form

// 3 Performance Optimization
// Use React.memo() for child components to prevent unnecessary re-renders
// Consider using useCallback for event handlers

// 4 Input Field PlaceHolders
// The placeholder text is incorrect for most fields (all say "Enter your email")
// Should be specific to each field:
// - "Enter your phone number"
// - "Enter your website"
// - "Enter your password"

// 5 Accessibility
// Add accessibility labels and hints
// Example:
// <TextInput 
//   accessibilityLabel="Email input field"
//   accessibilityHint="Enter your email address here"
// />

// 6 style Improvements
// Remove commented out code (// backgroundColor: 'red')
// Consider using StyleSheet.hairlineWidth for border width
// Use constants for common values (padding, margin, fontSize)
// Consider using a theme provider for consistent styling

// 7 Error Handling
// Add error states for input fields
// Add visual feedback for validation errors
// Consider adding a loading state for form submission

// 8 Security
// Add proper input sanitization
// Consider adding rate limiting for edit attempts
// Add proper validation for email and phone formats

// 9 User Experience
// Add keyboard handling (dismissKeyboard on scroll)
// Add proper keyboard avoiding view
// Consider adding loading states for image upload

// 10 Type Safety
// Consider adding TypeScript or PropTypes
// Add proper interface definitions for the component props and state

// 11 Constants
// Move hardcoded values to constants
// Create a separate config file for form field configurations

// Testing
// Add unit tests for form validation
// Add snapshot tests for the UI
// Add integration tests for form submission

// prompte to add "Review optimized code"   "help with implementation"  "Focus on specific aspect ".
