// src/api/apiService.js

// src/api/apiService.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // for Vite

export const apiService = {
  login: async (username, password) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/token/request/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      // Check if the login was successful (e.g., if the token is in the response)
      if (data) {
        // Save the token in localStorage for future use
        const payload = {
            access: data?.access,
            refresh: data?.refresh,
            user: data?.user
        }
        localStorage.setItem('authData', JSON.stringify(payload));
      }
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },
};
