# Papers 📚

This directory contains all study materials organized by subject.

## Structure

```
papers/
├── mathematics/          # Math papers (algebra, geometry, etc.)
├── physics/              # Physics papers (mechanics, thermodynamics, etc.)
├── chemistry/            # Chemistry papers (organic, inorganic, etc.)
├── biology/              # Biology papers (cells, genetics, evolution, etc.)
├── english/              # English papers (literature, grammar, composition, etc.)
├── history/              # History papers (ancient, modern, world history, etc.)
├── geography/            # Geography papers (physical & human geography, etc.)
└── README.md             # This file
```

## How to Add Papers

### 1. **Choose the Right Folder**
   - Place your PDF in the appropriate subject folder
   - Example: `papers/mathematics/algebra-basics.pdf`

### 2. **Name Your File**
   - Use lowercase with hyphens between words
   - Example: `advanced-calculus.pdf`
   - Example: `world-war-2.pdf`

### 3. **Update the Database**
   - Edit `js/script.js`
   - Find the `papersData` array
   - Add your paper object
   - Example:
     ```javascript
     {
         id: 13,
         title: "Advanced Calculus",
         subject: "Mathematics",
         level: "Grade 12",
         description: "In-depth calculus with applications",
         author: "Your Name",
         year: 2026,
         downloads: 0,
         rating: 4.5,
         featured: false,
         pages: 60,
         difficulty: "Hard",
         pdfUrl: "papers/mathematics/advanced-calculus.pdf",
         url: "#"
     }
     ```

### 4. **Commit and Push**
   ```bash
   git add papers/
   git add js/script.js
   git commit -m "Add: Your Paper Title"
   git push
   ```

## File Naming Convention

Use this pattern for consistency:
```
papers/[subject]/[topic-name].pdf
```

### Examples
- `papers/mathematics/algebra-fundamentals.pdf`
- `papers/physics/mechanics-and-motion.pdf`
- `papers/chemistry/organic-chemistry-101.pdf`
- `papers/biology/cell-structure-and-function.pdf`
- `papers/english/shakespeare-plays.pdf`
- `papers/history/ancient-rome-civilization.pdf`
- `papers/geography/climate-and-weather.pdf`

## PDF Requirements

- **Format**: PDF (.pdf)
- **Max Size**: 50 MB per file (recommended)
- **Quality**: 300 DPI for optimal readability
- **Metadata**: Include title and author in PDF properties

## Paper Metadata

When adding a paper, include these details:

| Field | Example | Notes |
|-------|---------|-------|
| title | "Algebra Fundamentals" | Clear, descriptive title |
| subject | "Mathematics" | One of 7 subjects |
| level | "Grade 10" | Target grade/form |
| description | "Complete guide to algebraic equations" | 10-200 characters |
| author | "Dr. Smith" | Creator/teacher name |
| year | 2026 | Publication year |
| pages | 42 | Total pages in PDF |
| difficulty | "Medium" | Easy, Medium, or Hard |

## Subject Categories

```
📐 Mathematics
   - Algebra, Geometry, Trigonometry, Calculus, Statistics

⚛️ Physics
   - Mechanics, Thermodynamics, Waves, Electricity, Modern Physics

🧪 Chemistry
   - Organic, Inorganic, Physical, Chemical Bonding, Reactions

🦠 Biology
   - Cells, Genetics, Evolution, Ecology, Physiology

📖 English
   - Literature, Grammar, Composition, Poetry, Drama

🏛️ History
   - Ancient, Medieval, Modern, Wars, Civilizations

🌍 Geography
   - Physical, Human, Regions, Climate, Geopolitics
```

## Contribution Guidelines

See [CONTRIBUTING.md](../docs/CONTRIBUTING.md) for detailed guidelines on:
- Submitting new papers
- Quality standards
- Pull request process
- Code of conduct

## Live Preview

Users can preview all PDFs directly in the browser using PDF.js:
- Click the "👁️ Preview" button on any paper card
- Navigate through pages with Previous/Next buttons
- Vote on difficulty level
- Download the full PDF
- Share via link or email

## Storage Limits

- GitHub repositories support up to 2 GB
- Recommended total papers: < 1 GB
- If exceeding limits, consider:
  - Splitting into multiple repositories by subject
  - Using GitHub Releases for large files
  - Using external storage (CDN, cloud storage)

## Statistics

Track your contribution impact:
- Papers uploaded
- Total downloads
- Average rating
- Subject coverage

## Questions?

- See [API.md](../docs/API.md) for technical details
- See [CONTRIBUTING.md](../docs/CONTRIBUTING.md) for contribution guidelines
- Open an issue for questions or suggestions

Happy sharing! 📚✨
