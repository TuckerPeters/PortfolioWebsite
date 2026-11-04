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

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Niska LLC",
      title: "Co-Founder",
      period: "2025 - Present",
      description: [
        "Co-founded an AI infrastructure company building vertical platforms across defense, financial services, real estate, and politics, including a financial services joint venture valued at $6M.",
        "Architected a multi-tenant AI backbone on AWS (ECS Fargate, Postgres with row-level security, Weaviate, Cognito MFA) running Claude on Bedrock for cited RAG, cutting search across 300,000+ page libraries from hours to seconds.",
        "Migrated 281,857 client documents with 0 missing and drove weekly use by all 15 staff at the first production tenant.",
        "Deployed an on-prem GovCon BD platform at WGS Systems that scores SAM.gov opportunities and drafts 10 to 15 page proposals in about 5 minutes.",
        "Closed a development deal with a $20,000 Phase 1 fee plus equity, and led SOC 2 readiness for Capital Command with Vanta and 13 control changes."
      ],
      skills: ["AWS", "RAG", "PostgreSQL", "Weaviate", "Claude", "Bedrock"]
    },
    {
      id: 2,
      company: "Niska / DIU and Team Niska, Innovating for Defense (I4D)",
      title: "Co-Creator & Research Lead",
      period: "2026 - Present",
      description: [
        "Designed a leaderless swarm C2 layer for DIU's Massed Modular Aircraft area where aircraft confirm targets only when several independently agree, leaving no single point of failure.",
        "Validated it across about 54,000 simulated missions, completing 97% of missions at 32 aircraft versus 35 to 40% for command-based designs and tracking targets about 4x as often.",
        "Cut radio airtime per aircraft 2.1 to 2.7x with a 52-byte signed message, and model-checked the safety logic in TLA+ across 305,536 states with 0 violations.",
        "Built dragonfly-style perception 6.8 to 24x faster than CNNs, and drafted 7 white papers for AFRL, SOFWERX, DARPA, Army DevX, and OSD SBIR.",
        "Brought the work to W&M's I4D course as ACC-626 for sponsor HQ ACC, conducting 100+ interviews with US and Finnish operators, program leaders, and industry.",
        "Traveled to Finland in Oct 2026 with a 5-student Common Mission Project team on a $10,000+ funded trip, meeting EW and NATO Innovation leaders and scouting a BVLOS test range."
      ],
      skills: ["TLA+", "Simulation", "Swarm C2"]
    },
    {
      id: 3,
      company: "Keystone Strategy (K.ATS Team), New York, NY",
      title: "Summer Associate",
      period: "Summer 2026",
      description: [
        "Built an automated image-generation and analysis pipeline that replaced planned manual testing, producing about 5,000 unique model outputs and 20,000+ image comparisons scored with SSIM, LPIPS, and CLIP similarity and analyzed statistically.",
        "Helped develop a novel theory that model outputs generalized rather than memorized copyrighted works, contributing to reports used in expert testimony in litigation involving major image-generation companies and presenting findings to partners.",
        "Analyzed about 144,000 server requests in an AI data scraping dispute, showing their 404 and 503 error patterns did not on their own show large-scale scraping.",
        "Built citation-management, staffing, and knowledge management tools that were demoed to Keystone partners."
      ],
      skills: ["SSIM", "LPIPS", "CLIP"]
    },
    {
      id: 4,
      company: "WGS Systems, MD",
      title: "Digital Strategy & AI Infrastructure Intern",
      period: "Spring 2026",
      description: [
        "Built a cloud, on-premise, and hybrid RAG deployment analysis for the Chief Growth Officer that shaped AI strategy across the firm's $500M+ federal contract portfolio.",
        "Designed a CMMC and CUI compliant hybrid architecture and authored the deployment strategy report for firm leadership.",
        "Built opportunity tracking across SAM.gov, GovWin, and EBI, redesigned the company website, and turned the relationship into Niska's ongoing defense revenue-share partnership."
      ],
      skills: ["RAG", "CMMC", "CUI"]
    },
    {
      id: 5,
      company: "GenEdu LLC",
      title: "Founder & CEO",
      period: "2024 - Spring 2026",
      description: [
        "Shipped 5+ client products for the Habits of Mind Institute, ThoughtPartnr, and others, including Project Clark Kent, an AI reading assistant for students with learning differences built on OCR and NLP pipelines.",
        "Delivered white-label mobile integrations and custom AI web platforms across education, professional services, and SMB clients."
      ],
      skills: ["OCR", "NLP"]
    },
    {
      id: 6,
      company: "Royce Investment Partners, New York, NY",
      title: "Summer Investment Analyst",
      period: "Summer 2023",
      description: [
        "Authored an equity research report on Oxford Industries (OXM), a $1.5B small-cap retailer, covering competitive positioning, pricing trends, and downside risks, and presented recommendations to the portfolio manager and Principal."
      ],
      skills: ["Equity Research"]
    },
    {
      id: 7,
      company: "Cedar Point Yacht Club (CPYC), Westport, CT",
      title: "Sailing Coach & Winter Dock Hand",
      period: "2023 - 2025",
      description: [
        "Coached youth sailing skills, safety, and team racing, led training sessions, and supported club operations and members."
      ],
      skills: ["Sailing"]
    }
  ];

  const extracurriculars: Experience[] = [
    {
      id: 1,
      company: "AI Club, William & Mary",
      title: "Founder & President",
      period: "2025 - Present",
      description: [
        "Founded the university's first AI Club and grew it to 150+ members in one semester, recruiting faculty advisors including the Dean of Computer Science, Data Science, and Applied Physics and standing up club governance.",
        "Raised $20,000 in sponsorships to launch the inaugural W&M AI Case Competition, and hosted speakers Robi Rahman (MIRI) and Kent Rollins (CPO, General Intuition), an MBA Vibe Coding workshop, and a weekly newsletter.",
        "Built 5 campus AI tools including a Transfer Credit Evaluator, Pre-Major Advising Platform, W&M Research Database, an AI Cost Optimization Dashboard for Athletics, and a syllabus analysis tool for the STLI program.",
        "Co-authored the club research deck \"How Can AI Assist in Commercial Real Estate?\" with Andrew Yowell, Jack Zamer, and Cate Hatfield."
      ],
      skills: ["AI"]
    },
    {
      id: 2,
      company: "Sponsored by Air Combat Command (ACC)",
      title: "2026 AI Case-a-thon",
      period: "Oct 24 to 25, 2026",
      description: [
        "Organized and ran the event with ACC Chief Scientist Dr. John Matyjas and Maj Gen (Ret.) Mark Matthews, covering applicant selection, the ACC data poisoning challenge, judge recruitment, a 100-point rubric, a SaaS pitch workshop, and a winner read-ahead for ACC leadership.",
        "Drew 64 applicants for a roughly 50% acceptance rate, fielding 30 students in 11 teams before 11 judges competing for $10,000 in prizes, and raised $10,000 from Accenture for the 2026 event."
      ],
      skills: []
    },
    {
      id: 3,
      company: "Mason Investment Society, William & Mary",
      title: "Portfolio Manager",
      period: "2024 - Fall 2026",
      description: [
        "Co-led a $60K student fund (50+ members) and its industrials coverage, pitching public equities including Xylem (XYL) with DCF and comps models and weekly sector briefs.",
        "Served earlier as Senior Analyst for Xylem and the industrials sector (2024 to 2025), including calls with Xylem investor relations."
      ],
      skills: ["DCF", "Comps", "Equity Research"]
    }
  ];

  const education = [
    {
      institution: "William & Mary",
      degree: "B.A. Finance & Government",
      period: "Expected 2028",
      details: [
        "GPA 3.67",
        "Distinguished AI Student Fellow",
        "Distinguished Financial Management Student",
        "Dean's List",
        "Sigma Pi Fraternity"
      ]
    },
    {
      institution: "Staples High School, Westport, CT",
      degree: "Diploma",
      period: "2024",
      details: [
        "GPA 3.93",
        "AP Scholar with Distinction",
        "President, Model UN",
        "Captain, Varsity Sailing"
      ]
    }
  ];

  const skillsByCategory = {
    "Technical": [
      "Python",
      "JavaScript",
      "React",
      "SvelteKit",
      "FastAPI",
      "PostgreSQL (pgvector, RLS)",
      "Weaviate",
      "AWS (ECS Fargate, RDS, S3, Cognito, Bedrock)",
      "Terraform",
      "Docker",
      "RAG",
      "LLM Orchestration",
      "Claude API",
      "TensorFlow",
      "OCR",
      "Unreal Engine",
      "TLA+"
    ],
    "Finance": [
      "Equity and DCF Modeling",
      "Comps",
      "Equity Research",
      "Sector Analysis",
      "Excel and Google Sheets",
      "Public Speaking"
    ],
    "Certifications": [
      "Certified Financial Literacy (WISE, 2024)",
      "Registered Vendor, William & Mary Procurement Office"
    ]
  };
</script>

<div class="experience-container" transition:fade>
  <section class="experience-hero">
    <h1>Experience & Skills</h1>
    <p>Roles, extracurriculars, education, and skills</p>
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
      
      <section class="work-experience">
        <h2>Extracurriculars</h2>

        <div class="timeline">
          {#each extracurriculars as item (item.id)}
            <div class="timeline-item" transition:fade>
              <div class="timeline-marker"></div>

              <div class="timeline-content">
                <div class="experience-header">
                  <h3>{item.title}</h3>
                  <span class="company">{item.company}</span>
                  <span class="period">{item.period}</span>
                </div>

                <ul class="experience-details">
                  {#each item.description as detail}
                    <li>{detail}</li>
                  {/each}
                </ul>

                {#if item.skills.length}
                  <div class="experience-skills">
                    {#each item.skills as skill}
                      <span class="skill-tag">{skill}</span>
                    {/each}
                  </div>
                {/if}
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
          <a href="mailto:tucker@niska.ai" class="contact-link">
            <span class="email-icon"></span>
            tucker@niska.ai
          </a>
          <a href="mailto:trpeters@wm.edu" class="contact-link">
            <span class="email-icon"></span>
            trpeters@wm.edu
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