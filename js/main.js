/* ============================================================
   PROVING GROUND — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ── Navbar scroll effect ────────────────────────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── Mobile hamburger menu ───────────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Parallax hero background ────────────────────────────────
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.3}px)`;
    }, { passive: true });
  }

  // ── Scroll-triggered fade-in animations ────────────────────
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => observer.observe(el));
  }

  // ── Video modal ─────────────────────────────────────────────
  const videoModal     = document.getElementById('videoModal');
  const videoModalIframe = document.getElementById('videoModalIframe');
  const videoModalClose  = document.querySelector('.video-modal-close');

  document.querySelectorAll('[data-video-id]').forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.getAttribute('data-video-id');
      if (videoId && videoModal && videoModalIframe) {
        videoModalIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        videoModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (videoModal) {
      videoModal.classList.remove('open');
      if (videoModalIframe) videoModalIframe.src = '';
      document.body.style.overflow = '';
    }
  }

  if (videoModalClose) videoModalClose.addEventListener('click', closeModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ── FAQ accordion ───────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });

  // ── Contact form ────────────────────────────────────────────
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const formData = new FormData(bookingForm);
      const name    = formData.get('name') || '';
      const email   = formData.get('email') || '';
      const subject = formData.get('subject') || 'Booking Inquiry';
      const message = formData.get('message') || '';

      const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );
      const mailtoLink = `mailto:provingground901@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

      window.location.href = mailtoLink;

      // Show success message
      const successMsg = document.querySelector('.form-success');
      if (successMsg) {
        bookingForm.style.display = 'none';
        successMsg.style.display = 'block';
      }
    });
  }

  // ── Smooth scroll for anchor links ─────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = navbar ? navbar.offsetHeight : 0;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ── Active nav link highlight on scroll ────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) {
        a.classList.add('active');
      }
    });
  }, { passive: true });

});
