import React from 'react';
import { View, Alert, Image, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomText from '../components/CustomText';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../utils/colors';
import { signIn } from '../services/service';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';
import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number is not valid'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
});

const SignInScreen = ({ navigation }) => {

    const handleLogin = async (values, { setSubmitting, resetForm }) => {
        const { phone, password } = values;
        setSubmitting(true);
        try {
            await signIn({ phone, password });
            Alert.alert('Success', 'Sign In successful');
            resetForm();
            navigation.replace(ROUTES.HOME);
        } catch (error) {
            Alert.alert('Unauthorized. Please check your credentials.');
        } finally {
            setSubmitting(false);
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
                <CustomText style={styles.title}>{'Sign In'}</CustomText>
                <CustomText style={styles.subtitle}>{'Hi ! Welcome back,\nwe have missed you'}</CustomText>

                <Formik
                    initialValues={{ phone: '', password: '' }}
                    validationSchema={SignInSchema}
                    onSubmit={handleLogin}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting }) => (
                        <>
                            <CustomTextInput
                                title={'Phone'}
                                placeholder="Enter your phone number"
                                value={values.phone}
                                maxLength={10}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                keyboardType="phone-pad"
                                iconSource={require('../assets/images/mail.png')}
                            />
                            {touched.phone && errors.phone && <CustomText style={styles.errorText}>{errors.phone}</CustomText>}

                            <CustomTextInput
                                title={'Password'}
                                placeholder="Enter your password"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                secureTextEntry
                                iconSource={require('../assets/images/lock.png')}
                            />
                            {touched.password && errors.password && <CustomText style={styles.errorText}>{errors.password}</CustomText>}

                            <CustomText
                                style={styles.forgotPassword}
                                onPress={() => { }}
                            >
                                {'Forgot password?'}
                            </CustomText>

                            <CustomButton
                                style={styles.customButton}
                                color={COLORS.blue}
                                title="Sign In"
                                onPress={handleSubmit}
                                disabled={isSubmitting}
                            />
                        </>
                    )}
                </Formik>

                <View style={styles.orContainer}>
                    <View style={styles.divider} />
                    <CustomText style={styles.orText}>or</CustomText>
                    <View style={styles.divider} />
                </View>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image
                            resizeMode="contain"
                            source={require('../assets/images/google.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButton, styles.socialButtonMargin]}>
                        <Image
                            resizeMode="contain"
                            source={require('../assets/images/apple.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                </View>
                <CustomText style={styles.signUpText}>
                    <CustomText>{'Don’t have an account? '}</CustomText>
                    <CustomText
                        onPress={() => {
                            console.log("dfdsf", navigation);
                            navigation.replace(ROUTES.SIGN_UP);
                        }}
                        style={styles.signUpLink}
                    >
                        {'Sign up'}
                    </CustomText>
                </CustomText>
                <CustomText style={styles.termsText}>
                    {'By login or sign up, you agree to our terms of use and privacy policy'}
                </CustomText>
                <Image
                    source={require('../assets/images/signinBottom.png')}
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
        marginTop: scaleHeight(25),
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
        marginBottom: scaleHeight(20),
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
        left: 0,
        top: scaleHeight(620),
        position: 'absolute',
        width: scaleWidth(200),
        height: scaleHeight(140),
    },
    errorText: {
        color: 'red',
        fontSize: scaleFont(12),
        marginBottom: scaleHeight(5),
        textAlign: 'left',
        marginTop: scaleHeight(2)
    },
});

export default SignInScreen;



