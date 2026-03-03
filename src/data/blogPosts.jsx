export const blogPosts = [
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
    }
];