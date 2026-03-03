export const blogPosts = [
  //SpookyPass
  {
    slug: "htb-spookypass-walkthrough",
    title: "HTB: SpookyPass Walkthrough",
    date: "2026-03-01",
    readTime: "6 min read",
    tags: ["HTB", "Reversing", "Binary Analysis", "Beginner"],
    excerpt: "A beginner-friendly reversing challenge from Hack The Box. Using basic static analysis tools like strings to extract an embedded password and recover the flag.",
    content: `
<article class="post htb-writeup" itemscope itemtype="https://schema.org/BlogPosting">
  <header class="post-header">
    <h1 itemprop="headline">Breaking Down SpookyPass: Solving a Hack The Box Reversing Challenge</h1>

    <p class="post-meta">
      <span itemprop="author" itemscope itemtype="https://schema.org/Person">
        <span itemprop="name">Austin Patkos</span>
      </span>
      <span aria-hidden="true"> • </span>
      <time itemprop="datePublished" datetime="2026-03-01">March 1, 2026</time>
      <span aria-hidden="true"> • </span>
      <span class="tag">Hack The Box</span>
      <span class="tag">Reversing</span>
      <span class="tag">Beginner</span>
    </p>

    <p class="lead" itemprop="description">
      In this walkthrough, I break down a beginner-friendly HTB reversing challenge and show how simple
      static analysis can reveal everything you need—no heavy tooling required.
    </p>

    <div class="video-embed" style="position:relative;padding-top:56.25%;height:0;overflow:hidden;border-radius:16px;">
      <iframe
        src="https://www.youtube.com/embed/I3FE5RniTw4"
        title="YouTube video player"
        style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <p class="watch-link">
      Prefer YouTube? <a href="https://www.youtube.com/watch?v=I3FE5RniTw4" target="_blank" rel="noopener noreferrer">Watch the full video here</a>.
    </p>

    <hr />
  </header>

  <section class="post-body" itemprop="articleBody">
    <h2>What is SpookyPass?</h2>
    <p>
      <strong>SpookyPass</strong> is a Hack The Box reversing challenge. The goal is straightforward:
      analyze a downloaded Linux binary, figure out the correct password, and retrieve the flag.
      This kind of challenge is perfect if you’re new to reverse engineering because it rewards
      good “first-pass” analysis habits.
    </p>

    <h2>Step 1 — Extract and Identify the Binary</h2>
    <p>
      After downloading the challenge files from HTB and extracting them, you’ll typically end up with
      a single executable (often named something like <code>pass</code>).
    </p>

    <p>Use <code>file</code> to identify what you’re dealing with:</p>

    <pre><code class="language-bash">file pass</code></pre>

    <p>
      Seeing that it’s an ELF 64-bit Linux executable tells us it’s a native binary we can analyze
      with standard tooling.
    </p>

    <h2>Step 2 — Basic Static Analysis with <code>strings</code></h2>
    <p>
      Before running anything, a quick win on beginner reversing challenges is checking for embedded
      readable text:
    </p>

    <pre><code class="language-bash">strings ./pass | less</code></pre>

    <p>
      Scroll through the output and look for anything that resembles:
    </p>
    <ul>
      <li>password prompts</li>
      <li>hard-coded secrets</li>
      <li>flag formatting (e.g., <code>HTB{...}</code>)</li>
      <li>error/success messages that indicate program flow</li>
    </ul>

    <p>
      In this challenge, a suspicious password-like string appears in the printable strings list:
    </p>

    <pre><code>s3cr3t_p455_f0r_gh05t5_4nd_gh0ul5</code></pre>

    <p>
      That’s a huge clue. Many entry-level reversing challenges intentionally include easy-to-spot
      artifacts to reinforce “try the simple stuff first.”
    </p>

    <h2>Step 3 — Run the Program and Test Your Find</h2>
    <p>Now we run the binary to confirm behavior:</p>

    <pre><code class="language-bash">./pass</code></pre>

    <p>You’ll get a prompt similar to:</p>

    <pre><code>Welcome to the SPOOKIEST party of the year.
Before we let you in, you’ll need to give us the password:</code></pre>

    <p>
      Enter the string we extracted using <code>strings</code>. If the binary is doing a direct comparison
      against a hard-coded value, it should accept it and reveal the flag.
    </p>

    <h2>Result — The Flag</h2>
    <p>
      After entering the correct password, the binary prints the flag:
    </p>

    <pre><code>HTB{un0bfu5c4t3d_5tr1ng5}</code></pre>

    <h2>Why This Worked</h2>
    <p>
      This challenge is essentially a “warm-up” for reversing fundamentals:
    </p>

    <ul>
      <li>identify the binary type</li>
      <li>extract embedded strings</li>
      <li>observe program prompts</li>
      <li>test likely secrets directly</li>
    </ul>

    <p>
      In short: the password was embedded inside the binary and compared to user input. Once the input matches,
      the binary prints the flag.
    </p>

    <h2>Tools Used</h2>
    <ul>
      <li><code>file</code> — identify binary type</li>
      <li><code>strings</code> — extract printable strings from the binary</li>
      <li><code>less</code> — view output page-by-page</li>
      <li>Terminal — execute and interact with the program</li>
    </ul>

    <h2>Final Thoughts</h2>
    <p>
      Not every reversing challenge starts with IDA, Ghidra, or a debugger. Sometimes the fastest path
      is the simplest one—get good at the basic recon and you’ll snag a lot of early flags quickly.
    </p>

    <p>
      If you want more write-ups like this, I’m posting more HTB content regularly on YouTube.
    </p>

    <p class="cta">
      <a href="https://www.youtube.com/watch?v=I3FE5RniTw4" target="_blank" rel="noopener noreferrer">
        Watch the walkthrough on YouTube →
      </a>
    </p>

    <hr />

    <footer class="post-footer">
      <p><strong>Disclaimer:</strong> This post is for educational purposes and legal, authorized practice only.</p>
    </footer>
  </section>
</article>
`
  },
  //Open Secret
{
  slug: "htb-opensecret-walkthrough",
  title: "HTB: OpenSecret Walkthrough",
  date: "2026-03-03",
  readTime: "7 min read",
  tags: ["HTB", "Web Security", "JWT", "Pentesting"],
  excerpt:
    "A walkthrough of Hack The Box's OpenSecret challenge. We analyze a vulnerable helpdesk portal and exploit insecure JWT handling to retrieve the flag.",
  content: `
    <h1>HTB: OpenSecret Walkthrough</h1>

    <p>
      OpenSecret is a <strong>very easy Hack The Box web challenge</strong> that demonstrates how insecure handling of
      <strong>JSON Web Tokens (JWTs)</strong> can expose sensitive data in web applications.
    </p>

    <p>
      In this challenge we interact with a simple helpdesk portal and discover that the authentication mechanism relies on
      a poorly secured JWT. By analyzing and modifying the token, we can gain access to hidden functionality and retrieve
      the flag.
    </p>

    <hr />

    <h2>Video Walkthrough</h2>

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px;">
      <iframe
        src="https://www.youtube.com/embed/KwjcqPm-UHA"
        title="HTB OpenSecret Walkthrough"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      ></iframe>
    </div>

    <hr />

    <h2>Challenge Overview</h2>

    <p>
      When visiting the challenge application, we are presented with a <strong>helpdesk-style web interface</strong>.
      The application allows users to log in and interact with support tickets. However, authentication is handled using a
      <strong>JWT stored in the browser</strong>, which immediately raises some questions:
    </p>

    <ul>
      <li>Is the token properly signed?</li>
      <li>Can it be modified?</li>
      <li>Does it expose internal secrets?</li>
    </ul>

    <p>
      Understanding how the application trusts the JWT becomes the key to solving the challenge.
    </p>

    <hr />

    <h2>Step 1: Inspect the Authentication Token</h2>

    <p>
      After logging in, we check the browser storage and discover a JWT token. JWT tokens follow a standard format:
    </p>

    <pre><code>HEADER.PAYLOAD.SIGNATURE</code></pre>

    <p>
      The payload contains encoded JSON data describing the user. For example, a decoded payload might look like:
    </p>

    <pre><code class="language-json">{
  "username": "guest",
  "role": "user"
}</code></pre>

    <p>
      That <code>role</code> attribute immediately suggests a potential privilege escalation opportunity.
    </p>

    <hr />

    <h2>Step 2: Decode the JWT</h2>

    <p>
      JWTs are <strong>Base64 encoded</strong>, so we can decode them easily using tools like:
    </p>

    <ul>
      <li>jwt.io</li>
      <li>Burp Suite</li>
      <li>Base64 utilities</li>
      <li>Browser extensions</li>
    </ul>

    <p>
      Once decoded, we inspect the payload fields and confirm where the authorization-relevant values live (like
      <code>role</code>).
    </p>

    <hr />

    <h2>Step 3: Modify the Token</h2>

    <p>
      Since the application trusts the JWT, we attempt to modify it. For example, changing the role:
    </p>

    <pre><code class="language-json">{
  "username": "guest",
  "role": "admin"
}</code></pre>

    <p>
      If the application does not properly validate the token signature, this change can grant administrative privileges.
      After re-encoding the token and replacing it in the browser, we refresh the application and check what changes.
    </p>

    <hr />

    <h2>Step 4: Access Hidden Functionality</h2>

    <p>
      With the modified token, the application may reveal new functionality that was previously hidden from normal users,
      such as:
    </p>

    <ul>
      <li>Administrative endpoints</li>
      <li>Internal system data</li>
      <li>Hidden helpdesk resources</li>
    </ul>

    <p>
      From there, we enumerate the newly accessible pages and locate the flag exposed within the admin functionality.
    </p>

    <hr />

    <h2>Why This Vulnerability Happens</h2>

    <p>
      JWT issues commonly occur when applications:
    </p>

    <ul>
      <li>Fail to verify the token signature</li>
      <li>Accept unsigned tokens</li>
      <li>Trust client-controlled fields like roles and permissions</li>
      <li>Use weak or exposed signing secrets</li>
    </ul>

    <p>
      The lesson is simple: <strong>the client should never be able to grant itself privileges</strong>.
    </p>

    <hr />

    <h2>Tools Used</h2>

    <ul>
      <li>Browser Developer Tools</li>
      <li>JWT decoding tools</li>
      <li>Base64 decoding</li>
      <li>Basic HTTP inspection</li>
    </ul>

    <hr />

    <h2>Takeaways</h2>

    <ol>
      <li>Never trust client-side tokens without proper verification.</li>
      <li>Always validate JWT signatures.</li>
      <li>Avoid relying solely on token payload fields for authorization.</li>
      <li>Simple web apps can expose critical secrets if authentication is weak.</li>
    </ol>

    <p>
      OpenSecret is a great intro to JWT testing and authentication pitfalls. More HTB walkthroughs coming soon.
    </p>
  `
}
];