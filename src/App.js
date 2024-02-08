import React, {Component} from 'react';
import './App.css';
import Header from './header/header';
import MovieList from './movie-list/movie-list';
import data from './data'

class App extends Component {

  state = {
    movieData: data,

  };
  render() {
    return (
      <div>
        <Header title="Movie App" />
        <MovieList movieData={this.state.movieData} />
      </div>
    );
  }
}

export default App;
