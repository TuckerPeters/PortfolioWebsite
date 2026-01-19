<script lang="ts">
  import { onMount } from 'svelte';

  export let tiltEnabled: boolean = true;
  export let tiltMax: number = 15;
  export let glareEnabled: boolean = true;
  export let scale: number = 1.02;

  let card: HTMLDivElement;
  let glareEl: HTMLDivElement;
  let isHovered = false;
  let isTouchDevice = false;

  let rotateX = 0;
  let rotateY = 0;
  let glareX = 50;
  let glareY = 50;
  let glareOpacity = 0;

  onMount(() => {
    // Detect touch device
    isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });

  function handleMouseMove(e: MouseEvent) {
    if (!tiltEnabled || !card || isTouchDevice) return;

    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const percentX = mouseX / (rect.width / 2);
    const percentY = mouseY / (rect.height / 2);

    rotateY = percentX * tiltMax;
    rotateX = -percentY * tiltMax;

    // Glare position
    if (glareEnabled) {
      glareX = ((e.clientX - rect.left) / rect.width) * 100;
      glareY = ((e.clientY - rect.top) / rect.height) * 100;
      glareOpacity = 0.15;
    }
  }

  function handleMouseEnter() {
    isHovered = true;
  }

  function handleMouseLeave() {
    isHovered = false;
    rotateX = 0;
    rotateY = 0;
    glareOpacity = 0;
  }
</script>

<div
  bind:this={card}
  class="glass-card"
  class:hovered={isHovered}
  style="
    --rotateX: {rotateX}deg;
    --rotateY: {rotateY}deg;
    --scale: {isHovered ? scale : 1};
  "
  on:mousemove={handleMouseMove}
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
  role="article"
>
  <div class="glass-card-inner">
    <slot />
  </div>

  {#if glareEnabled}
    <div
      bind:this={glareEl}
      class="glare"
      style="
        --glareX: {glareX}%;
        --glareY: {glareY}%;
        --glareOpacity: {glareOpacity};
      "
    ></div>
  {/if}

  <div class="card-border"></div>
</div>

<style lang="scss">
  .glass-card {
    position: relative;
    border-radius: 1.25rem;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale(var(--scale));
    transition: transform 0.15s ease-out, box-shadow 0.3s ease;
    will-change: transform;

    &.hovered {
      z-index: 10;
    }

    /* Disable 3D transforms on touch devices */
    @media (hover: none) and (pointer: coarse) {
      transform: none;
      transform-style: flat;
    }
  }

  .glass-card-inner {
    position: relative;
    z-index: 2;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 1.25rem;
    overflow: hidden;
    height: 100%;

    :global(html.dark) & {
      background: rgba(30, 41, 59, 0.7);
    }
  }

  .card-border {
    position: absolute;
    inset: 0;
    border-radius: 1.25rem;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    pointer-events: none;
    z-index: 3;

    :global(html.dark) & {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0.05) 50%,
        rgba(255, 255, 255, 0.02) 100%
      );
    }
  }

  .glare {
    position: absolute;
    inset: 0;
    border-radius: 1.25rem;
    background: radial-gradient(
      circle at var(--glareX) var(--glareY),
      rgba(255, 255, 255, var(--glareOpacity)) 0%,
      transparent 60%
    );
    pointer-events: none;
    z-index: 4;
    transition: opacity 0.3s ease;
  }

  .glass-card:hover {
    box-shadow:
      0 25px 50px -12px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.1);

    :global(html.dark) & {
      box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.5),
        0 0 40px rgba(59, 130, 246, 0.15);
    }
  }
</style>
