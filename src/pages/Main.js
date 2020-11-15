import React, {Component} from 'react'
import Header from '../components/header'
import {getPopular,getTop,getGenres} from '../store/actions/movieActions'
import connect from "react-redux/es/connect/connect";
import Slider from '../components/slider'
import Card from '../components/movieCard'
class Main extends Component{
    componentDidMount(){
        this.props.getPopular()
        this.props.getTop()
        this.props.getGenres()
    }
  
    render(){
        const {popularMovies,topMovies,genres} = this.props.movieReducer
       
        return(
            <section>
                <Header/>
                <h1 className='h1-white'>Фильмы смотреть онлайн</h1>
                <Slider movies={popularMovies}/>
                <h1 className='h1-white'>Лучшие фильмы десятилетия</h1>
                <div className='row'>
                    {topMovies && topMovies.results ?
                    topMovies.results.map(item => (
                        <Card movie={item} genre={genres}/>
                    )):
                    null
                }
                </div>
                <h1 className='h1-white'>Легкие комедии</h1>
                <div className='row'>
                    {popularMovies && popularMovies.results ?
                    popularMovies.results.map(item => (
                        <Card movie={item} genre={genres}/>
                    )):
                    null
                }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    movieReducer:state.movieReducer
});

export default connect(mapStateToProps, {getPopular,getTop,getGenres})(Main);
