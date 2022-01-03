import React, { Component } from 'react'
import PostModel from '../models/post'
import { Link } from 'react-router-dom'



class PostList extends Component {

    state = {
        
        posts: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        PostModel.all().then(data => {
            this.setState({ posts: data.post })
        })
    }

    render() {
        return (
            <div>
                <h1>All Games</h1>
            </div>
        );
    }
}

export default PostList;