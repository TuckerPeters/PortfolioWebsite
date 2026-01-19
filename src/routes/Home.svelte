<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { Link } from "svelte-routing";
  import AnimatedBackground from '../components/AnimatedBackground.svelte';
  import GlassCard from '../components/GlassCard.svelte';
  import ScrollReveal from '../components/ScrollReveal.svelte';
  import SectionDivider from '../components/SectionDivider.svelte';
  import ArticleSlider from '../components/ArticleSlider.svelte';

  let mounted = false;
  let titleWords = ['Tucker', 'Peters'];
  let subtitleVisible = false;
  let descVisible = false;
  let buttonsVisible = false;

  onMount(() => {
    mounted = true;
    // Staggered text reveal
    setTimeout(() => subtitleVisible = true, 600);
    setTimeout(() => descVisible = true, 900);
    setTimeout(() => buttonsVisible = true, 1200);
  });

  const featuredProjects = [
    {
      id: 1,
      title: "GenEdu.co",
      description: "AI-powered educational platform with interactive tutoring and research tools",
      image: "/photos/genedu.png",
      url: "https://genedu.co",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "AI Club at William & Mary",
      description: "Student organization advancing AI education and fostering a community of AI enthusiasts",
      image: "/photos/aiclub.png",
      url: "https://aiclubwm.com",
      gradient: "from-violet-500 to-purple-400"
    },
    {
      id: 3,
      title: "Habits of Mind AI",
      description: "AI-integrated web app for developing effective thinking habits and cognitive strategies",
      image: "/photos/habitsofmind.png",
      url: "https://habitsofmindai.netlify.app/",
      contractedWork: true,
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      id: 4,
      title: "ThoughtPartnr",
      description: "AI-driven platform providing expert strategic guidance for small to medium-sized businesses",
      image: "/photos/thoguhtpartnr.png",
      url: "https://thoughtpartnr.com",
      contractedWork: true,
      gradient: "from-orange-500 to-amber-400"
    }
  ];

  const skills = [
    { name: "Frontend Development", icon: "code", description: "React, Svelte, Vue" },
    { name: "Artificial Intelligence", icon: "brain", description: "ML, NLP, Computer Vision" },
    { name: "UI/UX Design", icon: "design", description: "Figma, User Research" },
    { name: "Full Stack Development", icon: "stack", description: "Node, Python, Cloud" }
  ];
</script>

<div class="home-container">
  <!-- Hero Section -->
  <section class="hero">
    <AnimatedBackground mode="mesh" intensity="medium" />

    <div class="hero-content">
      <div class="hero-text">
        <!-- Animated Title -->
        <h1 class="hero-title">
          {#each titleWords as word, i}
            {#if mounted}
              <span
                class="title-word"
                in:fly={{ y: 60, duration: 800, delay: i * 150 }}
              >
                {word}
              </span>
            {/if}
          {/each}
        </h1>

        {#if subtitleVisible}
          <h2 class="hero-subtitle" in:fly={{ y: 30, duration: 600 }}>
            <span class="subtitle-line"></span>
            AI Developer & Software Engineer
            <span class="subtitle-line"></span>
          </h2>
        {/if}

        {#if descVisible}
          <p class="hero-description" in:fade={{ duration: 600 }}>
            Creating intelligent digital experiences through innovative technology solutions
          </p>
        {/if}

        {#if buttonsVisible}
          <div class="hero-buttons" in:fly={{ y: 20, duration: 500 }}>
            <a href="/projects" class="btn-primary">
              <span>View Projects</span>
              <svg class="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/contact" class="btn-secondary">
              <span>Get In Touch</span>
            </a>
          </div>
        {/if}
      </div>

      <div class="hero-image-container">
        {#if mounted}
          <div class="hero-image-wrapper" in:scale={{ duration: 800, delay: 300, start: 0.8 }}>
            <div class="image-glow"></div>
            <div class="image-ring ring-1"></div>
            <div class="image-ring ring-2"></div>
            <img src="/photos/sigpiheadshot.png" alt="Tucker Peters" class="hero-image" />
          </div>
        {/if}
      </div>
    </div>

    <div class="scroll-indicator">
      <div class="scroll-mouse">
        <div class="scroll-wheel"></div>
      </div>
      <span>Scroll to explore</span>
    </div>
  </section>

  <SectionDivider type="wave" color="var(--secondary-bg)" height={100} />

  <!-- About Section -->
  <section class="about-section">
    <ScrollReveal animation="fade-up" delay={0}>
      <div class="section-header">
        <span class="section-label">About Me</span>
        <h2>Building the Future with AI</h2>
      </div>
    </ScrollReveal>

    <div class="about-grid">
      <ScrollReveal animation="fade-right" delay={100}>
        <div class="about-text">
          <p class="lead">
            I'm a dedicated AI Developer and Software Engineer with a passion for creating powerful,
            user-friendly applications that leverage cutting-edge technology.
          </p>
          <p>
            With expertise in web development and artificial intelligence, I've built several successful
            projects including AI-powered educational platforms, professional web templates, and
            community-focused initiatives.
          </p>
          <p>
            My experience as Founding President of the AI Club at William & Mary has sharpened my
            leadership skills, allowing me to advance AI education and foster a community of students
            passionate about artificial intelligence.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-left" delay={200}>
        <div class="skills-grid">
          {#each skills as skill, i}
            <GlassCard tiltMax={10}>
              <div class="skill-card">
                <div class="skill-icon-wrapper">
                  <span class="skill-icon {skill.icon}"></span>
                </div>
                <h4>{skill.name}</h4>
                <p>{skill.description}</p>
              </div>
            </GlassCard>
          {/each}
        </div>
      </ScrollReveal>
    </div>
  </section>

  <SectionDivider type="curve" flip={true} color="var(--background-color)" height={80} />

  <!-- Articles Section -->
  <ScrollReveal animation="fade-up">
    <ArticleSlider />
  </ScrollReveal>

  <SectionDivider type="diagonal" color="var(--secondary-bg)" height={100} />

  <!-- Featured Projects Section -->
  <section class="projects-section">
    <ScrollReveal animation="fade-up">
      <div class="section-header centered">
        <span class="section-label">Portfolio</span>
        <h2>Featured Projects</h2>
        <p class="section-description">A selection of my recent work in AI and web development</p>
      </div>
    </ScrollReveal>

    <div class="projects-bento">
      {#each featuredProjects as project, i}
        <ScrollReveal animation="zoom" delay={i * 100}>
          <GlassCard tiltMax={8} scale={1.03}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" class="project-card project-{i + 1}">
              <div class="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  on:error={(e) => {
                    const img = e.currentTarget;
                    if (img instanceof HTMLImageElement) {
                      img.src = '/images/previews/default-project.svg';
                    }
                  }}
                />
                <div class="project-overlay"></div>
                {#if project.contractedWork}
                  <span class="contracted-badge">Contracted Work</span>
                {/if}
              </div>

              <div class="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span class="project-link">
                  View Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </span>
              </div>
            </a>
          </GlassCard>
        </ScrollReveal>
      {/each}
    </div>

    <ScrollReveal animation="fade-up" delay={400}>
      <div class="view-all-container">
        <Link to="/projects" class="view-all-link">
          View All Projects
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </ScrollReveal>
  </section>

  <SectionDivider type="wave" flip={true} color="var(--background-color)" height={100} />

  <!-- Contact CTA Section -->
  <section class="cta-section">
    <AnimatedBackground mode="orbs" intensity="subtle" />

    <ScrollReveal animation="zoom">
      <div class="cta-content">
        <span class="section-label light">Let's Connect</span>
        <h2>Have a Project in Mind?</h2>
        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
        <Link to="/contact" class="cta-button">
          Start a Conversation
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </ScrollReveal>
  </section>

  <!-- Hire Me Section -->
  <section class="hire-section">
    <ScrollReveal animation="fade-up">
      <GlassCard tiltMax={5}>
        <div class="hire-content">
          <div class="hire-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="3" width="20" height="14" rx="2"/>
              <path d="M8 21h8M12 17v4"/>
            </svg>
          </div>
          <h2>Need a Website Like This?</h2>
          <p>I can build a custom website tailored to your personal brand or business needs.
             From portfolio sites to complex web applications — I've got you covered.</p>
          <Link to="/contact" class="hire-button">
            Hire Me To Build Your Website
          </Link>
        </div>
      </GlassCard>
    </ScrollReveal>
  </section>
</div>

<style lang="scss">
  .home-container {
    overflow-x: hidden;
  }

  /* ===== HERO SECTION ===== */
  .hero {
    min-height: 100vh;
    min-height: 100dvh; /* Dynamic viewport height for mobile */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem;
    overflow: hidden;

    @media (max-width: 480px) {
      padding: 1.5rem 1rem;
      min-height: auto;
      padding-top: 2rem;
      padding-bottom: 4rem;
    }
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    position: relative;
    z-index: 2;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 3rem;
    }
  }

  .hero-text {
    @media (max-width: 900px) {
      order: 2;
    }
  }

  .hero-title {
    font-size: clamp(3rem, 8vw, 5.5rem);
    font-weight: 800;
    line-height: 1.05;
    margin-bottom: 1.5rem;
    letter-spacing: -0.03em;

    .title-word {
      display: inline-block;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, #ec4899 100%);
      background-size: 200% 200%;
      animation: gradientShift 8s ease infinite;
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-right: 0.3em;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  .hero-subtitle {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    font-weight: 500;
    color: var(--text-muted);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 900px) {
      justify-content: center;
    }

    .subtitle-line {
      height: 1px;
      width: 40px;
      background: linear-gradient(90deg, transparent, var(--text-muted), transparent);

      @media (max-width: 600px) {
        display: none;
      }
    }
  }

  .hero-description {
    font-size: 1.2rem;
    line-height: 1.7;
    color: var(--text-color);
    opacity: 0.8;
    max-width: 500px;
    margin-bottom: 2.5rem;

    @media (max-width: 900px) {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    @media (max-width: 900px) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .btn-primary, .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    border-radius: 100px;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    .btn-arrow {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    &:hover .btn-arrow {
      transform: translateX(4px);
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 0.9rem 1.75rem;
    }
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    box-shadow: 0 4px 20px rgba(var(--primary-color-rgb), 0.4);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(var(--primary-color-rgb), 0.5);
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

  /* Hero Image */
  .hero-image-container {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      order: 1;
    }
  }

  .hero-image-wrapper {
    position: relative;
    width: 350px;
    height: 350px;

    @media (max-width: 480px) {
      width: 280px;
      height: 280px;
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
    inset: -20px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(var(--primary-color-rgb), 0.4) 0%, transparent 70%);
    filter: blur(30px);
    animation: glowPulse 4s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% { opacity: 0.6; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.05); }
  }

  .image-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid rgba(var(--primary-color-rgb), 0.3);

    &.ring-1 {
      inset: -15px;
      animation: ringRotate 20s linear infinite;
    }

    &.ring-2 {
      inset: -30px;
      border-style: dashed;
      animation: ringRotate 30s linear infinite reverse;
    }
  }

  @keyframes ringRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Scroll Indicator */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-muted);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    animation: fadeInUp 1s ease 1.5s both;

    @media (max-width: 480px) {
      display: none;
    }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .scroll-mouse {
    width: 26px;
    height: 40px;
    border: 2px solid var(--text-muted);
    border-radius: 13px;
    position: relative;
  }

  .scroll-wheel {
    width: 4px;
    height: 8px;
    background: var(--primary-color);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: scrollWheel 2s ease-in-out infinite;
  }

  @keyframes scrollWheel {
    0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
    50% { opacity: 0.3; transform: translateX(-50%) translateY(12px); }
  }

  /* ===== SECTION STYLING ===== */
  .section-header {
    margin-bottom: 3rem;

    &.centered {
      text-align: center;
    }

    .section-label {
      display: inline-block;
      font-size: 0.85rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--primary-color);
      margin-bottom: 0.75rem;

      &.light {
        color: rgba(255, 255, 255, 0.8);
      }
    }

    h2 {
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 700;
      color: var(--text-color);
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }

    .section-description {
      font-size: 1.1rem;
      color: var(--text-muted);
      max-width: 600px;
      margin: 0 auto;
    }
  }

  /* ===== ABOUT SECTION ===== */
  .about-section {
    padding: 6rem 2rem;
    background: var(--secondary-bg);
    position: relative;

    @media (max-width: 480px) {
      padding: 4rem 1.25rem;
    }
  }

  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .about-text {
    .lead {
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 1.6;
      color: var(--text-color);
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
    }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }

  .skill-card {
    padding: 1.75rem;
    text-align: center;

    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.85rem;
      color: var(--text-muted);
    }
  }

  .skill-icon-wrapper {
    width: 56px;
    height: 56px;
    margin: 0 auto 1rem;
    border-radius: 16px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .skill-icon {
    display: block;
    width: 28px;
    height: 28px;
    background-color: white;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  .code {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'/%3E%3C/svg%3E");
  }

  .brain {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'/%3E%3C/svg%3E");
  }

  .design {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'/%3E%3C/svg%3E");
  }

  .stack {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'/%3E%3C/svg%3E");
  }

  /* ===== PROJECTS SECTION ===== */
  .projects-section {
    padding: 6rem 2rem;
    background: var(--secondary-bg);
    position: relative;

    @media (max-width: 480px) {
      padding: 4rem 1.25rem;
    }
  }

  .projects-bento {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 3rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .project-card {
    display: block;
    text-decoration: none;
    height: 100%;
  }

  .project-image-container {
    position: relative;
    height: 220px;
    overflow: hidden;
    border-radius: 1rem 1rem 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover img {
      transform: scale(1.08);
    }
  }

  .project-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover .project-overlay {
    opacity: 1;
  }

  .contracted-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: linear-gradient(135deg, #f97316, #ea580c);
    color: white;
    padding: 0.4rem 0.9rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .project-content {
    padding: 1.75rem;

    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--text-color);
      margin-bottom: 0.75rem;
    }

    p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
    }
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: var(--primary-color);
    font-size: 0.95rem;

    svg {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
    }
  }

  .project-card:hover .project-link svg {
    transform: translate(3px, -3px);
  }

  .view-all-container {
    text-align: center;
  }

  .view-all-link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
    color: var(--primary-color);
    font-size: 1.1rem;
    padding: 0.75rem 1.5rem;
    border-radius: 100px;
    border: 2px solid var(--primary-color);
    transition: all 0.3s ease;

    svg {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    &:hover {
      background: var(--primary-color);
      color: white;

      svg {
        transform: translateX(4px);
      }
    }
  }

  /* ===== CTA SECTION ===== */
  .cta-section {
    padding: 8rem 2rem;
    position: relative;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    overflow: hidden;

    @media (max-width: 480px) {
      padding: 5rem 1.25rem;
    }
  }

  .cta-content {
    position: relative;
    z-index: 2;
    text-align: center;
    max-width: 700px;
    margin: 0 auto;

    h2 {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 700;
      color: white;
      margin-bottom: 1.5rem;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.7;
      margin-bottom: 2.5rem;
    }
  }

  .cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1.25rem 2.5rem;
    background: white;
    color: var(--primary-color);
    font-weight: 700;
    font-size: 1.1rem;
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

    svg {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);

      svg {
        transform: translateX(4px);
      }
    }

    @media (max-width: 480px) {
      padding: 1rem 2rem;
      font-size: 1rem;
      width: 100%;
      justify-content: center;
    }
  }

  /* ===== HIRE SECTION ===== */
  .hire-section {
    padding: 4rem 2rem 6rem;
    max-width: 900px;
    margin: 0 auto;

    @media (max-width: 480px) {
      padding: 3rem 1.25rem 4rem;
    }
  }

  .hire-content {
    padding: 3.5rem;
    text-align: center;

    @media (max-width: 480px) {
      padding: 2rem;
    }
  }

  .hire-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 2rem;
    border-radius: 24px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 40px;
      height: 40px;
      color: white;
    }
  }

  .hire-content h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 1rem;
  }

  .hire-content p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-muted);
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .hire-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 100px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 20px rgba(var(--primary-color-rgb), 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(var(--primary-color-rgb), 0.4);
    }

    @media (max-width: 480px) {
      width: 100%;
      padding: 1rem 1.5rem;
      font-size: 0.95rem;
    }
  }
</style>
