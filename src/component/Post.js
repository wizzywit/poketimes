import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        id: null
    }
componentDidMount () {
    let id = this.props.match.params.post_id; //extension gotten from the console to get the props in App.js
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //res = response
    .then(res => {
        this.setState ({
            post: res.data
        })
        
    })
    
}
    
        render () {

            const post = this.state.post ? (
                <div className="post">
                    <h2 className="center">{this.state.post.title}</h2>
                    <p>{this.state.post.body}</p>
                </div>
            ) : (
                <div className="center">Loading Post....</div>
            )
            return (
                <div className="container">
                    <h4>{post}</h4>
                </div>
            )
        }
}

export default Post