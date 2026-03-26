import './Home.css';
import Certs from './Certs';
import AreaOfFocus from './AreaOfFocus';

function Home() {
  return (
    <div className="App">
      <div className="App-header">
        <div className='Images'>
          <img className="Me" src='me2.png' alt="Austin Patkos" />
        </div>

        <div id='main-Div'>
          <h1 className='Name'>Austin Patkos</h1>
          <h2 className='Bio'>Founder, Security Engineer & Technical Architect</h2>
          <h3>Offensive Security, Payments, Smart Contracts, AI & Cloud</h3>

          <h3 className='SubBio'>
            Security-focused founder and hands-on engineer building and assessing modern systems across AI, financial infrastructure, smart contracts, and cloud environments. My background began in development and architecture, but my focus has increasingly shifted toward how systems fail, how attackers think, and how real exploit paths emerge across digital and physical environments.
          </h3>

          <div className='Roles'>
            <a href="https://apexoffensive.net" target="_blank" rel="noreferrer">
              <h3 className='Bio'>Apex Offensive (Founder | Lead Security Engineers)</h3>
            </a>
            <h3 className='Bio'>mWire (Co-Founder | Lead Engineer)</h3>
            <a href="https://youtube.com/@thecryptogym" target="_blank" rel="noreferrer">
              <h3 className='Bio'>The Hackers Gym (Founder | Lead Instructor)</h3>
            </a>
          </div>

          <div className="lines">
            <a className='item' href='https://apexoffensive.net' target="_blank" rel="noreferrer">Apex Offensive</a>
            <a className='item' href='https://www.linkedin.com/in/austin-patkos-5578b8184/' target="_blank" rel="noreferrer">LinkedIn</a>
            <a className='item' href='https://www.youtube.com/channel/UCUWfB0wYL5rRSCkxHflr-6A' target="_blank" rel="noreferrer">YouTube</a>
            <a className='item' href='https://github.com/APexBlockchainDevelopments' target='_blank' rel="noreferrer">GitHub</a>
            <a className='item' href='/blog'>Blog</a>
          </div>

          <div className="lines">
            <a className='item' href='mailto:austin@apexoffensive.net'>Contact</a>
          </div>
        </div>
      </div>

      <div>
        <AreaOfFocus />
      </div>

      <div>
        <Certs />
      </div>
    </div>
  );
}

export default Home;