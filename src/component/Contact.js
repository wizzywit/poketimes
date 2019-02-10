import React from 'react';


const Contact = (props) => {
    //programatic redirect and the props works because this component is already routed
    //ths uses the setTimeout Functon and push a component to history
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    //param () a function inside a method in the setTimeout
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Et aspernatur corrupti minus, iusto corporis molestias 
                maxime accusantium hic dolores sapiente sed reprehenderit cum 
                non debitis recusandae modi qui quam cupiditate.</p>
        </div>
    )
}

export default Contact;