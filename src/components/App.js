
import React from "react";
import './../styles/App.css';

const App = (props) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <header>{props.header}</header>
        <main>{props.children}</main>
        <footer>{props.footer}</footer>
    </div>
  )
}

export default App
