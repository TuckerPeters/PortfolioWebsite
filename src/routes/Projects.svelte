<script lang="ts">
  import { fade } from 'svelte/transition';
  import ProjectList from '../components/ProjectList.svelte';
</script>

<div class="projects-page" transition:fade>
  <header class="page-hero">
    <p class="section-label">Technical work</p>
    <h1>Projects</h1>
    <p>What I built, the stack behind it, and the measured results.</p>
  </header>
  <ProjectList />
</div>

<style lang="scss">
  .projects-page {
    max-width: 1240px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 4.5rem;
  }

  .page-hero {
    text-align: center;
    margin-bottom: 2.25rem;

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
      max-width: 38rem;
      margin: 0 auto;
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
