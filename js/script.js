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
        title: "Algebra Fundamentals",
        subject: "Mathematics",
        level: "Grade 10",
        description: "Complete guide to algebraic equations and functions",
        author: "Dr. Smith",
        year: 2025,
        downloads: 245,
        rating: 4.8,
        pages: 42,
        difficulty: "Medium",
        pdfUrl: "papers/mathematics/algebra-fundamentals.pdf",
        url: "#"
    },
    {
        id: 2,
        title: "Mechanics and Motion",
        subject: "Physics",
        level: "Form 3",
        description: "Comprehensive study of forces, motion, and energy",
        author: "Prof. Johnson",
        year: 2026,
        downloads: 312,
        rating: 4.9,
        pages: 56,
        difficulty: "Hard",
        pdfUrl: "papers/physics/mechanics-motion.pdf",
        url: "#"
    },
    {
        id: 3,
        title: "Organic Chemistry",
        subject: "Chemistry",
        level: "Form 4",
        description: "Understanding organic compounds and reactions",
        author: "Dr. Brown",
        year: 2025,
        downloads: 189,
        rating: 4.7,
        pages: 48,
        difficulty: "Hard",
        pdfUrl: "papers/chemistry/organic-chemistry.pdf",
        url: "#"
    },
    {
        id: 4,
        title: "Cell Biology",
        subject: "Biology",
        level: "Grade 11",
        description: "Structure and function of cells",
        author: "Dr. Wilson",
        year: 2026,
        downloads: 267,
        rating: 4.8,
        pages: 38,
        difficulty: "Medium",
        pdfUrl: "papers/biology/cell-biology.pdf",
        url: "#"
    },
    {
        id: 5,
        title: "Shakespeare's Works",
        subject: "English",
        level: "Grade 12",
        description: "Analysis of Shakespeare's major plays and sonnets",
        author: "Prof. Davis",
        year: 2025,
        downloads: 142,
        rating: 4.6,
        pages: 64,
        difficulty: "Medium",
        pdfUrl: "papers/english/shakespeare-works.pdf",
        url: "#"
    },
    {
        id: 6,
        title: "World War II",
        subject: "History",
        level: "Form 2",
        description: "Causes, events, and consequences of WWII",
        author: "Dr. Miller",
        year: 2025,
        downloads: 198,
        rating: 4.7,
        pages: 52,
        difficulty: "Easy",
        pdfUrl: "papers/history/world-war-2.pdf",
        url: "#"
    },
    {
        id: 7,
        title: "Geometry and Trigonometry",
        subject: "Mathematics",
        level: "Form 3",
        description: "Shapes, angles, and trigonometric functions",
        author: "Dr. Smith",
        year: 2026,
        downloads: 223,
        rating: 4.8,
        pages: 50,
        difficulty: "Medium",
        pdfUrl: "papers/mathematics/geometry-trigonometry.pdf",
        url: "#"
    },
    {
        id: 8,
        title: "Thermodynamics",
        subject: "Physics",
        level: "Grade 12",
        description: "Heat, temperature, and entropy concepts",
        author: "Prof. Johnson",
        year: 2026,
        downloads: 276,
        rating: 4.8,
        pages: 44,
        difficulty: "Hard",
        pdfUrl: "papers/physics/thermodynamics.pdf",
        url: "#"
    },
    {
        id: 9,
        title: "Periodic Table",
        subject: "Chemistry",
        level: "Form 1",
        description: "Elements, atomic structure, and chemical bonding",
        author: "Dr. Brown",
        year: 2026,
        downloads: 289,
        rating: 4.9,
        pages: 36,
        difficulty: "Easy",
        pdfUrl: "papers/chemistry/periodic-table.pdf",
        url: "#"
    },
    {
        id: 10,
        title: "Physics Form 1 Questions",
        subject: "Physics",
        level: "Form 1",
        description: "Comprehensive practice questions for Form 1 Physics",
        author: "Education Materials",
        year: 2026,
        downloads: 145,
        rating: 4.8,
        pages: 25,
        difficulty: "Medium",
        pdfUrl: "papers/physics/physics-form-1-questions.pdf",
        url: "#"
    },
    {
        id: 11,
        title: "Form 4 Additional Mathematics Revision",
        subject: "Mathematics",
        level: "Form 4",
        description: "Complete revision questions for Form 4 Additional Mathematics",
        author: "Mathematics Department",
        year: 2026,
        downloads: 267,
        rating: 4.9,
        pages: 28,
        difficulty: "Hard",
        pdfUrl: "papers/mathematics/form-4-additional-mathematics.pdf",
        url: "#"
    },
    {
        id: 12,
        title: "KLB Biology Form 4",
        subject: "Biology",
        level: "Form 4",
        description: "Complete KLB Biology Form 4 study guide",
        author: "KLB Publishers",
        year: 2026,
        downloads: 389,
        rating: 4.9,
        pages: 180,
        difficulty: "Hard",
        pdfUrl: "papers/biology/klb-biology-form-4.pdf",
        url: "#"
    },
    {
        id: 13,
        title: "Evolution and Genetics",
        subject: "Biology",
        level: "Form 4",
        description: "Darwin's theory and inheritance patterns",
        author: "Dr. Wilson",
        year: 2025,
        downloads: 201,
        rating: 4.7,
        pages: 50,
        difficulty: "Hard",
        pdfUrl: "papers/biology/evolution-genetics.pdf",
        url: "#"
    },
    {
        id: 14,
        title: "Grammar and Composition",
        subject: "English",
        level: "Grade 9",
        description: "English language rules and writing techniques",
        author: "Prof. Davis",
        year: 2025,
        downloads: 167,
        rating: 4.6,
        pages: 44,
        difficulty: "Easy",
        pdfUrl: "papers/english/grammar-composition.pdf",
        url: "#"
    },
    {
        id: 15,
        title: "Ancient Civilizations",
        subject: "History",
        level: "Grade 10",
        description: "Egyptian, Greek, and Roman history",
        author: "Dr. Miller",
        year: 2026,
        downloads: 234,
        rating: 4.8,
        pages: 58,
        difficulty: "Medium",
        pdfUrl: "papers/history/ancient-civilizations.pdf",
        url: "#"
    }
];

let currentPreviewedPaper = null;
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;

// Add PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderPapers(papersData);
});

/**
 * Render all papers
 */
function renderPapers(papers) {
    const papersGrid = document.getElementById('papersGrid');
    
    if (papers.length === 0) {
        papersGrid.innerHTML = '<div class="empty-state"><p>No papers found. Try different filters.</p></div>';
        return;
    }

    papersGrid.innerHTML = papers.map(paper => `
        <div class="paper-card" onclick="previewPaper(${paper.id})">
            <div class="paper-header">
                <div class="paper-tags">
                    <span class="paper-subject">${paper.subject}</span>
                    <span class="paper-level">${paper.level}</span>
                </div>
                <h3>${paper.title}</h3>
            </div>
            <div class="paper-body">
                <p class="paper-description">${paper.description}</p>
                <div class="paper-meta">
                    <span class="rating">⭐ ${paper.rating}</span>
                    <span class="downloads">📥 ${paper.downloads}</span>
                </div>
                <button class="download-btn" onclick="downloadPaper(event, '${paper.pdfUrl}', '${paper.title}')">
                    📥 Download
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Filter papers by search
 */
let currentSubjectFilter = 'All';
let currentLevelFilter = 'All';

function filterPapers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = papersData.filter(paper => {
        const matchesSearch = paper.title.toLowerCase().includes(searchTerm) ||
                            paper.description.toLowerCase().includes(searchTerm);
        const matchesSubject = currentSubjectFilter === 'All' || paper.subject === currentSubjectFilter;
        const matchesLevel = currentLevelFilter === 'All' || paper.level === currentLevelFilter;
        
        return matchesSearch && matchesSubject && matchesLevel;
    });
    
    renderPapers(filtered);
}

/**
 * Filter by subject
 */
function filterBySubject(subject) {
    currentSubjectFilter = subject;
    filterPapers();
    document.getElementById('searchInput').scrollIntoView({behavior: 'smooth'});
}

/**
 * Filter by level
 */
function filterByLevel(level) {
    currentLevelFilter = level;
    filterPapers();
    document.getElementById('searchInput').scrollIntoView({behavior: 'smooth'});
}

/**
 * Preview paper
 */
function previewPaper(paperId) {
    const paper = papersData.find(p => p.id === paperId);
    if (!paper) return;
    
    currentPreviewedPaper = paper;
    
    document.getElementById('previewTitle').textContent = paper.title;
    document.getElementById('previewAuthor').textContent = `By: ${paper.author}`;
    document.getElementById('previewPages').textContent = `${paper.pages} pages`;
    document.getElementById('previewDescription').textContent = paper.description;
    
    document.getElementById('previewModal').style.display = 'flex';
    
    // Load PDF preview
    loadPDF(paper.pdfUrl);
}

/**
 * Close preview
 */
function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
    pdfDoc = null;
    pageNum = 1;
}

/**
 * Load PDF
 */
function loadPDF(url) {
    const pdfViewerSection = document.getElementById('pdfViewerSection');
    
    pdfjsLib.getDocument(url).promise.then(function(pdf) {
        pdfDoc = pdf;
        document.getElementById('totalPages').textContent = pdf.numPages;
        pdfViewerSection.style.display = 'block';
        renderPage(pageNum);
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
        pdfViewerSection.innerHTML = '<p>Unable to load PDF preview. Download to view.</p>';
    });
}

/**
 * Render PDF page
 */
function renderPage(num) {
    if (!pdfDoc) return;
    
    pageRendering = true;
    pdfDoc.getPage(num).then(function(page) {
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({scale: 1.5});
        
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };
        
        page.render(renderContext).promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });
    
    document.getElementById('currentPage').textContent = num;
}

/**
 * Next page
 */
function nextPage() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNumPending = pageNum + 1;
    if (!pageRendering) {
        renderPage(pageNumPending);
        pageNumPending = null;
    }
    pageNum++;
}

/**
 * Previous page
 */
function previousPage() {
    if (pageNum <= 1) return;
    pageNumPending = pageNum - 1;
    if (!pageRendering) {
        renderPage(pageNumPending);
        pageNumPending = null;
    }
    pageNum--;
}

/**
 * Download paper
 */
function downloadPaper(event, pdfUrl, title) {
    if (event) {
        event.stopPropagation();
    }
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title.replace(/\s+/g, '-').toLowerCase() + '.pdf';
    link.click();
}

/**
 * Download from preview
 */
function downloadPreviewedPaper() {
    if (currentPreviewedPaper) {
        downloadPaper(null, currentPreviewedPaper.pdfUrl, currentPreviewedPaper.title);
    }
}
