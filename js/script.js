// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Sample Papers Data
const papersData = [
    {
        id: 1,
        title: "KLB Biology Form 4",
        subject: "Biology",
        level: "Form 4",
        description: "Complete KLB Biology Form 4 study guide",
        author: "KLB Publishers",
        downloads: 0,
        rating: 0,
        pages: 0,
        difficulty: "Hard",
        year: 2026,

        pdfUrl: "papers/biology/klb-biology-form-4.pdf"
    },
    {
        id: 2,
        title: "Form 4 Additional Mathematics Revision",
        subject: "Mathematics",
        level: "Form 4",
        description: "Complete revision questions for Form 4 Additional Mathematics",
        author: "Mathematics Department",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 0,
        difficulty: "Hard",
        pdfUrl: "papers/mathematics/form-4-additional-mathematics.pdf"
    },
    {
        id: 3,
        title: "Physics Form 1 Questions",
        subject: "Physics",
        level: "Form 1",
        description: "Comprehensive practice questions for Form 1 Physics",
        author: "Education Materials",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 0,
        difficulty: "Medium",
        pdfUrl: "papers/physics/physics-form-1-questions.pdf",
        url: "#"
    },
    {
        id: 16,
        title: "Kiswahili Form 2 Question Paper",
        subject: "Kiswahili",
        level: "Form 2",
        description: "Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 30,
        difficulty: "Medium",
        pdfUrl: "papers/kiswahili/Kiswahili - Kiswahili Form 2 - Zeraki Achievers 3.0 - Question Paper (3).pdf",
        url: "#"
    },
    {
        id: 17,
        title: "Kiswahili Form 2 Question Paper (alt)",
        subject: "Kiswahili",
        level: "Form 2",
        description: "Alternate Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 28,
        difficulty: "Medium",
        pdfUrl: "papers/kiswahili/Kiswahili - Kiswahili Form 2 - Zeraki Achievers 3.0 - Question Paper (4).pdf",
        url: "#"
    },
    {
        id: 18,
        title: "Kiswahili Form 2 Marking Scheme",
        subject: "Kiswahili",
        level: "Form 2",
        description: "Marking scheme for Zeraki Achievers paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 15,
        difficulty: "Easy",
        pdfUrl: "papers/kiswahili/Kiswahili - Kiswahili Form 2 - Zeraki Achievers 3.0 - Marking Scheme.pdf",
        url: "#"
    },
    {
        id: 19,
        title: "English Form 1 Question Paper",
        subject: "English",
        level: "Form 1",
        description: "Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 32,
        difficulty: "Medium",
        pdfUrl: "papers/english/English - English Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf",
        url: "#"
    },
    {
        id: 20,
        title: "English Form 1 Marking Scheme",
        subject: "English",
        level: "Form 1",
        description: "Marking scheme for Form 1 paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 12,
        difficulty: "Easy",
        pdfUrl: "papers/english/English - English Form 1 - Zeraki Achievers 3.0 - Marking Scheme.pdf",
        url: "#"
    },
    {
        id: 21,
        title: "History Form 2 Question Paper",
        subject: "History",
        level: "Form 2",
        description: "Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 28,
        difficulty: "Medium",
        pdfUrl: "papers/history/History - History Form 2 - Zeraki Achievers 3.0 - Question Paper.pdf",
        url: "#"
    },
    {
        id: 22,
        title: "History Form 2 Marking Scheme",
        subject: "History",
        level: "Form 2",
        description: "Answer scheme for Form 2 history",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 10,
        difficulty: "Easy",
        pdfUrl: "papers/history/History - History Form 2 - Zeraki Achievers 3.0 - Marking Scheme.pdf",
        url: "#"
    },
    {
        id: 23,
        title: "Chemistry Form 1 Question Paper",
        subject: "Chemistry",
        level: "Form 1",
        description: "Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 30,
        difficulty: "Medium",
        pdfUrl: "papers/chemistry/Chemistry - Chemistry Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf",
        url: "#"
    },
    {
        id: 24,
        title: "Chemistry Form 1 Marking Scheme",
        subject: "Chemistry",
        level: "Form 1",
        description: "Marking scheme document",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 8,
        difficulty: "Easy",
        pdfUrl: "papers/chemistry/Chemistry - Chemistry Form 1 - Zeraki Achievers 3.0 - Marking Scheme.pdf",
        url: "#"
    },
    {
        id: 25,
        title: "Physics Form 1 Zeraki Question Paper",
        subject: "Physics",
        level: "Form 1",
        description: "Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 26,
        difficulty: "Medium",
        pdfUrl: "papers/physics/Physics - Physics Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf",
        url: "#"
    },
    {
        id: 26,
        title: "Physics Form 1 Questions PR",
        subject: "Physics",
        level: "Form 1",
        description: "Practice questions (PR version)",
        author: "Education Materials",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 25,
        difficulty: "Medium",
        pdfUrl: "papers/physics/physics-form-1-questions-pr_520d9ac7b7fa7a1d30494b7bd8d8beb1.pdf",
        url: "#"
    },
    {
        id: 27,
        title: "Mathematics Form 2 Question Paper",
        subject: "Mathematics",
        level: "Form 2",
        description: "Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 34,
        difficulty: "Medium",
        pdfUrl: "papers/mathematics/Mathematics - Mathematics Form 2 - Zeraki Achievers 3.0 - Question Paper.pdf",
        url: "#"
    },
    {
        id: 28,
        title: "Biology Form 1 Question Paper",
        subject: "Biology",
        level: "Form 1",
        description: "Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 22,
        difficulty: "Medium",
        pdfUrl: "papers/biology/Biology - Biology Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf",
        url: "#"
    },
    {
        id: 29,
        title: "Geography Form 1 Question Paper",
        subject: "Geography",
        level: "Form 1",
        description: "Zeraki Achievers 3.0 question paper",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 28,
        difficulty: "Medium",
        pdfUrl: "papers/geography/Geography - Geography Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf",
        url: "#"
    },
    {
        id: 30,
        title: "Geography Form 1 Marking Scheme",
        subject: "Geography",
        level: "Form 1",
        description: "Answer scheme document",
        author: "Zeraki Achievers",
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 12,
        difficulty: "Easy",
        pdfUrl: "papers/geography/Geography - Geography Form 1 - Zeraki Achievers 3.0 - Marking Scheme.pdf",
        url: "#"
    }
];
let currentPreviewedPaper = null;

// --- 3. CORE FUNCTIONS ---

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    renderPapers(papersData);
});

// Fix: The Subject Filter Functionality
function filterBySubject(subject) {
    // 1. Update the search bar text so the user knows what is being filtered
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = subject;

    // 2. Scroll smoothly to the papers section
    document.getElementById('papers').scrollIntoView({ behavior: 'smooth' });

    // 3. Filter the data array
    const filtered = papersData.filter(paper => paper.subject.toLowerCase() === subject.toLowerCase());
    
    // 4. Render the newly filtered list
    renderPapers(filtered);
}

// Search Bar Filter
function filterPapers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = papersData.filter(paper => 
        paper.title.toLowerCase().includes(searchTerm) || 
        paper.subject.toLowerCase().includes(searchTerm) ||
        paper.description.toLowerCase().includes(searchTerm)
    );
    
    renderPapers(filtered);
}

// Fix: Error-free Render Function
function renderPapers(papersToRender) {
    const papersGrid = document.getElementById('papersGrid');
    if (!papersGrid) return;

    papersGrid.innerHTML = ''; // Clear current grid

    if (papersToRender.length === 0) {
        papersGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; font-weight:bold;">No papers found for this search.</p>';
        return;
    }

    papersToRender.forEach(paper => {
        // Safe fallbacks prevent "undefined" errors on the frontend
        const rating = paper.rating || 0;
        const downloads = paper.downloads || 0;
        const description = paper.description || "No description available.";
        
        const card = document.createElement('div');
        card.className = 'paper-card';
        card.onclick = () => previewPaper(paper.id);

        card.innerHTML = `
            <span class="paper-subject">${paper.subject}</span>
            <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${paper.title}</h3>
            <p style="font-size: 0.9rem; color: #666; margin-bottom: 1rem;">${description}</p>
            <div class="paper-stats">
                <span style="color: var(--text-color);">⭐ ${rating}</span>
                <span style="color: var(--text-color);">📥 ${downloads}</span>
            </div>
            <button class="download-btn" onclick="downloadPaper(event, '${paper.pdfUrl}', '${paper.title}')">
                📥 Download
            </button>
        `;
        papersGrid.appendChild(card);
    });
}

// Modal Logic
function previewPaper(id) {
    const paper = papersData.find(p => p.id === id);
    if (!paper) return;

    currentPreviewedPaper = paper;
    
    document.getElementById('previewTitle').textContent = paper.title;
    document.getElementById('previewDescription').textContent = paper.description || "No description provided.";
    document.getElementById('previewModal').style.display = 'flex';
}

function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
    currentPreviewedPaper = null;
}

// Download Logic
function downloadPaper(event, pdfUrl, title) {
    if (event) event.stopPropagation();
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title.replace(/\s+/g, '-').toLowerCase() + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadPreviewedPaper() {
    if (currentPreviewedPaper) {
        downloadPaper(null, currentPreviewedPaper.pdfUrl, currentPreviewedPaper.title);
    }
}

// New Sharing Feature Logic (Safe Placeholder)
function shareViaEmail() {
    if (currentPreviewedPaper) {
        const subject = encodeURIComponent(`Check out this revision paper: ${currentPreviewedPaper.title}`);
        const body = encodeURIComponent(`I found this great resource on Julisha Library:\n\nTitle: ${currentPreviewedPaper.title}\nLink: https://julishalibrary.github.io/`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    }
}

// Close Modal when clicking outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('previewModal');
    if (event.target === modal) {
        closePreview();
    }
}
