import React, {Component} from 'react'
import Header from '../components/header'
import {getPopular,getTop,getGenres,getPlaying,getUpcoming,getPopularbyPage} from '../store/actions/movieActions'
import connect from "react-redux/es/connect/connect";
import Slider from '../components/slider'
import Card from '../components/movieCard'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom'
class Main extends Component{
    componentDidMount(){
        this.props.getPopular()
        this.props.getTop()
        this.props.getGenres()
        this.props.getPlaying()
        this.props.getUpcoming()
        this.props.getPopularbyPage(30)
    }
  
    render(){
        const {popularMovies,topMovies,genres,upcomingMovies,playingMovies,popularPage} = this.props.movieReducer
        const menu = (
            <Menu className='menu-genres'>
                {genres && genres.genres ? genres.genres.map(item=>(
                      <Link to={'/movies/' + item.name +'/' + item.id}>
                    <Menu.Item className='menu-item'>
                    {item.name}
                    </Menu.Item>
                    </Link>
                )):
                null
            }
             
            </Menu>
          );
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
                <h1 className='h1-white'>Выбери фильм на любой вкус</h1>
                <div className='genre-row'>
                    <Dropdown overlay={menu}>
                    <div className='genre-item genre1'>
                        <h2>Жанр<DownOutlined/></h2>
                    </div>
                    </Dropdown>
                    <div className='genre-item'>
                        <Link to='/movies/Мультфильмы/16'>
                            <img src='https://static.sweet.tv/images/cache/genre_icon/BABCABI=/icon.png' alt='multik'/>
                            <h2>Мультфильмы</h2>
                        </Link>
                    </div>
                    <div className='genre-item'>
                        <Link to='/movies/Драмы/18'>
                            <img src='https://static.sweet.tv/images/cache/genre_icon/BAASABI=/icon.png' alt='multik'/>
                            <h2>Драмы</h2>
                        </Link>
                    </div>
                    <div className='genre-item'>
                        <Link to='/movies/Семейные/10751'>
                            <img src='https://static.sweet.tv/images/cache/genre_icon/BALCABI=/icon.png' alt='multik'/>
                            <h2>Семейные</h2>
                        </Link>
                    </div>
                    <div className='genre-item'>
                        <Link to='/movies/Комедии/35'>
                            <img src='https://static.sweet.tv/images/cache/genre_icon/BACCABI=/icon.png' alt='multik'/>
                            <h2>Комедии</h2>
                        </Link>
                    </div>
                    <div className='genre-item'>
                        <Link to='/movies/Документальные/99'>
                            <img src='https://static.sweet.tv/images/cache/genre_icon/BALCABI=/icon.png' alt='multik'/>
                            <h2>Документальные</h2>
                        </Link>
                    </div>
                </div>
                <h1 className='h1-white'>Фильмы для хорошего настроения</h1>
                <div className='row'>
                    {upcomingMovies && upcomingMovies.results ?
                    upcomingMovies.results.map(item => (
                        <Card movie={item} genre={genres}/>
                    )):
                    null
                }
                </div>
                <h1 className='h1-white'>Остросюжетные триллеры</h1>
                <div className='row'>
                    {playingMovies && playingMovies.results ?
                    playingMovies.results.map(item => (
                        <Card movie={item} genre={genres}/>
                    )):
                    null
                }
                </div>
                <h1 className='h1-white'>Самое просматриваемое</h1>
                <div className='row'>
                    {popularPage && popularPage.results ?
                    popularPage.results.map(item => (
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

export default connect(mapStateToProps, {getPopular,getTop,getGenres,getPlaying,getUpcoming,getPopularbyPage})(Main);
