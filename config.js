// Portfolio content lives here. Edit this file to update the site; no HTML changes are required.
window.PORTFOLIO_CONFIG = {
  site: {
    titleSeparator: "—",
    description: "Portfolio of Annet Jacklin Peter, Junior SAP Manager and SAP Basis and HANA professional.",
    showResume: false,
    resumeUrl: "resume/Annet_CV.pdf",
    specialties: ["SAP BASIS", "SAP HANA", "S/4HANA", "CLOUD OPERATIONS", "SYSTEM RELIABILITY"],
    systemVisual: {
      label: "SAP SYSTEM LANDSCAPE",
      value: "HANA",
      description: "Basis · Cloud · Reliability",
      status: "All systems operational",
      primaryChip: "Basis",
      secondaryChip: "Cloud"
    },
    heroLines: ["I keep complex", "SAP landscapes", "running smoothly."],
    experienceHeading: ["Where expertise", "met impact."],
    experienceIntro: "A track record of keeping mission-critical SAP systems resilient, current, and ready for what’s next.",
    skillsHeading: ["Built for complex", "environments."],
    skillsIntro: "Technical depth paired with calm, clear collaboration.",
    contactEyebrow: "OPEN TO THE NEXT CHALLENGE",
    contactHeading: ["Let’s make systems", "work beautifully."],
    footerNote: "Designed for clarity. Engineered for reliability."
  },
  personal: {
    name: "Annet Jacklin Peter",
    initials: "AJ.",
    role: "Junior SAP Manager",
    location: "Brandenburg, Germany",
    email: "annetjacklin07@gmail.com",
    phone: "+49 17624794139",
    linkedin: "https://www.linkedin.com/in/annetjacklinpeter/",
    availability: "Based in Germany",
    intro: "Junior SAP Manager with 6+ years of SAP experience across Basis and HANA administration, cloud operations, migrations, upgrades, monitoring, incident management, and high-availability environments.",
    about: "I’m Annet—a systems-minded SAP manager who combines deep Basis and HANA experience with business and operations leadership. I help teams keep enterprise landscapes secure, stable, and ready to evolve through clear coordination, careful troubleshooting, and continuous improvement."
  },
  metrics: [
    { value: "6+", label: "Years in SAP operations" },
    { value: "99.9%", label: "Production availability" },
    { value: "3", label: "Professional roles" }
  ],
  experience: [
    {
      period: "04/2026 — Present", role: "Junior SAP Manager", company: "IONITY", location: "Germany", featured: true,
      logo: { src: "assets/logos/ionity.svg", alt: "IONITY logo" },
      summary: "Support SAP management and enterprise operations within IONITY’s international electric-mobility business.",
      highlights: [
        "Apply hands-on SAP Basis, HANA, cloud-operations, and service-management experience in a management role.",
        "Coordinate clearly across technical, operational, and business stakeholders.",
        "Contribute a reliability-focused approach to SAP systems and supporting processes."
      ],
      tags: ["SAP Management", "SAP Operations", "Stakeholder Coordination", "Process Reliability"]
    },
    {
      period: "04/2025 — 02/2026", role: "Technical Operations Manager", company: "Lumesstech", location: "Germany",
      logo: { text: "LT", alt: "Lumesstech" },
      summary: "Manage technical operations, service delivery, quality, and client coordination for installation and maintenance projects.",
      highlights: [
        "Coordinate installation and maintenance projects while maintaining quality assurance across service operations.",
        "Maintain and grow client relationships and support the acquisition of new business partners.",
        "Drive process improvements and operational-efficiency initiatives across day-to-day delivery.",
        "Report on KPIs, business performance, and strategic developments."
      ],
      tags: ["Operations Management", "Quality Assurance", "Client Relations", "Process Improvement"]
    },
    {
      period: "02/2021 — 07/2024", role: "DevOps Engineer", company: "SAP Labs", location: "India",
      logo: { src: "assets/logos/sap.svg", alt: "SAP logo" },
      summary: "Managed SAP IBP customer instances across SAP Cloud and HANA Cloud landscapes, supporting their reliability and full lifecycle.",
      highlights: [
        "Performed system monitoring, health checks, performance tuning, incident handling, client copies, system refreshes, PIT restores, upgrades, and kernel updates.",
        "Upgraded AFLs and plugins, managed Web Dispatcher nodes, troubleshot SAP HANA issues, and performed backups.",
        "Supported SAP HA and disaster-recovery setups, HANA System Replication, TMS, dump analysis, and user management.",
        "Maintained 99.9% production availability, contributed to root-cause analysis, collaborated with global support teams, and led the team in the Technical Lead’s absence."
      ],
      tags: ["SAP HANA Cloud", "SAP IBP", "HA / DR / HSR", "Lifecycle Operations"]
    },
    {
      period: "06/2018 — 01/2021", role: "Software Engineer", company: "Mphasis", location: "India",
      logo: { src: "assets/logos/mphasis.png", alt: "Mphasis logo" },
      summary: "Migrated business-critical SAP ECC systems to cloud environments, from technical planning through go-live support.",
      highlights: [
        "Designed technical build documents, prepared environments, and conducted system-readiness checks.",
        "Migrated SAP database and application servers using Rsync and completed pre- and post-migration checks.",
        "Executed PAS and ASCS splits and configured and validated backups in the new data centre.",
        "Supported cutover and go-live operations, resolved defects, and provided post-go-live technical support."
      ],
      tags: ["SAP ECC", "Cloud Migration", "Rsync", "Cutover"]
    }
  ],
  skillGroups: [
    { number: "01", title: "SAP & Database", skills: ["SAP Basis", "SAP HANA", "S/4HANA Administration", "SAP HANA Cloud", "SAP IBP", "System Refresh", "Upgrades", "Oracle"] },
    { number: "02", title: "Platforms & Operations", skills: ["SAP NetWeaver", "SAP BTP", "SAP Fiori", "HANA Studio", "Linux", "HA / DR", "HANA System Replication", "Incident Management"] },
    { number: "03", title: "Business & Collaboration", skills: ["Operations Management", "Process Optimization", "Stakeholder Management", "Quality Assurance", "Root Cause Analysis", "Cross-functional Collaboration"] }
  ],
  education: [
    { years: "2024 — 2025", degree: "Master of Business Administration", school: "University of Europe for Applied Sciences", location: "Germany", mark: "MBA" },
    { years: "2014 — 2018", degree: "Bachelor of Engineering — Information Science and Engineering", school: "Mangalore Institute of Technology and Engineering", location: "India", mark: "BE" },
    { years: "Completed 2014", degree: "Pre-University — PCMB", school: "Vidyodaya Pre-University College", location: "Udupi, India", mark: "PUC" },
    { years: "Completed 2012", degree: "Secondary School Leaving Certificate", school: "St. Cecily’s Girls’ High School", location: "Udupi, India", mark: "SSLC" }
  ],
  credentials: [
    { mark: "CERT", label: "Certification", title: "SAP Certified Associate – Database Administrator – SAP HANA (C_DBADM)", detail: "Obtained 2023 · Credential expired 2025" },
    { mark: "LANG", label: "Languages", type: "languages", languages: [
      { name: "English", level: "Business fluent", proficiency: 92 },
      { name: "German", level: "Intermediate", proficiency: 45 }
    ] },
    { mark: "DE", label: "Work status", title: "Eligible to work in Germany", detail: "Valid German residence registration · Open to relocation within Germany" }
  ]
};
