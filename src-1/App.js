import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./pages/Skills";
import Workcards from "./pages/Workcards"
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div>
      <Router>
        <div className="main-container">
          <Header />

          <Route exact path="/skills" component={Skills} />
          <Route exact path="/about" component={About} />
          <Route exact path="/workcards" component={Workcards} />

          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
