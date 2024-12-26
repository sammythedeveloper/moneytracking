import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <Router> {/* Wrap the components inside Router */}
      <Header />
      <Home />
    </Router>
  );
}

export default App;
