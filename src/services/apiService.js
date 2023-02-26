// import axios from "axios";
// import {baseURL} from "../configs";
//
// const apiService =axios.create({baseURL});
//
//
// export {
//     apiService,
//
// }
import axios from "axios";

import {baseURL} from "../configs";
import {authService} from "./authService";


const apiService = axios.create({baseURL});


apiService.interceptors.request.use((config) => {

    // const access = authService;
    config["headers"] = config.headers ?? {};
    config.headers.Authorization = `${authService}`;

    return config
})



export {
    apiService
}