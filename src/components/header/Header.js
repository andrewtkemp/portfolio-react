import React from "react";

function Header() {
  return (
    <header>
         <div style={{backgroundColor: "green"}}>
      <h1>Hi! I'm Michelle</h1>

      <h2>
        <span>Phone Number: </span> 469-358-0710
      </h2>

      <nav>
          <li><a href="mailto:bertafamily@sbcglobal.net">Email</a></li>

        <li><a href="https://linkedin.com/in/michelle-berta">LinkedIn</a></li>
        <li><a href="https://github.com/MichelleBerta?tab=repositories">Github</a></li>
        </nav>
        </div>
    </header>
  )
}

export default Header;
