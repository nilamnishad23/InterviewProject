
import apiClient from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to handle sign-up
export const signUp = async ({ password, name, phone }) => {

    try {
        const response = await apiClient.post('register', { password, name, phone });
        return response.data;
    } catch (error) {
        console.error('Sign-up error:', error.response?.data || error.message);
        throw error;
    }
};

// Function to handle sign-in
export const signIn = async ({ phone, password }) => {

    try {
        const response = await apiClient.post('login', { phone, password });
        const { name } = response.data.data;
        await AsyncStorage.setItem('userName', name);
        return response.data;
    } catch (error) {
        console.error('Sign-in error:', error.response?.data || error.message);
        throw error;
    }
};

// Function to handle logout
export const logout = async () => {

    try {
        const response = await apiClient.delete('logout', { userId: 284 });
        return response.data;
    } catch (error) {
        console.error('Logout error:', error.response?.data || error.message);
        throw error;
    }
};

// Add more functions for other endpoints as needed
