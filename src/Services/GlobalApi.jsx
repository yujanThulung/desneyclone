import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "b06c529f20f6b171b922ac056715896d";
//https://api.themoviedb.org/3/trending/all/day?api_key=b06c529f20f6b171b922ac056715896d

// const getTrendingVideos = axios.get(movieBaseUrl+"/trending/all/day?api_key="+api_key);

const getTrendingVideos = () => {
    return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
};

const getMovieByGenreId = () => axios.get(movieBaseUrl + "&with_genres=" + id);

export default {
    getTrendingVideos,
};
