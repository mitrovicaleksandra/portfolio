
# AM | Strategic Finance & FP&A

A professional portfolio showcasing strategic finance,
financial planning and analysis, commercial strategy,
financial modeling, and AI-enabled finance workflows.

Built with React and Vite using a responsive
navy, cream, and gold design system.

## Portfolio Sections

- **Home** — Professional overview, financial impact,
  expertise, and automation highlights.
- **Expertise** — Strategic finance, FP&A,
  commercial finance, and technical capabilities.
- **Impact** — Interactive financial case studies,
  measurable outcomes, and methodology summaries.
- **AI & Automation** — Finance automation workflows,
  agent concepts, and practical technology applications.
- **Approach** — Financial analysis and strategic
  decision-making framework.
- **About** — Professional background and core capabilities.
- **Contact** — Professional contact information
  and optional LinkedIn integration.

## Features

- Responsive React website
- React Router navigation
- Modular page and component architecture
- Interactive case-study filters
- Case-study detail dialogs
- Premium case-study paywall interface
- Optional Stripe Payment Links
- AI and finance workflow demonstrations
- Mobile-friendly navigation

## Premium Case Studies

The portfolio includes a premium analysis section
within its case-study dialogs.

Premium materials may include:

- Financial modeling methodologies
- Scenario and sensitivity analysis
- Illustrative financial models
- Commercial and operational decision frameworks
- Downloadable financial templates

Stripe Payment Links can be configured for
individual case studies.

**Payment verification, automated content unlocking,
and authenticated premium access require additional
backend implementation.**

Do not enable live checkout until purchased materials
can be delivered securely.

## Technology Stack

- React
- Vite
- JavaScript / JSX
- React Router
- Lucide React
- CSS
- GitHub
- Stripe Payment Links (optional)

## Project Structure

src/
  components/
    Header.jsx
    Footer.jsx
    PageHero.jsx
    SectionLead.jsx
    CaseCard.jsx
    CaseDialog.jsx
    Icon.jsx

  pages/
    Home.jsx
    Expertise.jsx
    Impact.jsx
    Automation.jsx
    Approach.jsx
    About.jsx
    Contact.jsx

  App.jsx
  data.js
  main.jsx
  styles.css

public/
  assets/
    toronto-skyline.png

## Local Development

Install Node.js LTS.

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open the local URL shown in the terminal.

## Production Build

Create a production build:

    npm run build

The compiled website will be generated
inside the `dist/` directory.

## Deployment

The portfolio can be deployed to a static
hosting provider supporting React and Vite.

Build command:

    npm run build

Output directory:

    dist

Configure single-page application route fallback
to serve `index.html` for client-side routes
when required by the hosting provider.

The project includes a Vercel configuration
for SPA routing.

## Branding

The portfolio uses the **AM** monogram as its
primary visual identity.

The design emphasizes financial expertise,
strategic thinking, technology, and measurable impact.

## Content and Confidentiality

Case studies summarize selected professional
experiences at a high level.

Financial examples, methodologies, and downloadable
templates should use appropriately anonymized
or illustrative data.

No confidential employer information,
proprietary financial data, or private API
credentials published.

## AI & Automation Disclaimer

The AI and automation section includes illustrative
workflow architectures and conceptual finance agents.

These concepts do not represent active integrations
with financial systems or autonomous execution.

Live integrations require separate backend development,
authentication, data validation, and approval controls.
