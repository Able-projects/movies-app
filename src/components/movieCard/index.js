import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom'
class Card extends Component{
  
    render(){

        return(
        <Link to={'/movie/'+this.props.movie.id} >
         <div className='movie-card'>
            <img src={'https://image.tmdb.org/t/p/original/'+this.props.movie.poster_path} alt='card'/>
            <h2>{this.props.movie.title}</h2>
            <p>
                {this.props.genre.genres ? this.props.genre.genres.map(item => (
                    this.props.movie.genre_ids.map(item2=>(
                        item2 === item.id ?
                        <span>{item.name},</span>:
                        null
                    ))
                )):
                null}
            </p>
            <img src='https://sweet.tv/images/v2/quality/2.png' alt='hd' className='hd-icon'></img>
         </div>
        </Link>
        )
    }
}

const mapStateToProps = (state) => ({
    movieReducer:state.movieReducer
});

export default connect(mapStateToProps, {})(Card);
