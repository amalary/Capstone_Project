import React, { Component } from 'react';
import PostModel from '../../models/post'

class NewPost extends Component {
  state = {
    title: '',
    author: '',
    image: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();

    PostModel.create(this.state)
      .then(data => {
        this.props.history.push('/posts')
      })
  }

  handleChange = (event) => {

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>New Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
              value={this.state.title} />
          </div>
          <div className="form-input">
            <label htmlFor="author">author</label>
            <input
              type="text"
              name="author"
              onChange={this.handleChange}
              value={this.state.author} />
          </div>
          <div className="form-input">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.image} />
          </div>

          <input type="submit" value="Save!"/>
        </form>
      </div>
    );
  }
}

export default NewPost;