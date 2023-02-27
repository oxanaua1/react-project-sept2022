import axios from "axios";

import {baseURL} from "../configs";
import {authService} from "./authService";


const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
        config.headers = config.headers ?? {};
        config.headers.Authorization = `Bearer + ${authService}`;
        return config
    }
)


export {
    apiService
}