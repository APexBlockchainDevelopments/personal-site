import './AreaOfFocus.css';

function AreaOfFocus() {
  return (
    <div className="Area-Of-Focus-Main">
      <h1 className='Area-Of-Focus-Title'>Core Competencies</h1>

      <div className='Area-Of-Focus-Area'>
        <h2>Offensive Security</h2>
        <p>
          Security-focused engineer building toward offensive security assessments across AI systems, financial platforms, applications, APIs, and modern infrastructure. Strong emphasis on realistic exploit paths, adversarial thinking, and how vulnerabilities emerge across interconnected systems.
        </p>
        <p>
          The real question is never whether a system works. It is how it breaks, who can break it, and what happens when they do.
        </p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>Smart Contracts & Web3</h2>
        <p>
          Expertise in Solidity, Foundry/Forge, ERC-20/permit (EIP-2612), EIP-712 signatures, and upgradeability patterns (UUPS/proxies). Experience with low-level EVM (Yul/Huff) and bytecode analysis. Built production smart contract systems for USDC settlement, token recovery architecture, and reversible ERC-20 prototypes.
        </p>
        <p>
          On-chain code is immutable. Every deployment is final, and every audit finding is a bullet dodged.
        </p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>Payments & Financial Infrastructure</h2>
        <p>
          Architected USDC-based payment rails enabling merchants to accept EVM assets with mainstream checkout experiences. Built API hooks, Web3Auth/WalletConnect integrations, and smart-contract-based settlement flows with permit-based approvals and signature-verified execution paths.
        </p>
        <p>
          When systems move real money, security is not a feature. It is the business.
        </p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>Cloud & Backend Engineering</h2>
        <p>
          Architect scalable serverless systems on AWS with production experience across Lambda, DynamoDB, S3, API Gateway, and IAM. Built event-driven backends handling real transactions, cryptographic webhook verification, JWT auth, idempotent processing, and secure secrets management.
        </p>
        <p>
          A system is only as good as its weakest failure point. Secure systems also need to stay online, observable, and resilient.
        </p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>AI Systems & Emerging Attack Surfaces</h2>
        <p>
          Experience with LLM-assisted tooling, analytics pipelines, and AI-adjacent system design, with growing focus on prompt injection, agent abuse, data exposure, and the risks created by rapidly deployed AI products. Interested in how AI expands the attack surface across application and financial systems.
        </p>
        <p>
          AI is not magic. It is software with a larger blast radius and a new layer of assumptions to exploit.
        </p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>Physical & Real-World Security Thinking</h2>
        <p>
          Interested in how physical access, human behavior, and real-world interactions intersect with digital systems. This includes thinking beyond purely remote attacks and considering how on-site presence, social engineering, and environmental weaknesses can become part of an attack chain.
        </p>
        <p>
          The most dangerous exploit path is often the one that crosses boundaries others forgot to connect.
        </p>
      </div>
    </div>
  );
}

export default AreaOfFocus;