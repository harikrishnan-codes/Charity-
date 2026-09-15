document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const headerNavLinks = document.querySelectorAll(".nav-link");
  const footerNavLinks = document.querySelectorAll(".footer-link");
  const allNavLinks = [...headerNavLinks, ...footerNavLinks];

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const toggleMenu = () => {
    const isOpen = menuToggle.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
  };

  const closeMenu = () => {
    menuToggle.classList.remove("is-active");
    navMenu.classList.remove("is-active");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", toggleMenu);

  headerNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("is-active") &&
      !navMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      closeMenu();
    }
  });

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  allNavLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const linkPath = href.split("#")[0];

    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});








document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const errorMsg = document.getElementById("newsletterError");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const showError = (message) => {
    emailInput.classList.add("input-error");
    errorMsg.textContent = message;
    errorMsg.classList.add("visible");
  };

  const clearError = () => {
    emailInput.classList.remove("input-error");
    errorMsg.textContent = "";
    errorMsg.classList.remove("visible");
  };

  emailInput.addEventListener("input", () => {
    if (emailInput.classList.contains("input-error")) {
      clearError();
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
      showError("Please enter your email address.");
      emailInput.focus();
      return;
    }

    if (!emailPattern.test(emailValue)) {
      showError("Please enter a valid email format (e.g., name@example.com).");
      emailInput.focus();
      return;
    }

    clearError();

     form.reset();

     setTimeout(() => {
      window.location.href = "error.html";
    }, 200);
  });
});

 window.addEventListener("pageshow", () => {
  const form = document.getElementById("newsletterForm");
  if (form) {
    form.reset();
  }
});







document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== "undefined") {
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    heroTl
      .fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".hero-description",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.6"
      )
      .fromTo(
        ".hero-cta-group .btn",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        "-=0.5"
      )
      .fromTo(
        ".hero-metrics-bar",
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9 },
        "-=0.4"
      )
      .fromTo(
        ".hero-scroll-indicator",
        { opacity: 0 },
        { opacity: 0.75, duration: 1 },
        "-=0.3"
      );
  }
});








const initGlobalCounters = () => {
  const counterElements = document.querySelectorAll("[data-counter]");

  counterElements.forEach((el) => {
    const targetValue = parseFloat(el.getAttribute("data-counter")) || 0;
    const decimals = parseInt(el.getAttribute("data-decimals"), 10) || 0;
    const prefix = el.getAttribute("data-prefix") || "";
    const suffix = el.getAttribute("data-suffix") || "";

    const counterObj = { val: 0 };

    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.to(counterObj, {
        val: targetValue,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true
        },
        onUpdate: () => {
          let formattedNumber;
          if (decimals > 0) {
            formattedNumber = counterObj.val.toFixed(decimals);
          } else {
            formattedNumber = Math.floor(counterObj.val).toLocaleString();
          }
          el.textContent = `${prefix}${formattedNumber}${suffix}`;
        }
      });
    } else {
      el.textContent = `${prefix}${targetValue.toLocaleString()}${suffix}`;
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  initGlobalCounters();
});








document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".narrative-card");
  const images = document.querySelectorAll(".stage-image");
  const trackIndex = document.getElementById("activeTrackIndex");
  const trackLabel = document.getElementById("activeTrackLabel");

  const activatePillar = (cardId) => {
    const targetCard = document.getElementById(cardId);
    if (!targetCard) return;

    cards.forEach((card) => {
      if (card.id === cardId) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });

    images.forEach((img) => {
      if (img.getAttribute("data-target") === cardId) {
        img.classList.add("active");
      } else {
        img.classList.remove("active");
      }
    });

    const index = targetCard.getAttribute("data-index");
    const label = targetCard.getAttribute("data-label");

    if (trackIndex) trackIndex.textContent = `${index} / 04`;
    if (trackLabel) trackLabel.textContent = label;
  };

  const observerOptions = {
    root: null,
    rootMargin: "-25% 0px -45% 0px",
    threshold: 0.2
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activatePillar(entry.target.id);
      }
    });
  }, observerOptions);

  cards.forEach((card) => cardObserver.observe(card));
});







document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.testimonial-slide');
  const bgImages = document.querySelectorAll('.visual-bg');
  const engineers = document.querySelectorAll('.visual-engineer');
  const dots = document.querySelectorAll('.dot');
  
  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 5000;
  let autoplayTimer;

  function switchSlide(nextIndex) {
    slides[currentIndex].classList.remove('is-active');
    bgImages[currentIndex].classList.remove('is-active');
    engineers[currentIndex].classList.remove('is-active');
    dots[currentIndex].classList.remove('is-active');

    currentIndex = nextIndex;

    slides[currentIndex].classList.add('is-active');
    bgImages[currentIndex].classList.add('is-active');
    engineers[currentIndex].classList.add('is-active');
    dots[currentIndex].classList.add('is-active');
  }

  function nextSlide() {
    const next = (currentIndex + 1) % totalSlides;
    switchSlide(next);
  }

  function startAutoplay() {
    autoplayTimer = setInterval(nextSlide, intervalTime);
  }

  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.getAttribute('data-slide'), 10);
      if (targetIndex !== currentIndex) {
        switchSlide(targetIndex);
        resetAutoplay();
      }
    });
  });

  startAutoplay();
});