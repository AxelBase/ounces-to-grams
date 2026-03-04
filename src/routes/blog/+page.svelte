<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Welcome to the Ounces ↔ Grams Converter',
      description: 'A quick introduction to this clean, instant, client-side tool that helps you switch between US ounces and metric grams with no fuss or tracking.'
    },
    {
      href: '/blog/posts/post2',
      title: 'How Instant Two-Way Conversion Works',
      description: 'Explore the real-time calculation behind every keystroke — using the precise 1 oz = 28.349523125 g factor for accurate, bidirectional results.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Using the Converter: Quick Start Guide',
      description: 'Step-by-step walkthrough — enter a value, choose your starting unit (oz or g), watch the result appear immediately, and flip direction when needed.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Input Validation and Visual Feedback Explained',
      description: 'Why the tool shows red borders or messages for invalid entries, how it handles decimals and zero values, and what the 2-decimal-place output means for recipes.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Precision in Cooking & Baking Conversions',
      description: 'Why using the exact conversion factor matters for scaling ingredients accurately — and how small rounding differences can affect your final dish.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Switching Directions Seamlessly',
      description: 'Tips on using the toggle buttons or flip feature to go from oz → g to g → oz instantly, keeping your current amount while changing the reference unit.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Best Practices for Recipe Ingredient Conversion',
      description: 'Practical advice for home cooks: handling common baking amounts, avoiding estimation errors, and why this stateless tool gives reliable results every time.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | Ounces to Grams Converter Insights</title>
  <meta name="description" content="Practical guides, tips, and explanations for getting the most accurate ounce-to-gram conversions in cooking and baking." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: Ounces ↔ Grams Converter Insights</h1>
    <p class="subtitle">
      Helpful articles and tips on using this simple, privacy-first, real-time converter for everyday cooking, baking, and recipe scaling.
      No sign-ups, no data sent — just fast and accurate results in your browser.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>