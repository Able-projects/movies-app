import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import Flickity from 'react-flickity-component'
 
class Slider extends Component{
  
    render(){
      
        let slider = this.props.movies && this.props.movies.results ? this.props.movies.results.map(item => (
            <div className="gallery-cell"><img src={'https://image.tmdb.org/t/p/original/'+item.backdrop_path} alt='images'></img></div>
        )):
        null
        const flickityOptions = {
            initialIndex: 2
        }
        return(
         <div>
            <Flickity
                className={'carousel'} 
                elementType={'div'} 
                options={flickityOptions} 
                disableImagesLoaded={false} 
                reloadOnUpdate 
                >
            {slider}
            </Flickity>
         </div>
        )
    }
}

const mapStateToProps = (state) => ({
    movieReducer:state.movieReducer
});

export default connect(mapStateToProps, {})(Slider);
