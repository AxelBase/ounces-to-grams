<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Welcome to the Ounces ↔ Grams Converter | Ounces to Grams Blog</title>
  <meta name="description" content="Learn about this fast, private, browser-based ounces to grams converter designed for everyday cooking and baking needs." />
  <meta property="og:title" content="Welcome to the Ounces ↔ Grams Converter | Ounces to Grams Blog" />
  <meta property="og:description" content="Learn about this fast, private, browser-based ounces to grams converter designed for everyday cooking and baking needs." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Welcome to the Ounces ↔ Grams Converter</p>
  </div>

  <article class="prose">
    <h1>Welcome to the Ounces ↔ Grams Converter</h1>

    <p class="post-meta">Published: March 10, 2026</p>

    <p>This simple web utility converts between ounces and grams instantly in your browser. Whether you are following an American recipe that lists ingredients in ounces or a European one that uses grams, this tool removes the guesswork. Everything happens locally — no data leaves your device, no account is needed, and there are no advertisements.</p>

    <h2>Why a Dedicated Converter Helps in the Kitchen</h2>
    <p>Most people keep both measuring systems in their kitchen drawer, but many recipes still mix units. A cup of flour might be listed beside two ounces of butter and one hundred grams of sugar. Switching between calculators or searching online every time slows you down and introduces small errors. This converter gives accurate answers the moment you type a number.</p>

    <p>The tool uses the internationally accepted conversion factor of one ounce equals twenty-eight point three four nine five two three one two five grams. This precise value ensures your scaled recipes stay consistent whether you double a batch or reduce it for fewer servings.</p>

    <h2>Who Uses This Tool Most Often</h2>
    <p>Home bakers rely on exact weights for consistent texture in cakes, breads, and cookies. Professional cooks working with imported recipes appreciate the speed when they need to adjust quantities on the fly. Even casual cooks who occasionally try international dishes find value in having one reliable place to check conversions without distractions.</p>

    <h2>Core Features at a Glance</h2>
    <ul>
      <li>Instant two-way conversion — type in ounces to see grams, or type in grams to see ounces</li>
      <li>Clear toggle buttons to switch direction without losing your current value</li>
      <li>Visual warning when you enter something that is not a valid non-negative number</li>
      <li>Results shown with exactly two decimal places for practical kitchen use</li>
      <li>Responsive design that works comfortably on phones and tablets</li>
    </ul>

    <p>The interface keeps things uncluttered so you can focus on the recipe instead of figuring out the tool. Large input fields and big tap targets make it easy to use one-handed while stirring or weighing ingredients.</p>

    <p class="italic-note">More practical tips and deeper explanations are coming in the next articles.</p>
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

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>