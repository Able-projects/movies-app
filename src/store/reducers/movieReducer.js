import {GET_UPCOMING,GET_PLAYING,GET_ACTOR_INFO,GET_ACTOR_CREDITS,GET_LATEST,GET_CAST,GET_RESULT,GET_POPULAR,GET_TOP,GET_MOVIE_BY_ID, GET_GENRES,GET_POPULAR_PAGE, GET_MOVIE_REVIEWS, GET_MOVIE_SIMILAR} from '../actions/types'

const initialState = {
    upcomingMovies:{},
    topMovies:{},
    latestMovies:{},
    playingMovies:{},
    popularMovies:{},
    movie: {},
    genres:{},
    popularPage:{},
    movieReviews:{},
    movieSimilar:{},
    searchResults:{},
    castResult:{},
    actorInfo:{},
    actorCredits:{}
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
        case GET_RESULT:
            return{
                ...state,
                searchResults: action.payload.data
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
        case GET_MOVIE_REVIEWS:
            return{
                ...state,
                movieReviews: action.payload.data
            }
        case GET_ACTOR_INFO:
            return{
                ...state,
                actorInfo: action.payload.data
            }
        case GET_MOVIE_SIMILAR:
            return{
                ...state,
                movieSimilar: action.payload.data
            }
        case GET_CAST:
            return{
                ...state,
                castResult: action.payload.data
            }
        case GET_ACTOR_CREDITS:
            return{
                ...state,
                actorCredits: action.payload.data
            }
        default:
            return state;
    }
}