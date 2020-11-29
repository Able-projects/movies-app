import React, {Component} from 'react'
import Header from '../components/header'
import {getSearchResult,getGenres} from '../store/actions/movieActions'
import connect from "react-redux/es/connect/connect";
import Card from '../components/movieCard/index'
import Footer from '../components/footer'
class SearchPage extends Component{
    componentDidMount(){
        window.scroll(0,0)
        this.props.getGenres()
        this.props.getSearchResult(this.props.match.params.mname)
    }
  
    render(){
        const {searchResults,genres} = this.props.movieReducer
      
        return(
            <section >
                <Header/>
                <h1 className='h1-white'>Результаты поиска</h1>
                <div className='row'>
                    {searchResults && searchResults.results ?
                    searchResults.results.map(item => (
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

export default connect(mapStateToProps, {getSearchResult,getGenres})(SearchPage);
