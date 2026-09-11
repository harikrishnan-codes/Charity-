 const isAboutPage = document.querySelector(".about-hero-section");

if (isAboutPage) {
  gsap.timeline({ defaults: { ease: "power3.out" } })
    .fromTo(".about-hero-badge", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 })
    .fromTo(".about-hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
    .fromTo(".about-hero-description", { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.6")
    .fromTo(".about-hero-actions a", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=0.5")
    .fromTo(".about-hero-metrics", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
    .fromTo(".about-hero-visual", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.6");
}





window.addEventListener("load", () => {
  // GSAP ScrollTrigger sequence with verified fromTo
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector(".flip-header")) {
      gsap.fromTo(
        ".flip-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".flip-header",
            start: "top 85%",
            once: true
          }
        }
      );
    }

    if (document.querySelector(".flip-card-item")) {
      gsap.fromTo(
        ".flip-card-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".flip-grid",
            start: "top 85%",
            once: true
          }
        }
      );
    }

    ScrollTrigger.refresh();
  }

  // Mobile touch tap-to-flip support (ignores button clicks)
  document.querySelectorAll(".flip-card-item").forEach((card) => {
    card.addEventListener("click", (e) => {
      // If the user clicked the button or anchor link, let it navigate normally
      if (e.target.closest("a, button, .btn-card-action")) {
        return;
      }
      card.classList.toggle("is-flipped");
    });
  });
});







// ==========================================================================
// Steward Manifesto Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal left sticky editorial narrative
  if (document.querySelector(".steward-sticky-column")) {
    gsap.fromTo(
      ".steward-sticky-column > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".steward-sticky-column",
          start: "top 85%",
          once: true
        }
      }
    );
  }

  // 2. Cascade right manifesto parchment cards
  if (document.querySelector(".manifesto-card")) {
    gsap.fromTo(
      ".manifesto-card",
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.22,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".steward-cards-column",
          start: "top 82%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}






// ==========================================================================
// Background Video Section Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  if (document.querySelector(".video-manifesto-card")) {
    gsap.fromTo(
      ".video-manifesto-card > *",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".video-manifesto-card",
          start: "top 86%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}







// ==========================================================================
// Leadership Section Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  if (document.querySelector(".leadership-header")) {
    gsap.fromTo(
      ".leadership-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".leadership-header",
          start: "top 88%",
          once: true
        }
      }
    );
  }

  if (document.querySelector(".leader-card")) {
    gsap.fromTo(
      ".leader-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".leadership-grid",
          start: "top 84%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}








// ==========================================================================
// Final About CTA Section Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  if (document.querySelector(".about-cta-card")) {
    gsap.fromTo(
      ".about-cta-card > *",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cta-card",
          start: "top 86%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}