export const profile = {
  name: "Jonah Kwesi Amponsah, PhD",
  shortName: "Jonah Amponsah",
  role: "Statistician · Machine Learning Researcher · Implementation Scientist",
  institution: "University of Wisconsin–Madison",
  location: "United States",
  intro:
    "Developing statistical and machine-learning methods to improve clinical prediction, implementation, and healthcare decision-making.",
  email: "jonahamponsah@gmail.com",
  orcid: "https://orcid.org/0000-0003-4472-779X",
  github: "https://github.com/jkamponsah",
};

export const education = [
  { degree: "PhD in Biostatistics", institution: "University of Kansas Medical Center" },
  { degree: "MS in Data Science", institution: "South Dakota State University" },
  { degree: "MS in Statistics", institution: "South Dakota State University" },
  { degree: "MS in Mathematics", institution: "Youngstown State University" },
  { degree: "BS in Mathematics and Statistics", institution: "University of Cape Coast" },
];

export const implementationManuscript = {
  title: "Choosing experimental designs for implementation strategy trials: A question-driven framework with practical tools and exemplars",
  status: "Under peer review",
};

export const researchAreas = [
  {
    slug: "explainable-ai",
    kicker: "Methods",
    title: "Explainable AI & Predictive Modeling",
    text: "Developing interpretable prediction methods for rare outcomes, with a focus on SHAP-guided augmentation, class imbalance, and rigorous model evaluation.",
    tags: ["SHAP", "rare events", "synthetic data", "evaluation"],
  },
  {
    slug: "implementation-science",
    kicker: "Translation",
    title: "Implementation Science",
    text: "Connecting implementation questions to experimental designs and quantitative evaluation, with applications to testing workflows and evidence-based cancer care.",
    tags: ["cluster trials", "SMART", "MOST", "hybrid designs"],
  },
  {
    slug: "cancer-population-health",
    kicker: "Applications",
    title: "Cancer & Population Health",
    text: "Examining genomic testing, geographic disparities, and population health needs to inform care delivery and the prioritization of intervention resources.",
    tags: ["oncology", "genomics", "health equity", "spatial methods"],
  },
];

export const publications = [
  {
    year: 2025,
    title: "Explainable AI predicting Alzheimer’s disease with latent multimodal deep neural networks",
    venue: "Journal of Biopharmaceutical Statistics",
    type: "Research Article",
    authors: "Chen X, Thompson J, Yao Z, Cappelleri JC, Amponsah J, Mukherjee R, Hu J.",
    doi: "10.1080/10543406.2025.2511194",
    href: "https://doi.org/10.1080/10543406.2025.2511194",
    links: [
      { label: "Publisher / DOI", href: "https://doi.org/10.1080/10543406.2025.2511194" },
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/40528446/" },
    ],
  },
  {
    year: 2025,
    title: "Understanding regional disparities in obesity: a multiscale geographically weighted analysis in the United States",
    venue: "International Journal of Health Geographics",
    type: "Research Article",
    authors: "Amponsah JK, Thompson JA, Ellis SD.",
    doi: "10.1186/s12942-025-00438-2",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12822080/",
    links: [
      { label: "Publisher / DOI", href: "https://doi.org/10.1186/s12942-025-00438-2" },
      { label: "PubMed", href: "https://pubmed.ncbi.nlm.nih.gov/41390713/" },
      { label: "Open-access full text", href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12822080/" },
    ],
  },
];

export const projects = [
  {
    slug: "shgha",
    title: "SHAP-Guided Hotspot Augmentation",
    category: "Explainable AI",
    summary:
      "A targeted augmentation framework for rare-event prediction that uses explainability and local model behavior to focus synthetic data generation where it is most useful.",
    status: "Active research",
    bullets: [
      "Explainability-guided sample selection",
      "Class-imbalance methodology",
      "Nested and repeated evaluation strategies",
    ],
  },
  {
    slug: "genomic-testing",
    title: "Improving Genomic Testing in Cancer Care",
    category: "Implementation Science · Oncology",
    summary:
      "Quantitative evaluation of genomic testing completion, workflow gaps, and implementation strategies across multiple cancer types.",
    status: "Active research",
    bullets: [
      "Testing completion metrics",
      "Workflow and relational coordination",
      "Implementation strategy evaluation",
    ],
  },
  {
    slug: "geographic-prioritization",
    title: "Geographic Prioritization for Depression Intervention",
    category: "Population Health · Spatial Methods",
    summary:
      "A spatial framework for identifying areas where intervention resources may have the greatest reach using demographic, rurality, and symptom-burden estimates.",
    status: "Active research",
    bullets: [
      "County-level eligibility estimation",
      "Rurality classification",
      "Spatial prioritization and mapping",
    ],
  },
];

// Cross-cutting methodological questions, separate from project deliverables.
export const currentWork = [
  {
    title: "Evaluating prediction for rare outcomes",
    theme: "Model evaluation",
    text: "How should repeated and nested evaluation be used to assess explainability-guided augmentation when outcomes are uncommon?",
  },
  {
    title: "Matching trial designs to implementation questions",
    theme: "Study design",
    text: "Which questions call for cluster trials, adaptive designs, or optimization strategies when evaluating implementation approaches?",
  },
  {
    title: "Accounting for place in population health",
    theme: "Spatial methods",
    text: "How can local variation, rurality, and symptom burden inform where intervention resources are prioritized?",
  },
];

export const talks = [
  {
    date: "December 2026",
    title: "Choosing experimental designs for implementation strategy trials: A question-driven framework with practical tools and exemplars",
    event: "19th Annual Conference on the Science of Dissemination and Implementation in Health",
    note: "Accepted presentation",
  },
  {
    date: "2026",
    title: "Explainable AI, predictive modeling, and applied biostatistics",
    event: "Selected invited and scientific presentations",
    note: "Research portfolio",
  },
];


