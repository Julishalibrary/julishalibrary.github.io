# Project Structure 📁

## Overview

Julisha Library is organized with a clean, professional structure suitable for GitHub deployment and easy content management.

```
Julisha-Library/
├── 📄 README.md                    # Main documentation
├── 📄 QUICK_START.md              # Quick setup guide
├── 📄 DEPLOYMENT.md               # Deployment instructions
├── 📄 LICENSE                     # MIT License
├── 📄 .gitignore                  # Git ignore rules
│
├── 📁 css/                        # Stylesheets
│   └── style.css                  # Main styles
│
├── 📁 js/                         # JavaScript files
│   └── script.js                  # Main application logic
│                                   # Includes: data, filters, PDF viewer
│
├── 📁 assets/                     # Static assets
│   ├── images/                    # Image files
│   │   └── logo.png (placeholder)
│   └── fonts/                     # Custom fonts (optional)
│
├── 📁 papers/                     # Papers storage (organized by subject)
│   ├── mathematics/
│   │   ├── algebra-fundamentals.pdf
│   │   └── geometry-trigonometry.pdf
│   ├── physics/
│   │   ├── mechanics-motion.pdf
│   │   └── thermodynamics.pdf
│   ├── chemistry/
│   │   ├── organic-chemistry.pdf
│   │   └── periodic-table.pdf
│   ├── biology/
│   │   ├── cell-biology.pdf
│   │   └── evolution-genetics.pdf
│   ├── english/
│   │   ├── shakespeare-works.pdf
│   │   └── grammar-composition.pdf
│   ├── history/
│   │   ├── world-war-2.pdf
│   │   └── ancient-civilizations.pdf
│   └── geography/
│       └── (papers go here)
│
├── 📁 docs/                       # Documentation
│   ├── CONTRIBUTING.md            # Contribution guidelines
│   └── API.md                     # Data structure documentation
│
└── 📄 index.html                  # Main HTML file
```

## Directory Purposes

### Root Level
- **index.html** - Main entry point, contains page structure
- **README.md** - Project overview and setup instructions
- **QUICK_START.md** - Quick setup for different environments
- **DEPLOYMENT.md** - GitHub Pages deployment guide
- **.gitignore** - Files to exclude from git

### `/css` - Stylesheets
```
css/
└── style.css                      # All CSS styling (dark mode, responsive, etc.)
```
- Organized with CSS variables for theming
- Responsive design for all devices
- Dark mode support

### `/js` - JavaScript
```
js/
└── script.js                      # Main application (880+ lines)
```
Contains:
- Paper data (papersData array)
- Search & filter functions
- PDF viewer integration (using PDF.js)
- Dark mode toggle
- Local storage (search history, preferences)
- Modal management (preview, sharing)
- Batch download functionality
- Advanced filtering

### `/assets` - Static Resources
```
assets/
├── images/                        # Image files
│   └── logo.png (placeholder)
└── fonts/                         # Custom fonts (optional)
```

### `/papers` - Paper Storage
Organized by subject for easy management:
- **mathematics/** - Math papers
- **physics/** - Physics papers
- **chemistry/** - Chemistry papers
- **biology/** - Biology papers
- **english/** - English papers
- **history/** - History papers
- **geography/** - Geography papers

Papers are referenced in `js/script.js` via relative paths:
```javascript
pdfUrl: "papers/mathematics/algebra-fundamentals.pdf"
```

### `/docs` - Documentation
- **CONTRIBUTING.md** - How to contribute papers and code
- **API.md** - Data structure and API documentation

## File Size Optimization

### Current Sizes (Approximate)
- index.html: ~12 KB
- css/style.css: ~25 KB
- js/script.js: ~32 KB
- **Total** (without PDFs): ~70 KB

### PDF Storage
- Recommended max per paper: 50 MB
- Total recommended: < 1 GB (GitHub allows up to 2GB+ per repo)
- Consider organizing very large collections in separate branches

## Adding New Papers

1. **Save PDF** in appropriate subject folder:
   ```
   papers/mathematics/your-paper-name.pdf
   ```

2. **Update script.js** - Add entry to `papersData` array

3. **Commit and Push**:
   ```bash
   git add papers/mathematics/your-paper-name.pdf
   git add js/script.js
   git commit -m "Add: Your Paper Title"
   git push
   ```

## Deployment Structure

For **GitHub Pages** deployment:
1. Push all files to GitHub repository
2. Enable GitHub Pages in repository settings
3. Site automatically serves `index.html` from root or `/docs`
4. PDFs are served directly from `/papers` folder
5. CSS and JS are served from `/css` and `/js` folders

## Responsive Design Notes

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

All CSS in `css/style.css` includes media queries for responsive adjustments.

## Browser Support

- Chrome/Edge: All versions
- Firefox: All versions
- Safari: 12+
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## Module Structure (if splitting js/script.js in future)

Potential structure for larger projects:
```
js/
├── script.js                      # Main entry point
├── modules/
│   ├── papers.js                  # Paper data
│   ├── filters.js                 # Filter functions
│   ├── pdfViewer.js               # PDF viewer (PDF.js)
│   ├── modal.js                   # Modal management
│   └── theme.js                   # Dark mode
└── utils/
    ├── storage.js                 # LocalStorage utilities
    └── helpers.js                 # Helper functions
```

## Git Workflow Summary

```bash
# Clone
git clone https://github.com/electronicibrary254-sketch/Julisha-Library.git
cd Julisha-Library

# Create feature branch
git checkout -b add-new-papers

# Add/modify papers
cp your-paper.pdf papers/subject/
nano js/script.js  # Add to papersData

# Commit
git add papers/ js/script.js
git commit -m "Add: New papers"

# Push
git push origin add-new-papers

# Create Pull Request via GitHub
```

## Next Steps

- See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- See [API.md](API.md) for data structure documentation
- See main [README.md](../README.md) for setup instructions
