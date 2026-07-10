
import React from "react";
import './../styles/App.css';

const App = (props) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{props.header}</h1>
        <h1>{props.children}</h1>
        <h1>{props.footer}</h1>
    </div>
  )
}

export default App
