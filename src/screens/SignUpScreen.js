import React, { useState } from 'react';
import { View, Alert, Image, SafeAreaView, StatusBar, ScrollView, StyleSheet, } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomText from '../components/CustomText';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../utils/colors';
import { signUp } from '../services/service';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';
import CustomCheckbox from '../components/CustomCheckbox';

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isChecked, setIsChecked] = useState(false);



    const handleSignUp = async () => {
        if (!phone || !password || !name || !isChecked) {
            Alert.alert('Error', 'All fields are required');
            return;
        }
        setLoading(true);
        try {
            await signUp({ phone, name, password });
            Alert.alert('Success', 'Sign Up successful');
            setName('');
            setPhone('');
            setPassword('');
            navigation.navigate(ROUTES.SIGN_IN)
        } catch (error) {
            Alert.alert('Error', error.message || 'Sign Up failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: scaleWidth(20) }}>
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('../assets/images/appLogo.png')}
                    accessible
                    accessibilityLabel="App Logo"
                />
                <CustomText style={styles.title}>{'Sign Up'}</CustomText>
                <CustomText style={styles.subtitle}>{'Fill in the below form and add life\nto your car!'}</CustomText>
                <CustomTextInput
                    title={'Name'}
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                    iconSource={require('../assets/images/user.png')}
                />
                <CustomTextInput
                    title={'Phone'}
                    placeholder="Enter your phone number"
                    value={phone}
                    onChangeText={setPhone}
                    maxLength={10}
                    keyboardType="phone-pad"
                    iconSource={require('../assets/images/mail.png')}
                />
                <CustomTextInput
                    title={'Password'}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    iconSource={require('../assets/images/lock.png')}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: scaleHeight(20) }}>

                    <CustomCheckbox
                        label="Agree with Terms & Conditions"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                    />

                </View>
                <View style={{ zIndex: 2 }}>
                    <CustomButton
                        style={styles.customButton}
                        color={COLORS.blue}
                        title="Sign Up"
                        onPress={handleSignUp}
                    />
                    <CustomText style={styles.signUpText}>
                        <CustomText>{'Already have an account? '}</CustomText>
                        <CustomText
                            onPress={() => {
                                setName('');
                                setPhone('');
                                setPassword('');
                                navigation.navigate(ROUTES.SIGN_IN)
                            }}
                            style={styles.signUpLink}>
                            {'Sign In'}
                        </CustomText>
                    </CustomText>
                    <CustomText style={styles.termsText}>
                        {'By login or sign up, you agree to our terms of use and privacy policy'}
                    </CustomText>
                </View>

                <Image
                    source={require('../assets/images/signupBottom.png')}
                    style={styles.bottomImage}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    logo: {
        marginTop: scaleHeight(10),
        width: scaleWidth(233),
        height: scaleHeight(170),
        alignSelf: 'center',
    },
    title: {
        color: COLORS.black,
        fontWeight: 'bold',
        fontSize: scaleFont(24),
        textAlign: 'left',
        marginBottom: scaleWidth(10)
    },
    subtitle: {
        marginBottom: scaleHeight(10),
        color: COLORS.gray,
        fontSize: scaleFont(12),
        textAlign: 'left',
    },
    customButton: {

        width: scaleWidth(300),
        alignSelf: 'center',
    },
    forgotPassword: {
        marginTop: scaleHeight(10),
        textAlign: 'right',
        textDecorationLine: 'underline',
        fontSize: scaleFont(14),
        color: COLORS.black,
    },
    orContainer: {
        marginTop: scaleHeight(15),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        width: scaleWidth(100),
        height: scaleHeight(1),
        backgroundColor: COLORS.skyBlue,
    },
    orText: {
        marginHorizontal: scaleHeight(10),
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: scaleHeight(20),
    },
    socialButton: {
        borderColor: COLORS.skyBlue,
        justifyContent: 'center',
        alignItems: 'center',
        width: scaleWidth(40),
        height: scaleHeight(40),
        borderWidth: 1,
        borderRadius: scaleHeight(20),
    },
    socialButtonMargin: {
        marginLeft: scaleHeight(10),
    },
    socialIcon: {
        width: scaleWidth(15),
        height: scaleHeight(15),
    },
    signUpText: {
        textAlign: 'center',
        marginVertical: scaleHeight(15),
    },
    signUpLink: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: scaleFont(14),
        color: COLORS.darkBlue,
    },
    termsText: {
        fontSize: scaleFont(12),
        color: COLORS.gray,
        textAlign: 'center',
        width: '80%',
        alignSelf: 'center',
    },
    bottomImage: {
        bottom: 0,
        right: 0,
        top: scaleHeight(620),
        position: 'absolute',
        width: scaleWidth(200),
        height: scaleHeight(140),
        zIndex: 1
    },
});

export default SignUpScreen;







