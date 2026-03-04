<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Ounces to Grams Converter</title>
  <meta name="description" content="Read how the Ounces to Grams Converter protects your privacy with zero data collection and fully client-side operation." />
  <meta property="og:title" content="Privacy Policy | Ounces to Grams Converter" />
  <meta property="og:description" content="Read how the Ounces to Grams Converter protects your privacy with zero data collection and fully client-side operation." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: March 10, 2026</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Ounces to Grams Converter</strong>, a simple, free, browser-based utility for instant conversion between ounces and grams. This tool is built and hosted as a static website with <strong>zero server-side processing</strong>. We are committed to the strongest possible privacy protection: <strong>we collect, store, transmit, or process absolutely no personal data or user input</strong>. All calculations happen exclusively in your browser using JavaScript.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>Because the converter runs entirely client-side, we do not obtain any of the following:</p>
    <ul>
      <li><strong>Personal information</strong> — names, email addresses, phone numbers, or any identifiers</li>
      <li><strong>Input data</strong> — the numbers or values you type are never sent anywhere</li>
      <li><strong>Technical telemetry</strong> — no IP addresses, browser fingerprints, device details, location, or timestamps</li>
      <li><strong>Usage analytics</strong> — no tracking pixels, cookies, localStorage persistence, or third-party analytics scripts</li>
    </ul>
    <p>Your entered amounts remain in memory only for the duration of your visit and are discarded when you close or refresh the page.</p>

    <h2>3. How the Tool Operates</h2>
    <p>When you use the converter:</p>
    <ul>
      <li>All math (multiplication/division by the constant 28.349523125) is performed locally</li>
      <li>Input validation and real-time updates use reactive Svelte statements</li>
      <li>No network requests are made except to load static assets (HTML, CSS, JS)</li>
      <li>The browser may temporarily hold your typed value during the session — nothing more</li>
    </ul>

    <h2>4. Third-Party Services & CDNs</h2>
    <p>We use Bootstrap CSS and JS via public CDN links for styling and layout. These CDNs may log standard HTTP request metadata (IP, user-agent) — data that is <strong>not collected or controlled by us</strong>. No tracking scripts or cookies are included from these sources.</p>

    <h2>5. Cookies and Similar Technologies</h2>
    <p>The site is <strong>completely stateless</strong> and <strong>does not set any cookies</strong>, nor does it use localStorage, sessionStorage, or indexedDB for persistent data.</p>

    <h2>6. Data Security</h2>
    <p>Since no data is collected or transmitted, there is no risk of data breach on our end. We recommend using a modern, up-to-date browser and avoiding public Wi-Fi when entering sensitive recipe data if privacy is a concern.</p>

    <h2>7. Children’s Privacy</h2>
    <p>This tool is not directed at children under 13. We do not knowingly collect data from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may revise this Privacy Policy occasionally. The updated version will be posted here with a new effective date.</p>

    <h2>9. Contact</h2>
    <p>Questions about privacy? Reach out via the contact form on the site or the GitHub repository issues.</p>

    <p class="italic-note"><strong>By using this converter you acknowledge that no personal data is collected at any time.</strong></p>
  </article>
</div>

<style>
  /* identical style block as your blog posts */
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>