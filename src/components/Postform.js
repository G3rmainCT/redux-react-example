import React, { Component } from 'react';

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      tittle: this.state.title,
      body: this.state.body
    };

    fetch(POST_URL, {
      method: 'POST',
      headers: {
        'content-type': 'appplication/json'
      },
      body: JSON.stringify(post)
    })
    .then((response) => response.json())
    .then((result) => console.log(result));

  }

  render() { 
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Tittle: </label>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
            <br />
            <br />
          </div>
          <div>
            <label>Body: </label>
            <textarea name="body" value={this.state.body} onChange={this.onChange} />
            <br />
            <br />
          </div>        
          <button type="submit">Add Post</button>          
        </form>
      </div>     
    );
  }
}

export default PostForm;