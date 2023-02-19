const baseURL = process.env.REACT_APP_API;

const movie = 'movie'

const urls = {
    movies: `/discover/${movie}`,
    movieById: (id) => `${movie}/${id}`,
    genre: `/genre/${movie}/list`,
    search: '/search/keyword?query=',
    popular: `/${movie}/popular`,

};


export {
    baseURL,
    urls,
}
