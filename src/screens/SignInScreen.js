// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import { login } from '../services/service';

// const SignInScreen = ({ navigation }) => {
//     const [phone, setPhone] = useState(0);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     // const handleLogin = async () => {
//     //     setLoading(true);
//     //     setError('');
//     //     try {
//     //         const userData = await login({ email, password });
//     //         // Handle successful login, e.g., navigate to a different screen or save user data
//     //         console.log('Login successful:', userData);
//     //         // Navigate to home screen or other authenticated screen
//     //         // navigation.navigate('Home'); // Adjust navigation target as needed
//     //     } catch (err) {
//     //         // Display error message
//     //         setError(err.message || 'An error occurred. Please try again.');
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     const handleLogin = async () => {
//         if (!email || !password || !phone) {
//             Alert.alert('Error', 'All fields are required');
//             return;
//         }
//         setLoading(true);
//         try {
//             await login({ email, phone, password });
//             Alert.alert('Success', 'login successful');
//         } catch (error) {
//             Alert.alert('Error', error.message || 'login failed');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Login</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="phone"
//                 value={phone}
//                 onChangeText={setPhone}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//             />
//             {loading ? (
//                 <ActivityIndicator size="large" color="#0000ff" />
//             ) : (
//                 <>
//                     <Button title="Login" onPress={handleLogin} />
//                     {error ? <Text style={styles.error}>{error}</Text> : null}
//                 </>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 16,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 16,
//         paddingHorizontal: 8,
//     },
//     error: {
//         color: 'red',
//         marginTop: 16,
//     },
// });

// export default SignInScreen;
import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator, Image, SafeAreaView, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../utils/colors';
import { signIn } from '../services/service';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';

// Reusable Text Component
const CustomText = ({ children, style, onPress }) => {
    return <Text style={[styles.text, style]} onPress={onPress}>{children}</Text>;
};

const SignInScreen = ({ navigation }) => {
    const [phone, setPhone] = useState(0);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async () => {
        if (!password || !phone) {
            Alert.alert('Error', 'All fields are required');
            return;
        }
        setLoading(true);
        try {
            await signIn({ phone, password });
            Alert.alert('Success', 'login successful');
        } catch (error) {
            Alert.alert('Error', error.message || 'login failed');
        } finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: scaleWidth(20) }}>
                {/* App Logo */}
                <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('../assets/images/appLogo.png')}
                    accessible={true}
                    accessibilityLabel="App Logo"
                />

                <Text style={{ color: COLORS.black, fontWeight: 'bold', fontSize: scaleFont(24) }}>{'Sign In'}</Text>
                <Text style={{ marginTop: scaleHeight(5), color: COLORS.gray, fontSize: scaleFont(12) }}>{'Hi ! Welcome back,\nhave been missed '}</Text>

                <CustomTextInput
                    placeholder={'+91 8564875268'}
                    value={phone}
                    onChangeText={setPhone}

                    keyboardType={'numeric'}
                    validationRule={''}
                    validationMessage={''}
                />

                <CustomTextInput
                    placeholder={'password'}
                    value={phone}
                    onChangeText={setPhone}
                    secureTextEntry={true}
                    validationRule={''}
                    validationMessage={''}
                />


                {/* Bottom Section */}
                <CustomButton
                    style={styles.customButton}
                    color={COLORS.blue}
                    title={'Sign In'}
                    onPress={handleLogin}
                />
                <Text style={styles.signInText}>
                    <CustomText style={styles.accountText}>{'Don’t have an account? '}</CustomText>
                    <CustomText
                        onPress={() => navigation.navigate(ROUTES.SIGN_UP)}
                        style={styles.signInLink}>
                        {'Sign up'}
                    </CustomText>
                </Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: "center", width: scaleWidth(43), height: scaleHeight(43), borderWidth: 1, borderRadius: scaleHeight(43) / 2 }}>
                        <Image resizeMode='contain' source={require('../assets/images/google.png')} style={{ width: scaleWidth(15), height: scaleHeight(15) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: "center", width: scaleWidth(43), height: scaleHeight(43), borderWidth: 1, borderRadius: scaleHeight(43) / 2 }}>
                        <Image resizeMode='contain' source={require('../assets/images/apple.png')} style={{ width: scaleWidth(15), height: scaleHeight(15) }} />
                    </TouchableOpacity>
                </View>
                <CustomText style={[styles.accountText, { marginVertical: scaleHeight(20), textAlign: 'center', width: '80%', alignSelf: 'center' }]}>{'By login or sign up, you agree to our terms of use and privacy policy'}</CustomText>
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
    customButton: {
        marginTop: scaleHeight(35),
        width: scaleWidth(300),
        alignSelf: 'center',
    },
    title: {
        marginVertical: scaleHeight(60),
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: scaleFont(24),
        color: COLORS.black,
    },
    signInText: {
        textAlign: 'center',
        marginTop: scaleHeight(15),
    },
    accountText: {
        fontSize: scaleFont(12),
        color: COLORS.gray,
    },
    signInLink: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        fontSize: scaleFont(14),
        color: COLORS.darkBlue,
    },
    text: {
        fontSize: scaleFont(14),
    },
});

export default SignInScreen;



