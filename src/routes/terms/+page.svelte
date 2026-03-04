<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Ounces to Grams Converter</title>
  <meta name="description" content="Terms of use for the free, client-side Ounces to Grams Converter utility." />
  <meta property="og:title" content="Terms and Conditions | Ounces to Grams Converter" />
  <meta property="og:description" content="Terms of use for the free, client-side Ounces to Grams Converter utility." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: March 10, 2026</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Ounces to Grams Converter</strong> (the “Service”), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Service. These terms may be updated; continued use constitutes acceptance of changes.</p>

    <h2>2. Description of Service</h2>
    <p>The Service is a free, static, client-side web utility that performs real-time conversion between avoirdupois ounces and grams using the factor 28.349523125. All processing occurs in your browser. <strong>No account, registration, or personal information is required</strong>.</p>

    <h2>3. Permitted Use</h2>
    <p>You may use the Service for personal, non-commercial purposes including cooking, baking, recipe scaling, education, and reference. Commercial redistribution or embedding in paid products requires explicit written permission.</p>

    <h2>4. Prohibited Use</h2>
    <p>You agree <strong>not</strong> to:</p>
    <ul>
      <li>Use the Service for any unlawful purpose</li>
      <li>Attempt to reverse-engineer, decompile, or extract source code</li>
      <li>Introduce viruses, malware, or harmful code</li>
      <li>Scrape, automate, or overload the static hosting infrastructure</li>
      <li>Present the Service as your own or remove attribution/credits</li>
    </ul>

    <h2>5. Accuracy & Reliability Disclaimer</h2>
    <p>The conversion factor is mathematically accurate, but results are provided <strong>as-is</strong>. Small rounding to two decimal places occurs for practical display. <strong>We are not responsible for any consequences</strong> (culinary, financial, health-related or otherwise) arising from reliance on the converted values. Always verify critical measurements with calibrated scales.</p>

    <h2>6. No Warranty</h2>
    <p>The Service is provided “as available” and “as is” without warranties of any kind, express or implied, including but not limited to accuracy, reliability, fitness for a particular purpose, or non-infringement.</p>

    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from use of or inability to use the Service — even if advised of the possibility of such damages.</p>

    <h2>8. Intellectual Property</h2>
    <p>The design, layout, and code (excluding third-party libraries) are © 2026 the creator. Bootstrap is used under its license. You may not copy or reproduce substantial portions without permission.</p>

    <h2>9. Third-Party Links & CDNs</h2>
    <p>The site loads Bootstrap from public CDNs. We are not responsible for those services’ availability, content, or privacy practices.</p>

    <h2>10. Governing Law</h2>
    <p>These Terms are governed by the laws of the jurisdiction where the site is primarily hosted, without regard to conflict of law principles.</p>

    <h2>11. Changes to Terms</h2>
    <p>We may modify these Terms at any time. Changes will be posted here with an updated effective date.</p>

    <p class="italic-note"><strong>Your continued use of the Ounces to Grams Converter after any changes constitutes acceptance of the revised Terms.</strong></p>
  </article>
</div>

<style>
  /* identical style block as Privacy Policy and blog posts */
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