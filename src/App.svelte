<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import { fade } from 'svelte/transition';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Toast from './components/Toast.svelte';
  import ThemeToggle from './components/ThemeToggle.svelte';
  import Home from './routes/Home.svelte';
  import Projects from './routes/Projects.svelte';
  import Contact from './routes/Contact.svelte';
  
  export let url = "";
  let isSidebarOpen = false;
  let isDarkMode = false;

  // Check for saved preference in localStorage or user system preference
  if (typeof window !== 'undefined') {
    // First check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      // Use saved preference
      isDarkMode = savedTheme === 'dark';
    } else {
      // Otherwise, check system preference
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDarkMode = userPrefersDark;
    }
    
    // Apply theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  const toggleSidebar = () => {
    isSidebarOpen = !isSidebarOpen;
  };

  const toggleTheme = () => {
    // Toggle the isDarkMode state
    isDarkMode = !isDarkMode;
    
    // Force an update to the DOM immediately
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      console.log('Adding dark class to html element');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      console.log('Removing dark class from html element');
    }
    
    // Save preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Log for debugging
    console.log('Theme toggled to:', isDarkMode ? 'dark' : 'light');
    console.log('HTML classes:', document.documentElement.className);
    
    // Force redraw by triggering a window resize
    window.dispatchEvent(new Event('resize'));
  };
</script>

<Router {url}>
  <div class="app-container" transition:fade>
    <Header {toggleSidebar} />
    
    <main class="main-content">
      <Sidebar isOpen={isSidebarOpen} />
      
      <div class="content-wrapper" class:sidebar-open={isSidebarOpen}>
        <Route path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </main>

    <Footer />
    <Toast />
  </div>
  
  <!-- Theme toggle outside the main container to ensure it's always visible -->
  <ThemeToggle {isDarkMode} {toggleTheme} />
</Router>

<style lang="scss">
  :global(html) {
    /* Core colors */
    --primary-color: #2563eb;
    --secondary-color: #6366f1;
    --accent-color: #ec4899;
    --primary-color-rgb: 37, 99, 235;
    --secondary-color-rgb: 99, 102, 241;
    --accent-color-rgb: 236, 72, 153;
    --success-color: #10b981;
    --warning-color: #f59e0b;
    --danger-color: #ef4444;

    /* Background & text colors */
    --background-color: #fafbfc;
    --card-bg: #ffffff;
    --secondary-bg: #f1f5f9;
    --text-color: #0f172a;
    --text-muted: #64748b;
    --text-light: #94a3b8;

    /* Border & shadows */
    --border-color: #e2e8f0;
    --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
    --hover-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);

    /* Layout & transitions */
    --sidebar-width: 250px;
    --card-hover-transform: translateY(-8px);
    --section-padding: 5rem 0;
    --transition-speed: 0.3s;

    /* Gradients */
    --gradient-start: #2563eb;
    --gradient-end: #6366f1;
    --gradient-overlay: rgba(255, 255, 255, 0.85);

    /* Smooth scrolling */
    scroll-behavior: smooth;
  }
  
  :global(html.dark) {
    /* Core colors - slightly brighter in dark mode */
    --primary-color: #3b82f6;
    --secondary-color: #818cf8;
    --accent-color: #f472b6;
    --primary-color-rgb: 59, 130, 246;
    --secondary-color-rgb: 129, 140, 248;
    --accent-color-rgb: 244, 114, 182;
    --success-color: #34d399;
    --warning-color: #fbbf24;
    --danger-color: #f87171;

    /* Background & text colors */
    --background-color: #0a0f1a;
    --card-bg: #151d2e;
    --secondary-bg: #0f1623;
    --text-color: #f1f5f9;
    --text-muted: #94a3b8;
    --text-light: #cbd5e1;

    /* Border & shadows */
    --border-color: #1e293b;
    --card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -2px rgba(0, 0, 0, 0.2);
    --hover-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);

    /* Gradients */
    --gradient-start: #3b82f6;
    --gradient-end: #818cf8;
    --gradient-overlay: rgba(10, 15, 26, 0.85);
  }

  :global(body) {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
    color: var(--text-color);
    font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11';
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }

  :global(::selection) {
    background: rgba(var(--primary-color-rgb), 0.2);
    color: var(--text-color);
  }

  :global(button) {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font: inherit;
    color: inherit;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  .app-container {
    min-height: 100vh;
    background-color: var(--background-color);
    color: var(--text-color);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    /* Force a repaint when CSS variables change */
    transform: translateZ(0);
  }

  .main-content {
    display: flex;
    flex: 1;
    min-height: calc(100vh - 140px);
    position: relative;
  }

  .content-wrapper {
    flex: 1;
    padding: 0;
    margin-left: 0;
    transition: margin-left 0.3s ease;
    width: 100%;

    &.sidebar-open {
      @media (min-width: 768px) {
        margin-left: var(--sidebar-width);
        width: calc(100% - var(--sidebar-width));
      }
    }
  }

  @media (max-width: 767px) {
    .content-wrapper {
      padding: 0;
    }
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(.fade-enter) {
    opacity: 0;
  }

  :global(.fade-enter-active) {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  :global(.fade-exit) {
    opacity: 1;
  }

  :global(.fade-exit-active) {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    color: var(--text-color);
    line-height: 1.2;
  }

  :global(p) {
    line-height: 1.6;
  }

  :global(img) {
    max-width: 100%;
    height: auto;
  }

  :global(input) {
    font-family: inherit;
    font-size: inherit;
    color: var(--text-color);
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    transition: all 0.2s ease;
    width: 100%;
  }

  :global(textarea) {
    font-family: inherit;
    font-size: inherit;
    color: var(--text-color);
    background-color: var(--background-color);
    border: 1px solid var(--border-color);
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    transition: all 0.2s ease;
    width: 100%;
    min-height: 120px;
    resize: vertical;
  }

  :global(input:focus),
  :global(textarea:focus) {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
  
  :global(.section-title) {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
      border-radius: 4px;
    }
  }
  
  :global(.card) {
    background-color: var(--card-bg);
    border-radius: 0.75rem;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: var(--card-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: var(--card-hover-transform);
      box-shadow: var(--hover-shadow);
    }
  }
  
  :global(.gradient-text) {
    background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
    -webkit-background-clip: text;
    color: transparent;
  }
  
  :global(.btn) {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    transition: all 0.2s ease;
    text-align: center;
    
    &.primary {
      background-color: var(--primary-color);
      color: white;
      
      &:hover {
        background-color: var(--secondary-color);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
      }
    }
    
    &.secondary {
      background-color: transparent;
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      
      &:hover {
        background-color: rgba(37, 99, 235, 0.1);
        transform: translateY(-3px);
      }
    }
  }

  :global(.container) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
      padding: 0 1.5rem;
    }
  }
</style>