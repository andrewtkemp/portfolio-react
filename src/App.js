import React from "react";
import "./App.css";
import Header from './components/header/Header';
import Jumbotron from './components/jumbotron/Jumbotron';
import Work from './components/work/Work';
import Footer from './components/footer/Footer'
import Card from './components/cards/Cards'


function Portfolio() {
  
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Work >
        <Card />
        </Work>
      <Footer />
    </div>
  );
}

export default Portfolio;
