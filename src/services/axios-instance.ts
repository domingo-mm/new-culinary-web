import axios from "axios";
import 'dotenv';

export const api = axios.create({
    baseURL: process.env.URL_EDAMAN_API,
    timeout: 5000,
    withCredentials: true,
    params: {
        type: 'public',
        app_id: process.env.KEY_ID_EDAMAN,
        app_key: process.env.KEY_APP_EDAMAN,
    },
    headers: {
        'Accept-Language': 'en',
    }
})