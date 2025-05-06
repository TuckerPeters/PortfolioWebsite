<script lang="ts">
  import { fade } from 'svelte/transition';
  
  interface Experience {
    id: number;
    company: string;
    title: string;
    period: string;
    description: string[];
    skills: string[];
  }
  
  // This data would normally come from your resume
  // Since I haven't seen your full resume, I've created placeholder data
  // You should replace this with your actual experience details
  const experiences: Experience[] = [
    {
      id: 1,
      company: "GenEdu.co",
      title: "Founder & Developer",
      period: "2022 - Present",
      description: [
        "Developed an AI-powered educational platform that enhances learning through personalized tools",
        "Built and implemented the AI Tutor for interactive, real-time tutoring across various subjects",
        "Created the Quote Finder to assist in pinpointing key quotes for research",
        "Optimized algorithms to provide tailored educational support"
      ],
      skills: ["AI", "EdTech", "Web Development", "Product Management", "UX/UI Design"]
    },
    {
      id: 2,
      company: "AI Club at William & Mary",
      title: "Founding President",
      period: "2021 - Present",
      description: [
        "Founded and led a student organization dedicated to advancing artificial intelligence education",
        "Fostered a community for students interested in AI through workshops and collaborative opportunities",
        "Organized events and initiatives to explore AI technologies",
        "Managed club operations, budget, and membership growth"
      ],
      skills: ["Leadership", "Event Management", "Artificial Intelligence", "Community Building", "Public Speaking"]
    },
    {
      id: 3,
      company: "AICloaker",
      title: "Lead Developer",
      period: "2023 - Present",
      description: [
        "Designed and developed a professional Svelte template for web developers",
        "Implemented streamlined starting points for building web applications",
        "Optimized performance and focused on developer experience",
        "Provided documentation and support for template users"
      ],
      skills: ["Svelte", "Web Development", "UI/UX Design", "Documentation", "Technical Support"]
    }
    // Add more experiences from your resume
  ];
  
  // Education data from resume
  const education = [
    {
      institution: "William & Mary",
      degree: "Bachelor of Science in Computer Science",
      concentration: "AI, Machine Learning, and Big Data",
      period: "2020 - 2024",
      details: [
        "Relevant coursework: Machine Learning, Artificial Intelligence, Data Structures, Algorithms"
      ]
    }
    // Add more education from your resume
  ];
  
  // Skills grouped by category
  const skillsByCategory = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Svelte", "HTML", "CSS/SCSS"],
    "Web Development": ["React", "Svelte", "Node.js", "Express", "RESTful APIs", "Frontend Design"],
    "AI & Data": ["Machine Learning", "Natural Language Processing", "Data Analysis", "AI Integration"],
    "Tools & Frameworks": ["Git", "GitHub", "VS Code", "Figma", "Netlify", "Vercel"]
  };
</script>

<div class="experience-container" transition:fade>
  <section class="experience-hero">
    <h1>Experience & Skills</h1>
    <p>My professional background and technical expertise</p>
  </section>
  
  <section class="resume-download">
    <a href="/Condensed Resumé - Google Docs.pdf" target="_blank" class="resume-button">
      <span class="resume-icon"></span>
      Download Full Resume
    </a>
  </section>

  <div class="experience-layout">
    <div class="main-column">
      <section class="work-experience">
        <h2>Work Experience</h2>
        
        <div class="timeline">
          {#each experiences as experience (experience.id)}
            <div class="timeline-item" transition:fade>
              <div class="timeline-marker"></div>
              
              <div class="timeline-content">
                <div class="experience-header">
                  <h3>{experience.title}</h3>
                  <span class="company">{experience.company}</span>
                  <span class="period">{experience.period}</span>
                </div>
                
                <ul class="experience-details">
                  {#each experience.description as detail}
                    <li>{detail}</li>
                  {/each}
                </ul>
                
                <div class="experience-skills">
                  {#each experience.skills as skill}
                    <span class="skill-tag">{skill}</span>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </section>
      
      <section class="education">
        <h2>Education</h2>
        
        <div class="timeline">
          {#each education as edu}
            <div class="timeline-item" transition:fade>
              <div class="timeline-marker"></div>
              
              <div class="timeline-content">
                <div class="experience-header">
                  <h3>{edu.institution}</h3>
                  <span class="company">{edu.degree}</span>
                  <span class="period">{edu.period}</span>
                </div>
                
                <div class="education-concentration">
                  Concentration: {edu.concentration}
                </div>
                
                <ul class="experience-details">
                  {#each edu.details as detail}
                    <li>{detail}</li>
                  {/each}
                </ul>
              </div>
            </div>
          {/each}
        </div>
      </section>
    </div>
    
    <div class="side-column">
      <section class="skills-section">
        <h2>Skills</h2>
        
        {#each Object.entries(skillsByCategory) as [category, skills]}
          <div class="skill-category" transition:fade>
            <h3>{category}</h3>
            <div class="skill-tags">
              {#each skills as skill}
                <span class="skill-tag">{skill}</span>
              {/each}
            </div>
          </div>
        {/each}
      </section>
      
      <section class="contact-info">
        <h2>Contact</h2>
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/tucker-peters/" target="_blank" class="contact-link">
            <span class="linkedin-icon"></span>
            LinkedIn
          </a>
          <a href="https://github.com/TuckerPeters" target="_blank" class="contact-link">
            <span class="github-icon"></span>
            GitHub
          </a>
          <a href="mailto:contact@tuckerpeters.com" class="contact-link">
            <span class="email-icon"></span>
            Email
          </a>
        </div>
      </section>
    </div>
  </div>
</div>

<style lang="scss">
  .experience-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .experience-hero {
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
  }
  
  .resume-download {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  }
  
  .resume-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: 0.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: background-color 0.2s ease;
    
    &:hover {
      background-color: var(--secondary-color);
    }
  }
  
  .resume-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: white;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E");
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }
  
  .experience-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    
    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  }
  
  .main-column {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  .side-column {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  
  .work-experience, .education, .skills-section, .contact-info {
    background-color: var(--background-color);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    border: 1px solid var(--border-color);
  }
  
  h2 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
    position: relative;
    padding-bottom: 0.75rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3px;
      width: 50px;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      border-radius: 3px;
    }
  }
  
  .timeline {
    position: relative;
    padding-left: 2rem;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background-color: var(--border-color);
    }
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 2.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  .timeline-marker {
    position: absolute;
    left: -2rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 2px solid var(--background-color);
    transform: translateX(50%);
  }
  
  .timeline-content {
    padding-bottom: 1rem;
  }
  
  .experience-header {
    margin-bottom: 1rem;
    
    h3 {
      font-size: 1.35rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--text-color);
    }
    
    .company {
      display: block;
      font-size: 1.1rem;
      color: var(--primary-color);
      font-weight: 500;
      margin-bottom: 0.25rem;
    }
    
    .period {
      display: block;
      font-size: 0.9rem;
      color: var(--text-color);
      opacity: 0.7;
    }
  }
  
  .education-concentration {
    font-size: 0.95rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    color: var(--text-color);
  }
  
  .experience-details {
    padding-left: 1.25rem;
    margin-bottom: 1rem;
    
    li {
      margin-bottom: 0.5rem;
      font-size: 0.95rem;
      line-height: 1.5;
      color: var(--text-color);
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  .experience-skills, .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-tag {
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
    background-color: rgba(37, 99, 235, 0.1);
    color: var(--primary-color);
    border-radius: 20px;
    font-weight: 500;
  }
  
  .skill-category {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
      color: var(--text-color);
    }
  }
  
  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 0;
    color: var(--text-color);
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: var(--primary-color);
    }
  }
  
  .linkedin-icon, .github-icon, .email-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: var(--text-color);
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: background-color 0.2s ease;
  }
  
  .contact-link:hover .linkedin-icon,
  .contact-link:hover .github-icon,
  .contact-link:hover .email-icon {
    background-color: var(--primary-color);
  }
  
  .linkedin-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/%3E%3C/svg%3E");
  }
  
  .github-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
  }
  
  .email-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/%3E%3C/svg%3E");
  }
  
  @media (max-width: 768px) {
    .experience-hero h1 {
      font-size: 2.5rem;
    }
    
    .timeline {
      padding-left: 1.5rem;
    }
    
    .timeline-marker {
      left: -1.5rem;
    }
  }
</style>