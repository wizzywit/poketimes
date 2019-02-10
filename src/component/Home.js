import React, { Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';


//demonstration of axios

class Home extends Component {

    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts') //axios get request to get some data and the post, it is asynchronous
        //meaning it takes time and returns a promise
        .then(res => {
            console.log(res); //this displays all the data stored in the fake database

            //sets the state contain the current posts
            this.setState({
                posts: res.data.slice(0,10) //this slices the posts to the 1st 10 post to be stored on this state
            })
        });// only runs when the get request as completed
    }
   
   
   render() {

    //curely brace need for the post to get the present post available at this state
    // const  {posts}  = this.state; <- u could use this method or the method below
    const posts = [...this.state.posts];
    const postList = posts.length ? ( //ternary operator used to condition if available post or not
        //if true then the code below runs
        posts.map(post => { //post is a pointer pointing to all the members of the state
            return (
                <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A pokeball"/>
                    <div className="card-content">
                        <Link to={'/' + post.id}><span className="card-title red-text">{post.title}</span></Link>
                        <p>{post.body}</p> 
                    </div>
                </div>
            )
        })
    ) : (
        <div className="center">No post yet</div>
    )
       return (

        <div className="container home">
            <h4 className="center">
                Home
            </h4>
            <p>
                {postList}
            </p>
        </div>
    )
}
}

export default Home;