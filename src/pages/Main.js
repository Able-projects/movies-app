import React, {Component} from 'react'
import Header from '../components/header'
import {getPopular} from '../store/actions/movieActions'
import connect from "react-redux/es/connect/connect";
import Slider from '../components/slider'
class Main extends Component{
    componentDidMount(){
        this.props.getPopular()
    }
  
    render(){
        const {popularMovies} = this.props.movieReducer
       
        return(
            <section>
                <Header/>
                <h1 className='h1-white'>Фильмы смотреть онлайн</h1>
               <Slider movies={popularMovies}/>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    movieReducer:state.movieReducer
});

export default connect(mapStateToProps, {getPopular})(Main);
