import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';
import { COLORS } from '../utils/colors';

const CustomTextInput = ({
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    iconSource,
    iconRightSource,
    maxLength,
    title,
    style,
    ...props
}) => {
    const [isSecure, setIsSecure] = useState(secureTextEntry);

    return (
        <>
            <Text style={{ marginTop: scaleHeight(15), marginBottom: scaleHeight(10), fontSize: scaleFont(14), }}>{title}</Text>
            <View style={[styles.container, style]}>
                {iconSource && (
                    <Image
                        resizeMode='contain'
                        style={styles.icon}
                        source={iconSource}
                    />
                )}
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                    {...props}
                />
                {secureTextEntry && (
                    <TouchableOpacity onPress={() => setIsSecure(!isSecure)}>
                        {
                            isSecure &&
                            <Image
                                resizeMode='contain'
                                style={[styles.iconRight]}
                                source={require('../assets/images/unHide.png')}
                            />}
                        {!isSecure && <View>
                            <Image
                                resizeMode='contain'
                                style={[styles.iconRight, { zIndex: 0 }]}
                                source={require('../assets/images/unHide.png')}
                            />
                            <Text style={{ color: COLORS.gray, position: 'absolute', zIndex: 2, top: 1, left: 5 }}>\\</Text>
                        </View>
                        }

                    </TouchableOpacity>
                )}
                {iconRightSource && !secureTextEntry && (
                    <Image
                        resizeMode='contain'
                        style={styles.iconRight}
                        source={iconRightSource}
                    />
                )}
            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: COLORS.gray,
        borderRadius: scaleWidth(8),
        paddingHorizontal: scaleWidth(10),
        height: scaleHeight(53),
    },
    icon: {
        width: scaleWidth(20),
        height: scaleHeight(20),
    },
    input: {
        flex: 1,
        padding: 0,
        marginLeft: scaleWidth(10),
    },
    iconRight: {
        width: scaleWidth(20),
        height: scaleHeight(20),
    },
});

export default CustomTextInput;
