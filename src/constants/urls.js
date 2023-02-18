const baseURL = process.env.REACT_APP_API;

const movie = 'movie'
const getPoster = 'https://image.tmdb.org/t/p/w500'

const urls = {
    movies: `/discover/${movie}`,
    movieById: (id) => `${movie}${id}`,
    genre: `/genre/${movie}/list`,
    search: '/search/keyword?query=super',
    poster: (posterPath) => `${getPoster}${posterPath}`,
    popular: `/${movie}/popular`,

};


export {
    baseURL,
    urls,
}
