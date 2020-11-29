import './App.css';
import store from './store/store'
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom'
import Main from './pages/Main'
import Genres from './pages/genres.js'
import MoviePage from './pages/movie'
import SearchPage from './pages/searchPage'
import 'antd/dist/antd.css';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter >
      <div className="App">
        <Route exact path='/' component={Main}/>
        <Route exact path='/movie/:mid' component={MoviePage}/>
        <Route exact path='/movies/:genre/:gid' component={Genres}/>
        <Route exact path='/search/:mname' component={SearchPage}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
