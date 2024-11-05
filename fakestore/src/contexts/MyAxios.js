//axios konfigurációs fájl
import axios from "axios";

//saját myaxios példány létrehozása és configurálása
export const myAxios = axios.create({
    baseURL: 'https://fakestoreapi.com',
    timeout: 10000,
    headers: {
        'Content-Type' : 'application/json',
    },
});