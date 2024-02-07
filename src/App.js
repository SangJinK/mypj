import React, {Component} from 'react';
import './App.css';
import Header from './header';
import Login from './login';
import Signup from './signup';
import Review from './test';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="title1" />
        <Header title="title2" />
        <h1>Movie Project</h1>
        <Signup />
        <Login />
        <Review />
      </div>
    );
  }
}

export default App;
