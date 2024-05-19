import axios from "axios";
// import TMDB_TOKEN from "../.env"

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
const headers={
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWE0YTdhYzExMWRhYjAwOTI3YTUwYWIwZjU2MjI4ZCIsInN1YiI6IjY2MDNmZDBjMWIxZjNjMDE3YzllYTFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zPnhbTcgfuH8zzst4OoKkpm4tYzv61s61UkpO9g7cEA'
};
export const fetchDataFromApi = async(url, params)=>{
    try{
        const {data} = await axios.get(BASE_URL + url, {
         headers,
         params 
        })
        return data;
    } catch(err){
        console.log(err);
        return err;
    }
}