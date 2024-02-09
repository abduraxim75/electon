import axios from "axios";

const instance = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_URL,
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
        "Accses-Control-Allow-Origin":"*",
        "Authorization":"Bearer " + localStorage.getItem("token") as string
    }
})

export default instance