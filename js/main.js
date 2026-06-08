// ============================================
// Elephant Music (English) - Main JavaScript
// GSAP + ScrollTrigger Animations
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // --- Guard: ensure GSAP loaded ---
  const hasGSAP = typeof gsap !== 'undefined';

  // ════════════════════════════════════════════
  //  GSAP — Scroll-Triggered Section Animations
  // ════════════════════════════════════════════

  if (hasGSAP && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // --- Hero: fade-in on load ---
    const heroEl = document.querySelector('.hero');
    if (heroEl) {
      const heroContent = heroEl.querySelector('.hero-content');
      if (heroContent) {
        gsap.from(heroContent, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          delay: 0.3
        });
      }
    }

    // --- Section titles: fade up on scroll ---
    gsap.utils.toArray('.section-title').forEach(function(title) {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    });

    // --- Feature items: staggered reveal ---
    gsap.utils.toArray('.feature-grid').forEach(function(grid) {
      const items = grid.querySelectorAll('.feature-item');
      if (items.length) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: grid,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.out'
        });
      }
    });

    // --- Explore cards: staggered reveal ---
    gsap.utils.toArray('.card-grid').forEach(function(grid) {
      const cards = grid.querySelectorAll('.card');
      if (cards.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: grid,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          },
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out'
        });
      }
    });

    // --- Contact section: fade in ---
    const contactSection = document.querySelector('section[style*="linear-gradient"]');
    if (contactSection) {
      gsap.from(contactSection, {
        scrollTrigger: {
          trigger: contactSection,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });
    }

    // --- Footer: fade up ---
    const footer = document.querySelector('footer');
    if (footer) {
      gsap.from(footer, {
        scrollTrigger: {
          trigger: footer,
          start: 'top 95%',
          toggleActions: 'play none none reverse'
        },
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    }

    // --- Product cards: staggered ---
    gsap.utils.toArray('.product-grid').forEach(function(grid) {
      const items = grid.querySelectorAll('.product-card');
      if (items.length) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: grid,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out'
        });
      }
    });

    // --- Contact cards: staggered ---
    gsap.utils.toArray('.contact-grid').forEach(function(grid) {
      const cards = grid.querySelectorAll('.contact-card');
      if (cards.length) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: grid,
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          },
          y: 30,
          opacity: 0,
          duration: 0.4,
          stagger: 0.12,
          ease: 'power2.out'
        });
      }
    });

    // --- Rental table: fade in ---
    const rentalTable = document.querySelector('.rental-table');
    if (rentalTable) {
      gsap.from(rentalTable, {
        scrollTrigger: {
          trigger: rentalTable,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      });
    }

    // --- Page banners: fade in ---
    const banners = document.querySelectorAll('.page-banner');
    banners.forEach(function(banner) {
      gsap.from(banner, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2
      });
    });

  } // end GSAP

  // ════════════════════════════════════════════
  //  NAVBAR
  // ════════════════════════════════════════════

  const nav = document.querySelector('nav');
  if (nav) {
    let navScrolled = false;
    window.addEventListener('scroll', function() {
      const sy = window.scrollY;
      const shouldBeScrolled = sy > 50;
      if (shouldBeScrolled !== navScrolled) {
        navScrolled = shouldBeScrolled;
        nav.classList.toggle('scrolled', shouldBeScrolled);
      }
    }, { passive: true });
  }

  // ════════════════════════════════════════════
  //  HAMBURGER MENU
  // ════════════════════════════════════════════

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('mobile-open');
      document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a:not(.has-dropdown > a)').forEach(function(link) {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('mobile-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ════════════════════════════════════════════
  //  MOBILE DROPDOWN
  // ════════════════════════════════════════════

  document.querySelectorAll('.has-dropdown > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  // ════════════════════════════════════════════
  //  BACK TO TOP
  // ════════════════════════════════════════════

  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('show', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ════════════════════════════════════════════
  //  SMOOTH SCROLL (anchor links)
  // ════════════════════════════════════════════

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ════════════════════════════════════════════
  //  ACTIVE NAV LINK
  // ════════════════════════════════════════════

  if (navLinks) {
    const currentPath = window.location.pathname;
    navLinks.querySelectorAll('a').forEach(function(link) {
      const href = link.getAttribute('href');
      if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
        link.classList.add('active');
      }
    });
  }

});
