import './Projects.css';

function Projects() {
  return (
    <div className="projects-main">
      <h1>Projects</h1>

      {/*mWire*/}

      <div className='project'>
        <h1 className='project-title'>mWire - Cross-Border Remittance & Merchant Payments</h1>
        <h2 className='project-dates'>Jan 2024 – Present | Co-Founder | Lead Engineer</h2>
        <h1>Solidity • USDC • WordPress • Web3Auth • WalletConnect • AWS Lambda • DynamoDB</h1>
        <p className='description'>Architected and shipped USDC payment rails enabling merchants to accept EVM assets with a mainstream checkout experience. Built custom WordPress/WooCommerce payments plugin (Checkout Blocks compatible) with secure order lifecycle handling. Designed smart-contract-based settlement/forwarder flows for automated USDC payouts, including permit-based approvals (EIP-2612) and signature-verified execution paths. Implemented event-driven AWS backend with JWT auth, webhook verification, and idempotent processing.</p>
      </div>

      {/*Resolv Finance*/}

      <div className='project'>
        <h1 className='project-title'>Resolv Finance - Token Recovery Architecture</h1>
        <h2 className='project-dates'>May 2024 – Present | CTO | Co-Founder</h2>
        <h1>Solidity • Foundry • ERC-20 • Governance • Dispute Resolution</h1>
        <p className='description'>Designed and prototyped a reversible ERC-20 architecture ("ERC20R") with freeze/recovery semantics, secondary safe accounts, and verifiable on-chain event trails to support dispute workflows. Implemented governance and dispute-resolution primitives (committee/voting mechanics) as explicit state machines. Built comprehensive test suite with unit, fuzz, and invariant tests in Foundry to validate adversarial flows. Prototyped LLM-assisted tooling for dispute triage with human-in-loop auditability.</p>
      </div>

      {/*Theta Hackathon*/}

      <div className='project'>
        <h1 className='project-title'>Theta 2023 Hackathon (Winner!)</h1>
        <a href='https://devpost.com/software/thetaplay' target="_blank"  rel="noreferrer">
          <img className='screenshot' src='./thetaplayScreen.png' alt='Theta Play screenshot'></img>
        </a>
        <h1>Solidity • Unity • React • NodeJS • AWS</h1>
        <p className='description'>An arcade based game built for the Theta Hackathon. This allowed users to play various arcade games based on NFT ownership as well as win and earn ERC-20 tokens on the Theta Blockchain.</p>
      </div>

      {/*ERC 20 Tokens Uniswap*/}

      <div className='project'>
        <h1 className='project-title'>Nutraceutical Finance True Burn and Master Burn</h1>
        <a href='https://etherscan.io/token/0x5dE83a4b2CA7D85476bb5cA5435E1BF1bbFdE9a2' target="_blank"  rel="noreferrer">
          <img className='screenshot' src='./nutra coin.png' alt='Etherscan screenshot'></img>
        </a>
        <h1>Solidity • Truffle • Uniswap</h1>
        <p className='description'>Update to the Solidity Contract To Support a True Burn and Master Burn Mechanism</p>
      </div>

      {/*StealingHeartsFoundation.com*/}

      <div className='project'>
        <h1 className='project-title'>Stealing Hearts Foundation</h1>
        <a href='https://stealingheartsfoundation.com' target="_blank"  rel="noreferrer">
          <img className='screenshot' src='./stealing hearts logo.png' alt='Stealing Hearts Logo screenshot'></img>
        </a>
        <h1>AWS • CSS • JS • HTML • Solidity • React • Web3</h1>
        <p className='description'>Theta Networks first ever Charity Drive!</p>
      </div>

       {/*NFTified.org*/}

       <div className='project'>
        <h1 className='project-title'>NFTified.org</h1>
        <a href='https://nftified.org' target="_blank"  rel="noreferrer">
          <img className='screenshot' src='./nftified.png' alt='NFTified.org screenshot'></img>
        </a>
        <h1>AWS • CSS • JS • HTML • Solidity • React • Web3</h1>
        <p className='description'>NFTified.org is a way to verify the owner of an NFT.</p>
      </div>

      {/*Beat Blorto*/}

      <div className='project'>
        <h1 className='project-title'>Beat Blorto!</h1>
        <a href='https://cykoheadz.com/gang' target="_blank" rel="noreferrer">
          <img className='screenshot' src='beatblorto.png' alt='theta screenshot'></img>
        </a>
        <h1>ReactJS • CSS • JS • NFTs • ThetaDrop • Unity</h1>
        <p className='description'>This is a collaberation with Rob Feldman to make a game with that uses Cyko Headz! This uses NFTs in game to have a user battle a enemy!</p>
      </div>


      {/*Cyko Heads*/}

      <div className='project'>
        <h1 className='project-title'>Cyko Headz Gang!</h1>
        <a href='https://www.cykoheadz.com' target="_blank" rel="noreferrer">
          <img className='screenshot' src='cyko1.png' alt='theta screenshot'></img>
        </a>
        <h1>ReactJS • CSS • JS • NFTs • ThetaDrop</h1>
        <p className='description'>This project is an ongoing collaberation with Rob Feldman and his Cyko KO comic series. This project was built along side an Theta NFT drop. The site allows owners of an NFT to view members only content and information. </p>
      </div>

      {/*React + AWS */}

      <div className='project'>
        <h1 className='project-title'>Host a React Website with AWS</h1>
        <a href='https://www.udemy.com/course/host-a-static-react-website-from-an-aws-s3-bucket-dns/?referralCode=7478066BC0F9F5D65D6D' target="_blank"  rel="noreferrer">
          <img className='screenshot' src='reactS3.png' alt='theta screenshot'></img>
        </a>
        <h1>ReactJS • AWS • S3 • DNS • CDN </h1>
        <p className='description'>I built this course because I knew many web devs can build a site....but sometimes hosting is a bit more of the process. In this course we not only build a simple React site but also host it out of AWS S3 bucket, we cover DNS, HTTPS/SSL and much more!</p>
      </div>


      {/*Theta Site */}

      <div className='project'>
        <h1 className='project-title'>Theta Site</h1>
        <a href='https://reactapppatkos.s3.amazonaws.com/index.html' target="_blank" rel="noreferrer">
          <img className='screenshot' src='theta site.png' alt='theta screenshot'></img>
        </a>
        <h1>ThetaJS • ReactJS • AWS </h1>
        <p className='description'>This is a simple site to test out ThetaJS and react.
          This site keeps tract of the current block height of the Theta network as well as being able to check a wallets current balance.
          This site was deployed and is run through an AWS S3 bucket set up for static web hosting.</p>
      </div>


      {/*python course */}

      <div className='project'>
        <h1 className='project-title'>Learn Python In 2022!</h1>
        <a href='https://www.udemy.com/course/python-zdev9/?referralCode=C3E0087ED1DB18BB352B' target="_blank" rel="noreferrer">
          <img className='screenshot' src='python.png' alt='python course'></img>
        </a>
        <h1>Python • TKinter • Pillow • PyGame • More!</h1>
        <p className='description'>I built this course to help teach others about Python!
          We build serveral applications including an image converter using Pillow, few games with PyGame, GUI apps with Tkinter and much more! Over 100 Videos in this course!</p>
      </div>

      {/*Lambda course */}

      <div className='project'>
        <h1 className='project-title'>Learn Serverless Computing With AWS Lambda!</h1>
        <a href='https://www.udemy.com/course/aws-lambda-nodejs/?referralCode=CEFDF13A9047BAC98B1C' target="_blank"  rel="noreferrer">
          <img className='screenshot' src='lambda.png' alt='Lambda Course'></img>
        </a>
        <h1>NodeJS • AWS-Lamdba • SQL/NoSQL • Serverless Computing</h1>
        <p className='description'>I noticed a lack of good info on AWS Lambda. So I decided to build my own course! Serverless computing is becoming more and more popular and with NodeJS I built this course to help other people learn about serverless computing!</p>
      </div>

      {/*Glossbrenner Calculation */}

      <div className='project'>
        <h1 className='project-title'>Glossbrenner Calculator</h1>
        <a href="https://play.google.com/store/apps/details?id=com.austinpatkos.glossbrennercalculator2&hl=en_US&gl=US" target="_blank"  rel="noreferrer">
          <img className='vertScreenShot' src='gb.png' alt='Glossbrenner Calc'></img>
        </a>
        <h1>Unity • C# • S3 • AWS</h1>
        <p className='description'>As a powerlifter I noticed there wasn't any apps for a lifter to calculate their Glossbrenner score, so I made my own....and the lifting community loved it! Originally programmed with Android SDK and Java I eventually migrated it to Unity because of the more universal nature of the platform. I incorporated an ability for lifters to upload their lifitng picture which then gets stored to an S3 bucket. </p>
      </div>

      
      {/*NoSQL + Unity Course */}

      <div className='project'>
        <h1 className='project-title'>Unity + NoSQL Databasing / DynamoDB</h1>
        <a href='https://www.udemy.com/course/unity-nosql-dynamodb-player-management-leaderboards-more/?referralCode=A0BE1E0B4BB61E8CBE41' target="_blank" rel="noreferrer">
          <img className='screenshot' src='ddb2.png' alt='Unity + NoSql'></img>
        </a>
        <h1>Unity • C# • NodeJS • Lambda • API GateWay • DynamoDB • Hashing Info</h1>
        <p className='description'>I developed a simple game and to keep track of user stats I decided to use DynamoDB. However there wasn't a ton of good info on connecting a Unity Project with a backend database espically with AWS. I teach how to use Lambda, API Gateways, DynamoDB, Players logging in an out, Hashing Passwords, Unity Networking, Unity UI and much more. This course is my longest course to date! </p>
      </div>


      {/*SQL + Unity Course */}

      <div className='project'>
        <h1 className='project-title'>Unity + SQL Databasing</h1>
        <a href='https://www.udemy.com/course/unity-sql-database/?referralCode=9EBC942BB5B269ACF983' target="_blank" rel="noreferrer">
          <img className='screenshot' src='unitysql.png' alt='Unity + SQL'></img>
        </a>
        <h1>Unity • PHP • SQL • EC2 Servers • SSL Certs • Load Balancers • AWS</h1>
        <p className='description'>In this course I teach how to store info on a database from Unity! This is my most popular course to date. We go over so much that's involved with storing user data on the server including hashing user passwords, logging in and logging out, retrieving player info. </p>
      </div>


      {/*S3 Course */}

      <div className='project'>
        <h1 className='project-title'>Unity + S3 Cloud Storage</h1>
        <a href='https://www.udemy.com/course/unity-aws-s3/?referralCode=BBEA2BB17EE2587A4DF9' target="_blank" rel="noreferrer">
          <img className='screenshot' src='unitys3.png' alt='Unity + S3'></img>
        </a>
        <h1>Unity • S3 AWS</h1>
        <p className='description'>In this course I teach how to connect an S3 bucket with an Unity project! This allows players to store and retrieve data.  </p>
      </div>

      {/*Ninja Sprint */}

      <div className='project'>
        <h1 className='project-title'>Ninja Sprint!</h1>
        <a href='https://play.google.com/store/apps/details?id=com.austinpatkos.ninjasprint&hl=en_US&gl=US' target="_blank" rel="noreferrer">
          <img className='screenshot' src='ns.png' alt='Ninja Sprint'></img>
        </a>
        <h1>Unity • S3 • AWS</h1>
        <p className='description'>One of the first games I published is Ninja Sprint! I used this as a test platform for testing out new services like storing player info in a DynamoDB table. The game is simple but players can update and unlock items, uniforms and more! </p>
      </div>


      {/*AWS Free VPN */}

      <div className='project'>
        <h1 className='project-title'>Udemy Course: Make a Free VPN with AWS!</h1>
        <a href='https://www.udemy.com/course/make-a-your-own-free-vpn-with-awscloud-computing/?referralCode=D5CE9D6719FF21C490F7' target="_blank" rel="noreferrer">
          <img className='screenshot' src='awsvpn.png' alt='AWS VPN'></img>
        </a>
        <h1>Networking • EC2 • AWS</h1>
        <p className='description'>In this course I show you how to use a VPN with AWS. VPNs are all the rage these days, so I built one myself. From there I built all the info I learned from building my own VPN into a course!</p>
      </div>


      {/*AWS For Begiiners */}

      <div className='project'>
        <h1 className='project-title'>Udemy Course: Get started with Cloud Computing In 2022!</h1>
        <a href='https://www.udemy.com/course/getting-started-with-aws-in-2021-learn-cloud-computing/?referralCode=5BAA5E3510927C082DA9' target="_blank" rel="noreferrer">
          <img className='screenshot' src='awsgettingstarted.png' alt='aws for beginners'></img>
        </a>
        <h1>AWS</h1>
        <p className='description'>One of the first courses I've ever published. This is a beginners guide to building an launching their wordpress site along with understanding some AWS services.</p>
      </div>


      {/*One Rep Max */}

      <div className='project'>
        <h1 className='project-title'>App: One Rep Max</h1>
        <a href="https://play.google.com/store/apps/details?id=com.onerepmax123456789&hl=en_US&gl=US" target="_blank" rel="noreferrer">
          <img className='screenshot' src='1rm.png' alt='theta screenshot'></img>
        </a>
        <h1>Java • Android SDK</h1>
        <p className='description'>This was the very first app I ever published! This app allows you to calculate a one rep max! It uses both the Brzycki formula and the Epley formula.</p>
      </div>


      {/*Language Quizes*/}

      <div className='project'>
        <h1 className='project-title'>App: Language Quizes</h1>
        <a href="https://play.google.com/store/apps/developer?id=Austin+Patkos&hl=en_US&gl=US" target="_blank" rel="noreferrer">
          <img className='screenshot' src='jp.png' alt='theta screenshot'></img>
        </a>
        <h1>Java • Android SDK</h1>
        <p className='description'>This is one of the first apps I ever published. I always wanted to learn a language so I developed a few basic study apps for multiple languages. </p>
      </div>
    </div>
  );
}

export default Projects;

