import React, {Component} from 'react'
import connect from "react-redux/es/connect/connect";
import {Link} from 'react-router-dom'
class ActorCard extends Component{
  
    render(){

        return(
        <Link to={'/actor/'+this.props.actor.cast_id} >
         <div className='actor-card'>
             {this.props.actor.profile_path ?
            <img src={'https://image.tmdb.org/t/p/original/'+this.props.actor.profile_path} alt='card'/>:
            <img src='/user.png' alt='card'/>
             }
            <h2>{this.props.actor.original_name}</h2>
         </div>
        </Link>
        )
    }
}

const mapStateToProps = (state) => ({
    movieReducer:state.movieReducer
});

export default connect(mapStateToProps, {})(ActorCard);
