import React, { Component } from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';




//the BrowserRoute Component is used to be able to route from one page to another with a web page
//the Route is placed within the JSX code in which the BrowseRouter Tag is defined
//this Route Tag contains attribute path and component to direct the browser to what component is to be
//loaded at that point
class App extends Component {
  render() {

  
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App;
