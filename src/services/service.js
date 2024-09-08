import apiClient from './api';

// Function to post data
export const signUp = async (password, name, phone) => {
    console.log("datasadd-->", password, name, phone);
    try {
        const response = await apiClient.post('register', password, name, phone);
        console.log("data-->", response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting example data=======:', error.response.data);
        throw error;
    }
};

export const signIn = async (phone, password) => {
    try {
        const response = await apiClient.post('login', phone, password);
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
