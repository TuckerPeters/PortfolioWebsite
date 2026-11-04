<script lang="ts">
  import { fade } from 'svelte/transition';
  import ExperienceBlock from '../components/ExperienceBlock.svelte';
</script>

<div class="experience-page" transition:fade>
  <header class="page-hero">
    <p class="section-label">Background</p>
    <h1>Experience</h1>
    <p>A short record of roles, leadership, education, and skills.</p>
  </header>
  <ExperienceBlock showIntro={false} />
</div>

<style lang="scss">
  .experience-page {
    padding: 2.5rem 1.5rem 4.5rem;
  }

  .page-hero {
    text-align: center;
    max-width: 44rem;
    margin: 0 auto 2.5rem;

    h1 {
      font-size: clamp(2.4rem, 6vw, 3.4rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 0.75rem;
    }

    p:last-child {
      color: var(--text-muted);
      font-size: 1.1rem;
    }
  }

  .section-label {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--primary-color);
    margin-bottom: 0.55rem;
  }
</style>