<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Input Validation and Visual Feedback Explained | Ounces to Grams Blog</title>
  <meta name="description" content="Learn why the converter shows warnings for invalid inputs and how it ensures reliable results for your recipes." />
  <meta property="og:title" content="Input Validation and Visual Feedback Explained | Ounces to Grams Blog" />
  <meta property="og:description" content="Learn why the converter shows warnings for invalid inputs and how it ensures reliable results for your recipes." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Input Validation and Visual Feedback Explained</p>
  </div>

  <article class="prose">
    <h1>Input Validation and Visual Feedback Explained</h1>

    <p class="post-meta">Published: March 13, 2026</p>

    <p>Good tools prevent mistakes before they cause problems. In the kitchen, a small typing error can turn a teaspoon into a tablespoon or ounces into kilograms. This converter includes simple but effective checks that catch common input issues right away and show clear visual cues so you know exactly what went wrong.</p>

    <h2>What Counts as a Valid Input</h2>
    <p>The tool accepts any non-negative number, including decimals. Zero is allowed because some recipes list trace amounts or ask for none of an ingredient. Positive decimals like four point seven five ounces or thirty-two point five grams work perfectly. The system converts these values accurately without rounding until the final display step.</p>

    <h2>How Invalid Entries Are Handled</h2>
    <p>If you accidentally type letters, negative numbers, or leave the field blank after starting to type, the input border changes to red. A short message appears below the field saying please enter a non-negative number. This immediate feedback stops you from relying on a wrong or missing conversion. Once you correct the entry, the red border disappears and the correct result shows up instantly.</p>

    <h2>Why Two Decimal Places for Output</h2>
    <p>Most kitchen scales display weight to the nearest tenth or hundredth of a gram or ounce. Showing results with exactly two decimal places matches this real-world precision. It avoids overwhelming you with extra digits that have no practical meaning when measuring butter or flour. For example, four point three two ounces becomes one hundred twenty-two point four seven grams — clean, usable numbers every time.</p>

    <h2>Benefits for Busy Cooks</h2>
    <ul>
      <li>Prevents calculation errors from typos or accidental minus signs</li>
      <li>Keeps the interface trustworthy by never showing misleading results</li>
      <li>Saves time because you do not need to double-check every entry</li>
      <li>Works well on small phone screens where typing mistakes happen more often</li>
    </ul>

    <p>These small safeguards make the tool feel dependable. You can trust the numbers it gives you because it refuses to guess when something looks wrong.</p>

    <p class="italic-note">The next article explains why this level of precision really matters when baking.</p>
  </article>
</div>

<style>
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

  .prose h1, .prose h2{
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