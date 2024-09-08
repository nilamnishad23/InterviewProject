import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const CustomTextInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    validationRule,
    validationMessage,
    ...props
}) => {
    const [isValid, setIsValid] = useState(true);

    const handleTextChange = (text) => {
        onChangeText(text);
        if (validationRule) {
            setIsValid(validationRule.test(text));
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, !isValid && styles.errorInput]}
                placeholder={placeholder}
                value={value}
                onChangeText={handleTextChange}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                {...props}
            />
            {!isValid && <Text style={styles.errorText}>{validationMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
});

export default CustomTextInput;
