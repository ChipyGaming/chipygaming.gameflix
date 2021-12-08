import axios from "axios";
import key from "../env";

const serviceInstance = axios.create({
    baseURL: "https://api.igdb.com/v4",
    Headers: { Accept: "application/json"},
    timeout: 10000

});

export default{
    getPopularGames() {
        return serviceInstance.get(`/games/rating?api_key=${key.apiKey}`)
    },
    getTrendingMovies() {
        return serviceInstance.get(`/trending/movie/week?api_key=${key.apiKey}`);
    },
      getTopMovies() {
        return serviceInstance.get(`/movie/top_rated?api_key=${key.apiKey}`);
    }
};