import axios from 'axios';

const BASE_URL = 'https://tor.appdevelopers.mobi/api';

// Create an Axios instance with default configuration
const apiClient = axios.create({
    baseURL: BASE_URL, // Replace with your API base URL
    timeout: 10000, // Optional: request timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
        // Add any additional headers here if needed (e.g., Authorization tokens)
    },
});

export default apiClient;
