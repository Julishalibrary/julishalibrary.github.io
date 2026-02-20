# Julisha Library 📚

A free, open-source platform for hosting and accessing revision papers and study materials. Built with HTML, CSS, and JavaScript, and hosted on GitHub Pages.

## 🌟 Features

- **Completely Free**: All materials are free to access and download
- **Multiple Subjects**: Browse papers across Mathematics, Physics, Chemistry, Biology, English, History, and more
- **Search & Filter**: Easily search for papers by title or topic
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required
- **Easy to Deploy**: Hosted on GitHub Pages at no cost
- **Community-Driven**: Easy to contribute new papers and materials

## 🚀 Quick Start

### Deploy to GitHub Pages (Recommended)

1. **Fork or Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Julisha-Library.git
   cd Julisha-Library
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages** (left sidebar)
   - Under "Source", select the branch (usually `main`) and folder (`/code`)
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/Julisha-Library`

3. **Custom Domain (Optional)**
   - In GitHub Pages settings, add your custom domain
   - Update your domain's DNS settings to point to GitHub Pages

### Option 2: Run Locally

Simply open `code/index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server code
```

Then visit `http://localhost:8000/code/`

## 📁 Project Structure

```
Julisha-Library/
├── code/
│   ├── index.html      # Main HTML file
│   ├── style.css       # Complete styling
│   └── script.js       # Interactivity and data
├── README.md           # This file
└── LICENSE             # MIT License
```

## 📚 How to Add Papers

Edit the `code/script.js` file and add papers to the `papersData` array:

```javascript
{
    id: 13,
    title: "Your Paper Title",
    subject: "Subject Name",
    description: "Brief description of the paper",
    author: "Author Name",
    year: 2026,
    url: "#"  // Link to PDF file when added
}
```

### To Add Download Functionality:

1. Create a `files/` directory in the `code/` folder
2. Add your PDF files there
3. Update the `url` field: `"url": "files/paper-name.pdf"`
4. Update the `downloadPaper()` function in `script.js`:

```javascript
function downloadPaper(title) {
    const paperMap = {
        "Paper Title": "files/paper-name.pdf"
    };
    window.location.href = paperMap[title] || "#";
}
```

## 🎨 Customization

### Change Colors

Edit the CSS variables in `code/style.css`:

```css
:root {
    --primary-color: #3b82f6;      /* Change blue */
    --secondary-color: #1e40af;    /* Change dark blue */
    --accent-color: #f59e0b;       /* Change orange */
}
```

### Change Site Title

Edit the line in `code/index.html`:
```html
<h1>📚 Julisha Library</h1>
```

### Add New Subjects

1. Add a button in the filter section (`index.html`):
   ```html
   <button class="tag" onclick="filterBySubject('NewSubject')">New Subject</button>
   ```

2. Add a subject card (`index.html`):
   ```html
   <div class="subject-card" onclick="filterBySubject('NewSubject')">
       <h3>📊 New Subject</h3>
       <p>Description here</p>
   </div>
   ```

## 🔧 Advanced Configuration

### Update GitHub Pages Link in Footer

Edit `code/index.html` and update:
```html
<a href="https://github.com/yourusername/Julisha-Library">View on GitHub</a>
```

### Add Google Analytics (Optional)

Add this to the `<head>` section of `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

## 📋 Available Subjects

- 📐 Mathematics (Algebra, Geometry, Calculus)
- ⚛️ Physics (Mechanics, Thermodynamics, Waves)
- 🧪 Chemistry (Organic, Inorganic, Physical)
- 🦠 Biology (Cells, Genetics, Evolution)
- 📖 English (Literature, Grammar, Composition)
- 🏛️ History (World History, Civilizations)
- 🌍 Geography (available to add)
- And more...

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch for your changes
3. Make improvements or add new papers
4. Submit a pull request with a clear description

## 💡 Suggestions for Expansion

- Implement user accounts and collections
- Add PDF upload functionality
- Create a contribution form for community submissions
- Add email notifications for new papers
- Implement a rating system
- Add support for multiple languages
- Create mobile app version

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for students worldwide
- Inspired by platforms like StudyUCO

## 📞 Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Check existing issues first to avoid duplicates

## 🌐 Live Demo

Visit the live version at: [https://julishalibrary.github.io/]

---

**Made with ❤️ to make education accessible to everyone**
