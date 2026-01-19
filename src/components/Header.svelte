<script lang="ts">
  import { Link } from "svelte-routing";
  export let toggleSidebar: () => void;
  
  let isHovered = false;
  
  function handleMouseEnter() {
    isHovered = true;
  }
  
  function handleMouseLeave() {
    isHovered = false;
  }
</script>

<header class="header">
  <div class="header-content">
    <div class="logo-container">
      <div 
        class="tucker-logo-wrapper"
        role="button"
        tabindex="0"
        aria-label="Home"
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}
        style="
          transform: {isHovered ? 'translateY(-2px)' : 'translateY(0)'};
        "
      >
        <div 
          class="wrapper-backdrop"
          style="
            opacity: {isHovered ? 1 : 0};
            transform: scale({isHovered ? 1 : 0.98});
          "
        ></div>
        <Link 
          to="/" 
          class="tucker-logo"
          style="
            font-weight: 800;
            font-size: 1.35rem;
            display: inline-block;
            position: relative;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1), letter-spacing 0.4s ease;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            background-size: 200% 200%;
            animation: gradientShift 5s ease infinite;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            letter-spacing: {isHovered ? '1px' : '0.5px'};
            text-shadow: 0 1px 1px rgba(var(--primary-color-rgb), 0.1);
            filter: drop-shadow(0 0 {isHovered ? '2px' : '1px'} rgba(var(--primary-color-rgb), {isHovered ? '0.4' : '0.2'}));
          "
        >
          Tucker Peters
        </Link>
        <div 
          class="tucker-logo-underline"
          style="
            transform: scaleX({isHovered ? 1 : 0});
            opacity: {isHovered ? 0.7 : 0};
          "
        ></div>
      </div>
    </div>
    
    <button class="menu-button" on:click={toggleSidebar}>
      <span class="menu-icon"></span>
    </button>
    
    <nav class="nav-links">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>

    <div class="header-actions">
      <a href="https://github.com/TuckerPeters" target="_blank" rel="noopener noreferrer" class="social-link">
        <span class="github-icon"></span>
      </a>
      <a href="https://www.linkedin.com/in/tucker-peters/" target="_blank" rel="noopener noreferrer" class="social-link">
        <span class="linkedin-icon"></span>
      </a>
    </div>
  </div>
</header>

<style lang="scss">
  .header {
    background-color: var(--background-color);
    border-bottom: 1px solid var(--border-color);
    padding: 1.25rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      padding: 1rem 1.5rem;
    }
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .logo-container {
    display: flex;
    align-items: center;
    z-index: 10;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      bottom: -2px;
      left: calc(50% - 3px);
      box-shadow: 0 0 8px var(--primary-color);
      opacity: 0;
      transform: scale(0);
      transition: transform 0.4s ease, opacity 0.4s ease;
    }
    
    &:hover::after {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .tucker-logo-wrapper {
    position: relative;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: transform 0.3s ease;
  }
  
  .wrapper-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--primary-color-rgb), 0.1);
    border-radius: 8px;
    z-index: -1;
    transition: all 0.3s ease;
    box-shadow: 
      0 5px 15px rgba(var(--primary-color-rgb), 0.1),
      0 0 0 1px rgba(var(--primary-color-rgb), 0.05),
      inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
  
  .tucker-logo-underline {
    position: absolute;
    bottom: 0.2rem;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      var(--primary-color) 25%, 
      var(--secondary-color) 75%, 
      transparent 100%
    );
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.6s ease;
  }
  
  @media (max-width: 480px) {
    .tucker-logo-wrapper {
      padding: 0.4rem 0.8rem;
    }
    
    .tucker-logo-underline {
      bottom: 0.1rem;
    }
  }
  
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    
    :global(a) {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      position: relative;
      padding: 0.5rem 0;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        transform: scaleX(0);
        transition: transform 0.3s ease;
        transform-origin: right;
      }
      
      &:hover::after,
      &[aria-current="page"]::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
    
    @media (max-width: 768px) {
      display: none;
    }
  }

  .header-actions {
    display: flex;
    gap: 1.25rem;
    
    @media (max-width: 480px) {
      gap: 1rem;
    }
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  .menu-button {
    display: none;
    
    @media (max-width: 768px) {
      display: block;
      margin-left: auto;
      margin-right: 1rem;
    }
  }

  .menu-icon, .github-icon, .linkedin-icon {
    display: block;
    width: 24px;
    height: 24px;
    background-color: var(--text-color);
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
    transition: background-color 0.2s ease;
  }

  .menu-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16'/%3E%3C/svg%3E");
  }

  .github-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
  }

  .linkedin-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/%3E%3C/svg%3E");
  }
  
  .social-link:hover .github-icon,
  .social-link:hover .linkedin-icon {
    background-color: var(--primary-color);
  }
</style>