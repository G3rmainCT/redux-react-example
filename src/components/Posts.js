import React, { Component } from 'react';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

class Posts extends Component {  
  
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    fetch(POST_URL)
    .then(response => response.json())
    .then((posts) => this.setState({
      posts: posts
    }));
    
  }
  render() {
    const postItems = this.state.posts.map((postItem) => (
      <div key={postItem.id}>
        <h3> {postItem.title}</h3>
        <p> {postItem.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

export default Posts;