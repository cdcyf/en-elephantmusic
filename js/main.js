// ============================================
// Elephant Music (English) - Main JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // --- Navbar scroll effect ---
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // --- Hamburger menu ---
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('mobile-open');
      document.body.style.overflow = navLinks.classList.contains('mobile-open') ? 'hidden' : '';
    });
  }

  // --- Mobile dropdown toggle ---
  document.querySelectorAll('.has-dropdown > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  // --- Close menu on link click (mobile) ---
  navLinks.querySelectorAll('a:not(.has-dropdown > a)').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 992) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('mobile-open');
        document.body.style.overflow = '';
      }
    });
  });

  // --- Back to top ---
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      backToTop.classList.toggle('show', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Active nav link highlighting ---
  const currentPath = window.location.pathname;
  navLinks.querySelectorAll('a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });

});

