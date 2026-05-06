# Martines el Mago — Professional Magician Landing Page

A premium, high-converting landing page for professional magician **Martines el Mago**. Built with React, Tailwind CSS, and Framer Motion for stunning scroll animations and modern noir aesthetics.

## 🎭 Features

- **Modern Noir Design** — Brutalist, edgy minimalism with high contrast
- **Color Palette** — Black (#000000), White (#FFFFFF), Action Red (#D90429)
- **Scroll Animations** — Elegant reveal effects as users scroll
- **Fully Responsive** — Mobile-optimized premium experience
- **Interactive Elements** — Hover effects, form validation, smooth transitions
- **Professional Sections**:
  - Hero with captivating headline
  - Biography split-screen layout
  - Three service tiers (Close-up Magic, Stage Mentalism, Corporate Events)
  - Tour dates table with status indicators
  - Contact form with social integration
  - Footer with navigation and legal links

## 🛠️ Tech Stack

- **React 18** — UI framework
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Advanced animations
- **Vite** — Lightning-fast build tool
- **JavaScript/JSX** — Component-based architecture

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Navigate to project directory
cd WEB_MARTINEZ

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:3000` with hot module reloading.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This generates optimized static files in the `dist/` directory.

### Deploy to Popular Platforms

#### **Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

#### **Netlify**
```bash
npm run build
# Drag dist/ folder to Netlify dashboard
```

#### **GitHub Pages**
Update `vite.config.js`:
```js
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

## 📁 Project Structure

```
WEB_MARTINEZ/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx    — Fixed header with mobile menu
│   │   ├── Hero.jsx          — Captivating hero section
│   │   ├── Biography.jsx     — Split-screen about section
│   │   ├── Spectacles.jsx    — Service tier cards
│   │   ├── TourDates.jsx     — Shows table/list
│   │   ├── Contact.jsx       — Contact form & info
│   │   └── Footer.jsx        — Footer with links
│   ├── hooks/
│   │   └── useScrollReveal.js — Scroll animation hook
│   ├── App.jsx               — Main component
│   ├── main.jsx              — Entry point
│   └── index.css             — Global styles
├── index.html                — HTML template
├── package.json              — Dependencies
├── tailwind.config.js        — Tailwind configuration
├── postcss.config.js         — PostCSS configuration
├── vite.config.js            — Vite configuration
└── .gitignore                — Git ignore rules
```

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'brand-red': '#YOUR_COLOR',
    }
  }
}
```

### Update Content
- **Hero**: Edit `src/components/Hero.jsx`
- **Bio**: Edit `src/components/Biography.jsx`
- **Shows**: Edit `src/components/Spectacles.jsx`
- **Tour Dates**: Update array in `src/components/TourDates.jsx`
- **Contact**: Modify form in `src/components/Contact.jsx`

### Font Changes
Update Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_SERIF:wght@400;700&family=YOUR_SANS:wght@300;400&display=swap" rel="stylesheet" />
```

And update `tailwind.config.js`:
```js
fontFamily: {
  'serif': ['Your Serif', 'Georgia', 'serif'],
  'sans': ['Your Sans', 'system-ui', 'sans-serif'],
}
```

## 🔗 Integration

### Email Service (Contact Form)
To handle form submissions, integrate with a backend service:
- **EmailJS** — Client-side email sending
- **Formspree** — Form backend
- **AWS SES** — Enterprise solution

Update `Contact.jsx` `handleSubmit()` function with your service.

### Analytics
Add Google Analytics or similar in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## 🎬 Performance Optimizations

- **Code Splitting** — Components loaded on demand
- **Image Optimization** — Use WebP format for placeholders
- **Lazy Loading** — Framer Motion handles viewport-based rendering
- **CSS Purging** — Tailwind removes unused styles in production

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Best Practices

- Sanitize form inputs before sending
- Use HTTPS for deployment
- Validate email/date inputs server-side
- Implement CSRF protection for forms

## 📝 License

This landing page is custom-built for Martines el Mago. All rights reserved.

## 🤝 Support

For customizations or issues, contact the development team.

---

**Built with precision for the discerning audience. — The Experience**
