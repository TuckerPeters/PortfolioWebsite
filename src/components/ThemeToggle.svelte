<script lang="ts">
  export let isDarkMode: boolean;
  export let toggleTheme: () => void;
</script>

<div class="theme-toggle-container">
  <button 
    on:click={toggleTheme}
    aria-label="Toggle theme"
    class="theme-toggle-button"
  >
    <div class="theme-toggle-icon">
      {#if isDarkMode}
        <span>☀️</span>
      {:else}
        <span>🌙</span>
      {/if}
    </div>
    <span class="theme-toggle-label">{isDarkMode ? 'Light' : 'Dark'} Mode</span>
  </button>
</div>

<style>
  .theme-toggle-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 9999;
    /* Ensure it stays in the viewport */
    position: fixed;
    transform: none !important;
  }

  .theme-toggle-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #2563eb;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 30px;
    font-weight: bold;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
  }

  .theme-toggle-button:hover {
    transform: translateY(-2px);
    background-color: #1d4ed8;
  }

  .theme-toggle-button:active {
    transform: translateY(0);
  }

  .theme-toggle-icon {
    font-size: 18px;
    line-height: 1;
  }

  .theme-toggle-label {
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    .theme-toggle-container {
      bottom: 1.5rem;
      right: 1.5rem;
    }
    
    .theme-toggle-label {
      display: none; /* Hide text on small screens */
    }
    
    .theme-toggle-button {
      width: 48px;
      height: 48px;
      padding: 0;
      border-radius: 50%;
    }
  }
</style>