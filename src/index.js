import React from "react";
import ReactDOM from "react-dom";

const Head = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Linkbar = (props) => {
  return (<div>
    {props.linklist.join(' ')}
    </div>
  )
}

const App = () => {
  const linklist = ['me', 'my projects', 'my adventures']
 //<Head text={'Hello world!'}/>
  return (<>
    <Linkbar linklist={linklist}/>
  </>)
}

ReactDOM.render(<App />, document.querySelector("#root"))