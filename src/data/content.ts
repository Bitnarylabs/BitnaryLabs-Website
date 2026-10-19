export const siteConfig = {
  name: "BitnaryLabs",
  legalName: "BitnaryLabs Technologies",
  description: "Practical business software and high-performing websites for Indian companies. Simplify daily work, serve customers better, and grow with technology that fits your needs.",
  contact: {
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210",
    email: "contact@bitnarylabs.com",
    salesEmail: "sales@bitnarylabs.com",
    supportEmail: "support@bitnarylabs.com",
    address: "Tech Hub, Sector 62, Noida, Uttar Pradesh, India",
    workingHours: "Monday – Saturday: 9:30 AM – 6:30 PM IST",
    responseTime: "We typically respond within 2-4 business hours.",
  },
  social: {
    linkedin: "https://linkedin.com/company/bitnarylabs",
    twitter: "https://twitter.com/bitnarylabs",
    github: "https://github.com/bitnarylabs",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Web Development", href: "/web-development" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export const productsData = {
  stocksense: {
    id: "stocksense",
    name: "StockSense",
    category: "Inventory & Supply Chain",
    badge: "Smart Inventory",
    tagline: "Know Your Stock. Make Better Decisions.",
    description: "StockSense helps Indian businesses track inventory, monitor stock movements, manage purchase/sales orders with automated GST calculation, and keep multi-location records completely organised.",
    idealFor: "Retailers, distributors, wholesalers, warehouses, and businesses managing physical stock.",
    pricingStarting: "₹999/mo",
    features: [
      "Real-time stock tracking by SKU, category, and storage rack/location",
      "Low-stock automated alerts via WhatsApp, SMS, and Email",
      "Barcode & QR scanning compatibility for handheld and phone cameras",
      "Multi-location stock management with inter-branch transfers",
      "Purchase & sales orders with automatic GST calculations (CGST, SGST, IGST)",
      "Damage, return, batch expiry, and supplier history records",
      "Stock ageing, fast/slow-moving inventory analytics and audit logs",
      "Mobile-friendly interface built for warehouse staff and on-the-go managers"
    ],
    plans: [
      {
        name: "Starter",
        price: "₹999",
        period: "/month",
        billedAnnually: "₹9,990/yr (Save 2 months)",
        target: "Single-location shops & boutiques",
        popular: false,
        specs: [
          "1 User account",
          "1 Business location",
          "Up to 2,000 SKUs",
          "Basic stock tracking & alerts",
          "GST bill printing",
          "Email support"
        ]
      },
      {
        name: "Growth",
        price: "₹2,499",
        period: "/month",
        billedAnnually: "₹24,990/yr (Save 2 months)",
        target: "Multi-branch retailers & growing brands",
        popular: true,
        specs: [
          "5 User accounts with role permissions",
          "Up to 3 branch / warehouse locations",
          "Up to 20,000 SKUs",
          "Barcode & QR batch scanning",
          "WhatsApp low-stock alerts",
          "Stock ageing & vendor reports",
          "Priority chat & phone support"
        ]
      },
      {
        name: "Business",
        price: "₹4,999",
        period: "/month",
        billedAnnually: "₹49,990/yr (Save 2 months)",
        target: "Distributors, wholesalers & large retail chains",
        popular: false,
        specs: [
          "Unlimited user accounts",
          "Unlimited branch locations",
          "Unlimited SKUs & transactions",
          "Custom GST & E-way bill export",
          "Dedicated API & POS integrations",
          "Dedicated account manager",
          "Custom onboarding & staff training"
        ]
      }
    ]
  },
  peopledesk: {
    id: "peopledesk",
    name: "PeopleDesk",
    category: "HR & Payroll Automation",
    badge: "People Operations",
    tagline: "Keep Employee Records and HR Tasks in One Place.",
    description: "PeopleDesk helps growing Indian companies organise employee records, biometric attendance, leave approvals, automated salary slips, and Indian statutory compliance workflows.",
    idealFor: "Small, medium, and growing businesses wanting structured people operations without cumbersome paperwork.",
    pricingStarting: "₹69/employee/mo",
    features: [
      "Centralised digital employee profiles & self-service onboarding checklists",
      "Attendance tracking with biometric sync, web check-in, and geo-tagging",
      "Custom leave policies, holiday calendars, and 1-click approvals",
      "Automated salary computation based on attendance & variable pay",
      "Configurable statutory workflows: PF, ESI, TDS (Income Tax), and Professional Tax",
      "Instant digital payslip generation & automatic WhatsApp/Email delivery",
      "Performance appraisal cycles, goals tracking, and hiring pipeline",
      "Role-based granular access control safeguarding sensitive salary data"
    ],
    plans: [
      {
        name: "Starter",
        price: "₹69",
        period: "/employee /month",
        minEmployees: "Min. 10 employees",
        target: "Growing startups and small offices",
        popular: false,
        specs: [
          "Digital employee profiles & documents",
          "Biometric & mobile attendance check-in",
          "Leave management & approvals",
          "Standard payslip generation",
          "Company holiday calendar",
          "Email & ticket support"
        ]
      },
      {
        name: "Growth",
        price: "₹99",
        period: "/employee /month",
        minEmployees: "Min. 10 employees",
        target: "Medium enterprises needing statutory compliance",
        popular: true,
        specs: [
          "Everything in Starter",
          "Automated monthly payroll calculation",
          "Configurable PF, ESI, and TDS salary sheets",
          "Direct WhatsApp payslip sharing",
          "Performance review workflows",
          "Priority phone & WhatsApp support"
        ]
      },
      {
        name: "Enterprise",
        price: "₹149",
        period: "/employee /month",
        minEmployees: "Min. 50 employees",
        target: "Large organizations with custom requirements",
        popular: false,
        specs: [
          "Everything in Growth",
          "Custom salary breakdown & formula builder",
          "Multi-entity & multi-branch support",
          "Custom statutory reports & bank disbursement files",
          "Dedicated HRMS account manager",
          "Tailored onboarding & staff training sessions"
        ]
      }
    ]
  }
};

export const webDevelopmentPackages = [
  {
    name: "Starter",
    badge: "Fast Launch",
    suitableFor: "Portfolios, Consultants & Simple Business Sites",
    price: "₹15,000",
    deliveryTime: "About 2 weeks",
    popular: false,
    description: "Clean, responsive, brand-aligned presence tailored for independent professionals and emerging companies.",
    features: [
      "Up to 5 custom-designed responsive pages",
      "Mobile-first, lightning fast performance",
      "WhatsApp chat button & lead contact form",
      "Social media & Google Maps integration",
      "Basic on-page SEO meta tags",
      "14 days post-launch support"
    ]
  },
  {
    name: "Growth",
    badge: "Most Popular",
    suitableFor: "Growing Companies, B2B, Agencies & Service Firms",
    price: "₹30,000",
    deliveryTime: "About 3 weeks",
    popular: true,
    description: "Comprehensive corporate website built to attract high-intent leads, showcase case studies, and scale with a blog.",
    features: [
      "Up to 10-12 bespoke responsive pages",
      "Dynamic CMS for blog / case studies",
      "Custom lead forms with email/CRM webhook notifications",
      "Comprehensive on-page SEO foundation & schema markup",
      "Speed optimization (90+ Google PageSpeed score target)",
      "Analytics & Meta Pixel setup",
      "30 days post-launch dedicated support"
    ]
  },
  {
    name: "E-Commerce",
    badge: "Online Store",
    suitableFor: "D2C Brands, Retailers, Fashion & Consumer Goods",
    price: "₹50,000",
    deliveryTime: "About 4–5 weeks",
    popular: false,
    description: "High-converting online store engineered with product variants, fast checkout, Indian payment gateways, and shipping setup.",
    features: [
      "Full catalog setup for up to 100 products with variants",
      "Razorpay, Cashfree, UPI & COD checkout integration",
      "Automated GST invoice generation functionality",
      "Order management & Shiprocket/courier webhook sync",
      "Cart abandonment & WhatsApp order updates setup",
      "Discount coupon & promotion engine",
      "45 days post-launch priority support"
    ]
  },
  {
    name: "Enterprise",
    badge: "Bespoke Scale",
    suitableFor: "Large Catalogs, Custom Portals & High-Traffic Brands",
    price: "Custom Quote",
    deliveryTime: "About 6–8 weeks",
    popular: false,
    description: "Enterprise-grade web application with custom database schemas, API integrations, and robust scalability.",
    features: [
      "Unlimited pages / large catalog architecture",
      "Custom third-party ERP / CRM / API integrations",
      "Advanced role-based user dashboards & authentication",
      "Enterprise SLA, caching & cloud security hardening",
      "A/B testing and conversion rate optimization setup",
      "Dedicated senior tech lead & training walkthrough",
      "60 days extended warranty & priority maintenance"
    ]
  }
];

export const webServiceCategories = [
  {
    title: "E-Commerce Websites",
    description: "Launch or elevate your online store with a shopping experience designed around customer psychology and mobile checkout.",
    points: [
      "Product catalog with variants, intuitive filters, and instant search",
      "Indian payment gateway integrations (Razorpay, PhonePe, Paytm, COD)",
      "Automated GST invoice generation and shipping provider integrations",
      "Mobile-first responsive UX with instant 1-click WhatsApp assistance"
    ],
    ideal: "Fashion, food, beauty, home decor, lifestyle, electronics & D2C brands",
    ctaText: "Get an E-Commerce Quote",
    ctaLink: "/contact?service=ecommerce"
  },
  {
    title: "Business & Corporate Websites",
    description: "Explain your services, establish market credibility, and make it effortless for corporate clients to connect with your team.",
    points: [
      "Strategic brand narrative, service landing sections, and client proofs",
      "Enquiry forms routed directly to WhatsApp, email, or your CRM",
      "Interactive Google Maps, office location details, and team showcases",
      "Legal and compliance readiness: terms, privacy policy, and GDPR/IT Act alignment"
    ],
    ideal: "B2B companies, manufacturing units, logistics firms, clinics, law and accounting practices",
    ctaText: "Request Corporate Consultation",
    ctaLink: "/contact?service=corporate"
  },
  {
    title: "Portfolio & Professional Websites",
    description: "Present your work, achievements, and unique authority in an elegant visual space that commands higher consulting fees.",
    points: [
      "Tailored aesthetic mirroring your craft and personality",
      "Visual project showcase, client case studies, and testimonial carousels",
      "Direct calendar booking or WhatsApp instant consultation link",
      "Thought-leadership blog foundation with search engine optimization"
    ],
    ideal: "Designers, photographers, architects, independent consultants, doctors, and creative directors",
    ctaText: "Build My Portfolio",
    ctaLink: "/contact?service=portfolio"
  },
  {
    title: "High-Converting Landing Pages",
    description: "Laser-focused single pages engineered specifically for ad campaigns, product releases, or webinar registrations.",
    points: [
      "Single-minded persuasive value proposition with zero navigational distraction",
      "Lead generation forms hooked to CRM, Google Sheets, or email alerts",
      "Google Analytics 4, Tag Manager, and Meta Pixel precision tracking",
      "Average turnaround: 5–7 working days for clearly scoped campaigns"
    ],
    ideal: "Paid marketing campaigns, event promotions, app launches, and high-ticket service leads",
    ctaText: "Get a Landing Page Quote",
    ctaLink: "/contact?service=landing-page"
  },
  {
    title: "Blog & Content Publishing Hubs",
    description: "Publish engaging articles, guides, and updates through a lightning-fast CMS built for both readers and search engine crawlers.",
    points: [
      "Distraction-free reading experience optimized for mobile viewports",
      "Category tags, author bios, estimated reading time, and instant search",
      "Social sharing buttons and newsletter capture integration",
      "Core Web Vitals green scores for top Google search rankings"
    ],
    ideal: "Media outlets, niche publishers, community blogs, and brand authority publications",
    ctaText: "Launch Content Hub",
    ctaLink: "/contact?service=content-hub"
  }
];

export const faqsData = [
  {
    question: "Can I pay monthly or annually for software subscriptions?",
    answer: "Yes, you can choose flexible monthly billing or pay annually. Annual billing saves you the equivalent of 2 months upfront across all StockSense and PeopleDesk plans."
  },
  {
    question: "Are setup fees included in software and website packages?",
    answer: "Standard onboarding and setup are included in our Growth and Business plans. For complex data migrations (e.g. exporting historical ERP or legacy Excel records), we provide a clear, upfront quotation with no surprise fees."
  },
  {
    question: "Which payment methods do you accept?",
    answer: "We accept all major Indian payment methods including UPI (Google Pay, PhonePe, Paytm), Net Banking (NEFT/RTGS/IMPS), Corporate Credit/Debit cards, and international cards via Stripe/Razorpay. Valid GST tax invoices are automatically issued."
  },
  {
    question: "Can I change or upgrade my plan later as my team grows?",
    answer: "Absolutely. You can seamlessly upgrade your software plan or add more employee seats at any time. Prorated adjustments are calculated automatically for the remaining billing cycle."
  },
  {
    question: "Do you offer custom software development or specialized integrations?",
    answer: "Yes! If your business requires bespoke workflow customization, specific hardware POS integrations, or custom ERP sync, our engineering team provides tailored consulting and milestone-based development."
  },
  {
    question: "Are domain name, hosting, and business emails included in website packages?",
    answer: "We assist in setting up high-speed cloud hosting (AWS / Vercel / Cloudflare) and connecting your custom domain. You can either use your existing domain/hosting or we can configure managed hosting under our maintenance plans."
  }
];
