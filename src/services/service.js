import apiClient from './api';

// Function to post data
export const register = async (email, password, name, phone) => {
    console.log("datasadd-->", email, password, name, phone);
    try {
        const response = await apiClient.post('register', email, password, name, phone);
        console.log("data-->", response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting example data=======:', error.response.data);
        throw error;
    }
};

export const login = async (email, phone, password) => {
    try {
        const response = await apiClient.post('login', email, phone, password);
        console.log("dataasas-->", response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting example data=======:', error.response.data);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await apiClient.delete('logout', 284);
        console.log("dataasas-->", response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting example data=======:', error.response.data);
        throw error;
    }
};
// Add more functions for other endpoints as needed
