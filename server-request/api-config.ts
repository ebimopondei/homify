import useAuth from '../hooks/auth-provider';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { useRouter } from 'next/navigation'

const API = () => {
     const router = useRouter();
    const backendHost = "http://localhost:3000/api";
    // const backendHost = "http://10.0.12.7:3000/api";
    // const backendHost = "http://192.168.0.102:3000/api";
    // const backendHost = "https://api.sammy.reneaureits.com/api"

    const { setToken, token, logoutAuth } = useAuth();
    const api = axios.create({ baseURL: backendHost });
    const apiPrivate = axios.create({ baseURL: backendHost, withCredentials: true });
    apiPrivate.interceptors.request.use(
        (config:InternalAxiosRequestConfig) => {
            if (config && token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
    
    apiPrivate.interceptors.response.use(
        response => response,
        async (error) => {
            const prevRequest = error?.config;
            if (error?.response?.status === 401) {
                logoutAuth()
                setTimeout( ()=>router.push('/login'), 300);
            }
              
            if (error?.response?.status === 403 && !prevRequest?.sent) {
                prevRequest.sent = true;
                const res = await apiPrivate.get(`/auth/refresh`);
                setToken( res.data.token );
                const newToken = res.data.token;
                prevRequest.headers['Authorization'] = `Bearer ${newToken}`;
                return apiPrivate(prevRequest);
            }
            return error.response.data;
        }
    );

    return { api, apiPrivate, backendHost }
}

export default API;
