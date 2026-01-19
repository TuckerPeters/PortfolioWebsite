<script lang="ts">
  import { fade } from 'svelte/transition';
  import GitHubRepos from '../components/GitHubRepos.svelte';
  
  interface Project {
    id: number;
    title: string;
    description: string;
    url: string;
    image: string;
    technologies: string[];
    featured: boolean;
    contractedWork?: boolean;
  }
  
  // Project data based on resources.txt
  const projects: Project[] = [
    {
      id: 1,
      title: "GenEdu.co",
      description: "GenEdu is an AI-powered educational platform designed to enhance learning through personalized tools. It offers features like the AI Tutor for interactive, real-time tutoring across various subjects, and the Quote Finder to assist in pinpointing key quotes for research. The platform aims to make learning more efficient and accessible by leveraging advanced algorithms to provide tailored educational support.",
      url: "https://genedu.co",
      image: "/photos/genedu.png",
      technologies: ["AI", "EdTech", "Web Development"],
      featured: true
    },
    {
      id: 2,
      title: "AI Club at William & Mary",
      description: "This domain is associated with the AI Club at William & Mary, a student-led organization dedicated to advancing artificial intelligence education. The club focuses on fostering a community for students interested in AI, providing resources, workshops, and collaborative opportunities to explore AI technologies. Tucker Peters serves as the Founding President of this club.",
      url: "https://aiclubwm.com",
      image: "/photos/aiclub.png",
      technologies: ["Education", "Community", "Artificial Intelligence"],
      featured: true
    },
    {
      id: 3,
      title: "Habits of Mind AI",
      description: "Habits of Mind AI is a web application that integrates artificial intelligence to promote and develop effective thinking habits. The platform likely offers tools and resources to help users cultivate cognitive strategies that enhance learning and problem-solving skills.",
      url: "https://habitsofmindinstitute.org/",
      image: "/photos/habitsofmind.png",
      technologies: ["AI", "EdTech", "Psychology"],
      featured: true,
      contractedWork: true
    },
    {
      id: 4,
      title: "ThoughtPartnr",
      description: "ThoughtPartnr is an AI-driven platform designed to provide expert strategic guidance for small to medium-sized businesses (SMBs). The platform combines a modern Svelte frontend with Node.js and Firebase backend, leveraging advanced AI to deliver personalized business advice. It features payment integration through Stripe and utilizes OpenAI services to offer smart recommendations for business growth and strategy.",
      url: "https://thoughtpartnr.com",
      image: "/photos/thoguhtpartnr.png",
      technologies: ["AI", "Svelte", "Firebase", "TypeScript", "Business Strategy"],
      featured: true,
      contractedWork: true
    },
    {
      id: 5,
      title: "W&M Business Major Advising",
      description: "A business major advising platform for William & Mary students. This tool helps business students plan their academic path, track degree requirements, and make informed decisions about course selection and major concentrations.",
      url: "https://github.com/TuckerPeters/W-M-Business-MajorAdvising",
      image: "photos/Advising.png",
      technologies: ["Education", "Academic Planning", "Web Development"],
      featured: false
    },
    {
      id: 6,
      title: "W&M Athletics",
      description: "An athletics platform for William & Mary that provides comprehensive sports information, team schedules, player statistics, and game results. This web application serves as a central hub for the William & Mary athletic community.",
      url: "https://wmathletics.netlify.app/",
      image: "photos/Athletics.png",
      technologies: ["Web Development", "Sports", "Data Management"],
      featured: false
    },
    {
      id: 7,
      title: "AICloaker",
      description: "AICloaker is a professional Svelte template designed for developers. It provides a streamlined starting point for building web applications using the Svelte framework, focusing on performance and ease of use.",
      url: "https://aicloaker.com/",
      image: "/photos/aicloaker.png",
      technologies: ["Svelte", "Web Development", "Template"],
      featured: false
    },
    {
      id: 8,
      title: "StandardWebTemplate",
      description: "This GitHub repository contains a standard web template developed by Tucker Peters. Built with Svelte, the template serves as a foundational structure for web development projects, offering a clean and organized codebase to expedite the development process.",
      url: "https://github.com/TuckerPeters/StandardWebTemplate",
      image: "/images/previews/standardwebtemplate.svg",
      technologies: ["Svelte", "GitHub", "Web Development"],
      featured: false
    },
    
    

  ];
  
  // Filter for featured projects
  const featuredProjects = projects.filter(project => project.featured);
  
  // State for filtered projects
  let filteredProjects = projects;
  let activeFilter = 'all';
  
  // Unique technology tags for filter
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  
  // Filter projects by technology
  function filterProjects(technology: string) {
    activeFilter = technology;
    
    if (technology === 'all') {
      filteredProjects = projects;
    } else {
      filteredProjects = projects.filter(project => 
        project.technologies.includes(technology)
      );
    }
  }

  // Track which project descriptions are expanded
  let expandedDescriptions: Record<number, boolean> = {};

  // Toggle description expansion
  function toggleDescription(projectId: number) {
    expandedDescriptions[projectId] = !expandedDescriptions[projectId];
  }
</script>

<div class="projects-container" transition:fade>
  <section class="projects-hero">
    <h1>My Projects</h1>
    <p>A collection of my work and development projects</p>
    <p class="public-projects-note">These are my public projects. <a href="/contact">Contact me</a> to see private projects.</p>
  </section>
  
  <section class="filter-controls">
    <h2>Filter by Technology</h2>
    <div class="filter-buttons">
      <button 
        class="filter-button {activeFilter === 'all' ? 'active' : ''}" 
        on:click={() => filterProjects('all')}
      >
        All
      </button>
      
      {#each allTechnologies as technology}
        <button 
          class="filter-button {activeFilter === technology ? 'active' : ''}" 
          on:click={() => filterProjects(technology)}
        >
          {technology}
        </button>
      {/each}
    </div>
  </section>

  <section class="projects-grid">
    {#each filteredProjects as project (project.id)}
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
          {#if project.featured}
            <span class="featured-badge">Featured</span>
          {/if}
          {#if project.contractedWork}
            <span class="contracted-work-badge">Contracted Work</span>
          {/if}
        </div>
        
        <div class="project-content">
          <h3>{project.title}</h3>
          
          <div class="project-tags">
            {#each project.technologies as tech}
              <span class="tech-tag">{tech}</span>
            {/each}
          </div>
          
          <div class="project-description-container">
            <p class="project-description" class:expanded={expandedDescriptions[project.id]}>
              {project.description}
            </p>
            <button 
              class="toggle-description" 
              on:click={() => toggleDescription(project.id)}
            >
              {expandedDescriptions[project.id] ? 'View Less' : 'View More'}
            </button>
          </div>
          
          <a href={project.url} target="_blank" rel="noopener noreferrer" class="view-project-button">
            View Project
          </a>
        </div>
      </div>
    {/each}
  </section>
  
  <!-- GitHub Repositories Section -->
  <GitHubRepos />
</div>

<style lang="scss">
  .projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .projects-hero {
    text-align: center;
    padding: 3rem 0;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      color: transparent;
      font-weight: 700;
    }

    p {
      font-size: 1.2rem;
      color: var(--text-color);
      opacity: 0.8;
    }

    .public-projects-note {
      font-size: 0.95rem;
      margin-top: 1rem;
      color: var(--text-color);
      opacity: 0.7;

      a {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 500;
        transition: color 0.2s ease;

        &:hover {
          color: var(--secondary-color);
          text-decoration: underline;
        }
      }
    }
  }
  
  .filter-controls {
    margin-bottom: 3rem;
    text-align: center;
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--text-color);
    }
  }
  
  .filter-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  .filter-button {
    padding: 0.6rem 1.2rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    background-color: var(--background-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--border-color);
    }
    
    &.active {
      background-color: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2.5rem;
  }
  
  .project-card {
    border-radius: 0.75rem;
    overflow: hidden;
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    box-shadow: var(--card-shadow);
    transition: all var(--transition-speed) ease;
    
    &:hover {
      transform: var(--card-hover-transform);
      box-shadow: var(--hover-shadow);
    }
  }
  
  .project-image {
    position: relative;
    height: 200px;
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
    
    .featured-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: var(--primary-color);
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    
    .contracted-work-badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background-color: #ff6b35;
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
  
  .project-content {
    padding: 1.5rem;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--text-color);
      font-weight: 600;
    }
  }
  
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tech-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    background-color: rgba(var(--primary-color-rgb), 0.1);
    color: var(--primary-color);
    border-radius: 20px;
    font-weight: 500;
    border: 1px solid rgba(var(--primary-color-rgb), 0.2);
    transition: all var(--transition-speed) ease;
    
    &:hover {
      background-color: rgba(var(--primary-color-rgb), 0.15);
      transform: translateY(-1px);
    }
    
    :global(html.dark) & {
      background-color: rgba(var(--primary-color-rgb), 0.15);
      border-color: rgba(var(--primary-color-rgb), 0.3);
    }
  }
  
  .project-description-container {
    margin-bottom: 1.5rem;
  }
  
  .project-description {
    font-size: 0.95rem;
    line-height: 1.5;
    color: var(--text-color);
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &.expanded {
      -webkit-line-clamp: initial;
    }
  }

  .toggle-description {
    font-size: 0.85rem;
    color: var(--primary-color);
    background: none;
    border: none;
    padding: 0.25rem 0;
    margin-top: 0.5rem;
    cursor: pointer;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    transition: color 0.2s ease;
    
    &:hover {
      text-decoration: underline;
      color: var(--secondary-color);
    }
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    
    .projects-hero h1 {
      font-size: 2.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .filter-buttons {
      flex-direction: column;
      gap: 0.5rem;
      align-items: center;
    }
    
    .filter-button {
      width: 100%;
      max-width: 200px;
    }
  }
</style>