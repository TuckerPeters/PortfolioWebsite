export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  index: string;
  org: string;
  title: string;
  role: string;
  built: string;
  stack: string[];
  metrics: Metric[];
  notes: string[];
  items: string[];
}

export interface RoleEntry {
  id: string;
  title: string;
  org: string;
  period: string;
  points: string[];
}

export interface EducationEntry {
  school: string;
  credential: string;
  period: string;
  details: string;
}

export const hero = {
  name: "Tucker Peters",
  title: "Co-Founder of Niska",
  summary:
    "I lead research on a leaderless swarm C2 layer for DIU and architected a multi-tenant AI backbone on AWS. B.A. Finance & Government at William & Mary, expected 2028."
};

export const projects: Project[] = [
  {
    id: "swarm",
    index: "01",
    org: "Niska / DIU",
    title: "Leaderless swarm C2",
    role: "Co-Creator and Research Lead, 2026 to present. Team Niska in William & Mary's Innovating for Defense course, ACC-626 for sponsor HQ ACC.",
    built:
      "Designed a leaderless swarm C2 layer for DIU's Massed Modular Aircraft area. Aircraft confirm a target only when several independently agree, so there is no single point of failure. Across about 54,000 simulated missions, it completed 97% of missions at 32 aircraft versus 35 to 40% for command-based designs, and tracked targets about 4x as often.",
    stack: ["TLA+", "52-byte signed message", "Dragonfly-style perception"],
    metrics: [
      { value: "About 54,000", label: "simulated missions" },
      { value: "97%", label: "completion at 32 aircraft" },
      { value: "35 to 40%", label: "completion for command-based designs" },
      { value: "About 4x", label: "more frequent target tracking" },
      { value: "2.1 to 2.7x", label: "less radio airtime per aircraft" },
      { value: "52-byte", label: "signed message" },
      { value: "305,536", label: "TLA+ states checked, with 0 violations" },
      { value: "6.8 to 24x", label: "faster than CNNs, dragonfly-style perception" }
    ],
    notes: [
      "Drafted 7 white papers for AFRL, SOFWERX, DARPA, Army DevX, and OSD SBIR.",
      "Conducted 100+ interviews with US and Finnish operators, program leaders, and industry.",
      "Traveled to Finland in Oct 2026 with a 5-student Common Mission Project team on a $10,000+ funded trip, meeting EW and NATO Innovation leaders and scouting a BVLOS test range."
    ],
    items: []
  },
  {
    id: "backbone",
    index: "02",
    org: "Niska",
    title: "Multi-tenant AI backbone",
    role: "Co-Founder, Niska LLC, 2025 to present.",
    built:
      "Architected a multi-tenant AI backbone on AWS running Claude on Bedrock for cited RAG. It cut search across 300,000+ page libraries from hours to seconds.",
    stack: [
      "ECS Fargate",
      "Postgres with row-level security",
      "Weaviate",
      "Cognito MFA",
      "Claude on Bedrock"
    ],
    metrics: [
      { value: "Hours to seconds", label: "search across 300,000+ page libraries" },
      { value: "281,857", label: "client documents migrated" },
      { value: "0", label: "documents missing" },
      { value: "15", label: "all staff at the first production tenant, using it weekly" }
    ],
    notes: [],
    items: []
  },
  {
    id: "govcon",
    index: "03",
    org: "Niska at WGS Systems",
    title: "On-prem GovCon BD platform",
    role: "Deployed at WGS Systems under Niska.",
    built:
      "Deployed an on-prem GovCon BD platform that scores SAM.gov opportunities and drafts 10 to 15 page proposals in about 5 minutes.",
    stack: ["On-prem"],
    metrics: [
      { value: "10 to 15 pages", label: "proposal drafts" },
      { value: "About 5 minutes", label: "to draft each proposal" }
    ],
    notes: [],
    items: []
  },
  {
    id: "keystone",
    index: "04",
    org: "Keystone Strategy",
    title: "Image-generation analysis pipeline",
    role: "Summer Associate, K.ATS team, New York, Summer 2026.",
    built:
      "Built an automated image-generation and analysis pipeline that replaced planned manual testing. The run produced about 5,000 unique model outputs and 20,000+ image comparisons, scored with SSIM, LPIPS, and CLIP similarity and analyzed statistically.",
    stack: ["SSIM", "LPIPS", "CLIP similarity"],
    metrics: [
      { value: "About 5,000", label: "unique model outputs" },
      { value: "20,000+", label: "image comparisons" }
    ],
    notes: [
      "Helped develop a novel theory that model outputs generalized rather than memorized copyrighted works. The work contributed to reports used in expert testimony in litigation involving major image-generation companies, and findings were presented to partners.",
      "Analyzed about 144,000 server requests in an AI data scraping dispute. Their 404 and 503 error patterns did not on their own show large-scale scraping.",
      "Built citation-management, staffing, and knowledge management tools that were demoed to Keystone partners."
    ],
    items: []
  },
  {
    id: "campus",
    index: "05",
    org: "AI Club, William & Mary",
    title: "Campus AI tools",
    role: "Founder and President, 2025 to present.",
    built: "Built 5 campus AI tools for William & Mary.",
    stack: [],
    metrics: [],
    notes: [],
    items: [
      "Transfer Credit Evaluator",
      "Pre-Major Advising Platform",
      "W&M Research Database",
      "AI Cost Optimization Dashboard for Athletics",
      "Syllabus analysis tool for the STLI program"
    ]
  },
  {
    id: "genedu",
    index: "06",
    org: "GenEdu LLC",
    title: "Project Clark Kent and client products",
    role: "Founder and CEO, 2024 to Spring 2026.",
    built:
      "Shipped 5+ client products for the Habits of Mind Institute, ThoughtPartnr, and others. Project Clark Kent is an AI reading assistant for students with learning differences, built on OCR and NLP pipelines.",
    stack: ["OCR", "NLP"],
    metrics: [{ value: "5+", label: "client products shipped" }],
    notes: [
      "Delivered white-label mobile integrations and custom AI web platforms across education, professional services, and SMB clients."
    ],
    items: []
  }
];

export const roles: RoleEntry[] = [
  {
    id: "niska",
    title: "Co-Founder",
    org: "Niska LLC",
    period: "2025 to present",
    points: [
      "Co-founded an AI infrastructure company building vertical platforms across defense, financial services, real estate, and politics, including a financial services joint venture valued at $6M.",
      "Closed a development deal with a $20,000 Phase 1 fee plus equity, and led SOC 2 readiness for Capital Command with Vanta and 13 control changes."
    ]
  },
  {
    id: "aiclub",
    title: "Founder and President",
    org: "AI Club, William & Mary",
    period: "2025 to present",
    points: [
      "Founded the university's first AI club and grew it to 150+ members in one semester, recruiting faculty advisors including the Dean of Computer Science, Data Science, and Applied Physics and standing up club governance.",
      "Raised $20,000 in sponsorships to launch the inaugural W&M AI Case Competition, and hosted Robi Rahman (MIRI) and Kent Rollins (CPO, General Intuition), an MBA Vibe Coding workshop, and a weekly newsletter.",
      "Co-authored the club research deck \"How Can AI Assist in Commercial Real Estate?\" with Andrew Yowell, Jack Zamer, and Cate Hatfield."
    ]
  },
  {
    id: "caseathon",
    title: "Organizer",
    org: "2026 AI Case-a-thon, sponsored by Air Combat Command",
    period: "Oct 24 to 25, 2026",
    points: [
      "Organized and ran the event with ACC Chief Scientist Dr. John Matyjas and Maj Gen (Ret.) Mark Matthews, covering applicant selection, the ACC data poisoning challenge, judge recruitment, a 100-point rubric, a SaaS pitch workshop, and a winner read-ahead for ACC leadership.",
      "Drew 64 applicants for a roughly 50% acceptance rate, fielding 30 students in 11 teams before 11 judges competing for $10,000 in prizes, and raised $10,000 from Accenture for the 2026 event."
    ]
  },
  {
    id: "keystone",
    title: "Summer Associate",
    org: "Keystone Strategy, K.ATS team, New York",
    period: "Summer 2026",
    points: [
      "Built the image-generation analysis pipeline, analyzed about 144,000 server requests in an AI data scraping dispute, and built citation-management, staffing, and knowledge management tools demoed to partners."
    ]
  },
  {
    id: "wgs",
    title: "Digital Strategy and AI Infrastructure Intern",
    org: "WGS Systems, Maryland",
    period: "Spring 2026",
    points: [
      "Built a cloud, on-premise, and hybrid RAG deployment analysis for the Chief Growth Officer that shaped AI strategy across the firm's $500M+ federal contract portfolio.",
      "Designed a CMMC and CUI compliant hybrid architecture and authored the deployment strategy report for firm leadership.",
      "Built opportunity tracking across SAM.gov, GovWin, and EBI, redesigned the company website, and turned the relationship into Niska's ongoing defense revenue-share partnership."
    ]
  },
  {
    id: "mason",
    title: "Portfolio Manager",
    org: "Mason Investment Society, William & Mary",
    period: "2024 to Fall 2026",
    points: [
      "Co-led a $60K student fund (50+ members) and its industrials coverage, pitching public equities including Xylem (XYL) with DCF and comps models and weekly sector briefs.",
      "Served earlier as Senior Analyst for Xylem and the industrials sector (2024 to 2025), including calls with Xylem investor relations."
    ]
  }
];

export const education: EducationEntry[] = [
  {
    school: "William & Mary",
    credential: "B.A. Finance & Government",
    period: "Expected 2028",
    details:
      "GPA 3.67. Distinguished AI Student Fellow, Distinguished Financial Management Student, Dean's List, and Sigma Pi Fraternity."
  },
  {
    school: "Staples High School",
    credential: "Diploma, Westport, CT",
    period: "2024",
    details:
      "GPA 3.93. AP Scholar with Distinction, President, Model UN, and Captain, Varsity Sailing."
  }
];

export const skillGroups: { name: string; items: string[] }[] = [
  {
    name: "Technical",
    items: [
      "Python",
      "JavaScript",
      "React",
      "SvelteKit",
      "FastAPI",
      "PostgreSQL (pgvector, RLS)",
      "Weaviate",
      "AWS (ECS Fargate, RDS, S3, Cognito, Bedrock)",
      "Terraform",
      "Docker",
      "RAG",
      "LLM Orchestration",
      "Claude API",
      "TensorFlow",
      "OCR",
      "Unreal Engine",
      "TLA+"
    ]
  },
  {
    name: "Finance",
    items: [
      "Equity and DCF Modeling",
      "Comps",
      "Equity Research",
      "Sector Analysis",
      "Excel and Google Sheets",
      "Public Speaking"
    ]
  },
  {
    name: "Certifications",
    items: [
      "Certified Financial Literacy (WISE, 2024)",
      "Registered Vendor, William & Mary Procurement Office"
    ]
  }
];

export const contact = {
  emails: ["trpeters@wm.edu", "tucker@niska.ai"],
  phone: "203-810-8256",
  location: "Westport, CT",
  linkedin: "https://www.linkedin.com/in/tucker-peters/",
  github: "https://github.com/TuckerPeters"
};
