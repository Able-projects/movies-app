import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";

class Slider extends Component{
  
    render(){
      
        // let slider = this.props.movies && this.props.movies.results ? this.props.movies.results.map(item => (
        //     <div className="gallery-cell"><img src={'https://image.tmdb.org/t/p/original/'+item.backdrop_path} alt='images'></img></div>
        // )):
        // null
       
        return(
        <div className="gallery js-flickity" data-flickity-options='{ "freeScroll": true, "wrapAround": true }'>
            <div className="gallery-cell"><img src='https://image.tmdb.org/t/p/original/86L8wqGMDbwURPni2t7FQ0nDjsH.jpg' alt='images'></img></div>
            <div className="gallery-cell"><img src='https://image.tmdb.org/t/p/original/wu1uilmhM4TdluKi2ytfz8gidHf.jpg' alt='images'></img></div>
            <div className="gallery-cell"><img src='https://image.tmdb.org/t/p/original/8rIoyM6zYXJNjzGseT3MRusMPWl.jpg' alt='images'></img></div>
            <div className="gallery-cell"><img src='https://image.tmdb.org/t/p/original/xoqr4dMbRJnzuhsWDF3XNHQwJ9x.jpg' alt='images'></img></div>
        </div>
         
        )
    }
}

const mapStateToProps = (state) => ({
    movieReducer:state.movieReducer
});

export default connect(mapStateToProps, {})(Slider);
