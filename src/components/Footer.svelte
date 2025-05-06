<script lang="ts">
  import { Link } from "svelte-routing";
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-content">
    <div class="footer-section brand">
      <h3 class="footer-logo">Tucker Peters</h3>
      <p class="footer-tagline">AI Developer & Software Engineer</p>
      <p class="footer-description">
        Creating intelligent digital experiences through innovative technology solutions.
      </p>
    </div>

    <div class="footer-section links">
      <h3>Quick Links</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/experience">Experience</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    <div class="footer-section projects">
      <h3>Featured Projects</h3>
      <ul>
        <li><a href="https://genedu.co" target="_blank" rel="noopener noreferrer">GenEdu.co</a></li>
        <li><a href="https://aiclubwm.com" target="_blank" rel="noopener noreferrer">AI Club at W&M</a></li>
        <li><a href="https://habitsofmindai.netlify.app" target="_blank" rel="noopener noreferrer">Habits of Mind AI</a></li>
      </ul>
    </div>

    <div class="footer-section connect">
      <h3>Connect</h3>
      <div class="social-links">
        <a href="https://github.com/TuckerPeters" target="_blank" rel="noopener noreferrer" class="social-link">
          <span class="social-icon github"></span>
        </a>
        <a href="https://www.linkedin.com/in/tucker-peters/" target="_blank" rel="noopener noreferrer" class="social-link">
          <span class="social-icon linkedin"></span>
        </a>
        <a href="mailto:tuckerpeters@genedu.co" class="social-link">
          <span class="social-icon email"></span>
        </a>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>&copy; {currentYear} GenEdu LLC. All rights reserved.</p>
  </div>
</footer>

<style lang="scss">
  .footer {
    background-color: var(--background-color);
    border-top: 1px solid var(--border-color);
    padding: 4rem 2rem 2rem;
    margin-top: auto;
    
    @media (max-width: 768px) {
      padding: 3rem 1.5rem 1.5rem;
    }
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 3rem;
  }
  
  .footer-section {
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1.25rem;
      color: var(--text-color);
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 40px;
        height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        border-radius: 3px;
      }
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.75rem;

        a {
          color: var(--text-color);
          opacity: 0.8;
          text-decoration: none;
          transition: all 0.2s ease;
          display: inline-block;

          &:hover {
            opacity: 1;
            transform: translateX(5px);
            color: var(--primary-color);
          }
        }
      }
    }
  }
  
  .footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
  }
  
  .footer-tagline {
    font-size: 1rem;
    margin-bottom: 1rem;
    opacity: 0.8;
  }
  
  .footer-description {
    font-size: 0.95rem;
    line-height: 1.6;
    opacity: 0.7;
    max-width: 300px;
  }

  .social-links {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
  
  .social-link {
    transition: transform 0.2s ease;
    
    &:hover {
      transform: translateY(-3px);
      
      .social-icon {
        background-color: var(--primary-color);
      }
    }
  }

  .social-icon, .download-icon {
    display: block;
    width: 24px;
    height: 24px;
    background-color: var(--text-color);
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: background-color 0.2s ease;
  }

  .github {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
  }

  .linkedin {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/%3E%3C/svg%3E");
  }
  
  .email {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/%3E%3C/svg%3E");
  }
  
  .download-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E");
  }
  
  .download-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--text-color);
    opacity: 0.8;
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      opacity: 1;
      color: var(--primary-color);
      
      .download-icon {
        background-color: var(--primary-color);
      }
    }
  }

  .footer-bottom {
    max-width: 1200px;
    margin: 2rem auto 0;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: var(--text-color);
    opacity: 0.7;
    font-size: 0.9rem;
  }
</style>