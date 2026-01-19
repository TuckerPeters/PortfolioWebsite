<script lang="ts">
  import { onMount } from 'svelte';

  export let mode: 'mesh' | 'liquid' | 'orbs' = 'mesh';
  export let intensity: 'subtle' | 'medium' | 'vivid' = 'medium';

  let canvas: HTMLCanvasElement;
  let animationId: number;

  const intensityMap = {
    subtle: { opacity: 0.4, speed: 0.5 },
    medium: { opacity: 0.6, speed: 1 },
    vivid: { opacity: 0.85, speed: 1.5 }
  };

  onMount(() => {
    if (mode === 'orbs') {
      initOrbsAnimation();
    }

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  });

  function initOrbsAnimation() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Orb {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      phase: number;
    }

    const orbs: Orb[] = [];

    const colors = [
      'rgba(59, 130, 246, 0.5)',   // blue
      'rgba(99, 102, 241, 0.4)',   // indigo
      'rgba(139, 92, 246, 0.35)',  // violet
      'rgba(6, 182, 212, 0.3)',    // cyan
      'rgba(236, 72, 153, 0.25)',  // pink accent
    ];

    for (let i = 0; i < 6; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5 * intensityMap[intensity].speed,
        vy: (Math.random() - 0.5) * 0.5 * intensityMap[intensity].speed,
        radius: 150 + Math.random() * 200,
        color: colors[i % colors.length],
        phase: Math.random() * Math.PI * 2
      });
    }

    const context = ctx; // Capture in closure to avoid null check

    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb) => {
        orb.x += orb.vx;
        orb.y += orb.vy;
        orb.phase += 0.01 * intensityMap[intensity].speed;

        // Bounce off edges with padding
        if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius;
        if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius;
        if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius;
        if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius;

        // Pulsing radius
        const pulsingRadius = orb.radius + Math.sin(orb.phase) * 30;

        const gradient = context.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, pulsingRadius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'transparent');

        context.beginPath();
        context.arc(orb.x, orb.y, pulsingRadius, 0, Math.PI * 2);
        context.fillStyle = gradient;
        context.fill();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => window.removeEventListener('resize', resize);
  }
</script>

<div class="animated-background" class:mesh={mode === 'mesh'} class:liquid={mode === 'liquid'} class:orbs={mode === 'orbs'}>
  {#if mode === 'mesh'}
    <div class="mesh-container" style="--intensity: {intensityMap[intensity].opacity}">
      <div class="mesh-gradient mesh-1"></div>
      <div class="mesh-gradient mesh-2"></div>
      <div class="mesh-gradient mesh-3"></div>
      <div class="mesh-gradient mesh-4"></div>
      <div class="mesh-noise"></div>
    </div>
  {:else if mode === 'liquid'}
    <svg class="liquid-svg" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
          <feColorMatrix in="blur" mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10" result="goo" />
        </filter>
        <linearGradient id="liquidGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color: rgba(59, 130, 246, 0.8)" />
          <stop offset="100%" style="stop-color: rgba(139, 92, 246, 0.6)" />
        </linearGradient>
        <linearGradient id="liquidGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color: rgba(6, 182, 212, 0.7)" />
          <stop offset="100%" style="stop-color: rgba(99, 102, 241, 0.5)" />
        </linearGradient>
      </defs>
      <g filter="url(#goo)" style="opacity: {intensityMap[intensity].opacity}">
        <circle class="blob blob-1" cx="200" cy="400" r="180" fill="url(#liquidGrad1)" />
        <circle class="blob blob-2" cx="600" cy="300" r="220" fill="url(#liquidGrad2)" />
        <circle class="blob blob-3" cx="1000" cy="500" r="160" fill="url(#liquidGrad1)" />
        <circle class="blob blob-4" cx="1300" cy="250" r="200" fill="url(#liquidGrad2)" />
        <circle class="blob blob-5" cx="400" cy="600" r="140" fill="url(#liquidGrad1)" />
      </g>
    </svg>
  {:else if mode === 'orbs'}
    <canvas bind:this={canvas} class="orbs-canvas" style="opacity: {intensityMap[intensity].opacity}"></canvas>
  {/if}
</div>

<style lang="scss">
  .animated-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  /* ===== MESH GRADIENT MODE ===== */
  .mesh-container {
    position: absolute;
    inset: 0;
    opacity: var(--intensity, 0.6);
  }

  .mesh-gradient {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    will-change: transform;
  }

  .mesh-1 {
    width: 60%;
    height: 60%;
    top: -20%;
    left: -10%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, transparent 70%);
    animation: meshFloat1 20s ease-in-out infinite;
  }

  .mesh-2 {
    width: 50%;
    height: 50%;
    top: 20%;
    right: -15%;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, transparent 70%);
    animation: meshFloat2 25s ease-in-out infinite;
  }

  .mesh-3 {
    width: 45%;
    height: 45%;
    bottom: -10%;
    left: 20%;
    background: radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%);
    animation: meshFloat3 22s ease-in-out infinite;
  }

  .mesh-4 {
    width: 35%;
    height: 35%;
    bottom: 20%;
    right: 10%;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%);
    animation: meshFloat4 18s ease-in-out infinite;
  }

  .mesh-noise {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    opacity: 0.03;
    mix-blend-mode: overlay;
  }

  @keyframes meshFloat1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(5%, 10%) scale(1.1); }
    50% { transform: translate(10%, 5%) scale(0.95); }
    75% { transform: translate(3%, -5%) scale(1.05); }
  }

  @keyframes meshFloat2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(-8%, 5%) scale(1.05); }
    50% { transform: translate(-5%, 12%) scale(1.1); }
    75% { transform: translate(3%, 8%) scale(0.95); }
  }

  @keyframes meshFloat3 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(8%, -8%) scale(1.08); }
    66% { transform: translate(-5%, -5%) scale(0.92); }
  }

  @keyframes meshFloat4 {
    0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
    50% { transform: translate(-10%, 10%) rotate(10deg) scale(1.1); }
  }

  /* ===== LIQUID BLOB MODE ===== */
  .liquid-svg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .blob {
    will-change: transform;
  }

  .blob-1 {
    animation: blobMove1 15s ease-in-out infinite;
  }

  .blob-2 {
    animation: blobMove2 18s ease-in-out infinite;
  }

  .blob-3 {
    animation: blobMove3 20s ease-in-out infinite;
  }

  .blob-4 {
    animation: blobMove4 16s ease-in-out infinite;
  }

  .blob-5 {
    animation: blobMove5 22s ease-in-out infinite;
  }

  @keyframes blobMove1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(100px, 50px) scale(1.2); }
    50% { transform: translate(50px, 100px) scale(0.9); }
    75% { transform: translate(-30px, 50px) scale(1.1); }
  }

  @keyframes blobMove2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-80px, 80px) scale(1.15); }
    66% { transform: translate(60px, -40px) scale(0.85); }
  }

  @keyframes blobMove3 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(-60px, -80px) scale(1.1); }
    50% { transform: translate(40px, -60px) scale(1.2); }
    75% { transform: translate(80px, 20px) scale(0.9); }
  }

  @keyframes blobMove4 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-120px, 100px) scale(1.25); }
  }

  @keyframes blobMove5 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(100px, -50px) scale(1.1); }
    66% { transform: translate(-50px, -80px) scale(0.95); }
  }

  /* ===== ORBS CANVAS MODE ===== */
  .orbs-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(60px);
  }

  /* Dark mode adjustments */
  :global(html.dark) {
    .mesh-1 {
      background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
    }
    .mesh-2 {
      background: radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%);
    }
    .mesh-3 {
      background: radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%);
    }
    .mesh-4 {
      background: radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 70%);
    }

    .mesh-noise {
      opacity: 0.05;
    }
  }
</style>
