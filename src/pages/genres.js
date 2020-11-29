import React, {Component} from 'react'
import Header from '../components/header'
import {getPopular,getTop,getGenres,getPlaying,getUpcoming,getPopularbyPage} from '../store/actions/movieActions'
import connect from "react-redux/es/connect/connect";
import Card from '../components/movieCard'
import Footer from '../components/footer'

class Genres extends Component{
    componentDidMount(){
        window.scroll(0,0)
        this.props.getPopular()
        this.props.getTop()
        this.props.getGenres()
        this.props.getPlaying()
        this.props.getUpcoming()
        this.props.getPopularbyPage(30)
    }
  
    render(){
        const {popularMovies,topMovies,genres,upcomingMovies,playingMovies,popularPage} = this.props.movieReducer
        let movies = []
        topMovies && topMovies.results ?
            topMovies.results.map(item => (
                item.genre_ids.map(item2=>(
                    // eslint-disable-next-line
                item2 == this.props.match.params.gid ?
                movies.push({title:item.title,poster_path:item.poster_path,genre_ids:item.genre_ids}):
                console.log('aa')
                ))
            )):
            console.log('aa')

        popularMovies && popularMovies.results ?
            popularMovies.results.map(item => (
            item.genre_ids.map(item2=>(
                // eslint-disable-next-line
            item2 == this.props.match.params.gid ?
            movies.push({title:item.title,poster_path:item.poster_path,genre_ids:item.genre_ids}):
            console.log('aa')
            ))
        )):
        console.log('aa')

        playingMovies && playingMovies.results ?
            playingMovies.results.map(item => (
            item.genre_ids.map(item2=>(
                // eslint-disable-next-line
            item2 == this.props.match.params.gid ?
            movies.push({title:item.title,poster_path:item.poster_path,genre_ids:item.genre_ids}):
            console.log('aa')
            ))
        )):
        console.log('aa')

    upcomingMovies && upcomingMovies.results ?
    upcomingMovies.results.map(item => (
        item.genre_ids.map(item2=>(
            // eslint-disable-next-line
        item2 == this.props.match.params.gid ?
        movies.push({title:item.title,poster_path:item.poster_path,genre_ids:item.genre_ids}):
        console.log('aa')
        ))
    )):
    console.log('aa')

    popularPage && popularPage.results ?
    popularPage.results.map(item => (
        item.genre_ids.map(item2=>(
            // eslint-disable-next-line
        item2 == this.props.match.params.gid ?
        movies.push({title:item.title,poster_path:item.poster_path,genre_ids:item.genre_ids}):
        console.log('aa')
        ))
    )):
    console.log('aa')
    let row1 = []
    if (movies && movies.length >6 ){
        for(let i=0;i<6;i++){
            row1.push(movies[i])
        }
    }
    let row2 = []
    if (movies && movies.length >6 ){
        for(let j=6;j<12;j++){
            row2.push(movies[j])
        }
    }
    let row3 = []
    if (movies && movies.length >12 ){
        for(let k=12;k<18;k++){
            row3.push(movies[k])
        }
    }
    let row4 = []
    if (movies && movies.length >18 ){
        for(let s=18;s<24;s++){
            row4.push(movies[s])
        }
    }
    
    console.log(movies.length)
        return(
            <section className='genres-page'>
                <Header/>
                <h1 className='h1-white'>{this.props.match.params.genre}</h1>
               
        
                <div className='row'>
                    {row1 && row1.length>1 ?
                    row1.map(item=>(
                        // eslint-disable-next-line
                        item != undefined ?
                        <Card movie={item} genre={genres}/>:
                        null
                    )):
                    null
                    }
                </div>
                <div className='row'>
                    {row2 && row2.length>1 ?
                    row2.map(item=>(
                        // eslint-disable-next-line
                        item != undefined ?
                        <Card movie={item} genre={genres}/>:
                        null
                    )):
                    null
                    }
                </div>
                <div className='row'>
                    {row3 && row3.length>1 ?
                    row3.map(item=>(
                        // eslint-disable-next-line
                        item != undefined ?
                        <Card movie={item} genre={genres}/>:
                        null
                    )):
                    null
                    }
                </div>
                <div className='row'>
                    {row4 && row4.length>1 ?
                    row4.map(item=>(
                        // eslint-disable-next-line
                        item != undefined ?
                        <Card movie={item} genre={genres}/>:
                        null
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

export default connect(mapStateToProps, {getPopular,getTop,getGenres,getPlaying,getUpcoming,getPopularbyPage})(Genres);
