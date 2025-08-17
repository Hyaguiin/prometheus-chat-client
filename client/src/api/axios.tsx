import axios from "axios";
import { AxiosError } from "axios";
import { apiUrl,webHookUrl } from "@/utils/url_env";
import { headers } from "next/headers";

console.log(`Api: `, apiUrl);
console.log(`WebHook:`, webHookUrl);
export const api = axios.create({
    baseURL: apiUrl,
    
})

export const webHook = axios.create({
    baseURL: webHookUrl,
})


api.interceptors.request.use((config)=>{
    const token =  localStorage.getItem('token');
    if(!token){
        throw new Error(`Token faltando`);
    }
    if(token.startsWith('Bearer ')){
        config.headers.Authorization === `Bearer ${token}`
    }
    return config;
})

