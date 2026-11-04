<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import AnimatedBackground from '../components/AnimatedBackground.svelte';
  import ExperienceBlock from '../components/ExperienceBlock.svelte';
  import ProjectList from '../components/ProjectList.svelte';
  import ScrollReveal from '../components/ScrollReveal.svelte';
  import { hero } from '../data/profile';

  let mounted = false;
  let subtitleVisible = false;
  let descVisible = false;
  let buttonsVisible = false;

  const titleWords = hero.name.split(' ');

  onMount(() => {
    mounted = true;
    setTimeout(() => (subtitleVisible = true), 400);
    setTimeout(() => (descVisible = true), 650);
    setTimeout(() => (buttonsVisible = true), 900);
  });
</script>

<div class="home-container">
  <section class="hero">
    <AnimatedBackground mode="mesh" intensity="medium" />

    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          {#each titleWords as word, i}
            {#if mounted}
              <span class="title-word" in:fly={{ y: 40, duration: 700, delay: i * 120 }}>
                {word}
              </span>
            {/if}
          {/each}
        </h1>

        {#if subtitleVisible}
          <p class="hero-subtitle" in:fly={{ y: 24, duration: 500 }}>
            <span class="subtitle-line"></span>
            {hero.title}
            <span class="subtitle-line"></span>
          </p>
        {/if}

        {#if descVisible}
          <p class="hero-description" in:fade={{ duration: 500 }}>
            {hero.summary}
          </p>
        {/if}

        {#if buttonsVisible}
          <div class="hero-buttons" in:fly={{ y: 16, duration: 450 }}>
            <a href="#projects" class="btn-primary">
              <span>View projects</span>
              <svg class="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/contact" class="btn-secondary">
              <span>Contact</span>
            </a>
          </div>
        {/if}
      </div>

      <div class="hero-image-container">
        {#if mounted}
          <div class="hero-image-wrapper" in:scale={{ duration: 700, delay: 200, start: 0.9 }}>
            <div class="image-glow"></div>
            <div class="image-ring ring-1"></div>
            <div class="image-ring ring-2"></div>
            <img src="/photos/sigpiheadshot.png" alt="Tucker Peters" class="hero-image" />
          </div>
        {/if}
      </div>
    </div>
  </section>

  <section class="projects-section" id="projects">
    <ScrollReveal animation="fade-up">
      <div class="section-header centered">
        <span class="section-label">Technical work</span>
        <h2>Projects</h2>
        <p class="section-description">
          What I built, the stack behind it, and the measured results.
        </p>
      </div>
    </ScrollReveal>
    <ProjectList />
  </section>

  <section class="record-section">
    <ExperienceBlock />
  </section>

  <section class="cta-section">
    <AnimatedBackground mode="orbs" intensity="subtle" />
    <ScrollReveal animation="zoom">
      <div class="cta-content">
        <span class="section-label light">Contact</span>
        <h2>Westport, CT</h2>
        <p>trpeters@wm.edu or tucker@niska.ai</p>
        <a href="/contact" class="cta-button">
          Send a message
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </ScrollReveal>
  </section>
</div>

<style lang="scss">
  .home-container {
    overflow-x: hidden;
  }

  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 4.5rem 2rem 3.5rem;
    overflow: hidden;

    @media (max-width: 480px) {
      padding: 2.5rem 1.15rem 2.5rem;
    }
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 3rem;
    align-items: center;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 2rem;
    }
  }

  .hero-text {
    @media (max-width: 860px) {
      order: 2;
    }
  }

  .hero-title {
    font-size: clamp(3rem, 7vw, 4.75rem);
    font-weight: 800;
    line-height: 1.02;
    margin-bottom: 1rem;
    letter-spacing: -0.03em;

    .title-word {
      display: inline-block;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, #ec4899 100%);
      background-size: 200% 200%;
      animation: gradientShift 8s ease infinite;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-right: 0.25em;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @keyframes gradientShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .hero-subtitle {
    font-size: clamp(1.05rem, 2vw, 1.3rem);
    font-weight: 600;
    color: var(--text-muted);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.85rem;

    @media (max-width: 860px) {
      justify-content: center;
    }
  }

  .subtitle-line {
    height: 1px;
    width: 36px;
    background: linear-gradient(90deg, transparent, var(--text-muted), transparent);

    @media (max-width: 600px) {
      display: none;
    }
  }

  .hero-description {
    font-size: 1.08rem;
    line-height: 1.7;
    color: var(--text-color);
    max-width: 40rem;
    margin-bottom: 1.75rem;
    text-wrap: pretty;

    @media (max-width: 860px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .hero-buttons {
    display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;

    @media (max-width: 860px) {
      justify-content: center;
    }
  }

  .btn-primary,
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    padding: 0.9rem 1.6rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;

    .btn-arrow {
      transition: transform 0.3s ease;
    }

    &:hover .btn-arrow {
      transform: translateX(4px);
    }
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    box-shadow: 0 4px 20px rgba(var(--primary-color-rgb), 0.35);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(var(--primary-color-rgb), 0.45);
    }
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-color);
    border: 2px solid var(--border-color);

    &:hover {
      border-color: var(--primary-color);
      color: var(--primary-color);
      transform: translateY(-3px);
    }
  }

  .hero-image-container {
    display: flex;
    justify-content: center;

    @media (max-width: 860px) {
      order: 1;
    }
  }

  .hero-image-wrapper {
    position: relative;
    width: 240px;
    height: 240px;

    @media (max-width: 480px) {
      width: 180px;
      height: 180px;
    }
  }

  .hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
    z-index: 3;
    border: 4px solid rgba(255, 255, 255, 0.2);
  }

  .image-glow {
    position: absolute;
    inset: -16px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(var(--primary-color-rgb), 0.4) 0%, transparent 70%);
    filter: blur(24px);
  }

  .image-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(var(--primary-color-rgb), 0.3);

    &.ring-1 {
      inset: -12px;
    }

    &.ring-2 {
      inset: -24px;
      border-style: dashed;
    }
  }

  .section-header {
    margin-bottom: 2.25rem;

    &.centered {
      text-align: center;
    }

    h2 {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--text-color);
    }
  }

  .section-label {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--primary-color);
    margin-bottom: 0.65rem;

    &.light {
      color: rgba(255, 255, 255, 0.85);
    }
  }

  .section-description {
    margin: 0.75rem auto 0;
    max-width: 38rem;
    color: var(--text-muted);
    font-size: 1.05rem;
  }

  .projects-section {
    padding: 1rem 1.5rem 4.5rem;
    background: var(--secondary-bg);

    @media (max-width: 480px) {
      padding: 0.5rem 1rem 3rem;
    }
  }

  .record-section {
    padding: 4.5rem 1.5rem;
    background: var(--background-color);

    @media (max-width: 480px) {
      padding: 3rem 1rem;
    }
  }

  .cta-section {
    position: relative;
    padding: 5.5rem 1.5rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    overflow: hidden;
  }

  .cta-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 40rem;
    margin: 0 auto;

    h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      color: white;
      margin-bottom: 0.75rem;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.15rem;
      margin-bottom: 1.75rem;
    }
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    padding: 1rem 1.8rem;
    background: white;
    color: var(--primary-color);
    font-weight: 700;
    border-radius: 999px;
    text-decoration: none;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.18);

    &:hover {
      transform: translateY(-3px);
    }
  }
</style>
