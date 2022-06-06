const apiKey = "f54a92a30b06362db253c751ebe43cb5"


const request = {
    fetchLastest: `discover/tv?api_key=${apiKey}&language=en-US`,
    fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}&language=en-US`,
    fetchTV: `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US`,
    fetchTop: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`,
    fethcUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`,
    fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`
}

export default request