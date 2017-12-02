import React from 'react';
import Post from './Post';

class PostList extends React.Component {
  constructor() {
    super();
    this.state = {
      topStories: [],
    };
  }
  componentWillMount = async () => {
    const response = await fetch(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    );
    const data = await response.json();
    this.setState({
      topStories: data.splice(0, 30),
    });
  };
  render() {
    return (
      <main>
        <ol>
          {this.state.topStories.map(story => <Post key={story} id={story} />)}
        </ol>
      </main>
    );
  }
}

export default PostList;
