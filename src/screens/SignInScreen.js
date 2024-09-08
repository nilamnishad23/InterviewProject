import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { login } from '../services/service';

const SignInScreen = ({ navigation }) => {
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // const handleLogin = async () => {
    //     setLoading(true);
    //     setError('');
    //     try {
    //         const userData = await login({ email, password });
    //         // Handle successful login, e.g., navigate to a different screen or save user data
    //         console.log('Login successful:', userData);
    //         // Navigate to home screen or other authenticated screen
    //         // navigation.navigate('Home'); // Adjust navigation target as needed
    //     } catch (err) {
    //         // Display error message
    //         setError(err.message || 'An error occurred. Please try again.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleLogin = async () => {
        if (!email || !password || !phone) {
            Alert.alert('Error', 'All fields are required');
            return;
        }
        setLoading(true);
        try {
            await login({ email, phone, password });
            Alert.alert('Success', 'login successful');
        } catch (error) {
            Alert.alert('Error', error.message || 'login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="phone"
                value={phone}
                onChangeText={setPhone}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                    <Button title="Login" onPress={handleLogin} />
                    {error ? <Text style={styles.error}>{error}</Text> : null}
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginTop: 16,
    },
});

export default SignInScreen;
