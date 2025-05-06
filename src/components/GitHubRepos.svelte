<script>
  import { onMount } from 'svelte';
  
  // Replace with your GitHub username
  const username = 'TuckerPeters';
  
  let repos = [];
  let loading = true;
  let error = null;
  
  onMount(async () => {
    try {
      loading = true;
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      repos = await response.json();
      loading = false;
    } catch (e) {
      console.error('Error fetching GitHub repos:', e);
      error = e.message;
      loading = false;
    }
  });
  
  // Format date to be more friendly
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<section class="github-repos-section">
  <div class="container">
    <h2 class="section-title">Recent GitHub Repositories</h2>
    <p class="repo-note">Note: Most of my projects are private. Please reach out if you'd like to learn more about the cool stuff I'm working on!</p>
    
    {#if loading}
      <div class="loading">
        <div class="spinner"></div>
        <p>Loading repositories...</p>
      </div>
    {:else if error}
      <div class="error">
        <p>Sorry, we couldn't load the repositories. Please try again later.</p>
        <p class="error-message">{error}</p>
      </div>
    {:else if repos.length === 0}
      <div class="empty">
        <p>No repositories found.</p>
      </div>
    {:else}
      <div class="repo-list">
        {#each repos as repo}
          <div class="repo-card">
            <div class="repo-header">
              <h3 class="repo-name">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
              </h3>
              {#if repo.language}
                <span class="repo-language">
                  <span class="language-dot" style="background-color: {getLanguageColor(repo.language)}"></span>
                  {repo.language}
                </span>
              {/if}
            </div>
            <div class="repo-desc">{repo.description || 'No description provided.'}</div>
            <div class="repo-meta">
              <div class="repo-stats">
                <span class="repo-stars">⭐ {repo.stargazers_count}</span>
                <span class="repo-forks">🍴 {repo.forks_count}</span>
              </div>
              <div class="repo-updated">
                Updated: {formatDate(repo.updated_at)}
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
    
    <div class="github-footer">
      <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" class="view-all-btn">
        View All Repositories
      </a>
    </div>
  </div>
</section>

<style lang="scss">
  .github-repos-section {
    padding: 4rem 0;
    background-color: var(--secondary-bg);
  }
  
  .repo-note {
    text-align: center;
    color: var(--text-muted);
    font-size: 1.1rem;
    margin: 1rem 0 2rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    font-style: italic;
  }
  
  .repo-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .repo-card {
    border: 1px solid var(--border-color);
    border-radius: 0.75rem;
    padding: 1.5rem;
    background-color: var(--card-bg);
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    flex: 1 1 300px;
    max-width: calc(33.333% - 1rem);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--hover-shadow);
    }
    
    @media (max-width: 1024px) {
      max-width: calc(50% - 0.75rem);
    }
    
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
  
  .repo-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }
  
  .repo-name {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    
    a {
      color: var(--primary-color);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .repo-language {
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    color: var(--text-muted);
  }
  
  .language-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
    background-color: #3572A5; // Default for Python
  }
  
  .repo-desc {
    flex-grow: 1;
    margin-bottom: 1rem;
    color: var(--text-color);
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .repo-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: auto;
  }
  
  .repo-stats {
    display: flex;
    gap: 1rem;
  }
  
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
  }
  
  .spinner {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid var(--border-color);
    border-top-color: var(--primary-color);
    animation: spin 1s linear infinite;
    margin-bottom: 1rem;
  }
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  .error, .empty {
    text-align: center;
    padding: 3rem 0;
    color: var(--text-muted);
  }
  
  .error-message {
    font-size: 0.9rem;
    color: var(--danger-color);
    margin-top: 0.5rem;
  }
  
  .github-footer {
    margin-top: 2.5rem;
    text-align: center;
  }
  
  .view-all-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: var(--primary-color);
    color: white;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--secondary-color);
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(var(--primary-color-rgb), 0.2);
    }
  }
</style>

<script context="module">
  // Helper function to get language color
  function getLanguageColor(language) {
    // Common language colors
    const colors = {
      JavaScript: '#f1e05a',
      TypeScript: '#2b7489',
      HTML: '#e34c26',
      CSS: '#563d7c',
      Python: '#3572A5',
      Java: '#b07219',
      C: '#555555',
      'C++': '#f34b7d',
      'C#': '#178600',
      Ruby: '#701516',
      Go: '#00ADD8',
      Swift: '#ffac45',
      Kotlin: '#F18E33',
      Rust: '#dea584',
      PHP: '#4F5D95',
      Scala: '#c22d40',
      Jupyter: '#DA5B0B',
      // Add more as needed
    };
    
    return colors[language] || '#8257e5'; // Default purple color
  }
</script>