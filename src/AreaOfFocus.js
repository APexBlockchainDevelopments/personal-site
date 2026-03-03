import './AreaOfFocus.css';

function AreaOfFocus() {
  return (
    <div className="Area-Of-Focus-Main">
      <h1 className='Area-Of-Focus-Title'>Core Competencies</h1>
      
      <div className='Area-Of-Focus-Area'>
        <h2>Smart Contracts & Web3</h2>
        <p>Expertise in Solidity, Foundry/Forge, ERC-20/permit (EIP-2612), EIP-712 signatures, and upgradeability patterns (UUPS/proxies). Experience with low-level EVM (Yul/Huff) and bytecode analysis. Built production smart contract systems for USDC settlement, token recovery architecture, and reversible ERC-20 prototypes.</p>
        <p>On-chain code is immutable. So every deployment is final, and every audit finding is a bullet dodged.</p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>Engineering & Development</h2>
        <p>Full-stack engineer building production systems in Solidity, TypeScript, Rust, C#, and Node.js. Designed and shipped payment processing platforms, authentication systems, and API-driven merchant tools handling real financial transactions. Strong CS fundamentals—data structures, algorithms, system design—applied to real-world problems. Educator with 50,000+ students.</p>
        <p>In today's world, anyone can write code. Making it secure, clean, efficient and production ready is a skill.</p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>Security & Auditing</h2>
        <p>Performed smart contract security reviews and audit-style assessments with focus on access control, signature verification, reentrancy, and economic attack surfaces. Skilled in threat modeling, fuzzing & invariant testing, and producing reproducible test cases with remediation guidance. CompTIA PenTest+ and Security+ certified.</p>
        <p>In developing systems - Security shouldn't be an afterthought...it's integral that keeps millions of dollars safe.</p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>Payments & Infrastructure</h2>
        <p>Architected USDC-based payment rails enabling merchants to accept EVM assets with mainstream checkout experiences. Built API hooks, Web3Auth/WalletConnect integrations, and smart-contract-based settlement flows with permit-based approvals and signature-verified execution paths.</p>
        <p>Moving real money means zero room for "oops". Every transaction is someone's livelihood.</p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>Cloud & Backend Engineering</h2>
        <p>Architect scalable serverless systems on AWS—4x certified with production experience across Lambda, DynamoDB, S3, API Gateway, and IAM. Built event-driven payment backends handling real transactions: cryptographic webhook verification, JWT auth, idempotent processing, and zero-downtime secrets rotation. Designed single-table DynamoDB schemas with optimized GSI access patterns. Every system includes full observability—CloudWatch, X-Ray, structured logs—because production failures are learning opportunities, not disasters.</p>
        <p>A system is only as good as its weakest failure point. Keeping systems secure means keeping systems online, efficient and cost-effective.</p>
      </div>

      <div className='Area-Of-Focus-Area'>
        <h2>AI & Data Engineering</h2>
        <p>Prototyped LLM-assisted tooling for dispute triage and case documentation with emphasis on auditability (human-in-loop) and deterministic evidence capture. Experience with event instrumentation, analytics/telemetry pipelines, and DynamoDB data modeling for AI-powered systems.</p>
        <p>AI is a tool, not magic. The real innovation is knowing when to trust it and when to keep humans in the loop.</p>
      </div>
    </div>
  );
}

export default AreaOfFocus;

