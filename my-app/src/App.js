import React, {Fragment} from "react";
import './scss/App.scss';
import Covid19Counter from "./React/Covid19Counter";
import Hamburger from "./React/Hamburger";
import arrow from './pic/arrow_icon.png'
import seamus from './pic/Seamus_Green.jpg';
import fb from './pic/facebook.jpg';
import tw from './pic/twitter.ico';
import li from './pic/LinkedIn.png';

function App() {
  return (
      <Fragment>
      <header className="App-header" id="main page">
        <div className="nav_stripe">
          <span className="testowy"/>
          <h1>Eden Initiative</h1>
          <Hamburger/>

        </div>
        <div className="joinButton">   <a className="join" href='#about'><h2>Join us!</h2></a></div>
      </header>


        <Covid19Counter/>


        <section id="project">
          <div>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem dignissimos dolor id nobis officia placeat repudiandae sunt vel vitae?</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iste libero numquam sit suscipit! Ab ipsam officiis sapiente tenetur vel.</p>
          </div>
        </section>

        <section className="about" id="about">
          <div>
            <img className="seamus" src={seamus} alt="Seamus_Green"/>
            <div className="quoteBox">
              <p className="quote">"Put your trust in me to ensure a more responsible use of the planet's resources in the future."
              -Seamus Green</p>
            </div>
          </div>
          <p>Seamus Green jest założycielem i duchowym ojcem organizacji Eco, Eden Initiative.</p>
        </section>


<section className="arrowCont">
        <img />
        <div className="arrow">
          <a href="#main page"> <img className="scrollTopButton" src={arrow} alt=""/></a>
        </div>
</section>
        <footer id="contact">
          <div>
            <div className="contact">
              <h2>Kontakt:</h2>
              <p>eden.initiative@gmail.com</p>
            </div>
            <div className="subscribe">
              <div>
                <input />
                <button>Subskrybuj</button>
              </div>
              <div className="socialmedia">
                <a href="#contact"><img className='sm' src={fb} alt='fb'/></a>
                <a href="#contact"><img className='sm' src={tw} alt='tw'/></a>
                <a href="#contact"><img className='sm' src={li} alt='li'/></a>
              </div>

            </div>
          </div>
          <p>Created by Mariusz Mikulec</p>
        </footer>
    </Fragment>
  );
};

export default App;
