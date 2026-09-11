// ==========================================================================
// Service Hero Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined") {
  const isServiceHero = document.querySelector(".service-hero-section");

  if (isServiceHero) {
    const serviceTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    serviceTl
      .fromTo(
        ".service-hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
      .fromTo(
        ".service-hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".service-hero-description",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.6"
      )
      .fromTo(
        ".service-hero-actions a",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        "-=0.5"
      )
      .fromTo(
        ".service-hero-metrics",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ".frame-primary",
        { opacity: 0, scale: 0.92 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        ".frame-secondary",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.4)" },
        "-=0.6"
      )
      .fromTo(
        ".service-floating-pill",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.55, ease: "back.out(1.7)" },
        "-=0.3"
      );

    // Continuous subtle floating loop for overlapping photo
    gsap.to(".frame-secondary", {
      y: -10,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
}







// ==========================================================================
// Bento Grid Section Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal Section Header
  if (document.querySelector(".bento-header")) {
    gsap.fromTo(
      ".bento-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bento-header",
          start: "top 88%",
          once: true
        }
      }
    );
  }

  // 2. Asymmetric Bento Tiles Stagger Reveal
  if (document.querySelector(".bento-tile")) {
    gsap.fromTo(
      ".bento-tile",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 84%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}







// ==========================================================================
// Chroma SVG Matrix Section Reveal Sequence & Mobile Toggle
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal Section Header
  if (document.querySelector(".chroma-header")) {
    gsap.fromTo(
      ".chroma-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".chroma-header",
          start: "top 88%",
          once: true
        }
      }
    );
  }

  // 2. Cascade Chroma Cards
  if (document.querySelector(".chroma-card")) {
    gsap.fromTo(
      ".chroma-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.16,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".chroma-grid",
          start: "top 84%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}

// 3. Touch toggle support for touchscreens
document.querySelectorAll(".chroma-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-active");
  });
});








// ==========================================================================
// Service Flow Carousel (Auto-Rotating, Hover-Pause, ScrollTrigger Reveal)
// ==========================================================================
(() => {
  // 1. GSAP ScrollTrigger Entrance
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector(".service-flow-header")) {
      gsap.fromTo(
        ".service-flow-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-flow-header",
            start: "top 88%",
            once: true
          }
        }
      );
    }

    if (document.querySelector(".service-flow-stage")) {
      gsap.fromTo(
        ".service-flow-stage",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".service-flow-stage",
            start: "top 86%",
            once: true
          }
        }
      );
    }

    ScrollTrigger.refresh();
  }

  // 2. Continuous Auto-Rotation Loop
  const cards = Array.from(document.querySelectorAll(".service-flow-card"));
  const indicatorsContainer = document.getElementById("serviceFlowIndicators");
  const stage = document.getElementById("serviceFlowStage");

  if (!cards.length || !stage) return;

  let currentIndex = 0;
  const total = cards.length;
  const slideInterval = 3800; // ms per card cycle
  let autoTimer = null;

  // Build Dots
  if (indicatorsContainer && indicatorsContainer.children.length === 0) {
    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.classList.add("service-flow-dot");
      if (i === 0) dot.classList.add("is-active");
      dot.setAttribute("aria-label", `Program Vector ${i + 1}`);
      dot.addEventListener("click", () => {
        updateFlow(i);
        restartAuto();
      });
      indicatorsContainer.appendChild(dot);
    });
  }

  function updateFlow(newIndex) {
    currentIndex = newIndex;

    cards.forEach((card, index) => {
      card.className = "service-flow-card"; // Reset matrices

      if (index === currentIndex) {
        card.classList.add("is-active");
      } else if (index === (currentIndex - 1 + total) % total) {
        card.classList.add("is-prev");
      } else if (index === (currentIndex + 1) % total) {
        card.classList.add("is-next");
      } else if (index < currentIndex) {
        card.classList.add("is-hidden-left");
      } else {
        card.classList.add("is-hidden-right");
      }
    });

    const dots = document.querySelectorAll(".service-flow-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("is-active", idx === currentIndex);
    });
  }

  function advanceNext() {
    updateFlow((currentIndex + 1) % total);
  }

  function startAuto() {
    if (!autoTimer) {
      autoTimer = setInterval(advanceNext, slideInterval);
    }
  }

  function pauseAuto() {
    clearInterval(autoTimer);
    autoTimer = null;
  }

  function restartAuto() {
    pauseAuto();
    startAuto();
  }

  // Hover Pause
  stage.addEventListener("mouseenter", pauseAuto);
  stage.addEventListener("mouseleave", startAuto);

  // Jump to neighbor on click
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (index !== currentIndex) {
        updateFlow(index);
        restartAuto();
      }
    });
  });

  // Touch Swipe Integration
  let startX = 0;
  let endX = 0;

  stage.addEventListener("touchstart", (e) => {
    pauseAuto();
    startX = e.touches[0].clientX;
  }, { passive: true });

  stage.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    const threshold = 40;
    if (startX - endX > threshold) {
      updateFlow((currentIndex + 1) % total);
    } else if (endX - startX > threshold) {
      updateFlow((currentIndex - 1 + total) % total);
    }
    startAuto();
  }, { passive: true });

  // Initialize
  updateFlow(0);
  startAuto();
})();








// ==========================================================================
// Delivery Pipeline Architecture Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal Section Header
  if (document.querySelector(".pipeline-header")) {
    gsap.fromTo(
      ".pipeline-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".pipeline-header",
          start: "top 88%",
          once: true
        }
      }
    );
  }

  // 2. Cascade 4 Pipeline Phase Cards
  if (document.querySelector(".pipeline-card")) {
    gsap.fromTo(
      ".pipeline-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.16,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pipeline-track",
          start: "top 84%",
          once: true
        }
      }
    );
  }

  // 3. Reveal Lower Guarantee Banner
  if (document.querySelector(".pipeline-banner")) {
    gsap.fromTo(
      ".pipeline-banner",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".pipeline-banner",
          start: "top 90%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}







// ==========================================================================
// Modern Final CTA Section Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal Left Column Stack
  if (document.querySelector(".modern-cta-main")) {
    gsap.fromTo(
      ".modern-cta-main > *",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".modern-cta-shell",
          start: "top 86%",
          once: true
        }
      }
    );
  }

  // 2. Cascade Right Aside Metric Card
  if (document.querySelector(".modern-stat-card")) {
    gsap.fromTo(
      ".modern-stat-card",
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".modern-cta-shell",
          start: "top 84%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}