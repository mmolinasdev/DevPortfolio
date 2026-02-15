# 📚 Database I Portfolio

Professional portfolio developed for the Database I course at Universidad El Bosque.

## 🚀 Features

- ✨ Modern and professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 📊 Project section with complete details
- 🎥 Presentation video integration
- 📝 Organized evidence sections
- 📧 Contact form
- 🌐 Ready for GitHub Pages

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main page
├── pages/                  # 🆕 Project pages
│   └── library-project.html  # Library Management System details
├── css/                    # Styles organized with BEM
│   ├── styles.css          # Main file (imports all)
│   ├── base/               # Base styles
│   │   ├── variables.css   # CSS Variables
│   │   ├── reset.css       # CSS Reset
│   │   ├── typography.css  # Typography
│   │   └── animations.css  # Animations
│   ├── layout/             # Layout
│   │   ├── container.css   # Container
│   │   └── grid.css        # Grid system
│   ├── components/         # Reusable components
│   │   ├── navbar.css      # Navigation
│   │   ├── hero.css        # Hero section
│   │   ├── section.css     # Sections
│   │   ├── card.css        # Cards
│   │   ├── button.css      # Buttons
│   │   ├── form.css        # Forms
│   │   └── footer.css      # Footer
│   ├── pages/              # Page-specific styles
│   │   ├── presentation.css
│   │   ├── projects.css
│   │   ├── evidence.css
│   │   └── contact.css
│   └── utilities/          # Utilities
│       ├── helpers.css     # Helpers
│       ├── responsive.css  # Media queries
│       └── mobile-touch.css # Touch optimizations
├── js/                     # JavaScript
│   └── main.js             # Main script (OOP approach)
├── assets/                 # Multimedia
│   ├── profile.jpg         # Your photo (TO ADD)
│   ├── presentation.mp4    # Your video (optional)
│   └── projects/           # Project screenshots
├── README.md               # This file
├── BEM_GUIDE.md            # BEM naming guide
├── SETUP.md                # Setup guide
├── CHECKLIST_RUBRICA.md    # 🆕 Requirements checklist
└── .gitignore              # Ignored files
```

## 🛠️ How to Use

### Step 1: Customize Content

1. **Replace profile photo:**
   - Place your photo in `assets/profile.jpg`
   - Update the corresponding line in `index.html`

2. **Add your presentation video:**
   
   **Option A: YouTube (Recommended)**
   - Upload your video to YouTube
   - Copy the video ID (example: if URL is `youtube.com/watch?v=abc123`, ID is `abc123`)
   - Update the iframe in `index.html` with your video ID

   **Option B: Direct video**
   - Place your video in `assets/presentation.mp4`
   - Uncomment the video tag in `index.html`

3. **Update your personal information:**
   - Name
   - Email
   - GitHub links
   - LinkedIn link
   - University

4. **Customize the "About Me" section:**
   - Update the texts in the presentation section

### Step 2: Configure GitHub Pages

1. **Create a repository on GitHub:**
   ```bash
   # From the Portfolio folder
   git init
   git add .
   git commit -m "Initial commit: Database I Portfolio"
   ```

2. **Connect with GitHub:**
   ```bash
   # Replace your-username with your GitHub username
   git remote add origin https://github.com/your-username/your-username.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Activate GitHub Pages:**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

4. **Wait 2-5 minutes and visit:**
   ```
   https://your-username.github.io
   ```

### Step 3: Add Projects

To add more projects beyond the Library Management System:

1. **Create a new HTML file in `pages/`:**
   - Example: `pages/my-new-project.html`
   - Copy the structure from `pages/library-project.html`
   - Update the content with your project details

2. **Add the project card in `index.html`:**
   - Duplicate an existing `<article class="project-card">` block
   - Update title, description, tags, and link

3. **Add screenshots (optional):**
   - Place images in `assets/projects/`
   - Update the image URL in the card

## 🎨 Design System

This portfolio uses BEM (Block Element Modifier) methodology for CSS class naming. See `BEM_GUIDE.md` for complete documentation.

### Color Palette

- **Primary:** `#667eea` (Purple-blue gradient)
- **Secondary:** `#764ba2`
- **Accent:** `#f093fb`
- **Text:** `#2d3748`
- **Background:** `#ffffff`

### Breakpoints

- **XS:** < 480px (Small phones)
- **SM:** 481px - 768px (Phones)
- **MD:** 769px - 1024px (Tablets)
- **LG:** > 1024px (Desktop)

## 📱 Responsive Features

- Fluid typography with `clamp()`
- Adaptive spacing system
- Mobile-first approach
- Touch-optimized interactions (44px minimum)
- Landscape orientation support
- Reduced motion support for accessibility

## 🏗️ Architecture

### CSS (Modular)

28 files organized in:
- **Base:** Variables, reset, typography, animations
- **Layout:** Container, grid system
- **Components:** Navbar, cards, buttons, forms, etc.
- **Pages:** Page-specific styles
- **Utilities:** Helpers, responsive, touch optimizations

### JavaScript (OOP)

Classes for modularity:
- `Navigation`: Mobile menu
- `SmoothScroll`: Smooth navigation
- `ContactForm`: Form handling
- `ScrollAnimations`: Scroll-triggered animations
- `LazyLoadImages`: Performance optimization
- `EasterEgg`: Hidden surprise
- `App`: Main initialization

## 📊 Project Statistics

- **Total Files:** 40+
- **CSS Files:** 28 (modular)
- **Lines of CSS:** 3,000+
- **Lines of JS:** 300+
- **Design Patterns:** BEM, Mobile-first, OOP

## 🚦 Checklist Before Publishing

See `CHECKLIST_RUBRICA.md` for complete rubric requirements:

- [ ] Add your photo (`assets/profile.jpg`)
- [ ] Record and upload presentation video (90-120 seconds)
- [ ] Update all personal information (name, email, links)
- [ ] Customize "About Me" section
- [ ] Test responsiveness on different devices
- [ ] Verify all links work
- [ ] Push to GitHub
- [ ] Activate GitHub Pages
- [ ] Verify published URL works
- [ ] Submit URL to platform

## 🎯 Content Requirements (University Challenge)

### Mandatory Video (90-120 seconds)
1. How do you like to be called?
2. Something brief about you (hobby, interest, music/sport)
3. Why do you think Database I will help your professional life?
4. Closing phrase: "This semester I want to prove that..."

### Minimum Delivery
- Functional GitHub Pages URL
- "Presentation" section with embedded video + photo/avatar

### Bonus
- "Evidence" menu (Modeling | Normalization | SQL | Final Project)
- Can be empty initially

## 🔧 Troubleshooting

### Video not displaying
- Verify the YouTube video is public
- Check the video ID is correct
- Try incognito mode

### GitHub Pages not updating
- Wait 5-10 minutes after push
- Clear browser cache
- Check repository settings

### Responsive issues
- Test in Chrome DevTools device toolbar
- Verify viewport meta tag
- Check media queries in DevTools

## 📚 Documentation

- **BEM_GUIDE.md:** Complete BEM methodology guide
- **SETUP.md:** Detailed setup guide
- **CHECKLIST_RUBRICA.md:** University assignment checklist
- **RESPONSIVE_GUIDE.md:** Responsive design documentation

## 🤝 Contributing

This is a personal academic portfolio. If you want to use it as a template:

1. Fork this repository
2. Customize with your information
3. Remove or update projects
4. Publish to your own GitHub Pages

## 📄 License

Educational project - Universidad El Bosque - 2026

---

## 🎉 Ready to Publish!

Quick start:
1. Add your photo and video
2. Update personal info
3. Push to GitHub
4. Activate GitHub Pages
5. Share your URL!

**Good luck with your portfolio! 🚀**
