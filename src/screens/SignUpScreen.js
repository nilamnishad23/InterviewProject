import React from 'react';
import { View, Alert, Image, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import CustomText from '../components/CustomText';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../utils/colors';
import { signUp } from '../services/service';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';
import CustomCheckbox from '../components/CustomCheckbox';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number is not valid'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    isChecked: Yup.boolean()
        .oneOf([true], 'You must agree to the terms and conditions'),
});

const SignUpScreen = ({ navigation }) => {

    const handleSignUp = async (values, { setSubmitting, resetForm }) => {
        const { phone, name, password } = values;
        setSubmitting(true);
        try {
            await signUp({ phone, name, password });
            Alert.alert('Success', 'Sign Up successful');
            resetForm();
            navigation.navigate(ROUTES.SIGN_IN);
        } catch (error) {
            Alert.alert('Error', error.message || 'Sign Up failed');
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
                <CustomText style={styles.title}>{'Sign Up'}</CustomText>
                <CustomText style={styles.subtitle}>{'Fill in the below form and add life\nto your car!'}</CustomText>
                <View style={{ zIndex: 2 }}>
                    <Formik
                        initialValues={{ name: '', phone: '', password: '', isChecked: false }}
                        validationSchema={SignUpSchema}
                        onSubmit={handleSignUp}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isSubmitting, isValid, dirty }) => (
                            <>
                                <CustomTextInput
                                    title={'Name'}
                                    placeholder="Enter your name"
                                    value={values.name}
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    iconSource={require('../assets/images/user.png')}
                                />
                                {touched.name && errors.name && <CustomText style={styles.errorText}>{errors.name}</CustomText>}

                                <CustomTextInput
                                    title={'Phone'}
                                    placeholder="Enter your phone number"
                                    value={values.phone}
                                    onChangeText={handleChange('phone')}
                                    onBlur={handleBlur('phone')}
                                    maxLength={10}
                                    keyboardType="phone-pad"
                                    iconSource={require('../assets/images/mail.png')}
                                />
                                {touched.phone && errors.phone && <CustomText style={styles.errorText}>{errors.phone}</CustomText>}

                                <CustomTextInput
                                    title={'Password'}
                                    placeholder="Password"
                                    value={values.password}
                                    onChangeText={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    secureTextEntry
                                    iconSource={require('../assets/images/lock.png')}
                                />
                                {touched.password && errors.password && <CustomText style={styles.errorText}>{errors.password}</CustomText>}

                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleHeight(20) }}>
                                    <CustomCheckbox
                                        label="Agree with Terms & Conditions"
                                        checked={values.isChecked}
                                        onChange={() => setFieldValue('isChecked', !values.isChecked)}
                                    />
                                </View>
                                {touched.isChecked && errors.isChecked && <CustomText style={[styles.errorText,]}>{errors.isChecked}</CustomText>}

                                <CustomButton
                                    style={styles.customButton}
                                    color={COLORS.blue}
                                    title="Sign Up"
                                    onPress={handleSubmit}
                                    disabled={isSubmitting || !isValid || !dirty}
                                />
                            </>
                        )}
                    </Formik>

                    <CustomText style={styles.signUpText}>
                        <CustomText>{'Already have an account? '}</CustomText>
                        <CustomText
                            onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
                            style={styles.signUpLink}
                        >
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
        marginTop: scaleHeight(20)
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
    errorText: {
        color: 'red',
        fontSize: scaleFont(12),
        marginTop: scaleHeight(2),
        // marginLeft: scaleWidth(10),
    },
});

export default SignUpScreen;





