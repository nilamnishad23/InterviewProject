// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { COLORS } from '../utils/colors';
import { scaleFont, scaleWidth } from '../utils/responsive';

// CustomButton component definition
const CustomButton = ({ onPress, title, color = '#007bff', style }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, { backgroundColor: color }, style]}>
            <Text style={[styles.text]}>{title}</Text>
        </TouchableOpacity>
    );
};

// Default styles for the button
const styles = StyleSheet.create({
    button: {
        padding: scaleWidth(12),
        borderRadius: scaleWidth(50),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Platform.OS === 'ios' ? '#000' : 'rgba(148,207,255,0.4)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,

    },
    text: {
        fontSize: scaleFont(16),
        fontWeight: 'bold',
        color: COLORS.darkBlue
    },
});

export default CustomButton;
