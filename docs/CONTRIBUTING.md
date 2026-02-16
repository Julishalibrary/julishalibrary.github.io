# Contributing to Julisha Library 📚

Thank you for considering contributing to Julisha Library! We appreciate your effort in helping make quality education resources accessible to everyone.

## How to Contribute Papers

### Step 1: Prepare Your Paper
- Ensure the paper is in **PDF format**
- Format: `Subject-Grade/Form-TopicName.pdf`
- Example: `Mathematics-Grade10-Algebra.pdf`
- Maximum file size: 50MB recommended

### Step 2: Organize by Subject
Place your PDF in the appropriate subject folder under `/papers/`:

```
papers/
├── mathematics/
├── physics/
├── chemistry/
├── biology/
├── english/
├── history/
└── geography/
```

### Step 3: Update Papers Data
Edit `js/script.js` and add your paper to the `papersData` array:

```javascript
{
    id: 13,
    title: "Your Paper Title",
    subject: "Mathematics",
    level: "Grade 10",
    description: "Brief description of your paper",
    author: "Your Name",
    year: 2026,
    downloads: 0,
    rating: 0,
    featured: false,
    pages: 50,
    difficulty: "Medium",
    pdfUrl: "papers/mathematics/your-paper-name.pdf",
    url: "#"
}
```

### Step 4: Submit a Pull Request
1. Fork the repository
2. Create a new branch: `git checkout -b add-paper-name`
3. Commit your changes: `git commit -m "Add: Your Paper Title"`
4. Push to your fork: `git push origin add-paper-name`
5. Open a Pull Request describing your contribution

## Paper Guidelines

### Quality Standards
- ✅ Well-structured and comprehensive
- ✅ Accurate and up-to-date content
- ✅ Clear formatting and readability
- ✅ Relevant to the specified grade/form level

### Paper Fields Explained

| Field | Description | Example |
|-------|-------------|---------|
| `title` | Paper title | "Algebra Fundamentals" |
| `subject` | Academic subject | "Mathematics" |
| `level` | Grade or Form | "Grade 10" or "Form 3" |
| `description` | Brief summary (1-2 lines) | "Complete guide to equations" |
| `author` | Creator name | "Dr. Smith" |
| `year` | Publication year | 2026 |
| `pages` | Number of pages | 42 |
| `difficulty` | Skill level | "Easy", "Medium", or "Hard" |
| `pdfUrl` | Path to PDF file | "papers/mathematics/algebra.pdf" |

## Types of Contributions

We welcome:
- ✅ New revision papers
- ✅ Study guides
- ✅ Practice problems
- ✅ Past exam papers
- ✅ Cheat sheets
- ✅ Summary notes
- ✅ Bug fixes
- ✅ Feature suggestions

## Code Contributions

If you want to contribute code improvements:

1. Test your changes locally
2. Ensure compatibility with modern browsers
3. Follow the existing code style
4. Add comments for complex logic
5. Update documentation if needed

## File Structure for Submissions

```
Your Contribution:
├── Paper (PDF)
│   └── papers/
│       └── subject/
│           └── paper-name.pdf
└── Changes to js/script.js
    └── Added entry in papersData array
```

## Reporting Issues

Found a problem? Please create an issue with:
- Description of the problem
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if applicable
- Browser/device information

## Code of Conduct

Be respectful, inclusive, and professional. We're building a community around education!

## Questions?

Have questions about contributing? Open an issue or check the main README.md

Happy contributing! 🚀
