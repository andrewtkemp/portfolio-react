import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Works from "./components/Works";
import Footer from "./components/Footer";
import "./style.css";


function App() {
  return (
    <div>
      <Router>

        <Header />
        <main>
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Works} />

        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
