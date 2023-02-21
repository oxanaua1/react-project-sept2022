import axios from "axios";
import {baseURL} from "../configs";

const apiService =axios.create({baseURL});
const apiKey = 'e9a488e6ea1f2a8b453bb5067ca250ce';

export {
    apiService,
    apiKey
}