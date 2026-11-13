// EDIT THIS FILE TO PERSONALIZE THE PORTFOLIO.
// Do not publish contact details, case study numbers, or company information without approval.
export const profile = {
  name: 'Aleksandra Mitrović',
  shortName: 'AM',
  descriptor: 'Strategic Finance & FP&A',
  headline: 'Senior FP&A & Strategic Finance Professional',
  tagline: 'Bridging Finance, Strategy & Agentic AI',
  intro: 'I build financial models, drive strategic decisions, and explore AI-enabled workflows that turn complex data into measurable business impact.',
  // Replace these blanks before publishing. There is no real email/contact form wired in yet.
  contactEmail: '',
  linkedinUrl: '',
  resumePath: '',
};

export const metrics = [
  { value: '8+', label: 'Years in FP&A / Strategic Finance' },
  { value: '$200M+', label: 'AOP & P&L ownership' },
  { value: '50–75%', label: 'Payments margin improvement' },
  { value: '+6.5%', label: 'Revenue-share uplift' },
];

export const highlights = [
  { value: '$200M+', label: 'AOP & P&L Ownership', icon: 'chart' },
  { value: '+50–75%', label: 'Payments Margin Increase', icon: 'layers' },
  { value: '+6.5%', label: 'Revenue-Share Uplift', icon: 'handshake' },
  { value: '$32M', label: '5-Year Revenue Exposure Identified', icon: 'shield' },
  { value: '2 Regions', label: 'Consolidation Informed', icon: 'pin' },
  { value: 'First Positive', label: 'EBITDA Milestone Supported', icon: 'trending' },
];

export const expertise = [
  {
    title: 'FP&A & Planning', icon: 'chart', image: 'visual-chart',
    items: ['Annual Operating Plan (AOP) ownership', 'Integrated P&L and 3-statement models', 'Forecasting, reforecasts & scenario analysis', 'Headcount and operating expense planning', 'Driver-based, long-range financial models'],
  },
  {
    title: 'Commercial & Growth Finance', icon: 'coins', image: 'visual-coins',
    items: ['Partner and revenue-share economics', 'Payments strategy and margin optimization', 'Pricing and unit economics analysis', 'Cohort LTV/CAC and geographic profitability', 'Business cases and investment valuation'],
  },
  {
    title: 'AI & Automation in Finance', icon: 'cpu', image: 'visual-waves',
    items: ['Agentic AI concepts for FP&A workflows', 'Recurring reporting and variance automation', 'Data preparation using SQL and Power Query', 'AI-assisted financial analysis and narratives', 'Workflow design across finance tools'],
  },
  {
    title: 'Tools & Technical Skills', icon: 'layers', image: 'visual-tech',
    tags: ['Excel (Advanced)', 'Power Query (M)', 'SQL / BigQuery', 'Python', 'R', 'Planful', 'NetSuite', 'Looker / Power BI', 'Salesforce', 'Claude / GPT', 'APIs & Automation'],
  },
];

export const categories = ['All', 'Planning & Forecasting', 'Revenue & Growth', 'Payments', 'Partner Economics', 'Efficiency & Cost', 'M&A'];
export const cases = [
  {
    slug: 'payments-margin', category: 'Payments', title: 'Payments Optimization', icon: 'credit', image: 'visual-payment',
    short: 'Evaluated the migration from WePay to Stripe Connect and modeled transaction economics.',
    value: '+50–75%', result: 'Payments margin improvement',
    context: 'The business needed to understand how payments processing structures affected unit economics and profitability.',
    work: 'Modeled interchange-plus pricing, transaction costs, revenue sharing, and payment-margin sensitivities to inform a processor migration.',
    outcome: 'Supported payments optimization initiatives associated with a 50–75% increase in payments margin.',
    methods: ['Payments economics', 'Scenario modeling', 'Commercial partnerships'],
  },
  {
    slug: 'partner-economics', category: 'Partner Economics', title: 'Commercial Agreement Reassessment', icon: 'handshake', image: 'visual-bars',
    short: 'Built a driver-based model to reassess partner economics and contract terms.',
    value: '$32M', result: 'Revenue exposure modeled · +6.5% uplift',
    context: 'Changes in subscription growth and retention created uncertainty around long-term partner revenue share.',
    work: 'Modeled ARR, churn, five-year revenue exposure, and alternative commercial scenarios to inform negotiations.',
    outcome: 'Identified $32M in potential five-year revenue exposure and informed contract renegotiations securing a 6.5% revenue-share uplift.',
    methods: ['Revenue share', 'ARR and churn drivers', 'Negotiation support'],
  },
  {
    slug: 'regional-profitability', category: 'Efficiency & Cost', title: 'Geographic Profitability & GTM', icon: 'globe', image: 'visual-globe',
    short: 'Analyzed cohorts, LTV/CAC, and regional profitability to prioritize investments.',
    value: '2 Regions', result: 'Consolidation informed',
    context: 'Leadership needed clearer visibility into the relative economics of geographic markets.',
    work: 'Created regional and cohort models of customer acquisition, retention, lifetime value, and profitability.',
    outcome: 'Informed geographic investment priorities and the consolidation of two underperforming regional offices.',
    methods: ['Cohort analysis', 'LTV / CAC', 'Regional P&L'],
  },
  {
    slug: 'annual-plan', category: 'Planning & Forecasting', title: 'Forecasting & Annual Planning', icon: 'chart', image: 'visual-waves',
    short: 'Owned the Annual Operating Plan and integrated P&L for a $200M+ SaaS business.',
    value: '$200M+', result: 'Annual planning scope',
    context: 'Executive leadership needed an integrated planning process for revenue, operating costs, and long-term performance.',
    work: 'Owned AOP and integrated P&L forecasts, with driver-based revenue, expense, EBITDA, and scenario models.',
    outcome: 'Supported resource allocation, executive planning, and the business’s first positive EBITDA milestone.',
    methods: ['AOP', 'Integrated P&L', 'Scenario planning'],
  },
  {
    slug: 'pricing', category: 'Revenue & Growth', title: 'Pricing & Monetization', icon: 'coins', image: 'visual-coins',
    short: 'Analyzed pricing opportunities using segment-level economics and revenue models.',
    value: '+5%', result: 'Pricing uplift',
    context: 'The company sought to improve monetization while understanding effects across customer segments.',
    work: 'Developed pricing and unit-economics analyses to assess potential revenue and customer outcomes.',
    outcome: 'Supported a 5% pricing uplift across segments.',
    methods: ['Pricing strategy', 'Revenue modeling', 'Segmentation'],
  },
  {
    slug: 'ma-divestiture', category: 'M&A', title: 'M&A & Portfolio Strategy', icon: 'chess', image: 'visual-chess',
    short: 'Built DCF and sensitivity models and supported sell-side diligence and divestiture.',
    value: 'FastBill', result: 'Divestiture supported',
    context: 'Leadership needed to evaluate portfolio assets in light of cash preservation and investment priorities.',
    work: 'Prepared DCF valuation and sensitivity analyses for Facturama and FastBill, alongside operating KPIs and sell-side diligence.',
    outcome: 'Informed the FastBill divestiture and decisions intended to preserve cash and extend runway.',
    methods: ['DCF', 'M&A diligence', 'Portfolio strategy'],
  },
  {
    slug: 'reporting-automation', category: 'Efficiency & Cost', title: 'Financial Reporting Automation', icon: 'cpu', image: 'visual-tech',
    short: 'Reduced repetitive reporting work using SQL, BigQuery, and AI-assisted workflows.',
    value: '−30%', result: 'Manual reporting effort',
    context: 'Recurring reporting and variance workflows required significant manual preparation.',
    work: 'Used SQL, BigQuery, and AI-assisted workflows to streamline recurring financial reporting, variance analysis, and KPI monitoring.',
    outcome: 'Reduced manual reporting effort by 30% and accelerated insights for senior leadership.',
    methods: ['SQL / BigQuery', 'KPI automation', 'AI-assisted workflows'],
  },
];

// This is an illustrative agent library/design framework, not a claim that
// these are connected to live ERP data or available as deployed software.
export const agents = [
  { name: 'Driver-Based Forecaster', icon: 'chart', description: 'Maps revenue and expense drivers into planning assumptions and scenario outputs.' },
  { name: 'Variance Investigator', icon: 'search', description: 'Reviews actual-versus-plan variances and outlines questions for deeper investigation.' },
  { name: 'Scenario Modeler', icon: 'layers', description: 'Organizes upside, base, and downside cases with linked sensitivities.' },
  { name: 'Business Case Builder', icon: 'chess', description: 'Structures options, investment requirements, ROI, and key risks.' },
  { name: 'Headcount Planner', icon: 'users', description: 'Organizes role-level staffing assumptions, timing, and fully loaded costs.' },
  { name: 'Capital Allocator', icon: 'coins', description: 'Compares investments across return, strategic fit, and resource constraints.' },
  { name: 'CFO Narrative Builder', icon: 'file', description: 'Turns validated financial results into concise executive commentary.' },
  { name: 'Reporting Automator', icon: 'zap', description: 'Defines repeatable steps to refresh data, verify outputs, and distribute reports.' },
];
