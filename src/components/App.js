
import React from "react";
import './../styles/App.css';
import { Layout } from "./Layout";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Layout header={"Welcome to my website"} children={"This is the content of my website"} footer={"© 2023 My Website. All rights reserved"} />

    </div>
  )
}

export default App
