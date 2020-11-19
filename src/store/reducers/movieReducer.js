import {GET_UPCOMING,GET_PLAYING,GET_LATEST,GET_POPULAR,GET_TOP,GET_MOVIE_BY_ID, GET_GENRES,GET_POPULAR_PAGE} from '../actions/types'

const initialState = {
    upcomingMovies:{},
    topMovies:{},
    latestMovies:{},
    playingMovies:{},
    popularMovies:{},
    movie: {},
    genres:{},
    popularPage:{}
}
// eslint-disable-next-line
export default function (state=initialState,action){
    switch(action.type){
        case GET_UPCOMING:
            return{
                ...state,
                upcomingMovies: action.payload.data
            }
        case GET_TOP:
            return{
                ...state,
                topMovies: action.payload.data
            }
        case GET_POPULAR_PAGE:
            return{
                ...state,
                popularPage: action.payload.data
            }
        case GET_POPULAR:
            return{
                ...state,
                popularMovies: action.payload.data
            }
        case GET_PLAYING:
            return{
                ...state,
                playingMovies: action.payload.data
            }
        case GET_LATEST:
            return{
                ...state,
                latestMovies: action.payload.data
            }
        case GET_GENRES:
            return{
                ...state,
                genres: action.payload.data
            }
        case GET_MOVIE_BY_ID:
            return{
                ...state,
                movie: action.payload.data
            }
        default:
            return state;
    }
}