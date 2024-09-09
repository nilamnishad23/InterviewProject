// import apiClient from './api';
// import { AsyncStorage } from 'react-native';
// // Function to post data
// export const signUp = async (password, name, phone) => {
//     console.log("datasadd-->", password, name, phone);
//     try {
//         const response = await apiClient.post('register', password, name, phone);
//         console.log("data-->", response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error posting example data=======:', error.response.data);
//         throw error;
//     }
// };

// export const signIn = async (phone, password) => {
//     try {
//         const response = await apiClient.post('login', phone, password);
//         console.log("dataasassignIn-->", typeof response.data.data.name);
//         await AsyncStorage.setItem('userName', response.data.data.name,
//         );
//         return response.data;

//     } catch (error) {
//         console.error('Error posting example data=======:', error.response.data);
//         throw error;
//     }
// };

// export const logout = async () => {
//     try {
//         const response = await apiClient.delete('logout', 284);
//         console.log("dataasas-->", response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error posting example data=======:', error.response.data);
//         throw error;
//     }
// };
// // Add more functions for other endpoints as needed
import apiClient from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Function to handle sign-up
export const signUp = async ({ password, name, phone }) => {
    console.log("Signing up with:", { password, name, phone });
    try {
        const response = await apiClient.post('register', { password, name, phone });
        console.log("Sign-up response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Sign-up error:', error.response?.data || error.message);
        throw error;
    }
};

// Function to handle sign-in
export const signIn = async ({ phone, password }) => {
    console.log("Signing in with:", { phone, password });
    try {
        const response = await apiClient.post('login', { phone, password });
        const { name } = response.data.data;
        console.log("Sign-in response:", response.data);
        await AsyncStorage.setItem('userName', name);
        return response.data;
    } catch (error) {
        console.error('Sign-in error:', error.response?.data || error.message);
        throw error;
    }
};

// Function to handle logout
export const logout = async () => {
    console.log("Logging out");
    try {
        const response = await apiClient.delete('logout', { userId: 284 });
        console.log("Logout response:", response.data);
        return response.data;
    } catch (error) {
        console.error('Logout error:', error.response?.data || error.message);
        throw error;
    }
};

// Add more functions for other endpoints as needed
