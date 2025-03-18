import React, { memo } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { Colors } from '@/constants/Color';

const CustomInput = memo(({ 
    label, 
    icon, 
    placeholder, 
    keyboardType = 'default',
    type,
    value,
    onChangeText
}) => {
    console.log(`CustomInput ${label} rendered`); // For demonstration
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <View style={styles.inputFieldContent}>
            <Text style={styles.inputFieldText}>{label}</Text>
            <View style={styles.inputFieldDataContainer}>
                <Feather name={icon} size={24} color={Colors.white} style={styles.icon} />
                <TextInput 
                    style={styles.inputFieldData} 
                    placeholder={placeholder}
                    placeholderTextColor={Colors.white}
                    keyboardType={keyboardType}
                    secureTextEntry={type === 'password' && !showPassword}
                    value={value}
                    onChangeText={onChangeText}
                />
                {type === 'password' && (
                    <Feather 
                        name={showPassword ? "eye" : "eye-off"} 
                        size={24} 
                        color={Colors.white} 
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.icon}
                    />
                )}
            </View>
        </View>
    );
}, (prevProps, nextProps) => {
    // Only re-render if these props change
    return (
        prevProps.value === nextProps.value &&
        prevProps.placeholder === nextProps.placeholder &&
        prevProps.label === nextProps.label
    );
});

export default CustomInput;

const styles = StyleSheet.create({
    inputFieldContent: {
        marginVertical: 10,
        width: '100%',
    },
    inputFieldText: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputFieldDataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        height: 56,
    },
    inputFieldData: {
        flex: 1,
        color: Colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
        height: 56,
    },
    icon: {
        marginHorizontal: 5,
    }
});