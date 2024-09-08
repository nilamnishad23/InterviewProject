// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
// import { register, logout } from '../services/service';
// import axios from 'axios';

// const SignUpScreen = ({ navigation }) => {
//     const [name, setName] = useState('');
//     const [phone, setPhone] = useState('');
//     const [password, setPassword] = useState('');
//     // const handleRegister = async () => {

//     //     if (!email || !password || !name) {
//     //         Alert.alert('Error', 'All fields are required');
//     //         return;
//     //     }

//     //     setLoading(true);

//     //     try {
//     //         await register({ email, password, name, phone });
//     //         Alert.alert('Success', 'Registration successful');
//     //     } catch (error) {
//     //         Alert.alert('Error', error.message || 'Registration failed');
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     const handleSignUp = async () => {
//         if (name && phone && password) {
//             try {
//                 const response = await axios.post('https://tor.appdevelopers.mobi/api/register', {
//                     name,
//                     phone,
//                     password,
//                 });
//                 console.log("response---->", response);
//                 Alert.alert('Registration successful');
//                 // navigation.navigate('SignIn'); // Navigate back to SignIn screen after successful registration
//             } catch (error) {
//                 console.error('Error posting example data=======:', error.response.data);
//                 Alert.alert('Registration failed. Please try again.');
//             }
//         } else {
//             Alert.alert('Please fill all the fields');
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Sign Up</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Your Name"
//                 value={name}
//                 onChangeText={setName}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Phone"
//                 value={phone}
//                 onChangeText={setPhone}
//                 keyboardType="phone-pad"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//             />
//             <Button title="Sign Up" onPress={handleSignUp} />
//             <Text onPress={() => navigation.navigate('SignIn')} style={styles.signInLink}>
//                 Already have an account? Sign In
//             </Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         justifyContent: 'center',
//     },
//     title: {
//         fontSize: 24,
//         textAlign: 'center',
//         marginBottom: 16,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 8,
//         marginBottom: 16,
//         borderRadius: 4,
//     },
//     signInLink: {
//         color: 'blue',
//         textAlign: 'center',
//         marginTop: 16,
//     },
// });

// export default SignUpScreen;
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
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import { ROUTES } from '../constants/routes';
import { signUp } from '../services/service';
import { COLORS } from '../utils/colors';
import { scaleWidth, scaleHeight, scaleFont } from '../utils/responsive';

// Reusable Text Component
const CustomText = ({ children, style, onPress }) => {
    return <Text style={[styles.text, style]} onPress={onPress}>{children}</Text>;
};

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (!phone || !password || !name) {
            Alert.alert('Error', 'All fields are required');
            return;
        }
        setLoading(true);
        try {
            await signUp({ phone, name, password });
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

                <Text style={{ color: COLORS.black, fontWeight: 'bold', fontSize: scaleFont(24) }}>{'Sign Up'}</Text>
                <Text style={{ marginTop: scaleHeight(5), color: COLORS.gray, fontSize: scaleFont(12) }}>{'Fill in the below form and add life to your car!'}</Text>

                <CustomTextInput
                    placeholder={'Enter your name'}
                    value={name}
                    onChangeText={setName}

                    keyboardType={'numeric'}
                    validationRule={''}
                    validationMessage={''}
                />

                <CustomTextInput
                    placeholder={'password'}
                    value={phone}
                    onChangeText={setPhone}
                    validationRule={''}
                    validationMessage={''}
                />
                <CustomTextInput
                    placeholder={'password'}
                    value={password}
                    onChangeText={setPhone}
                    secureTextEntry={true}
                    validationRule={''}
                    validationMessage={''}
                />

                {/* Bottom Section */}
                <CustomButton
                    style={styles.customButton}
                    color={COLORS.blue}
                    title={'Sign Up'}
                    onPress={handleSignUp}
                />
                <Text style={styles.signInText}>
                    <CustomText style={styles.accountText}>{'Already have an account? '}</CustomText>
                    <CustomText
                        onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
                        style={styles.signInLink}>
                        {'Sign up'}
                    </CustomText>
                </Text>
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

export default SignUpScreen;




