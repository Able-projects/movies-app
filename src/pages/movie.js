import React, {Component} from 'react'
import Header from '../components/header'
import {getMovieById,getMovieSimilars,getGenres} from '../store/actions/movieActions'
import connect from "react-redux/es/connect/connect";
import Card from '../components/movieCard/index'
import Footer from '../components/footer'
class MoviePage extends Component{
    componentDidMount(){
        window.scroll(0,0)
        this.props.getMovieById(this.props.match.params.mid)
        this.props.getMovieSimilars(this.props.match.params.mid)
        this.props.getGenres()
    }
  
    render(){
        const {movie,movieSimilar,genres} = this.props.movieReducer
      
        return(
            <section >
                <Header/>
                <h1 className='h1-white'>{movie.title}</h1>
                <div className='genre-row'>
                    <table className='movie-table'>
                        <tr>
                            <td>Год</td>
                            <td className='td-white'>{movie.release_date}</td>
                        </tr>
                        <tr>
                            <td>Рейтинг</td>
                            <td className='td-white'>{movie.vote_average}</td>
                        </tr>
                        <tr>
                            <td>Популярность</td>
                            <td className='td-blue'>{movie.popularity}</td>
                        </tr>
                        <tr>
                            <td>Жанры</td>
                            <td className='td-blue'>
                            {movie && movie.genres ? movie.genres.map(item=>(
                                <span>{item.name},</span>
                            )):
                            null}
                           </td>
                        </tr>
                        <tr>
                            <td>Длительность</td>
                            <td className='td-blue'>{movie.runtime} минуты</td>
                        </tr>
                        <tr>
                            <td>Возраст</td>
                            {movie.adult ?
                            <td className='td-blue'>18+</td>:
                            <td className='td-blue'>6+</td>
                            }
                        </tr>
                        <tr>
                            <td>Бюджет</td>
                            <td className='td-blue'>{movie.budget}</td>
                        </tr>
                        <tr>
                            <td>
                                <button className='watcth-btn'>Смотреть</button>
                            </td>
                            <td>
                                <button className='trl-btn'>Трейлер</button>
                            </td>
                        </tr>
                    </table>
                    <div className='movie-img'>
                        <img src={'https://image.tmdb.org/t/p/original/'+movie.backdrop_path} alt='image11'/>
                    </div>
                </div>
                <div className='genre-row'>
                    <p className='overview-p'>{movie.overview}</p>
                    <div>
                        <p className='p-grey'>Звуковые дорожки</p>
                        <p className='p-white'>{movie && movie.spoken_languages ? movie.spoken_languages.map(item=>(
                            <span>{item.english_name},</span>
                        )):null}</p>
                    </div>
                </div>
                <h1 className='h1-white'>Похожее</h1>
                <div className='row'>
                    {movieSimilar && movieSimilar.results ?
                    movieSimilar.results.map(item => (
                        <Card movie={item} genre={genres}/>
                    )):
                    null
                }
                </div>
                <Footer/>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    movieReducer:state.movieReducer
});

export default connect(mapStateToProps, {getMovieById,getMovieSimilars,getGenres})(MoviePage);
