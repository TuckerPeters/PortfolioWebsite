<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { Link } from "svelte-routing";
  
  // Featured project data (highlighting your top projects)
  const featuredProjects = [
    {
      id: 1,
      title: "GenEdu.co",
      description: "AI-powered educational platform with interactive tutoring and research tools",
      image: "/photos/genedu.png",
      url: "https://genedu.co"
    },
    {
      id: 2,
      title: "AI Club at William & Mary",
      description: "Student organization advancing AI education and fostering a community of AI enthusiasts",
      image: "/photos/aiclub.png",
      url: "https://aiclubwm.com"
    },
    {
      id: 3,
      title: "Habits of Mind AI",
      description: "AI-integrated web app for developing effective thinking habits and cognitive strategies",
      image: "/photos/habitsofmind.png",
      url: "https://habitsofmindai.netlify.app/"
    }
  ];
  
  // Skills to highlight
  const skills = [
    { name: "Frontend Development", icon: "code" },
    { name: "Artificial Intelligence", icon: "brain" },
    { name: "UI/UX Design", icon: "design" },
    { name: "Full Stack Development", icon: "stack" }
  ];
</script>

<div class="home-container" transition:fade>
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <div class="hero-text" in:fly={{ y: 50, duration: 800, delay: 200 }}>
        <h1>Tucker Peters</h1>
        <h2>AI Developer & Software Engineer</h2>
        <p>Creating intelligent digital experiences through innovative technology solutions</p>
        
        <div class="hero-buttons">
          <a href="/projects" class="hero-button primary">
            <span>View Projects</span>
          </a>
          <a href="/experience" class="hero-button secondary">
            <span>My Experience</span>
          </a>
        </div>
      </div>
      
      <div class="hero-image" in:fly={{ y: 50, duration: 800, delay: 400 }}>
        <img src="/photos/sigpiheadshot.png" alt="Tucker Peters" />
      </div>
    </div>
    
    <div class="scroll-indicator">
      <span class="scroll-arrow"></span>
      <span>Scroll Down</span>
    </div>
  </section>
  
  <!-- About Section -->
  <section class="about-section" id="about">
    <div class="section-header">
      <h2>About Me</h2>
    </div>
    
    <div class="about-content">
      <p>
        I'm a dedicated AI Developer and Software Engineer with a passion for creating powerful, user-friendly applications that leverage cutting-edge technology. My focus is on building intelligent solutions that enhance learning, productivity, and user experience.
      </p>
      <p>
        With expertise in web development and artificial intelligence, I've built several successful projects including AI-powered educational platforms, professional web templates, and community-focused initiatives. I'm committed to using technology to solve meaningful problems and create impactful digital experiences.
      </p>
      <p>
        My experience as Founding President of the AI Club at William & Mary has sharpened my leadership skills, allowing me to advance AI education and foster a community of students passionate about artificial intelligence.
      </p>
    </div>
    
    <div class="skills-showcase">
      <h3>Core Expertise</h3>
      
      <div class="skills-grid">
        {#each skills as skill}
          <div class="skill-card" transition:fade>
            <span class="skill-icon {skill.icon}"></span>
            <h4>{skill.name}</h4>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- Featured Projects Section -->
  <section class="featured-projects">
    <div class="section-header">
      <h2>Featured Projects</h2>
      <Link to="/projects" class="view-all">View All Projects <span class="arrow-icon">→</span></Link>
    </div>
    
    <div class="projects-grid">
      {#each featuredProjects as project (project.id)}
        <div class="project-card" transition:fade>
          <div class="project-image">
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
            <div class="project-overlay">
              <a href={project.url} target="_blank" rel="noopener noreferrer" class="view-project">
                View Project
              </a>
            </div>
          </div>
          
          <div class="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <!-- Contact CTA Section -->
  <section class="contact-cta">
    <h2>Let's Work Together</h2>
    <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
    <Link to="/contact" class="cta-button primary">Get In Touch</Link>
  </section>

  <!-- Hire Me Section -->
  <section class="hire-me-section">
    <div class="hire-me-content">
      <div class="hire-me-icon"></div>
      <h2>Need a Website Like This?</h2>
      <p>I can build a custom website tailored to your personal brand or business needs. From portfolio sites to complex web applications — I've got you covered.</p>
      <Link to="/contact" class="hire-me-button">Hire Me To Build Your Website</Link>
    </div>
  </section>
</div>

<style lang="scss">
  .home-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
  }

  .hero {
    height: calc(100vh - 140px);
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 2rem;
  }
  
  .hero-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    
    @media (max-width: 900px) {
      flex-direction: column-reverse;
      text-align: center;
      gap: 2rem;
    }
  }
  
  .hero-text {
    flex: 1;
    
    h1 {
      font-size: 4.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      color: transparent;
      line-height: 1.1;
      
      @media (max-width: 768px) {
        font-size: 3.5rem;
      }
      
      @media (max-width: 480px) {
        font-size: 2.75rem;
      }
    }
    
    h2 {
      font-size: 1.75rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      color: var(--text-color);
      opacity: 0.8;
      
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    
    p {
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      max-width: 600px;
      color: var(--text-color);
      opacity: 0.7;
      
      @media (max-width: 900px) {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  
  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    img {
      max-width: 400px;
      width: 100%;
      height: auto;
      border-radius: 20rem;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      z-index: 1;
      
      @media (max-width: 1024px) {
        max-width: 350px;
      }
      
      @media (max-width: 480px) {
        max-width: 280px;
      }
    }
    
    &::before {
      content: '';
      position: absolute;
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(to right, rgba(37, 99, 235, 0.1), rgba(79, 70, 229, 0.1));
      z-index: 0;
      animation: pulse 8s infinite alternate;
      
      @media (max-width: 1024px) {
        width: 250px;
        height: 250px;
      }
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(to right, rgba(37, 99, 235, 0.05), rgba(79, 70, 229, 0.05));
      z-index: 0;
      right: 20%;
      top: 10%;
      animation: pulse 6s infinite alternate-reverse;
      
      @media (max-width: 1024px) {
        width: 120px;
        height: 120px;
      }
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
    
    @media (max-width: 900px) {
      justify-content: center;
    }
  }
  
    
  .hero-button {
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition: 0.3s;
    min-width: 180px;
    border-radius: 8px;
    margin-bottom: 10px;
    
    &.primary {
      background-color: #2563eb;
      color: white;
      border: 3px solid #2563eb;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      
      &:hover {
        background-color: #1d4ed8;
        transform: translateY(-3px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
      }
    }
    
    &.secondary {
      background-color: white;
      color: #2563eb;
      border: 3px solid #2563eb;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      
      &:hover {
        background-color: #f0f9ff;
        transform: translateY(-3px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
      }
    }
    
    @media (max-width: 480px) {
      width: 100%;
    }
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-color);
    opacity: 0.5;
    font-size: 0.875rem;
    animation: bounce 2s infinite;
    
    .scroll-arrow {
      display: block;
      width: 20px;
      height: 20px;
      border-right: 2px solid var(--text-color);
      border-bottom: 2px solid var(--text-color);
      transform: rotate(45deg);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-color);
      position: relative;
      display: inline-block;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 60%;
        height: 4px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        border-radius: 4px;
      }
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    .view-all {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.2s ease;
      
      .arrow-icon {
        transition: transform 0.2s ease;
      }
      
      &:hover {
        .arrow-icon {
          transform: translateX(5px);
        }
      }
    }
    
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
  
  .about-section, .featured-projects, .contact-cta {
    padding: 5rem 2rem;
    
    @media (max-width: 768px) {
      padding: 4rem 1.5rem;
    }
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3rem;
    
    p {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--text-color);
      opacity: 0.8;
      max-width: 900px;
    }
  }
  
  .skills-showcase {
    margin-top: 2rem;
    
    h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
      color: var(--text-color);
    }
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 2rem;
  }
  
  .skill-card {
    padding: 2rem;
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
      border-color: var(--primary-color);
    }
    
    h4 {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-color);
      text-align: center;
    }
  }
  
  .skill-icon {
    display: block;
    width: 48px;
    height: 48px;
    background-color: var(--primary-color);
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
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
    
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    }
    
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
  
  .project-card {
    background-color: var(--card-bg);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--border-color);
    transition: all var(--transition-speed) ease;
    
    &:hover {
      transform: var(--card-hover-transform);
      box-shadow: var(--hover-shadow);
      
      .project-image img {
        transform: scale(1.05);
      }
      
      .project-overlay {
        opacity: 1;
      }
    }
  }
  
  .project-image {
    position: relative;
    height: 220px;
    overflow: hidden;
    background-color: var(--card-bg);
    border-bottom: 1px solid var(--border-color);
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--gradient-overlay);
      opacity: 0;
      transition: opacity var(--transition-speed) ease;
      pointer-events: none;
      z-index: 1;
      
      :global(html.dark) & {
        opacity: 0.2;
      }
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }
  
  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(var(--primary-color-rgb), 0.85);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all var(--transition-speed) ease;
    z-index: 2;
    
    .view-project {
      padding: 0.75rem 1.5rem;
      background-color: white;
      color: var(--primary-color);
      font-weight: 600;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: all 0.3s ease;
      
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
    }
  }
  
  .project-content {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: var(--text-color);
    }
    
    p {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--text-color);
      opacity: 0.7;
    }
  }
  
  .hire-me-section {
    padding: 4rem 2rem;
    background-color: var(--secondary-bg);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.1) 0%, transparent 20%),
        radial-gradient(circle at 80% 70%, rgba(79, 70, 229, 0.1) 0%, transparent 20%);
      z-index: 0;
    }
  }
  
  .hire-me-content {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
    padding: 3rem;
    background: var(--card-bg);
    border-radius: 1.5rem;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--border-color);
    
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin: 1.5rem 0;
      color: var(--text-color);
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      font-size: 1.2rem;
      line-height: 1.7;
      max-width: 700px;
      margin: 0 auto 2rem;
      color: var(--text-muted);
    }
  }
  
  .hire-me-icon {
    width: 80px;
    height: 80px;
    background-color: var(--primary-color);
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' /%3E%3C/svg%3E");
    mask-size: 60%;
    mask-position: center;
    mask-repeat: no-repeat;
    box-shadow: 0 8px 16px rgba(var(--primary-color-rgb), 0.2);
  }
  
  .hire-me-button {
    display: inline-block;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: white;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 50px;
    text-decoration: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.3);
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(var(--primary-color-rgb), 0.4);
    }
    
    &:active {
      transform: translateY(-1px);
    }
    
    @media (max-width: 480px) {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      width: 100%;
    }
  }

  .contact-cta {
    text-align: center;
    background-color: var(--background-color);
    border-radius: 1rem;
    padding: 4rem 2rem;
    margin: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    background-image: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(79, 70, 229, 0.05) 100%);
    
    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      display: inline-block;
      
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    
    p {
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto 2rem;
      color: var(--text-color);
      opacity: 0.8;
    }
    
    .cta-button {
      margin-top: 1rem;
      
      @media (max-width: 480px) {
        max-width: 250px;
      }
    }
  }
</style>