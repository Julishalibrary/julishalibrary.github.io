# Adding Papers to Julisha Library

## Three Ways to Add Papers

### 1️⃣ Quick Manual Method (Add to papersData)

The easiest way to add a single paper is to edit `js/script.js` directly:

**Step 1:** Open `js/script.js` and find the `papersData` array
**Step 2:** Add a new object to the array:

```javascript
{
    id: 13,
    title: "Quadratic Equations",
    subject: "Mathematics",
    level: "Grade 9",
    description: "Master quadratic equations and factoring techniques",
    author: "Your Name",
    year: 2026,
    downloads: 0,
    rating: 5.0,
    featured: false,
    pages: 35,
    difficulty: "Medium",
    pdfUrl: "papers/mathematics/quadratic-equations.pdf",
    url: "#"
}
```

**Step 3:** Place your PDF file at `papers/mathematics/quadratic-equations.pdf`
**Step 4:** Push to GitHub

---

## 2️⃣ Batch Import Method (CSV to JSON)

For adding multiple papers at once, use the CSV import tool.

### CSV Format

Create a file named `papers_import.csv`:

```csv
Title,Subject,Level,Description,Author,Year,Pages,Difficulty,PDF_Path,Featured
Photosynthesis,Biology,Form 1,Process of photosynthesis in plants,Dr. Green,2026,40,Easy,papers/biology/photosynthesis.pdf,false
Calculus Basics,Mathematics,Grade 12,Introduction to differential and integral calculus,Prof. Math,2026,65,Hard,papers/mathematics/calculus-basics.pdf,true
French Revolution,History,Form 3,Causes and consequences of the French Revolution,Dr. History,2025,55,Medium,papers/history/french-revolution.pdf,false
```

### Using the Import Tool

```bash
node docs/csv-to-papers.js papers_import.csv
```

This will:
1. Generate JavaScript code for pasting into `script.js`
2. Create the JSON structure automatically
3. Give you the correct next ID

---

## 3️⃣ User Submission Portal (On Website)

Users can submit papers directly through the website:

1. Navigate to the **"Submit a Paper"** section
2. Fill out the form with:
   - **Paper Title**
   - **Subject** (dropdown)
   - **Grade/Form Level** (dropdown)
   - **Description**
   - **Your Name/Email**
   - **PDF File** (upload)

3. Submit the form

### Processing User Submissions

Submissions are stored in browser localStorage as:
- Email: `submissions_email`
- Papers list: `submissions_papers`

**To view and process submissions:**

```javascript
// In browser console:
JSON.parse(localStorage.getItem('submissions_papers'))
```

**To add a submitted paper:**

1. Review the submission
2. Download the PDF and place it in `/papers/subject-folder/`
3. Add the paper data to `papersData` in `script.js`
4. Commit and push

---

## Paper Data Structure Reference

### Required Fields

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| `id` | Number | Unique identifier (increment for each paper) | `15` |
| `title` | String | Paper title | `"Quadratic Equations"` |
| `subject` | String | Subject area | `"Mathematics"` |
| `level` | String | Grade/Form | `"Grade 10"` |
| `description` | String | Brief summary | `"Master quadratic equations..."` |
| `author` | String | Paper author/creator | `"Dr. Smith"` |
| `year` | Number | Publication year | `2026` |
| `downloads` | Number | Download count | `0` |
| `rating` | Number | Average rating (0-5) | `4.8` |
| `featured` | Boolean | Featured paper? | `true` |
| `pages` | Number | Page count | `42` |
| `difficulty` | String | "Easy", "Medium", or "Hard" | `"Medium"` |
| `pdfUrl` | String | Path to PDF file | `"papers/math/file.pdf"` |
| `url` | String | External link (use "#") | `"#"` |

---

## File Organization

```
papers/
├── mathematics/
│   ├── algebra-fundamentals.pdf
│   ├── geometry-trigonometry.pdf
│   └── quadratic-equations.pdf
├── physics/
│   ├── mechanics-motion.pdf
│   └── waves-optics.pdf
├── chemistry/
│   ├── organic-chemistry.pdf
│   └── periodic-table.pdf
├── biology/
│   ├── cell-biology.pdf
│   └── photosynthesis.pdf
├── english/
│   └── shakespeare-works.pdf
├── history/
│   └── world-war-2.pdf
└── geography/
    └── [geography papers]
```

---

## Subjects & Levels Supported

### Subjects
- Mathematics
- Physics
- Chemistry
- Biology
- English
- History
- Geography
- Kiswahili (optional)

### Levels (Kenyan Curriculum)
- Grade 1-12 (Elementary through High School)
- Form 1-4 (Secondary/High School)

---

## Tips for Best Results

✅ **DO:**
- Use descriptive titles (e.g., "Quadratic Equations" not "Math 4")
- Add accurate page counts
- Set `featured: true` for popular/highest quality papers
- Use clear, professional descriptions
- Include author names when known

❌ **DON'T:**
- Use duplicate IDs
- Leave description blank
- Use inappropriate content
- Add copyright-protected material without permission
- Mix file naming conventions (use hyphens: `file-name.pdf`)

---

## Automation Script: Add Papers from CSV

See [csv-to-papers.js](../docs/csv-to-papers.js) for automated conversion tool.

### Usage:

```bash
# Single file
node docs/csv-to-papers.js papers_import.csv

# Output will show:
# - JavaScript code ready to paste
# - Next available ID
# - Validation errors (if any)
```

---

## Adding Images for Papers (Optional)

If you want to add cover images for papers:

1. Save image as `papers/subject/paper-cover.jpg`
2. Update papersData to include thumbnail URL
3. Update renderPapers() to display the image

```javascript
{
    ...
    thumbnailUrl: "papers/mathematics/algebra-cover.jpg",
    ...
}
```

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Paper not showing | Check PDF path is correct, ID is unique |
| Subject not filtering | Ensure subject name exactly matches dropdown |
| Download not working | Verify PDF file exists at specified path |
| Rating shows 0 | Set initial rating in data (e.g., 4.5) |

---

## Next Steps

1. **Add 5-10 sample papers** to start with variety
2. **Configure GitHub Pages** to deploy live
3. **Share submission link** with educators
4. **Review submissions weekly** and process quality papers
5. **Update documentation** as you add new subjects

---

For questions, see [CONTRIBUTING.md](./CONTRIBUTING.md)
