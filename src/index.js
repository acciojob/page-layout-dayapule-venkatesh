import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render( <App
    header={<h1>Welcome to my website</h1>}
    footer={<footer>© 2023 My Website. All rights reserved.</footer>}
  >
    <main>This is the content of my website.</main>
  </App>, document.getElementById("root"));
