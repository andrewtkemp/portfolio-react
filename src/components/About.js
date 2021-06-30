import React from "react";
import img1 from "../assets/headshot-copy.jpg"
function About() {
  return (
    <div className="container mt-5 id" id="about">
      <div className="col-s-12 col col-lg-12 col-xl-12 pl-5">
        <img className="headshot img-fluid mt-5 float-end" alt="me" src={img1}></img>
      </div>
      <div className="col-s-12 col-lg-12 col-xl-12 pl-5 about-me">
        <h3 className="flow-text">Hi! I'm Michelle.</h3>
        <p className="flow-text mb-5 my-section">
          After becoming an empty nester, I decided to take on a whole new role in life. I spent twenty one years working part time as an office manager while my three children were in school. Now I
          am looking for a fulfilling career as a web developer.
          <br />
          <br />I am grateful for the opportunity I had to learn new technology and face new challenges as a bootcamp student. Adding my new coding knowledge to the skills I learned previously, to be
          task oriented and excellent at time management, will make me a valuable employee to any company. I am excited for the opportunity to take these combined skills and apply them.
          <br />
          <br />
          On a personal note, entertaining and being creative are my favorite pass times. An example of this passion is the Live Clue game I created using my entire home for the game board. In
          addition, I love pugs, swing dancing, escape rooms, Italy, meeting new people and solving a good mystery.
        </p>
      </div>
    </div>
  );
}

export default About;
