/* ============================================================
   INTERACTIVE LOGIC — Dianissa Salsabila Portfolio
============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Initialize AOS (Animate On Scroll) ----
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }

  // ---- Navigation Scroll Effect ----
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // ---- Mobile Menu Toggle ----
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileToggleIcon = mobileToggle ? mobileToggle.querySelector('i') : null;

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');

      if (mobileToggleIcon) {
        if (isExpanded) {
          mobileToggleIcon.className = 'ri-menu-line';
        } else {
          mobileToggleIcon.className = 'ri-close-line';
        }
      }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('.mobile-link, .mobile-dl');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileToggle.setAttribute('aria-expanded', 'false');
        if (mobileToggleIcon) {
          mobileToggleIcon.className = 'ri-menu-line';
        }
      });
    });
  }

  // ---- Active Link on Scroll (Intersection Observer) ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entries.length === 1 && !entry.isIntersecting) return;
      
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach(section => observer.observe(section));

  // ---- Contact Form Handling ----
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic client-side validation
      const name = document.getElementById('cf-name').value.trim();
      const email = document.getElementById('cf-email').value.trim();
      const message = document.getElementById('cf-message').value.trim();

      if (!name || !email || !message) {
        showStatus('Harap isi semua kolom wajib (Nama, Email, dan Pesan).', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showStatus('Format alamat email tidak valid.', 'error');
        return;
      }

      // Simulate sending
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const submitBtnText = submitBtn.querySelector('span');
      const submitBtnIcon = submitBtn.querySelector('i');
      
      submitBtn.disabled = true;
      const originalText = submitBtnText.textContent;
      submitBtnText.textContent = 'Mengirim...';
      if (submitBtnIcon) submitBtnIcon.className = 'ri-loader-4-line animate-spin';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtnText.textContent = originalText;
        if (submitBtnIcon) submitBtnIcon.className = 'ri-send-plane-line';
        
        showStatus('Pesan Anda berhasil dikirim! Saya akan segera menghubungi Anda.', 'success');
        contactForm.reset();
      }, 1500);
    });
  }

  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const showStatus = (msg, type) => {
    formStatus.textContent = msg;
    formStatus.className = 'form-status';
    if (type === 'success') {
      formStatus.classList.add('success');
    } else {
      formStatus.classList.add('error');
    }
    formStatus.classList.remove('hidden');

    // Auto-scroll to status
    formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Hide status after 8 seconds
    setTimeout(() => {
      formStatus.classList.add('hidden');
    }, 8000);
  };

  // ---- Custom Cursor Glow (follows cursor, brightens on interactive elements) ----
  const cursorGlow = document.getElementById('cursor-glow');
  const cursorDot = document.getElementById('cursor-dot');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse), (hover: none)').matches;

  if (cursorGlow && cursorDot && !prefersReducedMotion && !isCoarsePointer) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let glowX = targetX;
    let glowY = targetY;
    let hasMoved = false;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursorDot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      if (!hasMoved) {
        hasMoved = true;
        cursorGlow.classList.add('is-active');
        cursorDot.classList.add('is-active');
      }
    });

    window.addEventListener('mouseleave', () => {
      cursorGlow.classList.remove('is-active');
      cursorDot.classList.remove('is-active');
    });

    // Smoothly trail the glow toward the cursor position
    const animateGlow = () => {
      glowX += (targetX - glowX) * 0.12;
      glowY += (targetY - glowY) * 0.12;
      cursorGlow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;
      requestAnimationFrame(animateGlow);
    };
    requestAnimationFrame(animateGlow);

    // Brighten/enlarge the glow over interactive elements
    const hoverTargets = document.querySelectorAll(
      'a, button, .btn-primary, .btn-secondary, .skill-cat-card, .port-card, .exp-card, .contact-card, input, textarea'
    );
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorGlow.classList.add('is-hover');
        cursorDot.classList.add('is-hover');
      });
      el.addEventListener('mouseleave', () => {
        cursorGlow.classList.remove('is-hover');
        cursorDot.classList.remove('is-hover');
      });
    });
  } else if (cursorGlow && cursorDot) {
    // Hide entirely when motion is reduced or on touch devices
    cursorGlow.style.display = 'none';
    cursorDot.style.display = 'none';
  }

  // ---- Subtle Magnetic Effect on Primary Buttons ----
  if (!prefersReducedMotion && !isCoarsePointer) {
    const magneticButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-submit');
    magneticButtons.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${relX * 0.15}px, ${relY * 0.3}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ---- Back to Top Button ----
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});