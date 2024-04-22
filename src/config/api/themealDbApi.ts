import axios from "axios";
import { API_URL, API_URL_DESSERT } from "../../constants";


 const themealDbApiAllDeserts = axios.create({
    headers:{
        'Content-Type': 'application/json'
    }
})
 const themealDbApiDessertByID = axios.create({
    headers:{
        'Content-Type': 'application/json'
    }
})


export {
    themealDbApiAllDeserts,
    themealDbApiDessertByID

}