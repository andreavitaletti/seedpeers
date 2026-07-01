/**
 * ===================================================
 * SITE CONFIGURATION
 * ===================================================
 * Edit this file to customize the entire landing page.
 * No need to touch any component code.
 * ===================================================
 */

import { siteConfigSchema } from "./site.config.schema";
import greenhouseImg from "../images/greenhouse.png";

const siteConfigRaw = {
  /** ---- Brand ---- */
  brand: {
    name: "SeedPeers",
    tagline: "La conservazione dei semi a portata di tutti",
    logo: "/logo.svg",
  },

  /** ---- Navigation ---- */
  nav: {
    links: [] as { label: string; href: string }[],
    cta: { label: "Partecipa", href: "#contact" },
  },

  /** ---- SEO & language (@astrojs/sitemap uses seo.siteUrl) ---- */
  seo: {
    siteUrl: "https://your-domain.com",
    defaultOgImage: "/favicon.svg",
    twitterHandle: undefined as string | undefined,
    lang: "it",
  },

  /**
   * ---- Umami Analytics ----
   * Set PUBLIC_UMAMI_WEBSITE_ID in your .env file to enable analytics.
   * Change src only if you use a self-hosted Umami instance.
   */
  umami: {
    src: "https://cloud.umami.is/script.js" as string,
  },

  /**
   * ---- Forms ----
   * Demo: leave actions empty and Netlify flags false — components show a fake success state.
   * Real POST: set contactAction / newsletterAction to your endpoint.
   * Netlify Forms: set contactNetlify / newsletterNetlify to true and deploy on Netlify.
   * Google Form integration: configure googleForm with your actionUrl and field entry mapping.
   */
  forms: {
    contactAction: "",
    newsletterAction: "",
    contactNetlify: false,
    newsletterNetlify: false,
    googleForm: {
      actionUrl:
        "https://docs.google.com/forms/u/1/d/e/1FAIpQLSevmft4y4e8AU_9PRg09S-1uEIU0c6lXQyX6Kqyh_l-x15z4Q/formResponse",
      fields: {
        firstName: "entry.342363159",
        lastName: "entry.460333090",
        email: "entry.168365386",
        diy: "entry.1208833990",
        pay: "entry.2118968422",
        location: "entry.1622443027",
        message: "entry.446965754",
      },
    },
  },

  /** ---- Greenhouse Section ---- */
  greenhouse: {
    //badge: "Conservation",
    title: "Dove la Funzione Incontra la Forma",
    description:
      "Le micro-serre costituiscono la spina dorsale della rete SeedPeers. Progettate per creare le condizioni ideali per la conservazione e la crescita dei semi, uniscono funzionalità avanzate a un design raffinato e minimalista. Più che semplici dispositivi di coltivazione, sono vetrine viventi di biodiversità, capaci di portare la natura e la bellezza nei nostri spazi quotidiani.",
    image: greenhouseImg,
  },

  /** ---- Hero Section ---- */
  hero: {
    //badge: "Together we cultivate the future.",
    title: "Uno sforzo congiunto\nper preservare i semi",
    description:
      "I semi sono al centro dell'agricoltura e della sicurezza alimentare, ma i cambiamenti climatici, le monocolture e la perdita di habitat ne stanno erodendo rapidamente la diversità. <b>SeedPeers è una rete no-profit peer-to-peer di micro-serre</b> ospitate in ambienti indoor come case, scuole e spazi comuni, per conservare e coltivare una vasta gamma di semi, contribuendo così a proteggere la diversità genetica delle piante edibili, rafforzare la resilienza dei futuri sistemi alimentari e salvaguardare le conoscenze e le tradizioni di coltivazione che hanno sostenuto le comunità per generazioni.\n <b>Insieme coltiviamo il futuro.</b>",
    primaryCta: { label: "La micro-serra", href: "#greenhouse" },
    secondaryCta: { label: "Come funziona", href: "#howitworks" },
    /*
    stats: [
      { value: "10K+", label: "Active users" },
      { value: "99.9%", label: "Uptime" },
      { value: "4.9/5", label: "Rating" },
    ],
    */
  },

  /** ---- Stats Section (optional) ---- */

  stats: {
    items: [
      { value: "10K+", label: "Active Users" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "$50M+", label: "Revenue Processed" },
      { value: "150+", label: "Countries" },
    ],
  },

  /*
  stats: {
    items: [],
  },
  */

  /** ---- LogoCloud Section (optional) ---- */
  logocloud: {
    title: "Trusted by leading companies worldwide",
    logos: [
      { name: "Stripe", id: "stripe" },
      { name: "GitHub", id: "github" },
      { name: "Slack", id: "slack" },
      { name: "Figma", id: "figma" },
      { name: "Vercel", id: "vercel" },
      { name: "Notion", id: "notion" },
      { name: "Linear", id: "linear" },
      { name: "Zapier", id: "zapier" },
    ],
  },

  /** ---- How It Works Section (optional) ---- */
  howItWorks: {
    //badge: "Process",
    title: "Come funziona",
    description:
      "Scopri com'è facile diventare un membro della comunità SeedPeers",
    steps: [
      {
        number: 1,
        title: "Ottieni la tua micro-serra",
        description:
          "Acquista o costruisci la tua micro-serra. È un progetto open source/hardware",
      },
      {
        number: 2,
        title: "Unisciti alla rete",
        description:
          "Registra la tua micro-serra ed entra a far parte di una comunità di coltivatori in continua crescita.",
      },
      {
        number: 3,
        title: "Ricevi i semi",
        description:
          "Ricevi i tuoi semi, piantali nella tua micro-serra e inizia il tuo percorso di coltivazione. I semi sono distribuiti per aumentare la diversità e la resilienza.",
      },
      {
        number: 4,
        title: "Coltiva e Impara",
        description:
          "Coltiva le tue piante, scopri le migliori pratiche e impara dalla comunità.",
      },
      {
        number: 5,
        title: "Condividi la conoscenza",
        description:
          "Beneficia dell'esperienza collettiva della rete e aiuta gli altri a crescere condividendo  le tue conoscenze.",
      },
      {
        number: 6,
        title: "Condividi il raccolto",
        description:
          "Condividi il raccolto con gli altri membri della rete, arricchendo la biodiversità e la resilienza della rete.",
      },
    ],
  },

  /** ---- Features Section ---- */
  features: {
    badge: "Features",
    title: "Everything you need to succeed",
    description:
      "Powerful tools designed to help you build, launch, and scale.",
    items: [
      {
        icon: "rocket",
        title: "Lightning Fast",
        description:
          "Optimized for speed with edge computing and smart caching. Your users will feel the difference.",
      },
      {
        icon: "shield",
        title: "Enterprise Security",
        description:
          "Bank-grade encryption, SOC2 compliance, and advanced threat protection built-in.",
      },
      {
        icon: "chart",
        title: "Advanced Analytics",
        description:
          "Real-time dashboards, custom reports, and AI-powered insights to drive growth.",
      },
      {
        icon: "puzzle",
        title: "Easy Integrations",
        description:
          "Connect with 100+ tools you already use. Zapier, Slack, Stripe, and more.",
      },
      {
        icon: "users",
        title: "Team Collaboration",
        description:
          "Built-in roles, permissions, and real-time collaboration for your entire team.",
      },
      {
        icon: "headset",
        title: "24/7 Support",
        description:
          "Our expert team is always available via chat, email, or phone whenever you need help.",
      },
    ],
  },

  /** ---- Pricing Section ---- */
  pricing: {
    badge: "Pricing",
    title: "Simple, transparent pricing",
    description: "No hidden fees. No surprises. Cancel anytime.",
    plans: [
      {
        name: "Starter",
        description: "Perfect for side projects",
        monthlyPrice: 19,
        yearlyPrice: 190,
        featured: false,
        features: [
          "5 Projects",
          "10GB Storage",
          "Basic Analytics",
          "Email Support",
          "API Access",
        ],
        cta: { label: "Start Free", href: "#" },
      },
      {
        name: "Pro",
        description: "For growing businesses",
        monthlyPrice: 49,
        yearlyPrice: 490,
        featured: true,
        features: [
          "Unlimited Projects",
          "100GB Storage",
          "Advanced Analytics",
          "Priority Support",
          "API Access",
          "Custom Integrations",
          "Team Collaboration",
        ],
        cta: { label: "Start Free Trial", href: "#" },
      },
      {
        name: "Enterprise",
        description: "For large organizations",
        monthlyPrice: 149,
        yearlyPrice: 1490,
        featured: false,
        features: [
          "Everything in Pro",
          "Unlimited Storage",
          "Custom Analytics",
          "Dedicated Support",
          "SLA Agreement",
          "SSO & SAML",
          "On-premise Option",
        ],
        cta: { label: "Contact Sales", href: "#" },
      },
    ],
  },

  /** ---- Testimonials Section ---- */
  testimonials: {
    badge: "Testimonials",
    title: "Loved by teams worldwide",
    description: "See what our customers have to say about us.",
    items: [
      {
        name: "Sarah Chen",
        role: "CTO at TechFlow",
        avatar: "https://i.pravatar.cc/150?img=1",
        text: "This platform transformed how we build products. We shipped 3x faster and our team loves the developer experience.",
      },
      {
        name: "Marcus Johnson",
        role: "Founder at LaunchPad",
        avatar: "https://i.pravatar.cc/150?img=3",
        text: "The best investment we made this year. ROI was visible within the first month. Incredible support team too.",
      },
      {
        name: "Elena Rodriguez",
        role: "VP Engineering at ScaleUp",
        avatar: "https://i.pravatar.cc/150?img=5",
        text: "We evaluated 10+ solutions and this was the clear winner. The integrations alone saved us hundreds of hours.",
      },
      {
        name: "David Kim",
        role: "Product Lead at NextGen",
        avatar: "https://i.pravatar.cc/150?img=8",
        text: "Finally a tool that understands what developers need. Clean API, great docs, and it just works.",
      },
    ],
  },

  /** ---- FAQ Section ---- */
  faq: {
    badge: "FAQ",
    title: "Frequently asked questions",
    description:
      "Can't find what you're looking for? Contact our support team.",
    items: [
      {
        question: "How does the free trial work?",
        answer:
          "You get full access to all Pro features for 14 days. No credit card required. At the end of the trial, choose the plan that works best for you.",
      },
      {
        question: "Can I change my plan later?",
        answer:
          "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we prorate your billing.",
      },
      {
        question: "Is there a setup fee?",
        answer:
          "No setup fees, no hidden costs. You only pay the subscription price shown on this page.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Yes, we offer a 30-day money-back guarantee. If you are not satisfied, contact us for a full refund.",
      },
      {
        question: "What integrations do you support?",
        answer:
          "We support 100+ integrations including Slack, Stripe, GitHub, Zapier, HubSpot, Salesforce, and many more. Custom integrations are available on Enterprise plans.",
      },
    ],
  },

  /** ---- Comparison Table Section ---- */
  comparison: {
    badge: "Compare",
    title: "How we stack up",
    description: "See how Astrolify compares to the competition.",
    columns: [
      {
        name: "Basic",
        price: "Free forever",
        highlighted: false,
        cta: { label: "Get Started", href: "#" },
      },
      {
        name: "Pro",
        price: "$49 / month",
        highlighted: true,
        cta: { label: "Start Trial", href: "#" },
      },
      {
        name: "Enterprise",
        price: "Custom",
        highlighted: false,
        cta: { label: "Contact Sales", href: "#" },
      },
    ],
    rows: [
      {
        feature: "Projects",
        tooltip: "Number of active projects",
        values: ["3", "Unlimited", "Unlimited"],
      },
      { feature: "Team members", values: ["1", "10", "Unlimited"] },
      { feature: "Storage", values: ["5 GB", "100 GB", "1 TB"] },
      { feature: "Analytics", values: [false, true, true] },
      { feature: "API access", values: [false, true, true] },
      { feature: "Custom integrations", values: [false, false, true] },
      { feature: "SSO / SAML", values: [false, false, true] },
      { feature: "SLA & dedicated support", values: [false, false, true] },
      { feature: "Priority support", values: [false, true, true] },
    ],
  },

  /** ---- Integrations Showcase ---- */
  integrations: {
    badge: "Integrations",
    title: "Connects with your stack",
    description: "Over 100+ integrations to plug into tools you already love.",
    categories: [
      { id: "payments", label: "Payments" },
      { id: "comms", label: "Comms" },
      { id: "devtools", label: "Dev Tools" },
      { id: "analytics", label: "Analytics" },
      { id: "crm", label: "CRM" },
    ],
    items: [
      {
        name: "Stripe",
        icon: "key",
        category: "payments",
        categoryLabel: "Payments",
        description: "Accept payments and manage subscriptions.",
      },
      {
        name: "PayPal",
        icon: "shield",
        category: "payments",
        categoryLabel: "Payments",
        description: "One-click checkout with 400M+ buyers.",
      },
      {
        name: "Slack",
        icon: "send",
        category: "comms",
        categoryLabel: "Comms",
        description: "Send alerts and reports to your Slack channels.",
      },
      {
        name: "Intercom",
        icon: "headset",
        category: "comms",
        categoryLabel: "Comms",
        description: "Live chat and customer support inbox.",
      },
      {
        name: "GitHub",
        icon: "code-clipboard",
        category: "devtools",
        categoryLabel: "Dev Tools",
        description: "Trigger deployments from pull requests.",
      },
      {
        name: "Vercel",
        icon: "rocket",
        category: "devtools",
        categoryLabel: "Dev Tools",
        description: "One-click deploy and preview branches.",
      },
      {
        name: "Zapier",
        icon: "puzzle",
        category: "devtools",
        categoryLabel: "Dev Tools",
        description: "Automate workflows with 5,000+ apps.",
      },
      {
        name: "Mixpanel",
        icon: "chart",
        category: "analytics",
        categoryLabel: "Analytics",
        description: "Product analytics and user behaviour tracking.",
      },
      {
        name: "HubSpot",
        icon: "users",
        category: "crm",
        categoryLabel: "CRM",
        description: "Sync contacts, deals and pipeline data.",
      },
      {
        name: "Salesforce",
        icon: "star",
        category: "crm",
        categoryLabel: "CRM",
        description: "Enterprise CRM with deep two-way sync.",
      },
      {
        name: "Notion",
        icon: "note",
        category: "devtools",
        categoryLabel: "Dev Tools",
        description: "Sync docs and wikis with your workspace.",
      },
      {
        name: "Linear",
        icon: "check-circle",
        category: "devtools",
        categoryLabel: "Dev Tools",
        description: "Issue tracking built for fast-moving teams.",
      },
    ],
    cta: {
      text: "Don't see your tool?",
      label: "Request an integration",
      href: "#contact",
    },
  },

  /** ---- Contact Section ---- */
  contact: {
    badge: undefined as string | undefined,
    title: "La tua voce conta",
    description:
      "Stiamo costruendo SeedPeers. Lo sviluppo sta procedendo bene, ma siamo ancora all'inizio e il tuo contributo può fare la differenza. \n\n La compilazione di questo modulo è del tutto facoltativa, ma le tue risposte ci aiutano a comprendere le tue esigenze, a dare priorità alle funzionalità e a costruire una piattaforma che serva davvero la comunità. L'unico campo obbligatorio è il tuo indirizzo email per poter rimanere in contatto.\n\n Unisciti a noi, rimani aggiornato e aiutaci a plasmare il futuro.",
    diyLabel: "Stai pensando di costruire o comprare la serra?",
    payLabel: "Saresti disposto a sostenerci? (€/mese)",
    locationLabel: "Dove ti trovi",
    channels: [
      {
        icon: "mail",
        label: "Scrivici",
        href: "mailto:info@seedpeers.net",
        value: "info@seedpeers.net",
      },
      /*
      {
        icon: "headset",
        label: "Live chat",
        href: "#",
        value: "Open in the bottom-right",
      },
      */
      {
        icon: "satellite",
        label: "Sede",
        href: "#",
        value: "Roma, Italy",
      },
    ],
    topics: [
      { label: "Richiesta generale", value: "general" },
      { label: "Vendite e prezzi", value: "sales" },
      { label: "Supporto tecnico", value: "support" },
      { label: "Partnership", value: "partners" },
      { label: "Altro", value: "other" },
    ],
    cta: "Invia Messaggio",
  },

  /** ---- Team Section ---- */
  team: {
    badge: "Team",
    title: "Meet the builders",
    description:
      "A passionate team on a mission to make SaaS development effortless.",
    members: [
      {
        name: "Alex Rivera",
        role: "CEO & Co-founder",
        bio: "Previously led product at Stripe. Obsessed with developer experience.",
        avatar: "https://i.pravatar.cc/150?img=11",
        socials: [
          { platform: "Twitter", icon: "twitter", href: "#" },
          { platform: "LinkedIn", icon: "linkedin", href: "#" },
        ],
      },
      {
        name: "Mia Chen",
        role: "CTO & Co-founder",
        bio: "Ex-Google engineer. Built infra that serves billions of requests daily.",
        avatar: "https://i.pravatar.cc/150?img=5",
        socials: [
          { platform: "Twitter", icon: "twitter", href: "#" },
          {
            platform: "GitHub",
            icon: "github",
            href: "https://github.com/andreavitaletti/seedpeers",
          },
        ],
      },
      {
        name: "Jordan Lee",
        role: "Head of Design",
        bio: "Crafts pixel-perfect interfaces that convert visitors into customers.",
        avatar: "https://i.pravatar.cc/150?img=15",
        socials: [{ platform: "Twitter", icon: "twitter", href: "#" }],
      },
      {
        name: "Sam Patel",
        role: "Head of Growth",
        bio: "Scaled 3 SaaS companies from zero to $10M ARR. Loves data.",
        avatar: "https://i.pravatar.cc/150?img=8",
        socials: [{ platform: "LinkedIn", icon: "linkedin", href: "#" }],
      },
    ],
  },

  /** ---- Trust Badges Section ---- */
  trust: {
    badge: "Security",
    title: "Enterprise-grade security & compliance",
    description: "Your data is protected by the highest industry standards.",
    badges: [
      {
        icon: "shield",
        label: "SOC 2 Type II",
        description: "Independently audited security controls and practices.",
      },
      {
        icon: "lock",
        label: "End-to-End Encryption",
        description: "AES-256 encryption at rest and TLS 1.3 in transit.",
      },
      {
        icon: "eye-off",
        label: "GDPR Compliant",
        description: "Full compliance with EU data protection regulations.",
      },
      {
        icon: "check-circle",
        label: "99.9% Uptime SLA",
        description: "Guaranteed availability backed by financial SLA.",
      },
      {
        icon: "users",
        label: "Role-Based Access",
        description:
          "Granular permissions so the right people see the right data.",
      },
      {
        icon: "download",
        label: "Daily Backups",
        description: "Automated backups with point-in-time restore.",
      },
    ],
    certifications: [
      { name: "ISO 27001", icon: "shield" },
      { name: "HIPAA Ready", icon: "lock" },
      { name: "GDPR", icon: "check-circle" },
      { name: "CCPA", icon: "check-circle" },
      { name: "PCI DSS", icon: "key" },
    ],
  },

  /** ---- Feature Tabs Section ---- */
  featureTabs: {
    badge: "Platform",
    title: "One platform, endless possibilities",
    description: "Everything your team needs to ship fast and grow reliably.",
    tabs: [
      {
        label: "Analytics",
        icon: "chart",
        summary:
          "Real-time dashboards and AI-powered insights to guide every decision.",
        cta: { label: "Explore Analytics", href: "#features" },
        features: [
          {
            icon: "chart",
            title: "Real-time dashboards",
            description:
              "Monitor KPIs live with customizable widgets and charts.",
          },
          {
            icon: "rocket",
            title: "Funnel analysis",
            description:
              "Identify drop-off points and optimise your conversion flow.",
          },
          {
            icon: "users",
            title: "User cohorts",
            description:
              "Segment users by behaviour, plan, or custom attributes.",
          },
          {
            icon: "clipboard",
            title: "Automated reports",
            description: "Schedule PDF or Slack reports on any cadence.",
          },
        ],
      },
      {
        label: "Collaboration",
        icon: "users",
        summary:
          "Built for teams — roles, permissions, and real-time editing out of the box.",
        cta: { label: "Explore Collaboration", href: "#features" },
        features: [
          {
            icon: "users",
            title: "Team workspaces",
            description: "Separate spaces for each team with shared resources.",
          },
          {
            icon: "lock",
            title: "Granular roles",
            description:
              "Admin, Editor, Viewer — and custom roles for Enterprise.",
          },
          {
            icon: "send",
            title: "In-app comments",
            description: "Leave feedback directly on any element.",
          },
          {
            icon: "check-circle",
            title: "Activity log",
            description: "Full audit trail of every change and who made it.",
          },
        ],
      },
      {
        label: "Automation",
        icon: "puzzle",
        summary:
          "Automate repetitive tasks and connect to any tool in your stack.",
        cta: { label: "Explore Automation", href: "#features" },
        features: [
          {
            icon: "puzzle",
            title: "Visual workflow builder",
            description:
              "Drag-and-drop automation without a single line of code.",
          },
          {
            icon: "code-clipboard",
            title: "Webhooks & API",
            description: "Trigger actions in external apps instantly.",
          },
          {
            icon: "calendar",
            title: "Scheduled jobs",
            description: "Run tasks on a cron schedule with full logging.",
          },
          {
            icon: "headset",
            title: "Event-driven alerts",
            description:
              "Notify the right person when something needs attention.",
          },
        ],
      },
    ],
  },

  /** ---- Roadmap Section ---- */
  roadmap: {
    badge: "Roadmap",
    title: "What's coming next",
    description:
      "We ship every two weeks. Here's what we've built and what's ahead.",
    items: [
      {
        period: "Q1 2024",
        title: "Core platform launch",
        description:
          "Authentication, billing, analytics foundations, and the core API — all live.",
        status: "done",
        tags: ["Auth", "Billing", "API"],
      },
      {
        period: "Q2 2024",
        title: "Team collaboration",
        description:
          "Workspaces, roles & permissions, and real-time commenting shipped.",
        status: "done",
        tags: ["Workspaces", "Roles"],
      },
      {
        period: "Q3 2024",
        title: "Automation engine",
        description:
          "Visual workflow builder and webhook triggers are rolling out to all plans now.",
        status: "in-progress",
        tags: ["Workflows", "Webhooks"],
      },
      {
        period: "Q4 2024",
        title: "AI-powered insights",
        description:
          "Natural language querying, anomaly detection, and smart recommendations.",
        status: "planned",
        tags: ["AI", "ML"],
      },
      {
        period: "Q1 2025",
        title: "Mobile apps",
        description:
          "Native iOS and Android apps for on-the-go access to your dashboard.",
        status: "planned",
        tags: ["iOS", "Android"],
      },
    ],
  },

  /** ---- Blog Preview Section ---- */
  blog: {
    badge: "Blog",
    title: "From the team",
    description:
      "Tips, tutorials, and stories from the people building Astrolify.",
    posts: [
      {
        title: "How we scaled to 10K users without breaking the bank",
        excerpt:
          "A behind-the-scenes look at the architecture decisions and trade-offs that let us grow fast without burning cash.",
        category: "Engineering",
        icon: "rocket",
        date: "Dec 12, 2024",
        readTime: "8 min read",
        href: "#",
        author: { name: "Mia Chen", avatar: "https://i.pravatar.cc/150?img=5" },
      },
      {
        title: "The anatomy of a great SaaS landing page",
        excerpt:
          "What every high-converting SaaS page gets right — and the mistakes most founders make.",
        category: "Growth",
        icon: "chart",
        date: "Nov 28, 2024",
        readTime: "5 min read",
        href: "#",
        author: {
          name: "Sam Patel",
          avatar: "https://i.pravatar.cc/150?img=8",
        },
      },
      {
        title: "Designing for dark mode: lessons learned",
        excerpt:
          "Dark mode is no longer optional. Here is how we built a system that works beautifully in both themes.",
        category: "Design",
        icon: "eye-off",
        date: "Nov 10, 2024",
        readTime: "6 min read",
        href: "#",
        author: {
          name: "Jordan Lee",
          avatar: "https://i.pravatar.cc/150?img=15",
        },
      },
    ],
    cta: { label: "Read all articles", href: "#" },
  },

  /** ---- Newsletter / CTA Section ---- */
  newsletter: {
    title: "Ready to get started?",
    description:
      "Join 10,000+ companies already growing with our platform. Start your free trial today.",
    placeholder: "Enter your email",
    cta: { label: "Start Free Trial", href: "#" },
  },

  /** ---- Footer ---- */
  footer: {
    description: "Insieme coltiviamo il futuro.",

    columns: [] as {
      title: string;
      links: { label: string; href: string }[];
    }[],

    socials: [
      // { icon: "twitter", href: "#" },
      { icon: "github", href: "https://github.com/andreavitaletti/seedpeers" },
      { icon: "linkedin", href: "https://www.linkedin.com/company/seedpeers" },
    ],
  },

  /** ---- Language Overrides ---- */
  locales: {
    en: {
      brand: {
        tagline: "Seed Saving Simplified",
      },
      nav: {
        links: [] as { label: string; href: string }[],
        cta: { label: "You matter", href: "#contact" },
      },
      seo: {
        lang: "en",
      },
      greenhouse: {
        title: "Where Function Meets Form",
        description:
          "The micro-greenhouses form the backbone of the SeedPeers network. Engineered to create ideal conditions for seed preservation and growth, they pair advanced functionality with a refined, minimalist design. More than just cultivation devices, they are living showcases of biodiversity that bring nature and beauty into our everyday spaces.",
      },
      hero: {
        title: "A collaborative effort\nto preserve seeds",
        description:
          "Seeds are at the heart of agriculture and food security, but climate change, monocultures, and habitat loss are rapidly eroding their diversity. <b>SeedPeers is a non-profit peer-to-peer network of micro-greenhouses</b> deployed in indoor environments such as homes, schools, and community buildings that preserves and cultivates a wide range of seeds, helping protect edible plant genetic diversity, strengthen the resilience of future food systems, and safeguard the cultivation knowledge and traditions that have sustained communities for generations.\n <b>Together we cultivate the future.</b>",
        primaryCta: { label: "The micro-greenhouse", href: "#greenhouse" },
        secondaryCta: { label: "How it works", href: "#howitworks" },
      },
      howItWorks: {
        title: "How it works",
        description:
          "Discover how easy it is to become a member of the SeedPeers community",
        steps: [
          {
            number: 1,
            title: "Get your micro-greenhouse",
            description:
              "Either buy or build your own micro-greenhouse. It is an open source/hardware project",
          },
          {
            number: 2,
            title: "Join the network",
            description:
              "Register your micro-greenhouse and become part of a growing community of cultivators.",
          },
          {
            number: 3,
            title: "Get the seeds",
            description:
              "Receive your seeds, plant them in your micro-greenhouse, and start your growing journey. Seeds are distributed to increase diversity and resilience.",
          },
          {
            number: 4,
            title: "Grow and Learn",
            description:
              "Cultivate your plants, discover best practices, and learn from the community.",
          },
          {
            number: 5,
            title: "Share the knowledge",
            description:
              "Benefit from the collective expertise of the network and contribute your own insights to help others grow.",
          },
          {
            number: 6,
            title: "Share the harvest",
            description:
              "Share the harvest with other members of the network, enriching the biodiversity and resilience of the network.",
          },
        ],
      },
      contact: {
        title: "Your voice matters",
        description:
          "We’re building SeedPeers. Progress is going well, but we’re still early and your input can make a real difference. \n\n Completing this form is entirely optional, but your input helps us understand your needs, prioritize features, and build a platform that truly serves the community. The only required field is your email address so we can stay in touch.\n\n Join us, stay updated, and help shape what comes next.",
        diyLabel: "Build or buy your own micro-greenhouse?",
        payLabel: "Would you support us? (€/month)",
        locationLabel: "Location",
        channels: [
          {
            icon: "mail",
            label: "Email us",
            href: "mailto:info@seedpeers.net",
            value: "info@seedpeers.net",
          },
          {
            icon: "satellite",
            label: "Headquarters",
            href: "#",
            value: "Rome, Italy",
          },
        ],
        topics: [
          { label: "General inquiry", value: "general" },
          { label: "Sales & pricing", value: "sales" },
          { label: "Technical support", value: "support" },
          { label: "Partnership", value: "partners" },
          { label: "Other", value: "other" },
        ],
        cta: "Send Message",
      },
      footer: {
        description: "Together we cultivate the future.",
      },
    },
  },
};

export const siteConfig = siteConfigSchema.parse(
  siteConfigRaw,
) as typeof siteConfigRaw & {
  locales?: {
    en?: Partial<typeof siteConfigRaw>;
  };
};
export type SiteConfig = typeof siteConfig;
