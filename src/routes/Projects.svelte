<script lang="ts">
  import { fade } from 'svelte/transition';
  import GitHubRepos from '../components/GitHubRepos.svelte';
  
  interface Project {
    id: number;
    title: string;
    description: string;
    url?: string;
    image: string;
    technologies: string[];
    featured: boolean;
  }

  const projects: Project[] = [
    {
      id: 1,
      title: "Niska",
      description: "Co-founded Niska LLC, an AI infrastructure company building vertical platforms across defense, financial services, real estate, and politics, including a financial services joint venture valued at $6M. Architected a multi-tenant AI backbone on AWS (ECS Fargate, Postgres with row-level security, Weaviate, Cognito MFA) running Claude on Bedrock for cited RAG, cutting search across 300,000+ page libraries from hours to seconds. Migrated 281,857 client documents with 0 missing and drove weekly use by all 15 staff at the first production tenant. Closed a development deal with a $20,000 Phase 1 fee plus equity, and led SOC 2 readiness for Capital Command with Vanta and 13 control changes.",
      image: "/images/previews/work-cover.svg",
      technologies: ["Infrastructure"],
      featured: true
    },
    {
      id: 2,
      title: "Decentralized Swarm C2",
      description: "Designed a leaderless swarm C2 layer for the Defense Innovation Unit Massed Modular Aircraft area where aircraft confirm targets only when several independently agree, leaving no single point of failure. Validated it across about 54,000 simulated missions, completing 97% of missions at 32 aircraft versus 35 to 40% for command-based designs and tracking targets about 4x as often. Cut radio airtime per aircraft 2.1 to 2.7x with a 52-byte signed message, and model-checked the safety logic in TLA+ across 305,536 states with 0 violations. Built dragonfly-style perception 6.8 to 24x faster than CNNs, and drafted 7 white papers for AFRL, SOFWERX, DARPA, Army DevX, and OSD SBIR. Brought the work to William & Mary's Innovating for Defense course as ACC-626 for sponsor HQ ACC.",
      image: "/images/previews/work-cover.svg",
      technologies: ["Defense", "Research"],
      featured: true
    },
    {
      id: 3,
      title: "William & Mary AI Club",
      description: "Founded the university's first AI Club and grew it to 150+ members in one semester, recruiting faculty advisors including the Dean of Computer Science, Data Science, and Applied Physics. Raised $20,000 in sponsorships to launch the inaugural W&M AI Case Competition, and hosted speakers Robi Rahman (MIRI) and Kent Rollins (CPO, General Intuition), an MBA Vibe Coding workshop, and a weekly newsletter.",
      url: "https://aiclubwm.com",
      image: "/photos/aiclub.png",
      technologies: ["Education"],
      featured: true
    },
    {
      id: 4,
      title: "2026 AI Case-a-thon",
      description: "Organized and ran the Oct 24 to 25, 2026 event sponsored by Air Combat Command with ACC Chief Scientist Dr. John Matyjas and Maj Gen (Ret.) Mark Matthews. The program covered applicant selection, the ACC data poisoning challenge, judge recruitment, a 100-point rubric, a SaaS pitch workshop, and a winner read-ahead for ACC leadership. Drew 64 applicants for a roughly 50% acceptance rate, fielding 30 students in 11 teams before 11 judges competing for $10,000 in prizes, and raised $10,000 from Accenture.",
      image: "/images/previews/work-cover.svg",
      technologies: ["Education", "Defense"],
      featured: true
    },
    {
      id: 5,
      title: "GovCon BD Platform",
      description: "Deployed an on-prem GovCon business development platform at WGS Systems that scores SAM.gov opportunities and drafts 10 to 15 page proposals in about 5 minutes.",
      image: "/images/previews/work-cover.svg",
      technologies: ["Defense", "Infrastructure"],
      featured: false
    },
    {
      id: 6,
      title: "WGS RAG Deployment Analysis",
      description: "Built a cloud, on-premise, and hybrid RAG deployment analysis for the Chief Growth Officer at WGS Systems that shaped AI strategy across the firm's $500M+ federal contract portfolio. Designed a CMMC and CUI compliant hybrid architecture and authored the deployment strategy report for firm leadership. Built opportunity tracking across SAM.gov, GovWin, and EBI.",
      image: "/images/previews/work-cover.svg",
      technologies: ["Defense"],
      featured: false
    },
    {
      id: 7,
      title: "Keystone Image Analysis Pipeline",
      description: "Built an automated image-generation and analysis pipeline at Keystone Strategy that replaced planned manual testing, producing about 5,000 unique model outputs and 20,000+ image comparisons scored with SSIM, LPIPS, and CLIP similarity and analyzed statistically. Helped develop a novel theory that model outputs generalized rather than memorized copyrighted works, contributing to reports used in expert testimony. Also analyzed about 144,000 server requests in an AI data scraping dispute.",
      image: "/images/previews/work-cover.svg",
      technologies: ["Research"],
      featured: false
    },
    {
      id: 8,
      title: "GenEdu",
      description: "Founded GenEdu LLC and shipped 5+ client products through spring 2026 for the Habits of Mind Institute, ThoughtPartnr, and others. Work included Project Clark Kent, an AI reading assistant for students with learning differences built on OCR and NLP pipelines, plus white-label mobile integrations and custom AI web platforms across education, professional services, and SMB clients.",
      url: "https://genedu.co",
      image: "/photos/genedu.png",
      technologies: ["Education"],
      featured: false
    },
    {
      id: 9,
      title: "Campus AI Tools",
      description: "Built 5 campus AI tools for the William & Mary AI Club, including a Transfer Credit Evaluator, Pre-Major Advising Platform, W&M Research Database, an AI Cost Optimization Dashboard for Athletics, and a syllabus analysis tool for the STLI program.",
      image: "/images/previews/work-cover.svg",
      technologies: ["Education"],
      featured: false
    },
    {
      id: 10,
      title: "Commercial Real Estate Research",
      description: "Co-authored the AI Club research deck \"How Can AI Assist in Commercial Real Estate?\" with Andrew Yowell, Jack Zamer, and Cate Hatfield.",
      image: "/images/previews/work-cover.svg",
      technologies: ["Research", "Education"],
      featured: false
    },
    {
      id: 11,
      title: "Habits of Mind Institute",
      description: "Client product shipped through GenEdu for the Habits of Mind Institute.",
      url: "https://habitsofmindinstitute.org/",
      image: "/photos/habitsofmind.png",
      technologies: ["GenEdu"],
      featured: false
    },
    {
      id: 12,
      title: "ThoughtPartnr",
      description: "Client product shipped through GenEdu for ThoughtPartnr.",
      url: "https://thoughtpartnr.com",
      image: "/photos/thoguhtpartnr.png",
      technologies: ["GenEdu"],
      featured: false
    }
  ];
  
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
    <h1>Projects</h1>
    <p>Work in AI infrastructure, defense research, and education</p>
    <p class="public-projects-note">Public sites are linked only where one already exists. <a href="/experience">Experience</a> has the full roles.</p>
  </section>
  
  <section class="filter-controls">
    <h2>Filter by Focus</h2>
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
                img.src = '/images/previews/work-cover.svg';
              }
            }}
          />
          {#if project.featured}
            <span class="featured-badge">Featured</span>
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
          
          {#if project.url}
            <a href={project.url} target="_blank" rel="noopener noreferrer" class="view-project-button">
              Visit Site
            </a>
          {/if}
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

  .view-project-button {
    display: inline-flex;
    align-items: center;
    margin-top: 0.5rem;
    padding: 0.65rem 1.1rem;
    border-radius: 999px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
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