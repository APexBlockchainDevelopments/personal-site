import './Certs.css';

function Certs() {
  return (
    <div className="certs-main">
      <h1 className='certs-title'>Certifications</h1>
      <div className='certs-row'>
        <div className='cert'>
          <div className='cert-title-container'>
            <h3>eJPT Security Certification From INE</h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://security.ine.com/verify-certification/?c=0e24e9e6-8607-48cd-896f-6ed68021c77d">
            <img className='eJPT' src='./certs/eJPT.jpg' alt='eJPT'></img>
          </a>

        </div>

        <div className='cert'>
          <div className='cert-title-container'>
            <h3>PenTest+ Comptia </h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/fbfecfea-33f5-47a5-a93d-12215ada974e/public_url">
            <img className='Pen' src='./certs/pen+.png' alt='Pen+'></img>
          </a>
        </div>
      </div>
      <div className='certs-row'>

        <div className='cert'>
          <div className='cert-title-container'>
            <h3>Security+ SY0-601 Comptia </h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/de375283-0c55-40b5-a9f7-ed8c391a8428">
            <img className='eJPT' src='./certs/sec+.png' alt='SEC+'></img>
          </a>
        </div>

        <div className='cert'>
          <div className='cert-title-container'>
            <h3>AWS Cloud Architect Associate</h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/08a5217b-1c30-45eb-a9c0-d9032f24c992">
            <img id='SAA' src='./certs/aws-saa.png' alt='SOA'></img>
          </a>
        </div>

        <div className='cert'>
          <div className='cert-title-container'>
            <h3>ISC2 Certified In Cybersecurity</h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.credly.com/earner/earned/badge/790b6a1c-b747-4f3d-9c4f-de13d14c8070">
            <img className='eJPT' src='./certs/ISC2_CC.jpg' alt='ISC CC'></img>
          </a>

        </div>

      </div>
      <div className='certs-row'>
        <div className='cert'>
          <div className='cert-title-container'>
            <h3>AWS SysOps Admin Associate</h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/61066b2f-51c0-4fe2-a2cd-cd14662ee220/public_url">
            <img id='SOA' src='./certs/aws-soa.png' alt='SOA'></img>
          </a>
        </div>

        <div className='cert'>
          <div className='cert-title-container'>
            <h3>AWS Developer Associate</h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/88b70b89-2c96-4002-97d0-2f4b4d14ec3b">
            <img id='DVA' src='./certs/aws-dva.png' alt='DVA'></img>
          </a>

        </div>

        <div className='cert'>
          <div className='cert-title-container'>
            <h3>AWS Certified Cloud Practitioner</h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.credly.com/badges/fffd9ff0-6c66-4871-acb6-ed178458d473">
            <img id='CCP' src='./certs/aws-ccp.png' alt='CCP'></img>
          </a>
        </div>
        <div className='cert'>
          <div className='cert-title-container'>
            <h3>Blockchain Council Certified BTC Expert</h3>
          </div>
          <a target="_blank" rel="noreferrer" href="https://www.credential.net/857f227f-c57f-4405-bc12-d0088651de59#gs.1585te">
            <img id='BTC' src='./certs/BTC.png' alt="BTCe"></img>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Certs;

//add href to verify cert
