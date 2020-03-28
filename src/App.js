import React from 'react';
import './bootstrap.css';

const Header = () => {
  return (
    <>
      <h1>huge start UP</h1>
      <h2><i>huge</i></h2>

      <section id="headers">
        <p>here's our team! check them out~</p>
        <p> please click da purple circle to become an investor </p>
          <h2>CRO</h2>
          <img id="pp" src="0.jpeg"></img>
          <h1></h1>
          <p>Frank C.</p>

          <h2 id="head">CFO</h2>
          <img id="pp" src="0-2.jpeg"></img>
          <p>Jon S.</p>

          <h2 id="head">CEO</h2>
          <img id="pp" src="0-3.jpg"></img>
          <p>Joe B.</p>
      </section>
    </>
  ) 
}

const HamburgerMenu = () => {
  return (
      <>
        <nav class="menu">
        <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open" />
        <label class="menu-open-button" for="menu-open">
          <span class="lines line-1"></span>
          <span class="lines line-2"></span>
          <span class="lines line-3"></span>
        </label>

        <a href="https://venmo.com/where" class="menu-item blue"> <i class="fa fa-anchor"></i> </a>
        <a href="#" class="menu-item green"> <i class="fa fa-coffee"></i> </a>
        <a href="#" class="menu-item red"> <i class="fa fa-heart"></i> </a>
        <a href="https://www.paypal.me/hugestartup" class="menu-item purple"> <i class="fa fa-microphone"></i> </a>
        <a href="#" class="menu-item orange"> <i class="fa fa-star"></i> </a>
        <a href="#" class="menu-item lightblue"> <i class="fa fa-diamond"></i> </a>
      </nav>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <HamburgerMenu />
    </div>
  );
}

export default App;
