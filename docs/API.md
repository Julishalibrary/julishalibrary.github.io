# API Documentation 🔧

## Papers Data Structure

### Overview

All papers are stored in a JavaScript array called `papersData` located in `js/script.js`. Each paper object contains metadata used by the application.

### Paper Object Schema

```javascript
{
    id: Number,                    // Unique identifier
    title: String,                 // Paper title
    subject: String,               // Subject name
    level: String,                 // Grade or Form level
    description: String,           // Short description (1-2 lines)
    author: String,                // Author/Teacher name
    year: Number,                  // Publication year
    downloads: Number,             // Download count
    rating: Number,                // Average rating (0-5, decimal)
    featured: Boolean,             // Featured papers appear in hero section
    pages: Number,                 // Number of pages
    difficulty: String,            // "Easy", "Medium", or "Hard"
    pdfUrl: String,                // Path to PDF file
    url: String                    // Legacy external URL (usually "#")
}
```

### Complete Example

```javascript
{
    id: 1,
    title: "Algebra Fundamentals",
    subject: "Mathematics",
    level: "Grade 10",
    description: "Complete guide to algebraic equations and functions",
    author: "Dr. Smith",
    year: 2025,
    downloads: 245,
    rating: 4.8,
    featured: true,
    pages: 42,
    difficulty: "Medium",
    pdfUrl: "papers/mathematics/algebra-fundamentals.pdf",
    url: "#"
}
```

## Field Descriptions

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | Number | ✅ | Unique integer. Use next available number when adding papers |
| `title` | String | ✅ | 3-100 characters. Paper title |
| `subject` | String | ✅ | One of: "Mathematics", "Physics", "Chemistry", "Biology", "English", "History", "Geography" |
| `level` | String | ✅ | One of: "Grade 9", "Grade 10", "Grade 11", "Grade 12", "Form 1", "Form 2", "Form 3", "Form 4" |
| `description` | String | ✅ | 10-200 characters. Brief description for card display |
| `author` | String | ✅ | Author or teacher name |
| `year` | Number | ✅ | 4-digit year (e.g., 2025, 2026) |
| `downloads` | Number | ✅ | Integer starting from 0 |
| `rating` | Number | ✅ | 0-5 with decimals (e.g., 4.8) |
| `featured` | Boolean | ✅ | true/false. Featured papers show in trending section |
| `pages` | Number | ✅ | Integer. Total pages in PDF |
| `difficulty` | String | ✅ | One of: "Easy", "Medium", "Hard" |
| `pdfUrl` | String | ✅ | Relative path to PDF: `papers/subject/filename.pdf` |
| `url` | String | ❌ | Legacy field. Leave as `"#"` |

## Subject Mapping

```javascript
// Valid subjects and their folders:
"Mathematics"  → papers/mathematics/
"Physics"      → papers/physics/
"Chemistry"    → papers/chemistry/
"Biology"      → papers/biology/
"English"      → papers/english/
"History"      → papers/history/
"Geography"    → papers/geography/
```

## Level Mapping

```javascript
// High School Grades:
"Grade 9", "Grade 10", "Grade 11", "Grade 12"

// Alternative Forms (Kenyan curriculum):
"Form 1", "Form 2", "Form 3", "Form 4"
```

## Functions & Methods

### Search & Filter Functions

```javascript
// Filter papers by subject
filterBySubject(subject: String): void
// Example: filterBySubject('Mathematics')

// Filter papers by grade/form level
filterByLevel(level: String): void
// Example: filterByLevel('Grade 10')

// Search papers by title/topic
filterPapers(): void
// Reads from searchInput element

// Toggle filter sections
toggleFilter(filterId: String): void
// Example: toggleFilter('subject-filter')
```

### Sort Functions

```javascript
// Sort by download count
sortByDownloads(): void

// Sort by rating
sortByRating(): void

// Sort by year (newest first)
sortByNewest(): void

// Sort alphabetically by title
sortByTitle(): void
```

### Paper Preview & Download

```javascript
// Open paper preview modal with PDF viewer
previewPaper(paperId: Number): void
// Example: previewPaper(1)

// Download paper as PDF
downloadPaper(title: String): void
// Example: downloadPaper('Algebra Fundamentals')

// Close preview modal
closePreview(): void

// Load and display PDF in modal
loadPDF(pdfUrl: String): void
// Internal function, called by previewPaper()

// Navigate PDF pages
nextPage(): void
previousPage(): void
```

### Selection & Batch Operations

```javascript
// Toggle selection of a single paper
togglePaperSelection(paperId: Number): void

// Toggle select/deselect all papers
toggleSelectAll(): void

// Download all selected papers as ZIP
batchDownloadPapers(): void

// Update the selected papers count display
updateSelectedCount(): void
```

### Sharing

```javascript
// Copy paper link to clipboard
sharePaperLink(): void

// Open email client with paper details
shareViaEmail(): void

// Open full PDF in new browser tab
viewFullPDF(): void
```

### Search History

```javascript
// Add search term to local history
addToSearchHistory(term: String): void

// Display saved search history
displaySearchHistory(): void

// Search using a history item
searchFromHistory(term: String): void

// Show autocomplete suggestions
showSearchSuggestions(): void
```

### Rendering

```javascript
// Render paper cards to the grid
renderPapers(papers: Array): void
// Example: renderPapers(papersData)

// Render featured papers section
renderFeatured(): void

// Render trending papers section
renderTrending(): void
```

### Difficulty Voting

```javascript
// Vote on paper difficulty
voteDifficulty(level: String): void
// Example: voteDifficulty('Hard')
// level: "Easy", "Medium", or "Hard"
```

### Theme

```javascript
// Toggle dark/light mode
toggleDarkMode(): void

// Preference is saved to localStorage
```

## Local Storage Keys

```javascript
// Dark mode preference
localStorage.getItem('darkMode')          // 'true' or 'false'

// Search history
localStorage.getItem('searchHistory')     // JSON array of search terms
```

## PDF.js Integration

The application uses PDF.js (v3.11.174) via CDN for PDF preview functionality.

### PDF Viewer Variables

```javascript
let pdfDoc = null;                    // Current PDF document
let pageNum = 1;                      // Current page number
let pageRendering = false;            // Rendering in progress flag
let pageNumPending = null;            // Pending page to render
```

### PDF Rendering Functions

```javascript
// Render specific page to canvas
renderPage(num: Number): void

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = '...'
```

## Adding New Papers (Programmatic)

### Step 1: Add Paper Object

```javascript
// In js/script.js, find the papersData array and add:
{
    id: 13,                                    // Next ID
    title: "Your Paper Title",
    subject: "Mathematics",                    // Must be valid subject
    level: "Grade 10",                         // Must be valid level
    description: "Brief description",
    author: "Your Name",
    year: 2026,
    downloads: 0,
    rating: 4.5,
    featured: false,                           // Set true for hero section
    pages: 45,
    difficulty: "Medium",
    pdfUrl: "papers/mathematics/your-paper.pdf",  // Relative path
    url: "#"
}
```

### Step 2: Upload PDF

Place the PDF file at the specified `pdfUrl` path:
```
papers/mathematics/your-paper.pdf
```

### Step 3: Commit & Push

```bash
git add papers/ js/script.js
git commit -m "Add: Your Paper Title"
git push
```

## Filtering Logic

### Combined Filters

When multiple filters are active:

```javascript
// Subject + Level filter
filteredPapers = papersData.filter(p => 
    p.subject === currentSubject && p.level === currentLevel
);

// Search + Subject filter
filteredPapers = papersData.filter(p =>
    p.subject === currentSubject &&
    (p.title.includes(searchTerm) || p.description.includes(searchTerm))
);

// Advanced filters (Rating + Year + Difficulty)
filteredPapers = papersData.filter(p =>
    p.rating >= minRating &&
    p.year === selectedYear &&
    p.difficulty === selectedDifficulty
);
```

## Sorting Logic

```javascript
// By downloads (descending)
papers.sort((a, b) => b.downloads - a.downloads)

// By rating (descending)
papers.sort((a, b) => b.rating - a.rating)

// By year (descending - newest first)
papers.sort((a, b) => b.year - a.year)

// By title (ascending - A to Z)
papers.sort((a, b) => a.title.localeCompare(b.title))
```

## Error Handling

### PDF Loading Errors

```javascript
pdfjsLib.getDocument(pdfUrl).promise
    .then(pdf => { /* success */ })
    .catch(error => {
        console.error('PDF Error:', error);
        alert('Could not load PDF preview...');
    });
```

### File Not Found

If a `pdfUrl` points to a non-existent file, the preview will show an error message and offer the download option.

## Performance Considerations

- PDFs are loaded on-demand (not on page load)
- Large PDFs (>50MB) may take time to load
- PDF.js renders only the current page (memory efficient)
- Search history is limited to last 5 items
- Batch operations limited to visible filtered papers

## Future API Enhancements

Planned additions:
- Backend database integration
- User authentication
- Comments and ratings system
- Paper upload interface
- Analytics tracking
- Multi-language support
