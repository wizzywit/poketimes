import React from 'react';

//this is a demonstration of a higher order component called Rainbow

//@param WrappedComponent signifies the component being wrappedwith this Component
const Rainbow = (WrappedComponent) => {
    const colours =['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];//this creats a random value between 0 to 5
    //and also it is casted uisng floor to have an integer

    const className = randomColour + '-text'; //concantenation of strings to have the compleet className to b styled
    return (props) => {
       //changes the property of the wrapped component by returning the JSX below
       return (
            <div className={className}>
                <WrappedComponent {...props}/>

            </div>
        )
    }
}

export default Rainbow;