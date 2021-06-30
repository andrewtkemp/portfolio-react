import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  return (
    <div>
      <Router>
        <main className="main-container">
          <Header />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />

          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
