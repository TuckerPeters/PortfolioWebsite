<script lang="ts">
  import { onMount } from 'svelte';
  import GlassCard from './GlassCard.svelte';
  import ScrollReveal from './ScrollReveal.svelte';
  import { projects } from '../data/profile';

  onMount(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ block: 'start' });
  });
</script>

<div class="project-list">
  {#each projects as project, i}
    <div class="project-slot" class:featured={i === 0} id={project.id}>
      <ScrollReveal animation="fade-up" delay={Math.min(i * 70, 280)}>
        <GlassCard tiltMax={i === 0 ? 4 : 7} scale={1.015}>
          <article class="project">
            <div class="project-kicker">
              <span class="index">{project.index}</span>
              <span class="org">{project.org}</span>
            </div>

            <h3>{project.title}</h3>
            <p class="role">{project.role}</p>
            <p class="built">{project.built}</p>

            {#if project.stack.length}
              <div class="stack">
                <h4>Stack</h4>
                <ul>
                  {#each project.stack as item}
                    <li>{item}</li>
                  {/each}
                </ul>
              </div>
            {/if}

            {#if project.metrics.length}
              <dl class="metrics">
                {#each project.metrics as metric}
                  <div>
                    <dt>{metric.value}</dt>
                    <dd>{metric.label}</dd>
                  </div>
                {/each}
              </dl>
            {/if}

            {#if project.items.length}
              <ul class="items">
                {#each project.items as item}
                  <li>{item}</li>
                {/each}
              </ul>
            {/if}

            {#if project.notes.length}
              <ul class="notes">
                {#each project.notes as note}
                  <li>{note}</li>
                {/each}
              </ul>
            {/if}
          </article>
        </GlassCard>
      </ScrollReveal>
    </div>
  {/each}
</div>

<style lang="scss">
  .project-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  }

  .project-slot {
    min-width: 0;
    scroll-margin-top: 5.5rem;

    &.featured,
    &:last-child {
      grid-column: 1 / -1;
    }

    :global(.glass-card) {
      height: 100%;
    }
  }

  .project {
    padding: 1.75rem 1.75rem 1.5rem;
    height: 100%;

    @media (max-width: 480px) {
      padding: 1.35rem 1.2rem 1.2rem;
    }
  }

  .featured .project {
    padding: 2rem 2rem 1.75rem;

    @media (max-width: 480px) {
      padding: 1.4rem 1.2rem 1.25rem;
    }
  }

  .project-kicker {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    margin-bottom: 0.9rem;
  }

  .index {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: white;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 999px;
    padding: 0.28rem 0.65rem;
  }

  .org {
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--primary-color);
  }

  h3 {
    font-size: clamp(1.35rem, 2vw, 1.85rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--text-color);
    margin-bottom: 0.45rem;
    text-wrap: balance;
  }

  .role,
  .built,
  .notes li {
    color: var(--text-muted);
    line-height: 1.65;
  }

  .role {
    font-size: 0.95rem;
    margin-bottom: 0.9rem;
  }

  .built {
    font-size: 1.02rem;
    color: var(--text-color);
    margin-bottom: 1.15rem;
    text-wrap: pretty;
  }

  .stack {
    margin-bottom: 1.15rem;

    h4 {
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin-bottom: 0.55rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--primary-color);
      background: rgba(var(--primary-color-rgb), 0.1);
      border: 1px solid rgba(var(--primary-color-rgb), 0.18);
      border-radius: 999px;
      padding: 0.32rem 0.7rem;
    }
  }

  .metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.75rem;
    margin: 0 0 1.15rem;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  .project-slot:not(.featured) .metrics {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .metrics div {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 0.9rem;
    padding: 0.85rem 0.9rem;
  }

  dt {
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin-bottom: 0.3rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  dd {
    margin: 0;
    font-size: 0.82rem;
    line-height: 1.4;
    color: var(--text-muted);
  }

  .items,
  .notes {
    margin: 0;
    padding-left: 1.1rem;
  }

  .items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.35rem 1.25rem;
    margin-bottom: 0.4rem;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }

    li {
      color: var(--text-color);
      font-size: 0.95rem;
      line-height: 1.45;
    }
  }

  .notes {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;

    li {
      font-size: 0.95rem;
    }
  }
</style>
