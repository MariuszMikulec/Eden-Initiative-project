
import './scss/App.scss';

import Hamburger from "./React/Hamburger";

function App() {
  return (
      <>
      <header className="App-header" id="main page">
       // <div className="nav_stripe">
          <span className="testowy"/>
          <h1>Eden Initiative</h1>
          <Hamburger/>
       // </div>

        <div>   <a className="join" href='#about'><h2>Join us!</h2></a></div>

      </header>
        <section id="about">
          <div>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A autem dignissimos dolor id nobis officia placeat repudiandae sunt vel vitae?</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam iste libero numquam sit suscipit! Ab ipsam officiis sapiente tenetur vel.</p>
          </div>
          <div >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, illo!</p>
          </div>
        </section>

        <section id="benefits">

        </section>
        <footer id="contact">

        </footer>
    </>
  );
};

export default App;
