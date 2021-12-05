import logo from './g.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className="intro">
          Hey, I'm <b className="white">Aedriane.</b>
        <br />
          IT Engineer.
        </p>

        <p className="aboutme">
        About me.
        </p>
        <p className="aboutmepara">
          I'm a dude who lives and breathes tech. Present me with a problem, and I will bounce back with a solution (99.98% of the time). 
          I'm a huge music enthusiast, and play some mad guitar in my leisure and hopelessly attempt to produce music.<br />
          I am currently based in Melbourne, Australia.
        </p>

        <p className="work">
          Work.
        </p>
        <p className="workpara">         
          Currently, I am a Desktop Lead Engineer for Securelogic Solutions, an MSP based in Melbourne, Australia. 
          If you're keen to know more, take a peak at my resume <a href="https://drive.google.com/file/d/12ywt35tTCMybG9vjsG_ZT6OEuMVThlP2/view?usp=sharing" target="_blank" className="white">here.</a>
        </p>

        <p className="interests">
          Interests.
        </p>
        <p className="interestspara">  
          Take a look at my interests below, if it interests you that is.  

        <br /><br />     

          <li>Crypto & NFTs.</li>
          <li>Cloud Tech.</li>
          <li>Automation.</li>
          <li>Music.</li>
          <li>Cars.</li>
        </p>

        <p className="projects">
          Interests.
        </p>
        <p className="projectspara">       
          Watch this space, bruh. 👀 
        </p> 

        <p className="contact">
          Contact.
        </p>
        <p className="contactpara">       
          Kindly shoot me an <a href="mailto:aedrianehernan@gmail.com" className="white">email</a> if you're keen to have a chat.
          If you're not huge on electronic mail, feel free to drop by via <a href="https://www.linkedin.com/in/aedriane/" target="_blank" className="white">LinkedIn.</a>
        </p> 

        <p className="footer">
          Copyright © 2021 aedriane.tech
        </p>






      </header>
    </div>
  );
}

export default App;
