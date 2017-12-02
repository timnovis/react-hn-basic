import React from 'react';
import Header from './Header';
import PostList from './PostList';
import '../assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <PostList />
      </div>
    );
  }
}

export default App;
