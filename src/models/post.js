import React, { Component } from 'react'
import PostModel from '../models/Post'

import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'

class PostList extends Component {
    state = {
        Posts: []
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = () => {
        PostModel.all().then(data => {
            this.setState({ Posts: data.Posts })
        })
    }

    render() {
        return (
            <div>
                <h1>All Posts</h1>
            </div>
        );
    }
}

export default PostList;