import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Posts from './components/Posts';
import PostForm from './components/Postform';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>

              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
              </a>
            </header>
          </div>
          <div style={{ margin: '30px' }}>
            <PostForm />
            <Posts />
          </div>
        </div>
      </Provider>

    );
  }
}

export default App;
