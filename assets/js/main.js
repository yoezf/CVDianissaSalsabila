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
