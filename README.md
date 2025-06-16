# Martha Rodríguez · Public Accountant Landing Page

A polished, responsive landing page built for **Martha Rodríguez**, showcasing her accounting services with a clear, professional brand presence.  

**Live Demo:** 🌐 [martharodriguez.com.co](https://martharodriguez.com.co)  

---

## 🏆 Key Highlights for Recruiters

- **Mobile-First Design:** Three dedicated CSS files (`style.css`, `tablet.css`, `desktop.css`) ensure an optimal experience on phones, tablets and desktops.  
- **Semantic, Accessible Markup:** HTML5 structure, descriptive `alt` text, ARIA-friendly navigation, WCAG-level color contrast.  
- **Performance-Driven:**  
  - Compressed assets, lazy-loaded images  
  - Native smooth scrolling (`scroll-behavior: smooth`)  
  - Hosted on Netlify with free SSL  
- **Interactive Features:**  
  - Client-side form validation (Vanilla JS)  
  - Netlify Forms integration (no backend required)  
  - Anchor navigation with auto-scroll  
- **Clean Codebase & Documentation:**  
  - Modular CSS with custom properties  
  - Well-organized project structure  
  - Comprehensive README aimed at technical and non-technical stakeholders  

---

## 🛠 Tech Stack & Tools

- **Languages:** HTML5 · CSS3 · JavaScript (ES6)  
- **Styling:** Mobile-first with Flexbox & CSS Grid, custom properties, BEM-inspired classes  
- **Forms & Deployment:** Netlify Forms for submissions, Netlify for CI/CD + hosting  
- **Fonts:** Google Fonts (_Lato_, _Merriweather_)  
- **Optimization:** Image compression (WebP fallback), performance best practices  

---

## 📁 Project Structure

LandingMarthaRodriguez/
├── assets/
│ ├── icons/ # Optimized SVG icons
│ └── images/ # Compressed profile & UI images
├── css/
│ ├── style.css # Mobile (≤767px)
│ ├── tablet.css # Tablet (768–1023px)
│ └── desktop.css # Desktop (≥1024px)
├── js/
│ └── validation.js # Client-side form validation
├── index.html # Landing page
├── privacy.html # Privacy policy
└── README.md # Project overview (you are here)


---

## 🎨 Design & UX Principles

1. **Strong Visual Identity**  
   - Consistent palette:  
     - Primary: `#34495E`  
     - Secondary: `#5DADE2`  
     - Accent: `#F1948A`  
     - Button: `#f37c6f`  
   - Typography hierarchy with _Lato_ (body) and _Merriweather_ (headings).  
2. **Hero Section**  
   - Circular profile image  
   - Prominent greeting & “Book a consultation” CTA  
3. **Core Sections**  
   - About Me: concise pitch + credentials in three columns  
   - Services: six cards with icons & titles, hover interactions  
   - Contact: Netlify-powered form + alternate channels (WhatsApp, email)  
4. **Accessibility & Responsiveness**  
   - Keyboard-navigable, proper `aria-label`s  
   - Fluid layouts for all breakpoints  

---

## 📬 Form Setup (Netlify Forms)

```html
<form name="contact" method="POST" netlify netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact">
  <!-- name, email, phone, message fields -->
  <button type="submit">Send Message</button>
</form>

· Client validation in validation.js prevents incomplete submissions.

· Dashboard & notifications configured in Netlify → Forms.

🚀 Deployment Workflow
1. GitHub Integration: Push to main branch → automated Netlify deploy.

2. Manual Deploy: Drag-and-drop ZIP in Netlify UI.

3. Custom Domain: martharodriguez.com.co (configured in Netlify settings).

4. SSL & CDN: Included by default for performance & security.

📈 Next Steps
1. Implement reCAPTCHA v3 for spam protection

2. Add SEO metadata (Open Graph, JSON-LD)

3. Automate asset pipeline (Sass/PostCSS & minification)

4. Monitor analytics (Google Analytics or Matomo)

👤 Author
Douglas Diaz — Frontend Web Developer
June 2025


