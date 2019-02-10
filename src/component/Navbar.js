import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

//to disable the default nation of using the a tag which communicates with the server
//react-router-dom makes use of Link to in place of anchor tag to laod different components
//instead of communicating with the server
//so this makes react quicker and smoother because we are not making any request to the server
//this the functio of the React router
//the NavLink works almost thesame as the Link but with the difference that it
//signifies the class as active when inspected in the browser
//which is very useful when we want to style the active anchor links
//also when inspected we dont see a Link to rather an anchor

const Navbar = (props) => {
    // now to be able to redirect on this page we have to add the withRouter because NavBar component was not routed 
    //in the root component App.js
    //  setTimeout(() => {
    //      props.history.push('/about')
    //  }, 2000)
     //this redirects the content to a different page after 2sec 
    
    return (
        <nav className="nav-wrapper green darken-3">
            <div className="container">
                <a href="/" className="brand-logo">WIZZY-WIT</a>
                <ul className="right">
                    <li><Link to="/">Home </Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

//we pass the component in the withRouter method
//withRouter() is an example of higher order component
//it added props to the NavBar component
export default withRouter(Navbar);