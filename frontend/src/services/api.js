/** const API_URL = import.meta.env.VITE_API_URL || 'http://twiceland-api.test/api';


/**  Mengambil data update dari laravel pgsql    

export async function getUpdatesFromApi() {
    try {
        const res = await fetch(`${API_URL}/updates`);
        if (!res.ok) {
            throw new Error(`HTTP Error: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.warn("Gagal terhubung ke laravel API, menggunakan data cadangan offline", error);
        return null;
    }

} */

import axios from 'axios';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://twiceland-api.test/api/v1',
    headers: { Accept: 'application/json' },
    timeout: 10000,
});

// Global error interceptor (istilah: middleware di frontend)
api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error('[API]', err.response?.status, err.message);
        return Promise.reject(err);
    }
);