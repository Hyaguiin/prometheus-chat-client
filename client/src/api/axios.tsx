import axios from "axios";
import { AxiosError } from "axios";
import { apiUrl,webHookUrl } from "@/utils/url_env";

console.log(`Api: `, apiUrl);
console.log(`WebHook:`, webHookUrl);
export const api = axios.create({
    baseURL: apiUrl,
    
})

export const webHook = axios.create({
    baseURL: webHookUrl,
})


