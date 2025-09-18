<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  interface Article {
    title: string;
    description: string;
    url: string;
    publication: string;
    date: string;
    image?: string;
  }

  const articles: Article[] = [
    {
      title: "Bridging the Digital Divide",
      description: "Tucker Peters, a student at William & Mary, is working to bridge educational gaps through AI...",
      url: "https://magazine.wm.edu/online-exclusives/2025/bridging-the-digital-divide.php",
      publication: "William & Mary Magazine",
      date: "2025",
      image: "https://magazine.wm.edu/assets/images/social-media/tucker-peters-bridging-the-digital-divide.jpg"
    },
    {
      title: "Harnessing AI for Students' Good",
      description: "This William & Mary student is leveraging artificial intelligence to create educational tools...",
      url: "https://06880danwoog.com/2025/02/20/tucker-peters-harnessing-ai-for-students-good/",
      publication: "06880",
      date: "Feb 2025",
      image: "https://06880danwoog.com/wp-content/uploads/2025/02/tucker-peters-ai.jpg"
    },
    {
      title: "People of W&M: Creative Critical Thinkers",
      description: "Featured for innovative approaches to problem-solving and technology...",
      url: "https://www.wm.edu/peopleofwm/creative-critical-thinkers/peters-t/",
      publication: "William & Mary",
      date: "2025",
      image: "https://www.wm.edu/about/peopleofwm/_images/peters-tucker-hero.jpg"
    },
    {
      title: "School introduces interdisciplinary AI minor",
      description: "New AI minor program at William & Mary, featuring Tucker's involvement in advancing AI education...",
      url: "https://flathatnews.com/2025/08/28/school-of-computing-data-sciences-and-physics-introduces-interdisciplinary-ai-minor/",
      publication: "The Flat Hat",
      date: "Aug 2025",
      image: "https://flathatnews.com/wp-content/uploads/2025/08/ai-minor-featured-image.jpg"
    },
    {
      title: "One Friend Saves Another at Oakcliff Sailing Center",
      description: "Quick thinking and life-saving actions during a sailing incident...",
      url: "https://www.liherald.com/stories/one-friend-saves-another-at-oakcliff-sailing-center-in-ob,144397",
      publication: "Long Island Herald",
      date: "2024",
      image: "https://www.liherald.com/media/img/photos/2024/07/oakcliff-sailing-rescue.jpg"
    },
    {
      title: "Unsung Hero #246",
      description: "Recognition for community contributions and dedication to helping others through technology...",
      url: "https://06880danwoog.com/2022/07/13/unsung-hero-246/",
      publication: "06880",
      date: "Jul 2022",
      image: "https://06880danwoog.com/wp-content/uploads/2022/07/tucker-peters-unsung-hero.jpg"
    }
  ];

  let currentIndex = 0;
  let sliderContainer: HTMLElement;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % articles.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + articles.length) % articles.length;
  }

  function goToSlide(index: number) {
    currentIndex = index;
  }

  // Auto-advance slides every 8 seconds
  let autoAdvanceInterval: ReturnType<typeof setInterval>;

  function startAutoAdvance() {
    autoAdvanceInterval = setInterval(nextSlide, 8000);
  }

  function stopAutoAdvance() {
    clearInterval(autoAdvanceInterval);
  }

  // Start auto-advance when component mounts
  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    startAutoAdvance();
  });

  onDestroy(() => {
    stopAutoAdvance();
  });
</script>

<section class="articles-section" on:mouseenter={stopAutoAdvance} on:mouseleave={startAutoAdvance}>
  <div class="section-header">
    <h2>Featured In</h2>
    <p class="section-subtitle">Recent articles and features highlighting my work</p>
  </div>

  <div class="slider-container" bind:this={sliderContainer}>
    <div class="slider-wrapper">
      <div
        class="slides"
        style="transform: translateX(-{currentIndex * 100}%)"
      >
        {#each articles as article, index}
          <div class="slide" class:active={index === currentIndex}>
            <article class="article-card">
              <div class="article-content">
                <div class="publication-info">
                  <span class="publication">{article.publication}</span>
                  <span class="date">{article.date}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <a href={article.url} target="_blank" rel="noopener noreferrer" class="external-link">
                <span class="link-icon">↗</span>
              </a>
            </article>
          </div>
        {/each}
      </div>
    </div>

    <!-- Navigation controls -->
    <div class="slider-controls">
      <button
        class="nav-button prev"
        on:click={prevSlide}
        aria-label="Previous article"
      >
        <span class="arrow">←</span>
      </button>

      <div class="dots-container">
        {#each articles as _, index}
          <button
            class="dot"
            class:active={index === currentIndex}
            on:click={() => goToSlide(index)}
            aria-label="Go to article {index + 1}"
          ></button>
        {/each}
      </div>

      <button
        class="nav-button next"
        on:click={nextSlide}
        aria-label="Next article"
      >
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</section>

<style lang="scss">
  .articles-section {
    padding: 5rem 2rem;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(79, 70, 229, 0.05) 100%);
    border-radius: 1rem;
    margin: 2rem 0;

    @media (max-width: 768px) {
      padding: 4rem 1.5rem;
      margin: 1rem;
    }

    @media (max-width: 480px) {
      padding: 3rem 1rem;
      margin: 0.5rem;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;

    h2 {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--text-color);
      position: relative;
      display: inline-block;
      margin-bottom: 1rem;

      &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        width: 60%;
        height: 4px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        border-radius: 4px;
      }

      @media (max-width: 768px) {
        font-size: 2rem;
      }

      @media (max-width: 480px) {
        font-size: 1.75rem;
      }
    }

    .section-subtitle {
      font-size: 1.1rem;
      color: var(--text-color);
      opacity: 0.7;
      max-width: 600px;
      margin: 0 auto;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .slider-container {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    overflow: hidden;
  }

  .slider-wrapper {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  .slides {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .slide {
    flex: 0 0 100%;
    width: 100%;
  }

  .article-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 2rem;
    min-height: 160px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      border-color: var(--primary-color);
      box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.1);

      .external-link {
        opacity: 1;
        transform: translateY(-50%) scale(1);
      }
    }

    @media (max-width: 768px) {
      padding: 1.75rem;
      min-height: 140px;
    }

    @media (max-width: 480px) {
      padding: 1.5rem;
      min-height: 120px;
    }
  }

  .article-content {
    flex: 1;
    width: 100%;

    .publication-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1.5rem;

      @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 1rem;
      }

      .publication {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--primary-color);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .date {
        font-size: 0.85rem;
        color: var(--text-color);
        opacity: 0.6;
        background: var(--background-color);
        padding: 0.3rem 0.8rem;
        border-radius: 1rem;
        border: 1px solid var(--border-color);
      }
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.3;
      margin-bottom: 1rem;
      color: var(--text-color);

      @media (max-width: 768px) {
        font-size: 1.35rem;
      }

      @media (max-width: 480px) {
        font-size: 1.2rem;
        line-height: 1.2;
      }
    }

    p {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--text-color);
      opacity: 0.8;
      margin: 0;

      @media (max-width: 480px) {
        font-size: 1rem;
      }
    }
  }

  .external-link {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%) scale(0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    text-decoration: none;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 2;

    @media (max-width: 480px) {
      width: 28px;
      height: 28px;
      right: 0.75rem;
    }

    .link-icon {
      font-size: 14px;
      font-weight: bold;

      @media (max-width: 480px) {
        font-size: 12px;
      }
    }

    &:hover {
      background: var(--secondary-color);
      transform: translateY(-50%) scale(1.1);
    }
  }

  .slider-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 1rem;

    @media (max-width: 480px) {
      gap: 1rem;
      margin-top: 1.5rem;
    }
  }

  .nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    background: var(--card-bg);
    border: 2px solid var(--border-color);
    border-radius: 50%;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    &:hover {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(var(--primary-color-rgb), 0.3);
    }

    &:active {
      transform: translateY(0);
    }

    .arrow {
      font-size: 1.2rem;
      font-weight: bold;
    }

    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
      font-size: 1rem;

      .arrow {
        font-size: 1rem;
      }
    }
  }

  .dots-container {
    display: flex;
    gap: 0.75rem;
    align-items: center;

    @media (max-width: 480px) {
      gap: 0.5rem;
    }
  }

  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--border-color);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0.5;

    &.active {
      background: var(--primary-color);
      opacity: 1;
      transform: scale(1.2);
    }

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }

    @media (max-width: 480px) {
      width: 10px;
      height: 10px;
    }
  }

  // Animation for slide transitions
  @media (prefers-reduced-motion: reduce) {
    .slides {
      transition: none;
    }

    .nav-button,
    .dot,
    .read-more {
      transition: none;
    }
  }
</style>