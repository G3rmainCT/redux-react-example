import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions'

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

    this.props.createPost(post);
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost})(PostForm);