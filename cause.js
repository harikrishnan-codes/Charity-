// ==========================================================================
// Causes Intro Hero Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined") {
  const isCausesHero = document.querySelector(".causes-intro-section");

  if (isCausesHero) {
    const causesTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    causesTl
      .fromTo(
        ".causes-intro-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
      .fromTo(
        ".causes-intro-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".causes-intro-description",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.6"
      )
      .fromTo(
        ".causes-intro-actions a",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        "-=0.5"
      )
      .fromTo(
        ".causes-intro-metrics",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ".causes-primary-tile",
        { opacity: 0, scale: 0.94 },
        { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(
        ".causes-stat-widget",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.4)" },
        "-=0.6"
      );

    // Subtle continuous floating motion for the stat widget
    gsap.to(".causes-stat-widget", {
      y: -8,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
}








// ==========================================================================
// Causes Kinetic Stacking Section Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal Section Header
  if (document.querySelector(".causes-stack-header")) {
    gsap.fromTo(
      ".causes-stack-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".causes-stack-header",
          start: "top 88%",
          once: true
        }
      }
    );
  }

  // 2. Cascade Stacking Cards on Scroll
  if (document.querySelector(".causes-stack-card")) {
    gsap.fromTo(
      ".causes-stack-card",
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".causes-kinetic-deck",
          start: "top 84%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}









// ==========================================================================
// Causes Masonry Grid Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal Header
  if (document.querySelector(".causes-masonry-header")) {
    gsap.fromTo(
      ".causes-masonry-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".causes-masonry-header",
          start: "top 88%",
          once: true
        }
      }
    );
  }

  // 2. Cascade Masonry Bricks
  if (document.querySelector(".masonry-brick")) {
    gsap.fromTo(
      ".masonry-brick",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".causes-masonry-wall",
          start: "top 85%",
          once: true
        }
      }
    );
  }

  // 3. Reveal Verification Banner
  if (document.querySelector(".masonry-footer-banner")) {
    gsap.fromTo(
      ".masonry-footer-banner",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".masonry-footer-banner",
          start: "top 90%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}








// ==========================================================================
// SVG Stroke Dasharray / Dashoffset Circuit Animation Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal Section Header
  if (document.querySelector(".stroke-circuit-header")) {
    gsap.fromTo(
      ".stroke-circuit-header > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stroke-circuit-header",
          start: "top 88%",
          once: true
        }
      }
    );
  }

  // 2. Animate Main S-Curvature Track (stroke-dashoffset draw)
  const drawPath = document.getElementById("circuitDrawPath");
  if (drawPath) {
    const pathLength = drawPath.getTotalLength() || 1100;
    
    // Set initial dasharray & offset to path length
    gsap.set(drawPath, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });

    gsap.to(drawPath, {
      strokeDashoffset: 0,
      duration: 2.2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".circuit-stage",
        start: "top 80%",
        once: true
      }
    });
  }

  // 3. Animate Radial Dials (stroke-dashoffset) & Nodes
  const nodeCards = document.querySelectorAll(".circuit-node-card");
  if (nodeCards.length) {
    // Reveal Cards
    gsap.fromTo(
      nodeCards,
      { y: 45, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.16,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".circuit-nodes-grid",
          start: "top 82%",
          once: true
        }
      }
    );

    // Circumference for r=34 circle is ~213.6
    const circumference = 214;
    const progressOffsets = [
      circumference * (1 - 1.0),   // Node 1: 100% full
      circumference * (1 - 0.75),  // Node 2: 75%
      circumference * (1 - 0.50),  // Node 3: 50%
      circumference * (1 - 0.864)  // Node 4: 86.4%
    ];

    nodeCards.forEach((card, idx) => {
      const ring = card.querySelector(".ring-progress");
      if (ring) {
        gsap.fromTo(
          ring,
          { strokeDashoffset: circumference },
          {
            strokeDashoffset: progressOffsets[idx],
            duration: 1.4,
            delay: 0.2 + (idx * 0.15),
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".circuit-nodes-grid",
              start: "top 82%",
              once: true
            }
          }
        );
      }
    });
  }

  // 4. Reveal Lower Guarantee Bar
  if (document.querySelector(".circuit-summary-bar")) {
    gsap.fromTo(
      ".circuit-summary-bar",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".circuit-summary-bar",
          start: "top 90%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}








// ==========================================================================
// Elevated Final CTA Section Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // 1. Reveal Left Column Stack
  if (document.querySelector(".elevated-cta-lead")) {
    gsap.fromTo(
      ".elevated-cta-lead > *",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".elevated-cta-shell",
          start: "top 86%",
          once: true
        }
      }
    );
  }

  // 2. Cascade Right Metric Card with Bounce Scale
  if (document.querySelector(".diagnostic-card")) {
    gsap.fromTo(
      ".diagnostic-card",
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".elevated-cta-shell",
          start: "top 84%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}