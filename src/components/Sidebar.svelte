<script lang="ts">
  import { slide } from 'svelte/transition';
  import { Link } from "svelte-routing";
  export let isOpen: boolean;
</script>

<aside class="sidebar {isOpen ? 'open' : ''}" transition:slide>
  <nav class="sidebar-nav">
    <div class="profile-section">
      <div class="profile-image">
        <img src="/photos/sigpiheadshot.png" alt="Tucker Peters" />
      </div>
      <h3 class="profile-name">Tucker Peters</h3>
      <p class="profile-title">AI Developer & Software Engineer</p>
    </div>
    
    <div class="nav-section">
      <h3>Navigation</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    
    <div class="nav-section">
      <h3>Projects</h3>
      <ul>
        <li><a href="https://genedu.co" target="_blank" rel="noopener noreferrer">GenEdu.co</a></li>
        <li><a href="https://aiclubwm.com" target="_blank" rel="noopener noreferrer">AI Club at W&M</a></li>
        <li><a href="https://aicloaker.com" target="_blank" rel="noopener noreferrer">AICloaker</a></li>
        <li><a href="https://habitsofmindai.netlify.app" target="_blank" rel="noopener noreferrer">Habits of Mind AI</a></li>
      </ul>
    </div>

    <div class="nav-section">
      <h3>Connect</h3>
      <div class="social-links">
        <a href="https://github.com/TuckerPeters" target="_blank" rel="noopener noreferrer" class="social-link">
          <span class="github-icon"></span>
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/tucker-peters/" target="_blank" rel="noopener noreferrer" class="social-link">
          <span class="linkedin-icon"></span>
          LinkedIn
        </a>
        <a href="mailto:contact@tuckerpeters.com" class="social-link">
          <span class="email-icon"></span>
          Email
        </a>
      </div>
    </div>
    
    <!-- Removed resume download section -->
    <div class="nav-section quote-section">
      <p class="quote">"Learning never exhausts the mind." - Leonardo da Vinci</p>
    </div>
  </nav>
</aside>

<style lang="scss">
  .sidebar {
    width: var(--sidebar-width);
    background-color: var(--background-color);
    border-right: 1px solid var(--border-color);
    height: 100%;
    position: fixed;
    left: calc(-1 * var(--sidebar-width));
    transition: left 0.3s ease;
    z-index: 50;
    overflow-y: auto;
    
    &.open {
      left: 0;
      box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 480px) {
      width: 280px;
      left: -280px;
    }
  }

  .sidebar-nav {
    padding: 2rem 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .profile-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--border-color);
  }
  
  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 2px solid var(--primary-color);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .profile-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: var(--text-color);
  }
  
  .profile-title {
    font-size: 0.875rem;
    color: var(--text-color);
    opacity: 0.7;
  }

  .nav-section {
    margin-bottom: 1.5rem;

    h3 {
      font-size: 0.875rem;
      text-transform: uppercase;
      color: var(--text-color);
      opacity: 0.7;
      margin-bottom: 1rem;
      padding-left: 0.5rem;
      letter-spacing: 0.05em;
    }

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: var(--text-color);
          text-decoration: none;
          display: block;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s ease;
          font-weight: 500;

          &:hover {
            background-color: rgba(37, 99, 235, 0.1);
            color: var(--primary-color);
            padding-left: 1rem;
          }
          
          &[aria-current="page"] {
            background-color: var(--primary-color);
            color: white;
          }
        }
      }
    }
  }
  
  .social-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: var(--text-color);
    font-weight: 500;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(37, 99, 235, 0.1);
      color: var(--primary-color);
      padding-left: 1rem;
    }
  }
  
  .github-icon, .linkedin-icon, .email-icon, .download-icon {
    display: block;
    width: 20px;
    height: 20px;
    background-color: currentColor;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }
  
  .github-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
  }
  
  .linkedin-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/%3E%3C/svg%3E");
  }
  
  .email-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/%3E%3C/svg%3E");
  }
  
  .download-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E");
  }
  
  .quote-section {
    margin-top: auto;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-color);
  }
  
  .quote {
    font-style: italic;
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: center;
  }
</style>