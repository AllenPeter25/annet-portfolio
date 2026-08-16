const config = window.PORTFOLIO_CONFIG;
const $ = (selector) => document.querySelector(selector);
const setText = (selector, value) => { const node = $(selector); if (node) node.textContent = value; };

function renderCompanyLogo(job) {
  if (job.logo?.src) {
    return `<span class="company-logo"><img src="${job.logo.src}" alt="${job.logo.alt || `${job.company} logo`}" loading="lazy"></span>`;
  }
  return `<span class="company-logo company-monogram" aria-label="${job.logo?.alt || job.company}">${job.logo?.text || job.company.slice(0, 2)}</span>`;
}

function renderCredential(item) {
  if (item.type === "languages") {
    return `<article class="education-card credential-card language-card reveal">
      <span class="edu-mark">${item.mark}</span><p>${item.label}</p>
      <div class="language-list">${item.languages.map(language => `
        <div class="language-item">
          <div class="language-label"><strong>${language.name}</strong><span>${language.level}</span></div>
          <div class="language-track" aria-label="${language.name}: ${language.level}"><i style="width:${language.proficiency}%"></i></div>
        </div>`).join("")}</div>
    </article>`;
  }
  return `<article class="education-card credential-card reveal"><span class="edu-mark">${item.mark}</span><p>${item.label}</p><h3>${item.title}</h3><div><small>${item.detail}</small></div></article>`;
}

function renderPortfolio() {
  const { site, personal, metrics, experience, skillGroups, education, credentials } = config;
  document.title = `${personal.name} ${site.titleSeparator} ${personal.role}`;
  document.querySelector('meta[name="description"]').content = site.description;
  setText("#brand-name", personal.initials);
  setText("#footer-initials", personal.initials);
  setText("#availability", personal.availability);
  setText("#hero-intro", personal.intro);
  setText("#location", personal.location.toUpperCase());
  setText("#about-copy", personal.about);
  setText("#email-text", personal.email);
  setText("#contact-location", personal.location);
  setText("#phone-link", personal.phone);
  setText("#copyright", `© ${new Date().getFullYear()} ${personal.name}`);
  setText("#experience-intro", site.experienceIntro);
  setText("#skills-intro", site.skillsIntro);
  setText("#contact-eyebrow", site.contactEyebrow);
  setText("#footer-note", site.footerNote);
  setText("#system-label", site.systemVisual.label);
  setText("#system-value", site.systemVisual.value);
  setText("#system-description", site.systemVisual.description);
  setText("#system-status", site.systemVisual.status);
  setText("#primary-chip", site.systemVisual.primaryChip);
  setText("#secondary-chip", site.systemVisual.secondaryChip);
  $("#email-link").href = `mailto:${personal.email}`;
  $("#phone-link").href = `tel:${personal.phone.replace(/\s/g, "")}`;
  $("#linkedin-link").href = personal.linkedin;
  const resumeLink = $("#resume-link");
  resumeLink.hidden = !site.showResume;
  if (site.showResume) resumeLink.href = site.resumeUrl;

  $("#hero-heading").innerHTML = `${site.heroLines[0]}<br><em>${site.heroLines[1]}</em><br>${site.heroLines[2]}`;
  $("#experience-heading").innerHTML = `${site.experienceHeading[0]}<br>${site.experienceHeading[1]}`;
  $("#skills-heading").innerHTML = `${site.skillsHeading[0]}<br>${site.skillsHeading[1]}`;
  $("#contact-heading").innerHTML = `${site.contactHeading[0]}<br><em>${site.contactHeading[1]}</em>`;

  const specialties = site.specialties;
  $("#marquee-content").innerHTML = [...specialties, ...specialties].map(item => `<span>${item}<i>✦</i></span>`).join("");
  $("#metrics").innerHTML = metrics.map(item => `<div class="metric"><strong>${item.value}</strong><span>${item.label}</span></div>`).join("");

  $("#experience-list").innerHTML = experience.map((job, index) => `
    <article class="timeline-item reveal ${job.featured ? "featured" : ""}">
      <div class="timeline-marker"><span>${String(index + 1).padStart(2, "0")}</span></div>
      <div class="job-meta"><span>${job.period}</span><span>${job.location}</span></div>
      <div class="job-body">
        <div class="job-heading">${renderCompanyLogo(job)}<div><h3>${job.role}</h3><p>@ ${job.company}</p></div></div>
        <p class="job-summary">${job.summary}</p>
        <ul>${job.highlights.map(item => `<li>${item}</li>`).join("")}</ul>
        <div class="tags">${job.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      </div>
    </article>`).join("");

  $("#skill-groups").innerHTML = skillGroups.map(group => `
    <article class="skill-group reveal"><div class="skill-group-title"><span>${group.number}</span><h3>${group.title}</h3><i>↗</i></div>
    <div class="skill-pills">${group.skills.map(skill => `<span>${skill}</span>`).join("")}</div></article>`).join("");

  $("#education-list").innerHTML = education.map(item => `
    <article class="education-card reveal"><span class="edu-mark">${item.mark}</span><p>${item.years}</p><h3>${item.degree}</h3><div><span>${item.school}</span><small>${item.location}</small></div></article>`).join("");

  $("#credentials-list").innerHTML = credentials.map(renderCredential).join("");
}

function useCleanUrl() {
  if (window.location.protocol !== "file:" && /\/index\.html$/i.test(window.location.pathname)) {
    const cleanPath = window.location.pathname.replace(/index\.html$/i, "");
    window.history.replaceState({}, "", `${cleanPath}${window.location.search}${window.location.hash}`);
  }
}

function setupInteractions() {
  const menuButton = $(".menu-button");
  const nav = $("#site-nav");
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
    document.body.classList.toggle("menu-open", !open);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); document.body.classList.remove("menu-open");
  }));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(node => observer.observe(node));
}

useCleanUrl();
renderPortfolio();
setupInteractions();
