import {IP, GET_MOVIE_BY_ID,GET_LATEST,key,GET_ERRORS,GET_ACTOR_INFO,GET_ACTOR_CREDITS, GET_POPULAR,GET_CAST, GET_PLAYING, GET_UPCOMING,GET_RESULT, GET_TOP,GET_GENRES,GET_POPULAR_PAGE,GET_MOVIE_REVIEWS,GET_MOVIE_SIMILAR} from './types'
import axios from 'axios/index'

export const getLatest = () => dispatch => {
    axios.get(IP + 'movie/latest?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_LATEST,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}

export const getGenres = () => dispatch => {
    axios.get(IP + 'genre/movie/list?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_GENRES,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}
export const getPopular = () => dispatch => {
    axios.get(IP + 'movie/popular?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_POPULAR,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}
export const getPopularbyPage = (page) => dispatch => {
    axios.get(IP + 'movie/popular?api_key=' + key + '&language=ru-RU&page=' + page)
    .then(response => {
        return dispatch ({
            type:GET_POPULAR_PAGE,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}
export const getPlaying = () => dispatch => {
    axios.get(IP + 'movie/now_playing?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_PLAYING,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    })
}
export const getUpcoming = () => dispatch => {
    axios.get(IP + 'movie/upcoming?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_UPCOMING,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}
export const getTop = () => dispatch => {
    axios.get(IP + 'movie/top_rated?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_TOP,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}

export const getMovieById = (id) => dispatch => {
    axios.get(IP + 'movie/' + id + '?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_MOVIE_BY_ID,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}

export const getMovieReviews = (id) => dispatch => {
    axios.get(IP + 'movie/' + id + '/reviews?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_MOVIE_REVIEWS,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}

export const getMovieSimilars = (id) => dispatch => {
    axios.get(IP + 'movie/' + id + '/similar?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_MOVIE_SIMILAR,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}

export const getSearchResult = (movie) => dispatch => {
    axios.get(IP + 'search/movie?api_key=' + key + '&language=ru-RU&page=1&query=' + movie)
    .then(response => {
        return dispatch ({
            type:GET_RESULT,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}

export const getMovieCast = (movie) => dispatch => {
    axios.get(IP + 'movie/' + movie + '/credits?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_CAST,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}

export const getActorInfo = (id) => dispatch => {
    axios.get(IP + 'person/' + id + '?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_ACTOR_INFO,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}

export const getActorCredits = (id) => dispatch => {
    axios.get(IP + 'person/' + id + '/movie_credits?api_key=' + key + '&language=ru-RU')
    .then(response => {
        return dispatch ({
            type:GET_ACTOR_CREDITS,
            payload:response
        })
    }).catch(err =>{
        return dispatch({
            type:GET_ERRORS,
            payload:err.response
        })
    })
}