# Aleksandra Mitrović — Strategic Finance Portfolio

A working, responsive **React + Vite** implementation of the six portfolio-page designs created in this conversation. It uses a navy/cream/gold visual system and a cropped architectural image based on the mockups.

## What's included

- Home — headline, highlights, expertise, impact preview, automation preview.
- Expertise — planning, commercial finance, AI/automation, and technical skills.
- Impact — interactive case-study categories, seven case-study cards, clickable details.
- AI & Automation — workflow architecture, selectable agent concepts, technology stack.
- Approach — five-step working framework and key principles.
- About — background, highlights, skill tags, global profile.
- Contact — a configurable contact link (email/LinkedIn **not configured yet**).
- Responsive navigation, mobile layouts, accessible modal dialogs.

**Important:** This is a functioning **portfolio website**, not a deployed agent platform. The agents are presented as concepts. No live NetSuite, OpenAI, Claude, email, or database connections are implemented.

## Start locally

1. Install Node.js (LTS).
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local link shown in your terminal (usually `http://localhost:5173`).

## Personalize before publishing

### `src/data.js`

Edit the `profile` object:

- `name`, `headline`, `tagline`, `intro`
- `contactEmail`: enter your real address (currently blank).
- `linkedinUrl`: add your public LinkedIn profile link (currently blank).
- `resumePath`: optional future resume download path (currently blank).

Review **all** case-study descriptions, categories, and reported metrics. They were drafted from the project context; only publish disclosures that you are comfortable making and have permission to share.

### Portrait

The About page intentionally uses a branded **AM placeholder**, not the mockup's AI-generated portrait. When you have a photo you want to use, put it into `public/assets/` and replace the `.portrait-placeholder` element in `src/App.jsx` with an `<img />`, then adjust CSS.

### Hero photo

The hero artwork is at `public/assets/vienna-dome.webp`. It is a cropped image from the generated mockup and can be replaced with a licensed photograph or your own image.

### Design vs. full implementation

This matches the style and content structure of the six mockups, rather than pixel-perfectly reproducing static screenshots. On mobile, the layout adapts. The Impact filters and modal and AI agent selection are live React interactions. The AI concepts do not execute finance processes.

## Deploy

```bash
npm run build
```

Upload `dist/` to a static host, or connect a GitHub repository to Vercel or Netlify:

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite
- Set SPA rewrites/fallback to `/index.html` for direct navigation to `/impact`, `/about`, etc.

### Example rewrite configuration for Vercel

The included `vercel.json` handles SPA route fallback.

## Next possible phases

1. Replace the photo placeholder, wire email/LinkedIn, and review content.
2. Add case-study detail pages, charts, screenshots, and optional password protection for proprietary work.
3. Add actual demos for forecasting, variance analysis, or the Oria agent framework; those will require a Python/API backend, authentication, and appropriate data controls.
4. Publish with custom domain and analytics (with consent/privacy considerations).

## Asset attribution

The architectural hero image is cropped from an AI-generated portfolio mockup produced in this conversation. It is not a photograph of the portfolio owner. Do not use the illustrative AI-generated portrait from the About mockup as a real-person portrait.
