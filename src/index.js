import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



ReactDOM.render( <App
    header={"Welcome to my website"}
    footer={"© 2023 My Website. All rights reserved."}
    children={"This is the content of my website."}
  >
  </App>, document.getElementById("root"));
