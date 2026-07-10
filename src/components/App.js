
import React from "react";
import './../styles/App.css';

const App = ({ header, children, footer }) => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>{header}</h1>
      <p>{children}</p>
      <footer>{footer}</footer>
    </div>
  );
};

export default App
