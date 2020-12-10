import React, {Component} from 'react'
import Header from '../components/header'
import {getActorInfo, getActorCredits} from '../store/actions/movieActions'
import connect from "react-redux/es/connect/connect";
import Footer from '../components/footer'
import Card from '../components/movieCard/index'
class ActorPage extends Component{
    componentDidMount(){
        window.scroll(0,0)
        this.props.getActorInfo(this.props.match.params.aid)
        this.props.getActorCredits(this.props.match.params.aid)
    }
  
    render(){
        const {actorInfo,actorCredits,genres} = this.props.movieReducer
      
        return(
            <section >
                <Header/>
                <div className='actor-page'>
                    {actorInfo.profile_path ?
                    <img src={'https://image.tmdb.org/t/p/original/'+actorInfo.profile_path} alt='card'/>:
                    <img src='/user.png' alt='card'/>
                    }
                    <div className='actor-info'>
                        <h1>{actorInfo ? actorInfo.name : 'Actor name'}</h1>
                        <h2>{actorInfo ? actorInfo.known_for_department : 'known_for_department'}</h2>
                        <p>{actorInfo.popularity}</p>
                        <p>{actorInfo.birthday}</p>
                    </div>
                </div>
                <p className='p-biography'>{actorInfo.biography}</p>
                <h1 className='h1-white'>Фильмы с актёром</h1>
                <div className='row'>
                    {actorCredits && actorCredits.cast ?
                    actorCredits.cast.map(item => (
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

export default connect(mapStateToProps, {getActorInfo,getActorCredits})(ActorPage);
