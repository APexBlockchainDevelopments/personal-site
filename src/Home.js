import './Home.css';
import Certs from './Certs';
import AreaOfFocus from './AreaOfFocus';

function Home() {

  return (
    <div className="App">
      <div className="App-header">
        <div className='Images' >
          <img className="Me" src='me2.png' alt="Austin Patkos" />
        </div>
        <div id='main-Div'>
          <h1 className='Name'>Austin Patkos</h1>
          <h2 className='Bio'>Founder & CTO / Chief Architect</h2>
          <h3>Security in Payments, Infra, Smart Contracts, AI & Cloud</h3>
          <h3 className='SubBio'>Technical co-founder and hands-on builder across Solidity/EVM smart contracts, cryptographic signing flows, and AWS serverless payments infrastructure. Specialized in security reviews, audit methodology, and production-grade Web3 systems.</h3>
          <div className='Roles'>
            <h3 className='Bio'>mWire (Co-Founder | Lead Engineer)</h3>
            <h3 className='Bio'>Resolv Finance (CTO | Co-Founder)</h3>
            <h3 className='Bio'>APex Developments LLC (Founder)</h3>
            <a href="https://youtube.com/@thecryptogym" target="_blank" rel="noreferrer">
              <h3 className='Bio'>The Crypto Gym (Founder / Lead Instructor)</h3>
            </a>
          </div>
          {/* <div className="lines">
            <a className='item' href='./projects'>Projects</a>
            <a className='item' href='https://www.udemy.com/user/austin-patkos/' target="_blank" rel="noreferrer">Courses</a>
          </div> */}
          <div className="lines">
            <a className='item' href='https://www.linkedin.com/in/austin-patkos-5578b8184/' target="_blank" rel="noreferrer">LinkedIn</a>
            <a className='item' href='https://www.youtube.com/channel/UCUWfB0wYL5rRSCkxHflr-6A' target="_blank" rel="noreferrer">YouTube</a>
            <a className='item' href='https://github.com/APexBlockchainDevelopments' target='_blank' rel="noreferrer">GitHub</a>
            <a className='item' href='/blog'>Blog</a>
          </div>
          <div className="lines">
            <a className='item' href='https://www.linkedin.com/in/austin-patkos-5578b8184/' target="_blank" rel="noreferrer">Contact</a>
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
