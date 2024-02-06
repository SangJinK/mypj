import React, {Component} from 'react';
import './App.css';
import Header from './header';
import Main from './main';
import Login from './login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="title1" />
        <Header title="title2" />
        <h1>Movie Project</h1>
        <Main />
        <Login />
      </div>
    );
  }
}

export default App;
