<script>
  import { base } from '$app/paths';
  import { ouncesToGrams, gramsToOunces, formatResult, isValidInput } from '$lib/converter';
  import { fade, fly } from 'svelte/transition';

  let mode = 'oz-to-g';
  let inputValue = '';
  let result = '';

  $: valid = isValidInput(inputValue);

  $: {
    if (!valid || inputValue === '') {
      result = '';
    } else {
      const num = Number(inputValue);
      result = mode === 'oz-to-g' ? formatResult(ouncesToGrams(num)) : formatResult(gramsToOunces(num));
    }
  }

  function toggleMode() {
    mode = mode === 'oz-to-g' ? 'g-to-oz' : 'oz-to-g';
    if (inputValue !== '' && result !== '') inputValue = result;
  }
</script>

<svelte:head>
  <title>Ounces to Grams Converter – Instant, Private & Accurate</title>
  <meta name="description" content="Free real-time ounces ↔ grams converter for cooking and baking. Fully client-side, no tracking, precise 28.349523125 g/oz factor, instant results with input validation." />
  <meta name="keywords" content="ounces to grams, grams to ounces, converter, cooking converter, baking weights, recipe converter, metric imperial conversion" />
  <meta name="robots" content="index, follow" />
  
  <!-- Open Graph / Social Sharing -->
  <meta property="og:title" content="Ounces to Grams Converter – Fast & Privacy-First" />
  <meta property="og:description" content="Instant bidirectional conversion between oz and g. No data leaves your device. Perfect for recipes, scaling ingredients, and precise kitchen measurements." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{base}/" />
  <meta property="og:image" content="{base}/AxelLab-Logo1.jpg" />
  <meta property="og:site_name" content="Ounces to Grams Converter" />

  <!-- Twitter / X Cards -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ounces to Grams Converter – Instant, Private & Accurate" />
  <meta name="twitter:description" content="Real-time oz ↔ g conversion in your browser. No ads, no tracking, precise results for cooking & baking." />
  <meta name="twitter:image" content="{base}/AxelLab-Logo1.jpg" />

  <!-- Canonical -->
  <link rel="canonical" href="{base}/" />
</svelte:head>

<section class="container py-5">
  <div class="row justify-content-center">
    <div class="col-12 col-md-8 col-lg-5">
      
      <div class="text-center mb-5" in:fade={{ duration: 1000 }}>
        <h1 class="display-5 fw-bold mb-2">
          <span style="color: var(--brand-green)">Ounces</span> ↔ Grams
        </h1>
        <p class="text-muted">Instant and high-precision weight conversion.</p>
      </div>

      <div class="glass-card glass p-4 p-md-5" in:fly={{ y: 50, duration: 800, delay: 200 }}>
        
        <div class="d-flex bg-dark bg-opacity-10 p-1 rounded-pill mb-4">
          <button class="btn flex-fill {mode === 'oz-to-g' ? 'btn-mint shadow' : 'text-muted border-0'}" 
                  on:click={() => mode = 'oz-to-g'}>oz to g</button>
          <button class="btn flex-fill {mode === 'g-to-oz' ? 'btn-mint shadow' : 'text-muted border-0'}" 
                  on:click={() => mode = 'g-to-oz'}>g to oz</button>
        </div>

        <div class="mb-4">
          <!-- svelte-ignore a11y_label_has_associated_control -->
          <label class="form-label small fw-bold text-uppercase ps-2 opacity-50">
            {mode === 'oz-to-g' ? 'Ounces' : 'Grams'}
          </label>
          <input type="number" class="form-control form-control-lg py-3 {valid ? '' : 'is-invalid'}" 
                 bind:value={inputValue} placeholder="0.00" />
        </div>

        <div class="mb-4 text-center py-4 rounded-4" style="background: rgba(32, 96, 61, 0.05); border: 2px dashed var(--brand-green);">
          <div class="small fw-bold text-uppercase opacity-50 mb-1">Result</div>
          <div class="display-4 fw-bold" style="color: var(--brand-green)">
            {result || '0.00'} <span class="fs-4">{mode === 'oz-to-g' ? 'g' : 'oz'}</span>
          </div>
        </div>

        <button class="btn btn-outline-success w-100 py-3 rounded-4 border-2" on:click={toggleMode}>
          <i class="bi bi-arrow-left-right me-2"></i> Flip Direction
        </button>
      </div>

      <div class="text-center mt-5 opacity-50">
        <small>1 oz = 28.349523125 g</small>
      </div>

    </div>
  </div>
</section>

<div class="container py-5">
  <section id="about" class="glass-card glass p-5 mb-5">
    <h2 class="fw-bold mb-4 text-center">About This Converter</h2>
    <p class="lead text-center mb-4">A minimalist, privacy-first tool built for anyone who cooks, bakes or scales recipes across measurement systems.</p>
    
    <p>The Ounces to Grams Converter is a small, completely client-side web utility that instantly translates between US/imperial ounces (avoirdupois) and metric grams. Whether you're following an American baking recipe that lists butter in ounces, converting a European soup recipe measured in grams, or simply trying to use your kitchen scale more effectively, this tool gives you reliable answers the moment you type — with no delays, no sign-ups, and no data collection.</p>
    
    <p>Everything happens in your browser. The conversion uses the internationally accepted exact factor: <strong>1 oz = 28.349523125 g</strong>. No approximations or rounded shortcuts are applied during calculation; only the final displayed result is rounded to two decimal places — the level of precision most kitchen scales actually provide. This ensures your scaled cakes, breads, sauces and doughs stay consistent whether you're doubling a batch for a party or halving it for solo cooking.</p>
    
    <p>Privacy was the top priority from day one. Because the tool is fully static and stateless, none of your entered values, IP address, browser details or usage patterns are ever sent to a server or third party. There are no analytics trackers, no cookies for profiling, no localStorage persistence beyond your current session. Your recipe amounts stay on your device and disappear when you close the tab. This makes the converter suitable even for people who care deeply about data minimalism.</p>
    
    <p>The interface is deliberately clean and mobile-friendly: large input fields, obvious toggle buttons for direction (oz→g or g→oz), clear visual feedback for invalid entries (red border + message), and a flip button that preserves your current quantity while switching units. These small details save time and reduce frustration when your hands are messy or you're reading from a phone propped against the flour bag.</p>
    
    <p>While the converter is extremely simple on the surface, the underlying logic is precise and robust — exactly what serious home bakers and cooks need when small differences matter. It's the kind of tool you bookmark once and reach for every time a recipe mixes measurement systems.</p>
    
    <p class="text-center mt-4"><em>Fast. Accurate. Private. Made for the kitchen.</em></p>
  </section>

  <section id="how-to" class="glass-card glass p-5 mb-5">
    <h2 class="fw-bold mb-5 text-center">How to Use the Converter</h2>
    <div class="row g-5 justify-content-center">
      <div class="col-lg-10">
        <p>Using the tool takes only a few seconds once you're familiar with the layout. Here's a complete step-by-step guide so you can get accurate conversions right away — whether you're standing at the counter or planning tomorrow's bake.</p>

        <ol class="list-group list-group-numbered mb-4">
          <li class="list-group-item bg-transparent border-0 ps-0">
            <strong>Choose your starting direction</strong><br>
            At the top of the card you'll see two prominent buttons: "oz → g" and "g → oz". Click the one that matches the unit already listed in your recipe. The selected button turns solid blue so you instantly know which way the conversion is flowing. If you're unsure, just pick one — you can change it anytime.
          </li>
          <li class="list-group-item bg-transparent border-0 ps-0">
            <strong>Enter the amount you want to convert</strong><br>
            Type your number into the large input field. Decimals are fully supported (e.g., 4.5 oz or 120.75 g). As soon as you finish typing or change a digit, the result appears below — no need to press Enter or click a button. The field accepts only valid non-negative numbers; if you type letters, a negative sign, or nonsense, the border turns red and a short message appears asking for a valid number.
          </li>
          <li class="list-group-item bg-transparent border-0 ps-0">
            <strong>Read the converted result</strong><br>
            The result is shown immediately in the box below, always formatted to exactly two decimal places. The labels update automatically to match your chosen direction (grams if you started with ounces, ounces if you started with grams). This number is ready to use on your scale or measuring cup.
          </li>
          <li class="list-group-item bg-transparent border-0 ps-0">
            <strong>Switch direction if needed (optional but powerful)</strong><br>
            Click the other toggle button or the "Flip direction ↔" button at the bottom. When you flip, the current result automatically becomes the new input — so you keep the same quantity while changing the reference unit. This is especially helpful when comparing recipes or adjusting on the fly.
          </li>
          <li class="list-group-item bg-transparent border-0 ps-0">
            <strong>Repeat as needed</strong><br>
            Clear the field (or just type a new number) and continue with the next ingredient. Because everything is instant and local, you can convert dozens of items without any slowdown or reloads.
          </li>
        </ol>

        <p class="text-center fst-italic">Pro tip: Keep the page open in split-screen mode on your phone or tablet while you weigh — the large fields and responsive design make one-handed use easy even with messy fingers.</p>
      </div>
    </div>
  </section>

  <section id="faq" class="glass-card glass p-5 mb-5">
    <h2 class="fw-bold mb-5 text-center">Frequently Asked Questions</h2>
    
    <div class="accordion accordion-flush" id="faqAccordion">
      
      <div class="accordion-item bg-transparent border-bottom">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
            Is the conversion mathematically accurate?
          </button>
        </h2>
        <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes — we use the exact international avoirdupois conversion factor: 1 oz = 28.349523125 g. No rounding happens until the final display step (two decimal places), so results are as precise as most kitchen scales can measure.
          </div>
        </div>
      </div>

      <div class="accordion-item bg-transparent border-bottom">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
            Does the tool collect or store any of my data?
          </button>
        </h2>
        <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            No. The converter is 100% client-side and stateless. Nothing you type is ever sent to a server, logged, or saved. No cookies, no analytics, no tracking of any kind.
          </div>
        </div>
      </div>

      <div class="accordion-item bg-transparent border-bottom">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
            Can I use negative numbers or zero?
          </button>
        </h2>
        <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Zero is allowed (some recipes list "0 oz" for optional ingredients), but negative numbers are not accepted. If you enter anything invalid, you'll see a red border and a message asking for a non-negative number.
          </div>
        </div>
      </div>

      <div class="accordion-item bg-transparent border-bottom">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
            Why only two decimal places in the result?
          </button>
        </h2>
        <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Most kitchen scales display to the nearest 0.1 g or 0.01 oz. Showing more decimals would imply false precision. Two places give practical, usable numbers without clutter.
          </div>
        </div>
      </div>

      <div class="accordion-item bg-transparent border-bottom">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
            Does flipping direction lose my number?
          </button>
        </h2>
        <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            No — when you flip (via toggle or Flip button), the current result is automatically copied into the input field before changing direction. You keep working with the same quantity.
          </div>
        </div>
      </div>

      <div class="accordion-item bg-transparent">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
            Will this work offline after the first load?
          </button>
        </h2>
        <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes — once loaded, the converter functions fully offline because it's a static site with no external API calls. Only the initial Bootstrap CDN assets require internet.
          </div>
        </div>
      </div>

    </div>
  </section>
</div>

<style>
  :global(.accordion-button:not(.collapsed)) { color: var(--brand-green); background: transparent; }
  :global(.accordion-button:focus) { box-shadow: none; border: none; }
</style>