// ==========================================================================
// Contact Hero Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined") {
  const isContactHero = document.querySelector(".contact-hero-section");

  if (isContactHero) {
    const contactTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    contactTl
      .fromTo(
        ".contact-hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
      .fromTo(
        ".contact-hero-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.5"
      )
      .fromTo(
        ".contact-hero-description",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.6"
      )
      .fromTo(
        ".contact-hero-actions a",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        "-=0.5"
      )
      .fromTo(
        ".contact-hero-metrics",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ".contact-direct-card",
        { opacity: 0, y: 35, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "back.out(1.3)" },
        "-=0.7"
      );
  }
}








// ==========================================================================
// Custom Form Validation: Auto-Clear Inputs & Redirect to error.html
// ==========================================================================
(() => {
  const form = document.getElementById("fieldContactForm");
  if (!form) return;

  // 1. Custom Chip Selector Binding
  const chips = document.querySelectorAll(".form-chip");
  const classificationInput = document.getElementById("classificationInput");

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      if (classificationInput) {
        classificationInput.value = chip.getAttribute("data-value");
      }
    });
  });

  // 2. Strict Input Formatting Handlers
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const phoneInput = document.getElementById("contactPhone");
  const messageInput = document.getElementById("contactMessage");

  // Restrict phone input to numeric values only
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    });
  }

  // 3. Validation Logic
  function validateField(inputEl, groupId, errorId, testFn) {
    const group = document.getElementById(groupId);
    const isValid = testFn(inputEl.value.trim());

    if (!isValid) {
      group.classList.add("has-error");
      return false;
    } else {
      group.classList.remove("has-error");
      return true;
    }
  }

  // Real-time error removal when typing
  [nameInput, emailInput, phoneInput, messageInput].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", () => {
      const parentGroup = input.closest(".form-group");
      if (parentGroup && parentGroup.classList.contains("has-error")) {
        parentGroup.classList.remove("has-error");
      }
    });
  });

  // 4. Form Submission Engine
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Strict Regex Rules
    const nameRegex = /^[A-Za-z\s]{2,50}$/; // Alphabets and spaces only
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Standard email
    const phoneRegex = /^[0-9]{10}$/; // Exactly 10 digits

    const isNameValid = validateField(
      nameInput,
      "group-name",
      "error-name",
      (val) => nameRegex.test(val)
    );

    const isEmailValid = validateField(
      emailInput,
      "group-email",
      "error-email",
      (val) => emailRegex.test(val)
    );

    const isPhoneValid = validateField(
      phoneInput,
      "group-phone",
      "error-phone",
      (val) => phoneRegex.test(val)
    );

    const isMessageValid = validateField(
      messageInput,
      "group-message",
      "error-message",
      (val) => val.length >= 10
    );

    // If ALL validations pass:
    if (isNameValid && isEmailValid && isPhoneValid && isMessageValid) {
      
      // AUTO-DELETE / CLEAR ALL INPUT FIELDS
      form.reset();

      // Reset Custom Chip Selector back to initial default
      chips.forEach((c, idx) => {
        c.classList.toggle("is-active", idx === 0);
      });
      if (classificationInput) {
        classificationInput.value = "Aquifer Initiative";
      }

      // Remove any lingering error styles
      document.querySelectorAll(".form-group").forEach((group) => {
        group.classList.remove("has-error");
      });

      // Update button state and redirect
      const submitBtn = document.getElementById("submitFormBtn");
      if (submitBtn) {
        submitBtn.innerHTML = `
          <i class="fa-solid fa-circle-notch fa-spin"></i>
          <span>Clearing & Redirecting...</span>
        `;
        submitBtn.disabled = true;
      }

      setTimeout(() => {
        window.location.href = "error.html";
      }, 600);
    }
  });
})();








// ==========================================================================
// Micro-Interaction Morphing Switchboard Engine
// ==========================================================================
(() => {
  const switchDeck = document.querySelector(".morph-switch-deck");
  const navButtons = document.querySelectorAll(".morph-nav-btn");
  const pillSlider = document.getElementById("morphPillSlider");
  if (!switchDeck || !navButtons.length || !pillSlider) return;

  // 1. Data Store for Morph States
  const morphDataset = {
    aquifer: {
      protocol: "Protocol: ISO-14064-HYD",
      status: "Direct Uplink Active",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      role: "Chief Hydrological Architect",
      name: "Tariq Mansoor",
      tenure: "Direct Field Tenure: 5 Years",
      key: "0x7F2B...49A1",
      m1: { lbl: "Real-Time Pumping Rate", val: "42,000 L/h", sub: "18 Submersible Units Online" },
      m2: { lbl: "Groundwater Level", val: "-142.4 m", sub: "Telemetry Tele-Monitored" },
      m3: { lbl: "Average Response Latency", val: "< 4 Hours", sub: "Direct Radio Link" },
      m4: { lbl: "Local Council Ratification", val: "100%", sub: "No Private Concessions" },
      copy: "Connect immediately with hydrology officers deploying decentralized solar aquifers across inland sub-basins.",
      email: "aquifer@earthtrust.org",
      phone: "+1 (800) 555-0199"
    },
    biovault: {
      protocol: "Protocol: UNCBD-BIO-2026",
      status: "Vault Chamber Calibrated",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      role: "Chief Ecology Scientist",
      name: "Dr. Aris Thorne",
      tenure: "Direct Field Tenure: 8 Years",
      key: "0x9C4E...31F8",
      m1: { lbl: "Endemic Strains Preserved", val: "40+ Species", sub: "Mycorrhizal Inoculated" },
      m2: { lbl: "5-Year Seedling Survival", val: "94.2%", sub: "Monitored Across 64 Plots" },
      m3: { lbl: "Regional Seed Vaults", val: "12 Vaults", sub: "Climate Temperature-Locked" },
      m4: { lbl: "Youth Cadres Trained", val: "320 Rangers", sub: "Endemic Botany Certified" },
      copy: "Coordinate wild germplasm deposits, endemic nursery trials, and community canopy restoration compacts.",
      email: "biovault@earthtrust.org",
      phone: "+1 (800) 555-0244"
    },
    landtrust: {
      protocol: "Protocol: FAO-CIVIC-TITLING",
      status: "Audited Ledger Synced",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      role: "Director of Community Land Trusts",
      name: "Elena Vance",
      tenure: "Direct Field Tenure: 6 Years",
      key: "0x3A18...92D4",
      m1: { lbl: "Protected Acreage", val: "84,000 Ha", sub: "Perpetual Trust Registered" },
      m2: { lbl: "Civic Titling Index", val: "100%", sub: "Irrevocable Local Ownership" },
      m3: { lbl: "Direct Field Ratio", val: "86.4%", sub: "Zero Corporate Extraction" },
      m4: { lbl: "Public Ledger Proofs", val: "Quarterly", sub: "Cryptographic Multi-Sig" },
      copy: "Structure permanent legal titles and ancestral land charters without intermediary encumbrance.",
      email: "landtrust@earthtrust.org",
      phone: "+1 (800) 555-0311"
    },
    emergency: {
      protocol: "Protocol: UN-OCHA-48H",
      status: "Rapid Contingency Primed",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      role: "Rapid Logistics Commander",
      name: "Marcus Sterling",
      tenure: "Direct Field Tenure: 7 Years",
      key: "0xEE41...08C3",
      m1: { lbl: "Pre-Positioned Caches", val: "14 Pods", sub: "Desalinators & Satellite Ready" },
      m2: { lbl: "Target Response Velocity", val: "< 48 Hours", sub: "Air-to-Field Mobilization" },
      m3: { lbl: "Pediatric Kits Stocked", val: "8,500 Sets", sub: "Vaccines & Cold-Chain Safe" },
      m4: { lbl: "Direct Response Reserve", val: "100%", sub: "Pre-Funded Fluid Capital" },
      copy: "Activate emergency disaster supply routing, portable water filter drops, and telemetry connectivity hubs.",
      email: "relief@earthtrust.org",
      phone: "+1 (800) 555-0911"
    }
  };

  // 2. Micro-Interaction Morph Pill Positioning
  function updatePillPosition(activeBtn) {
    if (window.innerWidth <= 768) return;
    const btnRect = activeBtn.getBoundingClientRect();
    const deckRect = switchDeck.getBoundingClientRect();
    const leftOffset = btnRect.left - deckRect.left;
    const btnWidth = btnRect.width;

    pillSlider.style.transform = `translateX(${leftOffset - 8}px)`;
    pillSlider.style.width = `${btnWidth}px`;
  }

  // 3. Smooth Content Morph Transitions
  function morphConsole(channelKey) {
    const data = morphDataset[channelKey];
    if (!data) return;

    const targets = [
      document.getElementById("officerPhoto"),
      document.getElementById("officerRole"),
      document.getElementById("officerName"),
      document.getElementById("officerTenure"),
      document.getElementById("officerKey"),
      document.getElementById("consoleStatusText"),
      document.getElementById("consoleProtocol"),
      document.getElementById("metricLabel1"),
      document.getElementById("metricVal1"),
      document.getElementById("metricSub1"),
      document.getElementById("metricLabel2"),
      document.getElementById("metricVal2"),
      document.getElementById("metricSub2"),
      document.getElementById("metricLabel3"),
      document.getElementById("metricVal3"),
      document.getElementById("metricSub3"),
      document.getElementById("metricLabel4"),
      document.getElementById("metricVal4"),
      document.getElementById("metricSub4"),
      document.getElementById("actionCopy")
    ];

    // Micro fade-out
    targets.forEach((el) => {
      if (el) el.style.opacity = "0.2";
    });

    setTimeout(() => {
      // Update DOM values
      document.getElementById("consoleStatusText").textContent = data.status;
      document.getElementById("consoleProtocol").textContent = data.protocol;
      document.getElementById("officerPhoto").src = data.photo;
      document.getElementById("officerRole").textContent = data.role;
      document.getElementById("officerName").textContent = data.name;
      document.getElementById("officerTenure").textContent = data.tenure;
      document.getElementById("officerKey").textContent = data.key;

      document.getElementById("metricLabel1").textContent = data.m1.lbl;
      document.getElementById("metricVal1").textContent = data.m1.val;
      document.getElementById("metricSub1").textContent = data.m1.sub;

      document.getElementById("metricLabel2").textContent = data.m2.lbl;
      document.getElementById("metricVal2").textContent = data.m2.val;
      document.getElementById("metricSub2").textContent = data.m2.sub;

      document.getElementById("metricLabel3").textContent = data.m3.lbl;
      document.getElementById("metricVal3").textContent = data.m3.val;
      document.getElementById("metricSub3").textContent = data.m3.sub;

      document.getElementById("metricLabel4").textContent = data.m4.lbl;
      document.getElementById("metricVal4").textContent = data.m4.val;
      document.getElementById("metricSub4").textContent = data.m4.sub;

      document.getElementById("actionCopy").textContent = data.copy;
      document.getElementById("actionPrimaryBtn").href = `mailto:${data.email}`;
      document.getElementById("actionSecondaryBtn").href = `tel:${data.phone.replace(/[^0-9+]/g, "")}`;

      // Micro fade-in
      targets.forEach((el) => {
        if (el) el.style.opacity = "1";
      });
    }, 180);
  }

  // 4. Click & Key Listeners
  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      navButtons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      updatePillPosition(btn);
      morphConsole(btn.getAttribute("data-channel"));
    });
  });

  // Window resize re-align
  window.addEventListener("resize", () => {
    const currentActive = document.querySelector(".morph-nav-btn.is-active");
    if (currentActive) updatePillPosition(currentActive);
  });

  // Initialize first position
  const firstActive = document.querySelector(".morph-nav-btn.is-active");
  if (firstActive) {
    updatePillPosition(firstActive);
  }
})();









// ==========================================================================
// Contact Telemetry Banner Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  if (document.querySelector(".telemetry-content-shell")) {
    gsap.fromTo(
      ".telemetry-content-shell > *",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".telemetry-content-shell",
          start: "top 86%",
          once: true
        }
      }
    );
  }

  ScrollTrigger.refresh();
}








// ==========================================================================
// Expanding Accordion Cards / Hover Accordion Engine
// ==========================================================================
(() => {
  const panels = document.querySelectorAll(".accordion-panel");
  if (!panels.length) return;

  function setActivePanel(targetPanel) {
    panels.forEach((p) => p.classList.remove("is-active"));
    targetPanel.classList.add("is-active");
  }

  panels.forEach((panel) => {
    // Desktop hover expansion
    panel.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        setActivePanel(panel);
      }
    });

    // Mobile click/tap toggle
    panel.addEventListener("click", () => {
      setActivePanel(panel);
    });
  });

  // GSAP ScrollTrigger Entrance Reveal
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    if (document.querySelector(".accordion-header")) {
      gsap.fromTo(
        ".accordion-header > *",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".accordion-header",
            start: "top 88%",
            once: true
          }
        }
      );
    }

    if (document.querySelector(".expanding-deck")) {
      gsap.fromTo(
        ".accordion-panel",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".expanding-deck",
            start: "top 85%",
            once: true
          }
        }
      );
    }

    ScrollTrigger.refresh();
  }
})();








// ==========================================================================
// Contact Final Elevated CTA Section Reveal Sequence
// ==========================================================================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  if (document.querySelector(".elevated-cta-shell")) {
    gsap.fromTo(
      ".elevated-content-wrap > *",
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

  ScrollTrigger.refresh();
}