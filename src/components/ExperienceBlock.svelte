<script lang="ts">
  import { education, roles, skillGroups } from '../data/profile';

  export let showIntro = true;
</script>

<div class="record">
  <section class="roles" id="experience" aria-labelledby={showIntro ? 'experience-heading' : undefined}>
    {#if showIntro}
      <div class="section-header">
        <span class="section-label">Background</span>
        <h2 id="experience-heading">Experience and leadership</h2>
        <p>The roles behind the technical work, in short form.</p>
      </div>
    {/if}

    <ol class="timeline">
      {#each roles as role}
        <li>
          <div class="role-head">
            <h3>{role.title}</h3>
            <p class="org">{role.org}</p>
            <p class="period">{role.period}</p>
          </div>
          <ul>
            {#each role.points as point}
              <li>{point}</li>
            {/each}
          </ul>
        </li>
      {/each}
    </ol>
  </section>

  <div class="lower">
    <section id="education" aria-labelledby="education-heading">
      <div class="section-header">
        <span class="section-label">School</span>
        <h2 id="education-heading">Education</h2>
      </div>
      <div class="edu-list">
        {#each education as school}
          <article>
            <h3>{school.school}</h3>
            <p class="org">{school.credential}</p>
            <p class="period">{school.period}</p>
            <p>{school.details}</p>
          </article>
        {/each}
      </div>
    </section>

    <section id="skills" aria-labelledby="skills-heading">
      <div class="section-header">
        <span class="section-label">Toolkit</span>
        <h2 id="skills-heading">Skills</h2>
      </div>
      {#each skillGroups as group}
        <div class="skill-group">
          <h3>{group.name}</h3>
          <ul>
            {#each group.items as item}
              <li>{item}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </section>
  </div>
</div>

<style lang="scss">
  .record {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-header {
    margin-bottom: 1.75rem;

    h2 {
      font-size: clamp(1.8rem, 4vw, 2.5rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      color: var(--text-color);
    }

    p {
      margin-top: 0.6rem;
      color: var(--text-muted);
      max-width: 38rem;
    }
  }

  .section-label {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--primary-color);
    margin-bottom: 0.55rem;
  }

  .timeline {
    list-style: none;
    margin: 0;
    padding: 0 0 0 1.25rem;
    border-left: 2px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .timeline > li,
  .edu-list article,
  .skill-group {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    box-shadow: var(--card-shadow);
  }

  .timeline > li {
    position: relative;
    padding: 1.25rem 1.35rem 1.15rem;
    margin-left: 0.4rem;
    scroll-margin-top: 5.5rem;

    &::before {
      content: '';
      position: absolute;
      left: -1.55rem;
      top: 1.45rem;
      width: 0.7rem;
      height: 0.7rem;
      border-radius: 50%;
      background: var(--primary-color);
      box-shadow: 0 0 0 4px var(--background-color);
    }
  }

  .role-head h3,
  .edu-list h3,
  .skill-group h3 {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text-color);
  }

  .org {
    color: var(--primary-color);
    font-weight: 600;
    margin-top: 0.2rem;
  }

  .period {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-top: 0.15rem;
  }

  .timeline ul {
    margin: 0.75rem 0 0;
    padding-left: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    li {
      color: var(--text-muted);
      line-height: 1.6;
      font-size: 0.98rem;
    }
  }

  .lower {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 2.5rem;
    margin-top: 3.5rem;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  }

  .edu-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    article {
      padding: 1.25rem 1.35rem;

      p:last-child {
        margin-top: 0.7rem;
        color: var(--text-muted);
        line-height: 1.6;
      }
    }
  }

  .skill-group {
    padding: 1rem 1.15rem 1.1rem;
    margin-bottom: 0.85rem;

    h3 {
      font-size: 0.95rem;
      margin-bottom: 0.7rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
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
      padding: 0.3rem 0.65rem;
    }
  }
</style>
