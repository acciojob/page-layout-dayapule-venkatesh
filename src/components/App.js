
import React from "react";
import './../styles/App.css';

const App = (props) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{props.header}</h1>
        <p>{props.children}</p>
        <p>{props.footer}</p>
    </div>
  )
}

export default App
