<script lang="ts">
  import { fade, fly } from 'svelte/transition';

  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  let isSubmitting = false;
  let showSuccessMessage = false;

  const contactInfo = {
    email: "tuckerpeters@genedu.co",
    linkedIn: "https://www.linkedin.com/in/tucker-peters/",
    github: "https://github.com/TuckerPeters",
    location: "Williamsburg, VA | New York, NY"
  };
  
  const faqItems = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web development with a focus on AI integration, using technologies like JavaScript/TypeScript, React, Svelte, Python, and various machine learning frameworks."
    },
    {
      question: "Are you available for freelance work?",
      answer: "Yes, I'm available for freelance projects, particularly those involving AI integration, educational technology, and web development."
    },
    {
      question: "How quickly do you respond to inquiries?",
      answer: "I typically respond to all inquiries within 24-48 hours. For urgent matters, please indicate so in the subject line."
    },
    {
      question: "Do you offer consulting services?",
      answer: "Yes, I provide consulting services for AI implementation, educational technology solutions, and web development projects."
    }
  ];

  async function handleSubmit(event) {
    isSubmitting = true;
    
    try {
      // Get form data for Netlify submission
      const form = event.target;
      const data = new FormData(form);
      
      // Submit the form data to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      });
      
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.statusText}`);
      }
      
      // Clear the form and show success message
      showSuccessMessage = true;
      formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      setTimeout(() => {
        showSuccessMessage = false;
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, show an error message to the user
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="contact-container" transition:fade>
  <section class="contact-hero">
    <div class="contact-hero-content">
      <h1 in:fly={{ y: 50, duration: 800, delay: 200 }}>Get In Touch</h1>
      <p class="subtitle" in:fly={{ y: 50, duration: 800, delay: 300 }}>
        I'm always interested in new projects, collaborations, or just a friendly hello.
      </p>
    </div>
  </section>

  <section class="contact-main">
    <div class="contact-form-section" in:fly={{ x: -50, duration: 800, delay: 400 }}>
      <div class="form-header">
        <h2>Send a Message</h2>
        <p>Have a question or want to work together? Let me know!</p>
      </div>
      
      <form 
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        on:submit|preventDefault={handleSubmit} 
        class="contact-form"
      >
        <!-- Netlify Forms Hidden Fields -->
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>

        <div class="form-grid">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={formData.name}
              required
              placeholder="Your name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email" 
              name="email"
              bind:value={formData.email}
              required
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            bind:value={formData.subject}
            required
            placeholder="What's this about?"
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            bind:value={formData.message}
            required
            placeholder="Tell me about your project, idea, or any questions you might have..."
            rows="6"
          ></textarea>
        </div>

        <button type="submit" class="submit-button" disabled={isSubmitting}>
          {#if isSubmitting}
            <span class="loading-spinner"></span>
            Sending...
          {:else}
            Send Message
          {/if}
        </button>

        {#if showSuccessMessage}
          <div class="success-message" transition:fade>
            <span class="success-icon"></span>
            Thanks for your message! I'll get back to you shortly.
          </div>
        {/if}
      </form>
    </div>

    <div class="contact-info-section" in:fly={{ x: 50, duration: 800, delay: 500 }}>
      <div class="info-card">
        <h2>Contact Information</h2>
        
        <div class="info-items">
          <div class="info-item">
            <span class="info-icon email-icon"></span>
            <div class="info-content">
              <h3>Email</h3>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </div>
          </div>
          
          <div class="info-item">
            <span class="info-icon linkedin-icon"></span>
            <div class="info-content">
              <h3>LinkedIn</h3>
              <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">Tucker Peters</a>
            </div>
          </div>
          
          <div class="info-item">
            <span class="info-icon github-icon"></span>
            <div class="info-content">
              <h3>GitHub</h3>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">TuckerPeters</a>
            </div>
          </div>
          
          <div class="info-item">
            <span class="info-icon location-icon"></span>
            <div class="info-content">
              <h3>Location</h3>
              <p>{contactInfo.location}</p>
            </div>
          </div>
        </div>
        
        <div class="connect-links">
          <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer" class="social-link linkedin">
            <span class="social-icon linkedin-icon"></span>
          </a>
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" class="social-link github">
            <span class="social-icon github-icon"></span>
          </a>
          <a href={`mailto:${contactInfo.email}`} class="social-link email">
            <span class="social-icon email-icon"></span>
          </a>
        </div>
      </div>
      
    </div>
  </section>

  <section class="faq-section" in:fly={{ y: 50, duration: 800, delay: 600 }}>
    <h2>Frequently Asked Questions</h2>
    
    <div class="faq-grid">
      {#each faqItems as faq, i}
        <div class="faq-card" transition:fade={{ delay: 700 + (i * 100) }}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      {/each}
    </div>
  </section>
  
  <section class="cta-section" in:fly={{ y: 50, duration: 800, delay: 800 }}>
    <div class="cta-content">
      <h2>Let's Create Something Amazing Together</h2>
      <p>Ready to discuss your next project? I'm here to help turn your ideas into reality.</p>
      <a href={`mailto:${contactInfo.email}`} class="cta-button">
        Start a Conversation
      </a>
    </div>
  </section>
</div>

<style lang="scss">
  .contact-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .contact-hero {
    padding: 5rem 2rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: radial-gradient(circle at 30% 50%, rgba(var(--primary-color-rgb), 0.05) 0%, transparent 70%),
                 radial-gradient(circle at 70% 50%, rgba(var(--secondary-color-rgb), 0.05) 0%, transparent 70%);
      z-index: -1;
      opacity: 0.7;
    }
    
    h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      color: transparent;
      
      @media (max-width: 768px) {
        font-size: 2.75rem;
      }
      
      @media (max-width: 480px) {
        font-size: 2.25rem;
      }
    }
    
    .subtitle {
      font-size: 1.25rem;
      max-width: 600px;
      margin: 0 auto;
      opacity: 0.8;
      line-height: 1.6;
      
      @media (max-width: 768px) {
        font-size: 1.1rem;
      }
    }
  }
  
  .contact-main {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3rem;
    padding: 0 2rem 5rem;
    
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }
  
  .contact-form-section {
    .form-header {
      margin-bottom: 2rem;
      
      h2 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: var(--text-color);
      }
      
      p {
        font-size: 1.1rem;
        opacity: 0.7;
      }
    }
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      
      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    label {
      font-weight: 500;
      font-size: 0.95rem;
    }
  }
  
  .submit-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    color: white;
    font-weight: 600;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.25s ease;
    margin-top: 1rem;
    
    &:hover:not(:disabled) {
      background-color: var(--secondary-color);
      transform: translateY(-2px);
    }
    
    &:disabled {
      opacity: 0.7;
      cursor: wait;
    }
  }
  
  .loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  .success-message {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    background-color: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.2);
    color: #10b981;
    border-radius: 0.5rem;
    margin-top: 1rem;
    
    .success-icon {
      display: block;
      width: 20px;
      height: 20px;
      background-color: #10b981;
      mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'/%3E%3C/svg%3E");
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
    }
  }
  
  .contact-info-section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .info-card {
    background-color: var(--card-bg);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--border-color);
    
    h2 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -0.75rem;
        left: 0;
        width: 50px;
        height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        border-radius: 3px;
      }
    }
  }
  
  .info-items {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .info-item {
    display: flex;
    gap: 1rem;
    
    .info-icon {
      display: block;
      width: 24px;
      height: 24px;
      background-color: var(--primary-color);
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      flex-shrink: 0;
    }
    
    .info-content {
      h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      
      a, p {
        font-size: 0.95rem;
        color: var(--text-color);
        opacity: 0.8;
        transition: all 0.2s ease;
      }
      
      a:hover {
        color: var(--primary-color);
        opacity: 1;
      }
    }
  }
  
  .email-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'/%3E%3C/svg%3E");
  }
  
  .linkedin-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/%3E%3C/svg%3E");
  }
  
  .github-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E");
  }
  
  .location-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'/%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'/%3E%3C/svg%3E");
  }
  
  .download-icon {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'/%3E%3C/svg%3E");
  }
  
  .connect-links {
    display: flex;
    gap: 1.25rem;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--background-color);
    transition: all 0.2s ease;
    
    .social-icon {
      width: 20px;
      height: 20px;
      background-color: var(--text-color);
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      transition: background-color 0.2s ease;
    }
    
    &:hover {
      transform: translateY(-3px);
      background-color: var(--primary-color);
      
      .social-icon {
        background-color: white;
      }
    }
  }
  
  .resume-download-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--card-bg);
    border-radius: 1rem;
    padding: 1.5rem;
    border: 1px solid var(--border-color);
    box-shadow: var(--card-shadow);
    
    @media (max-width: 640px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.25rem;
    }
    
    .resume-content {
      h3 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
      }
      
      p {
        font-size: 0.9rem;
        opacity: 0.7;
      }
    }
    
    .resume-button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.25rem;
      background-color: var(--primary-color);
      color: white;
      border-radius: 0.5rem;
      font-weight: 500;
      transition: all 0.2s ease;
      white-space: nowrap;
      
      &:hover {
        background-color: var(--secondary-color);
        transform: translateY(-2px);
      }
      
      .download-icon {
        display: block;
        width: 20px;
        height: 20px;
        background-color: white;
        mask-size: contain;
        mask-repeat: no-repeat;
        mask-position: center;
      }
    }
  }
  
  .faq-section {
    padding: 5rem 2rem;
    
    h2 {
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 3rem;
      position: relative;
      display: inline-block;
      padding-bottom: 1rem;
      background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
      -webkit-background-clip: text;
      color: transparent;
      margin: 0 auto 3rem;
      display: table;
      
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 25%;
        width: 50%;
        height: 3px;
        background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
        border-radius: 3px;
      }
    }
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .faq-card {
    background-color: var(--card-bg);
    border-radius: 1rem;
    padding: 1.75rem;
    box-shadow: var(--card-shadow);
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    
    &:hover {
      transform: var(--card-hover-transform);
      box-shadow: var(--hover-shadow);
    }
    
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--text-color);
    }
    
    p {
      font-size: 0.95rem;
      line-height: 1.6;
      opacity: 0.8;
    }
  }
  
  .cta-section {
    padding: 3rem 2rem 5rem;
  }
  
  .cta-content {
    background: linear-gradient(120deg, var(--primary-color), var(--secondary-color));
    border-radius: 1rem;
    padding: 3.5rem;
    text-align: center;
    color: white;
    
    h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      
      @media (max-width: 768px) {
        font-size: 1.75rem;
      }
    }
    
    p {
      font-size: 1.1rem;
      max-width: 600px;
      margin: 0 auto 2rem;
      opacity: 0.9;
      
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    
    .cta-button {
      display: inline-block;
      padding: 1rem 2rem;
      background-color: white;
      color: var(--primary-color);
      font-weight: 600;
      border-radius: 0.5rem;
      transition: all 0.2s ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }
    }
  }
</style>