import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { scaleFont } from '../utils/responsive';

const CustomText = ({ children, style, onPress }) => {
    return (
        <Text style={[styles.text, style]} onPress={onPress}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: scaleFont(14),
    },
});

export default CustomText;
