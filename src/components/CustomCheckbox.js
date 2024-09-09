// CustomCheckbox.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../utils/colors';
import { scaleFont, scaleHeight, scaleWidth } from '../utils/responsive';

const CustomCheckbox = ({ label, checked, onChange }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={onChange} style={[styles.checkbox, checked && styles.checkedCheckbox]} />
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: scaleWidth(20),
        height: scaleHeight(20),
        borderWidth: 1,
        borderColor: COLORS.gray,
        marginRight: scaleWidth(10),
    },
    checkedCheckbox: {
        backgroundColor: COLORS.gray,
    },
    label: {
        fontSize: scaleFont(14),
        color: COLORS.black,
    },
});

export default CustomCheckbox;
