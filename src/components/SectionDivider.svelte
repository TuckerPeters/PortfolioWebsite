<script lang="ts">
  export let type: 'wave' | 'diagonal' | 'curve' | 'triangle' = 'wave';
  export let flip: boolean = false;
  export let color: string = 'var(--secondary-bg)';
  export let height: number = 80;
</script>

<div
  class="section-divider {type}"
  class:flip
  style="--divider-color: {color}; --divider-height: {height}px;"
>
  {#if type === 'wave'}
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path
        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
        fill="var(--divider-color)"
      />
    </svg>
  {:else if type === 'diagonal'}
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <polygon points="0,120 1440,0 1440,120" fill="var(--divider-color)" />
    </svg>
  {:else if type === 'curve'}
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path
        d="M0,120 Q720,-40 1440,120 L1440,120 L0,120 Z"
        fill="var(--divider-color)"
      />
    </svg>
  {:else if type === 'triangle'}
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
      <polygon points="720,0 1440,120 0,120" fill="var(--divider-color)" />
    </svg>
  {/if}
</div>

<style lang="scss">
  .section-divider {
    width: 100%;
    height: var(--divider-height);
    overflow: hidden;
    line-height: 0;
    position: relative;
    margin: 0;
    padding: 0;

    svg {
      width: 100%;
      height: 100%;
      display: block;
    }

    &.flip {
      transform: scaleY(-1);
    }
  }
</style>
