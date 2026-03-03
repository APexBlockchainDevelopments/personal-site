# austinpatkos.com — Personal Resume & Portfolio Site

> **Founder · CTO · Smart Contract Engineer · Cloud Architect · Security Researcher**
> _Building production systems where immutability, security, and financial correctness are non-negotiable._

---

## 🚀 Live Site

**[austinpatkos.com](https://austinpatkos.com)**

---

## 🏗️ Architecture & Infrastructure

This site is not just a portfolio — it is itself a demonstration of production-grade cloud deployment patterns.

```
GitHub Push
    │
    ▼
AWS CodeBuild (buildspec.yaml)
    │  ├─ Node.js 20 runtime
    │  ├─ npm ci (clean install, lockfile-enforced)
    │  ├─ npm run build (React production bundle)
    │  └─ Post-build:
    │       ├─ aws s3 sync dist/ → s3://austinpatkos.com --delete
    │       └─ CloudFront invalidation (/*) → instant global cache bust
    │
    ▼
AWS S3 (Static Hosting Origin)
    │
    ▼
AWS CloudFront (Global CDN / Edge Distribution: E33148JHYQZ1HM)
    │
    ▼
End User (HTTPS, cached at edge, worldwide)
```

### Infrastructure Highlights

- **Zero-downtime deploys** — S3 sync + CloudFront invalidation ensures atomic content swaps with no stale cache windows
- **GitHub-triggered CI/CD** — CodeBuild webhook fires on every push; no manual deployments, no SSH, no servers to manage
- **Immutable build artifacts** — `npm ci` over `npm install` guarantees dependency integrity via lockfile on every build
- **Edge-cached globally** — CloudFront distribution delivers assets from the nearest PoP, minimizing latency worldwide
- **Environment-scoped config** — `ENV_MODE=production` injected at build time via CodeBuild environment variables

---

## 🧠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 17 + React Router v6 |
| Build Tool | Create React App / react-scripts 5 |
| Language | JavaScript (ES2021+) |
| Styling | Custom CSS (component-scoped) |
| Routing | Client-side SPA routing (BrowserRouter) |
| CI/CD | AWS CodeBuild (buildspec.yaml) |
| Storage / Hosting | AWS S3 (static website origin) |
| CDN | AWS CloudFront |
| Runtime (Build) | Node.js 20 |
| Deployment Trigger | GitHub webhook → CodeBuild |

---

## 🗂️ Project Structure

```
├── buildspec.yaml          # AWS CodeBuild pipeline definition
├── package.json            # Dependency manifest (lockfile-enforced)
├── public/                 # Static assets (favicons, images, PDFs)
│   └── certs/              # Certification badge images
└── src/
    ├── App.js              # Root router — SPA route definitions
    ├── Home.js             # Landing page (bio, links, competencies)
    ├── AreaOfFocus.js      # Core competencies (6 technical domains)
    ├── Certs.js            # Certifications display
    ├── Projects.js         # Full project portfolio
    ├── Blog.js             # Blog index
    ├── BlogPost.js         # Dynamic slug-based blog post renderer
    ├── components/
    │   ├── SiteNav.js      # Navigation component
    │   └── ThetaSite.js    # Theta blockchain component
    ├── pages/
    │   ├── CertificationsPage.js
    │   └── ProjectsPage.js
    └── data/
        └── blogPosts.jsx   # Blog content (structured data + HTML content)
```

---

## 👤 About Austin Patkos

Austin is a **technical co-founder and hands-on builder** operating at the intersection of Web3, cloud infrastructure, security, and financial systems. He doesn't just architect systems — he ships them, audits them, and teaches others to build them.

### What He Actually Builds

**Smart Contracts & EVM**
Solidity, Foundry/Forge, ERC-20/permit (EIP-2612), EIP-712 typed signatures, UUPS proxy upgradeability patterns, low-level Yul/Huff, and bytecode analysis. Has shipped production smart contract systems for USDC settlement, reversible ERC-20 token architecture (ERC20R with freeze/recovery semantics), and permit-based approval flows.

**Web3 Payments Infrastructure (mWire)**
Architected USDC payment rails enabling merchants to accept EVM assets with a mainstream checkout UX. Built a custom WordPress/WooCommerce payments plugin (Checkout Blocks compatible) backed by AWS Lambda + DynamoDB, with smart-contract-based settlement forwarder flows, Web3Auth/WalletConnect integrations, and signature-verified execution paths.

**Token Recovery & Dispute Systems (Resolv Finance)**
Designed a reversible ERC-20 architecture with freeze/recovery mechanics, on-chain governance primitives (committee/voting as explicit state machines), and comprehensive Foundry test suites including unit, fuzz, and invariant tests targeting adversarial flows. Integrated LLM-assisted dispute triage tooling with human-in-loop auditability.

**AWS Serverless Architecture**
4x AWS certified. Production experience building event-driven payment backends: cryptographic webhook verification, JWT auth, idempotent transaction processing, zero-downtime secrets rotation, single-table DynamoDB schema design with optimized GSI access patterns, full observability via CloudWatch + X-Ray + structured logging.

**Security & Auditing**
Smart contract security reviews focused on access control, signature verification, reentrancy, and economic attack surfaces. Threat modeling, fuzzing, invariant testing, and reproducible remediation-guided test cases. CompTIA PenTest+ and Security+ certified. Active HTB practitioner with published walkthroughs.

**Education at Scale**
Published educator with **50,000+ students** across Udemy. Built courses on AWS Lambda, DynamoDB/Unity integration, SQL/NoSQL backend development, Python, S3 cloud storage, CloudFront/CDN deployment, and custom VPN configuration on EC2 — because knowing how to build it isn't enough if you can't explain it.

---

## 🏆 Certifications

| Certification | Issuer |
|---|---|
| AWS Solutions Architect – Associate (SAA-C03) | Amazon Web Services |
| AWS Developer – Associate (DVA-C02) | Amazon Web Services |
| AWS SysOps Administrator – Associate (SOA-C02) | Amazon Web Services |
| AWS Cloud Practitioner (CLF-C02) | Amazon Web Services |
| CompTIA PenTest+ | CompTIA |
| CompTIA Security+ | CompTIA |
| ISC2 Certified in Cybersecurity (CC) | ISC2 |
| eJPT (eLearnSecurity Junior Penetration Tester) | INE Security |

---

## 🔨 Featured Projects

| Project | Stack | Description |
|---|---|---|
| **mWire** | Solidity · USDC · AWS Lambda · DynamoDB · WalletConnect | USDC payment rails for merchants; EIP-2612 permit flows, smart-contract settlement forwarder |
| **Resolv Finance** | Solidity · Foundry · ERC20R · Governance | Reversible ERC-20 with freeze/recovery, on-chain dispute state machines, fuzz + invariant tests |
| **Theta Hackathon Winner** | Solidity · Unity · React · AWS | NFT-gated arcade games with ERC-20 token rewards on the Theta blockchain |
| **Cyko Headz** | React · ThetaDrop · NFTs | NFT-holders-only content platform built alongside a live NFT drop |
| **NFTified.org** | React · AWS · Solidity | On-chain NFT ownership verification tool |
| **Glossbrenner Calculator** | Unity · C# · AWS S3 | Published Android app for powerlifters; S3-backed photo storage |
| **Ninja Sprint** | Unity · DynamoDB · Lambda | Published mobile game with serverless player data backend |
| **HTB Walkthroughs** | Binary Analysis · `strings` · ELF | Published CTF write-ups covering reversing, static analysis, and flag recovery |

---

## 📡 CI/CD Pipeline Deep Dive

The `buildspec.yaml` defines a 3-phase AWS CodeBuild pipeline:

```yaml
# Phase 1 — Install
nodejs: 20
npm ci                          # Lockfile-enforced clean install

# Phase 2 — Build  
npm run build                   # Production React bundle (minified, tree-shaken)

# Phase 3 — Post-Build
aws s3 sync dist/ s3://$S3_BUCKET/ --delete     # Atomic sync, removes stale files
aws cloudfront create-invalidation --paths "/*" # Global cache invalidation
```

Every push to the connected GitHub branch triggers a full build, sync, and CDN invalidation cycle — achieving **continuous deployment with no manual steps and no servers to maintain.**

---

## 🔗 Links

- 🌐 [austinpatkos.com](https://austinpatkos.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/austin-patkos-5578b8184/)
- 🐙 [GitHub](https://github.com/APexBlockchainDevelopments)
- 📺 [YouTube / The Crypto Gym](https://youtube.com/@thecryptogym)
- 📚 [Udemy Courses](https://www.udemy.com/user/austin-patkos/)

---

_This site is itself a live example of the AWS S3 + CloudFront + CodeBuild deployment pattern Austin has built, taught, and published courses on._