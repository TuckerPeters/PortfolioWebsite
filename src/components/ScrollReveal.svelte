<script lang="ts">
  import { onMount } from 'svelte';

  export let animation: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom' | 'flip' = 'fade-up';
  export let delay: number = 0;
  export let duration: number = 600;
  export let threshold: number = 0.1;
  export let once: boolean = true;
  export let distance: string = '40px';
  export let easing: string = 'cubic-bezier(0.22, 1, 0.36, 1)';

  let element: HTMLDivElement;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible = true;
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            isVisible = false;
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  });
</script>

<div
  bind:this={element}
  class="scroll-reveal {animation}"
  class:visible={isVisible}
  style="
    --delay: {delay}ms;
    --duration: {duration}ms;
    --distance: {distance};
    --easing: {easing};
  "
>
  <slot />
</div>

<style lang="scss">
  .scroll-reveal {
    will-change: transform, opacity;
    transition:
      transform var(--duration) var(--easing) var(--delay),
      opacity var(--duration) var(--easing) var(--delay);
  }

  /* Fade Up */
  .fade-up {
    opacity: 0;
    transform: translateY(var(--distance));

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Fade Down */
  .fade-down {
    opacity: 0;
    transform: translateY(calc(var(--distance) * -1));

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Fade Left */
  .fade-left {
    opacity: 0;
    transform: translateX(var(--distance));

    &.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Fade Right */
  .fade-right {
    opacity: 0;
    transform: translateX(calc(var(--distance) * -1));

    &.visible {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Zoom */
  .zoom {
    opacity: 0;
    transform: scale(0.9);

    &.visible {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Flip */
  .flip {
    opacity: 0;
    transform: perspective(1000px) rotateX(-10deg);

    &.visible {
      opacity: 1;
      transform: perspective(1000px) rotateX(0);
    }
  }
</style>
