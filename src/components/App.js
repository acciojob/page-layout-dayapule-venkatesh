
import React from "react";
import './../styles/App.css';

const App = ({ header, children, footer }) => {
  return (
    <div>
      {/* Do not remove the main div */}
      {header}
      {children}
      {footer}
    </div>
  );
};

export default App
