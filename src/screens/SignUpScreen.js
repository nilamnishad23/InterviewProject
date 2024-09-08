import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { register, logout } from '../services/service';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    // const handleRegister = async () => {

    //     if (!email || !password || !name) {
    //         Alert.alert('Error', 'All fields are required');
    //         return;
    //     }

    //     setLoading(true);

    //     try {
    //         await register({ email, password, name, phone });
    //         Alert.alert('Success', 'Registration successful');
    //     } catch (error) {
    //         Alert.alert('Error', error.message || 'Registration failed');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSignUp = async () => {
        if (name && phone && password) {
            try {
                const response = await axios.post('https://tor.appdevelopers.mobi/api/register', {
                    name,
                    phone,
                    password,
                });
                console.log("response---->", response);
                Alert.alert('Registration successful');
                // navigation.navigate('SignIn'); // Navigate back to SignIn screen after successful registration
            } catch (error) {
                console.error('Error posting example data=======:', error.response.data);
                Alert.alert('Registration failed. Please try again.');
            }
        } else {
            Alert.alert('Please fill all the fields');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Sign Up" onPress={handleSignUp} />
            <Text onPress={() => navigation.navigate('SignIn')} style={styles.signInLink}>
                Already have an account? Sign In
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginBottom: 16,
        borderRadius: 4,
    },
    signInLink: {
        color: 'blue',
        textAlign: 'center',
        marginTop: 16,
    },
});

export default SignUpScreen;
