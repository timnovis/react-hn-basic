import React from 'react';
import TimeAgo from 'react-timeago';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      story: {},
    };
  }
  componentWillMount = async () => {
    const id = this.props.id;
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
    );
    const data = await response.json();
    this.setState({
      story: data,
    });
  };
  render() {
    const { story } = this.state;
    const url = story.url
      ? story.url
      : `https://news.ycombinator.com/item?id=${story.id}`;
    return (
      <li>
        <a href={url}>{story.title}</a>
        <span className="meta">
          {story.score} points | {story.by} submitted{' '}
          <TimeAgo
            date={story.time ? new Date(story.time * 1000) : Date.now()}
          />{' '}
          | {story.descendants} comments
        </span>
      </li>
    );
  }
}

export default Post;
