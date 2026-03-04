<script lang="ts">
  import "../app.css";
  import { base } from '$app/paths';
  import { fly, fade } from 'svelte/transition';

  let isDropdownOpen = false;
  let currentTheme = 'light';
  
  function toggleDropdown() { isDropdownOpen = !isDropdownOpen; }
  function closeDropdown() { isDropdownOpen = false; }
  
  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.dataset.bsTheme = currentTheme;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() { document.removeEventListener('click', handleClick, true); }
    };
  }
</script>

<header class="fixed-top p-3 w-100" style="z-index: 1040;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo me-2" />
        <span class="fw-bold fs-4 brand-text d-none d-md-inline">AxelBase</span>
      </a>

      <div class="position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="bmac-button d-flex align-items-center gap-2 text-white border-0 px-3 px-md-4 py-2 rounded-pill"
          on:click={toggleDropdown}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline fw-semibold">Buy me a Coffee</span>
          <span class="d-sm-none fw-semibold">Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown glass mt-2" transition:fly={{ y: -10, duration: 250 }}>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" on:click={closeDropdown}>
              <span class="amount">$3</span> One Coffee
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" on:click={closeDropdown}>
              <span class="amount">$5</span> Two Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" on:click={closeDropdown}>
              <span class="amount">$10</span> Three Coffees
            </a>
            <a href="https://buymeacoffee.com/axelbase" target="_blank" class="custom-amount" on:click={closeDropdown}>
              Custom Amount
            </a>
            <a href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase" class="custom-amount" on:click={closeDropdown}>
              Buy via Crypto (BTC)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-3">
      <ul class="d-none d-lg-flex align-items-center gap-4 m-0 list-unstyled">
        <li><a class="nav-link-custom" href="{base}/">Home</a></li>
        <li><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li><a class="nav-link-custom" href="{base}/#how-to">How to Use</a></li>
        <li><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        <li><a class="btn btn-mint px-4" href="{base}/blog">Blog</a></li>
      </ul>

      <button class="btn-theme shadow-sm" on:click={toggleTheme} aria-label="Toggle Theme">
        <i class="bi {currentTheme === 'light' ? 'bi-moon-stars-fill' : 'bi-sun-fill'}"></i>
      </button>
    </div>
  </nav>
</header>

<main class="flex-grow-1 pt-5 mt-5">
  <slot />
</main>

<footer class="glass py-4 border-top">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small">
    <p class="m-0">© {new Date().getFullYear()} AxelBase Ounces to Grams Converter</p>
    <div class="d-flex gap-4 mt-3 mt-md-0">
      <a href="{base}/privacy" class="footer-link">Privacy Policy</a>
      <a href="{base}/terms" class="footer-link">Terms & Conditions</a>
    </div>
  </div>
</footer>

<style>
  .nav-logo { height: 38px; transition: transform 0.3s; }
  .nav-logo:hover { transform: rotate(10deg) scale(1.1); }
  .brand-text { color: var(--brand-green); letter-spacing: -1px; }

  .nav-link-custom {
    color: var(--color-text-muted);
    font-weight: 600;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  .nav-link-custom:hover { color: var(--brand-green); }

  .bmac-button {
    background: var(--brand-green);
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(32, 96, 61, 0.2);
  }
  .bmac-button:hover {
    background: var(--brand-green-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(32, 96, 61, 0.3);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    width: 240px;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: var(--color-text-main);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--brand-light);
    color: var(--brand-green);
    padding-left: 28px;
  }

  .bmac-dropdown .amount { font-weight: 700; color: var(--brand-green); }

  .bmac-dropdown .custom-amount {
    font-weight: 600;
    border-top: 1px solid rgba(0,0,0,0.05);
    justify-content: center !important;
  }

  .btn-mint { background: var(--brand-green); color: white; border-radius: 50px; }
  .btn-mint:hover { background: var(--brand-green-hover); transform: scale(1.05); color: white; }

  .btn-theme {
    width: 45px; height: 45px; border-radius: 50%;
    background: var(--brand-green); color: white;
    border: none; display: flex; align-items: center; justify-content: center;
    transition: 0.3s;
  }
  .btn-theme:hover { transform: rotate(15deg) scale(1.1); }

  .footer-link { text-decoration: none; color: inherit; transition: 0.2s; }
  .footer-link:hover { color: var(--brand-green); }
</style>