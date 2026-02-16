// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Load saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Sample Papers Data - You can add more papers here
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
        featured: true,
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
        featured: true,
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
        featured: false,
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
        featured: false,
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
        featured: false,
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
        featured: false,
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
        featured: false,
        pages: 45,
        difficulty: "Hard",
        pdfUrl: "papers/mathematics/geometry-trigonometry.pdf",
        url: "#"
    },
    {
        id: 8,
        title: "Thermodynamics",
        subject: "Physics",
        level: "Grade 11",
        description: "Heat, temperature, and energy transfer",
        author: "Prof. Johnson",
        year: 2025,
        downloads: 156,
        rating: 4.5,
        featured: false,
        pages: 40,
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
        featured: true,
        pages: 36,
        difficulty: "Easy",
        pdfUrl: "papers/chemistry/periodic-table.pdf",
        url: "#"
    },
    {
        id: 10,
        title: "Evolution and Genetics",
        subject: "Biology",
        level: "Form 4",
        description: "Darwin's theory and inheritance patterns",
        author: "Dr. Wilson",
        year: 2025,
        downloads: 201,
        rating: 4.7,
        featured: false,
        pages: 50,
        difficulty: "Hard",
        pdfUrl: "papers/biology/evolution-genetics.pdf",
        url: "#"
    },
    {
        id: 11,
        title: "Grammar and Composition",
        subject: "English",
        level: "Grade 9",
        description: "English language rules and writing techniques",
        author: "Prof. Davis",
        year: 2025,
        downloads: 167,
        rating: 4.6,
        featured: false,
        pages: 44,
        difficulty: "Easy",
        pdfUrl: "papers/english/grammar-composition.pdf",
        url: "#"
    },
    {
        id: 12,
        title: "Ancient Civilizations",
        subject: "History",
        level: "Grade 10",
        description: "Egyptian, Greek, and Roman history",
        author: "Dr. Miller",
        year: 2026,
        downloads: 234,
        rating: 4.8,
        featured: false,
        pages: 58,
        difficulty: "Medium",
        pdfUrl: "papers/history/ancient-civilizations.pdf",
        url: "#"
    }
];

// Global filter state
let currentFilter = 'All';
let filteredPapers = [...papersData];
let selectedPapers = [];
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let currentPreviewedPaper = null;

// PDF Viewer State
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderFeatured();
    renderTrending();
    renderPapers(papersData);
    displaySearchHistory();
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            alert('Thanks for subscribing! 📬\nWe\'ll send updates to: ' + email);
            document.getElementById('newsletterEmail').value = '';
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const subject = document.getElementById('contactSubject').value;
            alert(`Thank you, ${name}! We've received your message and will get back to you at ${email} soon.`);
            contactForm.reset();
        });
    }

    // Paper Submission form
    const submissionForm = document.getElementById('submissionForm');
    if (submissionForm) {
        // Form automatically handled by handlePaperSubmission()
        // Just add file size validation
        const fileInput = document.getElementById('submissionFile');
        if (fileInput) {
            fileInput.addEventListener('change', function() {
                const maxSize = 10 * 1024 * 1024; // 10MB
                if (this.files[0] && this.files[0].size > maxSize) {
                    alert('⚠️ File is too large! Maximum size is 10MB.');
                    this.value = '';
                }
            });
        }
    }

    // Navbar search input syncing with page search
    const navSearch = document.getElementById('navSearchInput');
    const navClear = document.getElementById('navClearBtn');
    const pageSearch = document.getElementById('searchInput');

    if (navSearch) {
        // Sync nav -> page
        navSearch.addEventListener('input', function() {
            const v = navSearch.value;
            if (pageSearch) pageSearch.value = v;
            filterPapers();
            // show clear button when there's text
            if (navClear) navClear.classList.toggle('visible', v.trim().length > 0);
        });

        // Pressing Enter in nav search triggers search and scrolls to papers
        navSearch.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                filterPapers();
                scrollToSection('papers');
            }
        });

        // Sync page -> nav (if page input exists)
        if (pageSearch) {
            pageSearch.addEventListener('input', function() {
                navSearch.value = pageSearch.value;
                if (navClear) navClear.classList.toggle('visible', pageSearch.value.trim().length > 0);
            });
        }

        if (navClear) {
            navClear.addEventListener('click', function() {
                navSearch.value = '';
                if (pageSearch) pageSearch.value = '';
                navClear.classList.remove('visible');
                filterPapers();
                navSearch.focus();
            });
            // Initialize clear button visibility from any prefilled value
            navClear.classList.toggle('visible', navSearch.value.trim().length > 0);
        }
    }
});

/**
 * Render papers to the grid
 */
function renderPapers(papers) {
    const papersGrid = document.getElementById('papersGrid');
    
    if (papers.length === 0) {
        papersGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <p>No papers found. Try adjusting your filters or search.</p>
            </div>
        `;
        return;
    }

    papersGrid.innerHTML = papers.map(paper => `
        <div class="paper-card ${selectedPapers.includes(paper.id) ? 'selected' : ''}">
            <input type="checkbox" class="paper-card-checkbox" ${selectedPapers.includes(paper.id) ? 'checked' : ''} onchange="togglePaperSelection(${paper.id})">
            <div class="paper-header">
                <div class="paper-tags">
                    <span class="paper-subject">${paper.subject}</span>
                    <span class="paper-level">${paper.level}</span>
                </div>
                <h3>${paper.title}</h3>
            </div>
            <div class="paper-body">
                <p class="paper-description">${paper.description}</p>
                <div class="paper-stats">
                    <span class="rating">⭐ ${paper.rating}</span>
                    <span class="downloads">📥 ${paper.downloads}</span>
                </div>
                <div class="paper-meta">
                    <span>${paper.author}</span>
                    <span>${paper.year}</span>
                    <span>${paper.pages ? paper.pages + ' pages' : ''}</span>
                </div>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="download-btn" onclick="previewPaper(${paper.id})" style="flex: 1; background-color: var(--accent-color);">
                        👁️ Preview
                    </button>
                    <button class="download-btn" onclick="downloadPaper('${paper.title}')" style="flex: 1;">
                        📥 Download
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Render featured papers section
 */
function renderFeatured() {
    const featuredPapers = papersData.filter(p => p.featured).slice(0, 3);
    const featuredSection = document.getElementById('featuredContent');
    
    if (featuredSection) {
        featuredSection.innerHTML = featuredPapers.map(paper => `
            <div class="paper-card featured-card">
                <div class="featured-badge">⭐ Featured</div>
                <div class="paper-header">
                    <div class="paper-tags">
                        <span class="paper-subject">${paper.subject}</span>
                        <span class="paper-level">${paper.level}</span>
                    </div>
                    <h3>${paper.title}</h3>
                </div>
                <div class="paper-body">
                    <p class="paper-description">${paper.description}</p>
                    <div class="paper-stats">
                        <span class="rating">⭐ ${paper.rating}</span>
                        <span class="downloads">📥 ${paper.downloads}</span>
                    </div>
                    <div class="paper-meta">
                        <span>${paper.author}</span>
                        <span>${paper.year}</span>
                    </div>
                    <button class="download-btn" onclick="downloadPaper('${paper.title}')">
                        📥 Download PDF
                    </button>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Filter papers by subject
 */
function filterBySubject(subject) {
    currentFilter = subject;
    
    // Update active tag
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('active');
        if (tag.textContent.trim() === subject) {
            tag.classList.add('active');
        }
    });

    if (subject === 'All') {
        filteredPapers = [...papersData];
    } else {
        filteredPapers = papersData.filter(paper => paper.subject === subject);
    }

    // Clear search and render
    document.getElementById('searchInput').value = '';
    renderPapers(filteredPapers);
}

/**
 * Filter papers by search term
 */
function filterPapers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    if (searchTerm.trim()) {
        addToSearchHistory(searchTerm);
    }
    
    if (currentFilter === 'All') {
        filteredPapers = papersData.filter(paper =>
            paper.title.toLowerCase().includes(searchTerm) ||
            paper.description.toLowerCase().includes(searchTerm) ||
            paper.subject.toLowerCase().includes(searchTerm)
        );
    } else {
        filteredPapers = papersData.filter(paper =>
            paper.subject === currentFilter && (
                paper.title.toLowerCase().includes(searchTerm) ||
                paper.description.toLowerCase().includes(searchTerm)
            )
        );
    }

    renderPapers(filteredPapers);
}

/**
 * Download paper (placeholder function)
 */
function downloadPaper(title) {
    if (currentPreviewedPaper && currentPreviewedPaper.pdfUrl) {
        const link = document.createElement('a');
        link.href = currentPreviewedPaper.pdfUrl;
        link.download = title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert(`Downloading: ${title}\n\nIn a real implementation, this would download the PDF file for this paper.`);
    }
    // In production, you would:
    // 1. Create actual PDF files
    // 2. Store them in a papers/ directory organized by subject
    // 3. Link directly to them: window.location.href = 'papers/subject/paper-name.pdf';
}

/**
 * Smooth scroll to section
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const s = document.getElementById('searchInput');
        const n = document.getElementById('navSearchInput');
        if (s) s.value = '';
        if (n) n.value = '';
        const clearBtn = document.getElementById('navClearBtn');
        if (clearBtn) clearBtn.classList.remove('visible');
        filterPapers();
    }
});

// Sort papers by downloads
function sortByDownloads() {
    const sorted = [...filteredPapers].sort((a, b) => b.downloads - a.downloads);
    renderPapers(sorted);
}

// Sort papers by rating
function sortByRating() {
    const sorted = [...filteredPapers].sort((a, b) => b.rating - a.rating);
    renderPapers(sorted);
}

// Filter by level
function filterByLevel(level) {
    if (level === 'All') {
        filteredPapers = [...papersData];
    } else {
        filteredPapers = papersData.filter(p => p.level === level);
    }
    renderPapers(filteredPapers);
}

// Collapsible Filter Toggle
function toggleFilter(filterId) {
    const filterContent = document.getElementById(filterId);
    const filterToggle = event.currentTarget;
    
    filterContent.classList.toggle('open');
    filterToggle.classList.toggle('active');
}

// Section Toggle Function
function toggleSection(contentId) {
    const content = document.getElementById(contentId);
    const toggle = event.currentTarget;
    
    content.classList.toggle('show');
    toggle.classList.toggle('collapsed');
}

// Search suggestions
function showSearchSuggestions() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const datalist = document.getElementById('searchSuggestions');
    
    if (searchTerm.length < 2) {
        datalist.innerHTML = '';
        return;
    }
    
    const suggestions = papersData
        .map(p => p.title)
        .filter(title => title.toLowerCase().includes(searchTerm))
        .slice(0, 5);
    
    datalist.innerHTML = suggestions.map(s => `<option value="${s}">`).join('');
}

// Display search history
function displaySearchHistory() {
    const historyList = document.getElementById('historyList');
    const searchHistoryDiv = document.getElementById('searchHistory');
    
    if (searchHistory.length === 0) {
        searchHistoryDiv.style.display = 'none';
        return;
    }
    
    searchHistoryDiv.style.display = 'block';
    historyList.innerHTML = searchHistory
        .slice(-5)
        .reverse()
        .map(term => `<div class="history-item" onclick="searchFromHistory('${term}')">${term}</div>`)
        .join('');
}

// Search from history
function searchFromHistory(term) {
    document.getElementById('searchInput').value = term;
    filterPapers();
}

// Add to search history
function addToSearchHistory(term) {
    if (term.trim() && !searchHistory.includes(term)) {
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displaySearchHistory();
    }
}

// Render trending papers
function renderTrending() {
    const trendingPapers = papersData
        .sort((a, b) => b.downloads - a.downloads)
        .slice(0, 3);
    
    const trendingGrid = document.getElementById('trendingContent');
    if (trendingGrid) {
        trendingGrid.innerHTML = trendingPapers.map(paper => `
            <div class="paper-card">
                <div class="paper-header">
                    <div class="paper-tags">
                        <span class="paper-subject">${paper.subject}</span>
                        <span class="paper-level">${paper.level}</span>
                    </div>
                    <h3>${paper.title}</h3>
                </div>
                <div class="paper-body">
                    <p class="paper-description">${paper.description}</p>
                    <div class="paper-stats">
                        <span class="rating">⭐ ${paper.rating}</span>
                        <span class="downloads">📥 ${paper.downloads}</span>
                    </div>
                    <button class="download-btn" onclick="previewPaper(${paper.id})" style="background-color: var(--accent-color);">
                        👁️ Preview
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// Preview paper modal
function previewPaper(paperId) {
    const paper = papersData.find(p => p.id === paperId);
    if (!paper) return;
    
    currentPreviewedPaper = paper;
    
    document.getElementById('previewTitle').textContent = paper.title;
    document.getElementById('previewAuthor').textContent = `By ${paper.author}`;
    document.getElementById('previewYear').textContent = paper.year;
    document.getElementById('previewPages').textContent = paper.pages ? `${paper.pages} pages` : '';
    document.getElementById('previewDescription').textContent = paper.description;
    document.getElementById('previewRating').textContent = paper.rating;
    document.getElementById('previewDownloads').textContent = paper.downloads;
    
    // Reset difficulty voting
    document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('difficultyFeedback').style.display = 'none';
    
    // Load PDF if available
    if (paper.pdfUrl) {
        loadPDF(paper.pdfUrl);
    } else {
        document.getElementById('pdfViewerSection').style.display = 'none';
        document.getElementById('viewFullPreviewBtn').style.display = 'none';
    }
    
    document.getElementById('previewModal').style.display = 'flex';
}

// Close preview modal
function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
    currentPreviewedPaper = null;
}

// Vote on difficulty
function voteDifficulty(level) {
    const buttons = document.querySelectorAll('.difficulty-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    
    const feedbackDiv = document.getElementById('difficultyFeedback');
    feedbackDiv.style.display = 'block';
    feedbackDiv.textContent = `✓ Thanks for voting! You voted "${level}" for difficulty.`;
}

// Download previewed paper
function downloadPreviewedPaper() {
    if (currentPreviewedPaper) {
        downloadPaper(currentPreviewedPaper.title);
        closePreview();
    }
}

// Paper selection for batch download
function togglePaperSelection(paperId) {
    if (selectedPapers.includes(paperId)) {
        selectedPapers = selectedPapers.filter(id => id !== paperId);
    } else {
        selectedPapers.push(paperId);
    }
    updateSelectedCount();
    renderPapers(filteredPapers);
}

// Toggle select all
function toggleSelectAll() {
    if (selectedPapers.length === filteredPapers.length) {
        selectedPapers = [];
    } else {
        selectedPapers = filteredPapers.map(p => p.id);
    }
    updateSelectedCount();
    renderPapers(filteredPapers);
}

// Update selected count display
function updateSelectedCount() {
    const countSpan = document.getElementById('selectedCount');
    countSpan.textContent = `${selectedPapers.length} papers selected`;
    
    const batchBtn = document.getElementById('batchDownloadBtn');
    if (selectedPapers.length > 0) {
        batchBtn.style.display = 'inline-block';
    } else {
        batchBtn.style.display = 'none';
    }
}

// Batch download papers
function batchDownloadPapers() {
    if (selectedPapers.length === 0) return;
    
    const titles = selectedPapers
        .map(id => papersData.find(p => p.id === id)?.title)
        .filter(Boolean);
    
    alert(`📦 Creating ZIP file with ${titles.length} papers:\n\n${titles.join('\n')}\n\nNote: In production, this would create and download a ZIP file.`);
}

// Social sharing
function sharePaperLink() {
    if (currentPreviewedPaper) {
        const url = `${window.location.href}#paper-${currentPreviewedPaper.id}`;
        navigator.clipboard.writeText(url).then(() => {
            alert('✓ Link copied to clipboard!');
        });
    }
}

function shareViaEmail() {
    if (currentPreviewedPaper) {
        const subject = `Check out: ${currentPreviewedPaper.title}`;
        const body = `I found this great paper on Julisha Library: ${currentPreviewedPaper.title}\n\nAuthor: ${currentPreviewedPaper.author}\nRating: ${currentPreviewedPaper.rating} stars\nDownloads: ${currentPreviewedPaper.downloads}`;
        window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
}

// Advanced filters
function applyAdvancedFilters() {
    const ratingFilter = document.getElementById('ratingFilter').value;
    const yearFilter = document.getElementById('yearFilter').value;
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    
    filteredPapers = papersData.filter(paper => {
        let passes = true;
        
        if (ratingFilter && paper.rating < parseFloat(ratingFilter)) {
            passes = false;
        }
        
        if (yearFilter && paper.year !== parseInt(yearFilter)) {
            passes = false;
        }
        
        if (difficultyFilter && paper.difficulty !== difficultyFilter) {
            passes = false;
        }
        
        return passes;
    });
    
    renderPapers(filteredPapers);
}

// Sort by newest
function sortByNewest() {
    const sorted = [...filteredPapers].sort((a, b) => b.year - a.year);
    renderPapers(sorted);
}

// Sort by title
function sortByTitle() {
    const sorted = [...filteredPapers].sort((a, b) => a.title.localeCompare(b.title));
    renderPapers(sorted);
}

// Enhanced keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const s = document.getElementById('searchInput');
        const n = document.getElementById('navSearchInput');
        if (s) s.value = '';
        if (n) n.value = '';
        const clearBtn = document.getElementById('navClearBtn');
        if (clearBtn) clearBtn.classList.remove('visible');
        filterPapers();
        closePreview();
    }
    
    // Quick search with '/'
    if (event.key === '/' && event.ctrlKey) {
        event.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// Close modals on outside click
window.onclick = function(event) {
    const previewModal = document.getElementById('previewModal');
    const relatedModal = document.getElementById('relatedPapersModal');
    
    if (event.target === previewModal) {
        closePreview();
    }
    if (event.target === relatedModal) {
        closeRelatedPapers();
    }
}

// Related papers modal
function showRelatedPapers(paperId) {
    if (!currentPreviewedPaper) return;
    
    const relatedPapers = papersData
        .filter(p => p.subject === currentPreviewedPaper.subject && p.id !== paperId)
        .slice(0, 5);
    
    const list = document.getElementById('relatedPapersList');
    list.innerHTML = relatedPapers.map(p => `
        <div class="related-paper-item" onclick="previewPaper(${p.id})">
            <h4>${p.title}</h4>
            <p>${p.description}</p>
            <small>⭐ ${p.rating} | 📥 ${p.downloads}</small>
        </div>
    `).join('');
    
    document.getElementById('relatedPapersModal').style.display = 'flex';
}

function closeRelatedPapers() {
    document.getElementById('relatedPapersModal').style.display = 'none';
}
// ========== PDF Viewer Functions ==========

// Set up PDF.js worker
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Load and display PDF
function loadPDF(pdfUrl) {
    if (!pdfUrl || typeof pdfjsLib === 'undefined') {
        alert('PDF preview not available for this file.');
        return;
    }
    
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    
    pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
        pdfDoc = pdf;
        document.getElementById('totalPages').textContent = pdf.numPages;
        pageNum = 1;
        renderPage(pageNum);
        document.getElementById('pdfViewerSection').style.display = 'block';
        document.getElementById('viewFullPreviewBtn').style.display = 'inline-block';
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
        alert('Could not load PDF preview. You can still download the file.');
        document.getElementById('pdfViewerSection').style.display = 'none';
        document.getElementById('viewFullPreviewBtn').style.display = 'none';
    });
}

// Render PDF page
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

// Next page
function nextPage() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNumPending = pageNum + 1;
    if (!pageRendering) {
        renderPage(pageNumPending);
        pageNumPending = null;
    }
    pageNum++;
}

// Previous page
function previousPage() {
    if (pageNum <= 1) return;
    pageNumPending = pageNum - 1;
    if (!pageRendering) {
        renderPage(pageNumPending);
        pageNumPending = null;
    }
    pageNum--;
}

// View full PDF in new tab
function viewFullPDF() {
    if (currentPreviewedPaper && currentPreviewedPaper.pdfUrl) {
        window.open(currentPreviewedPaper.pdfUrl, '_blank');
    }
}

// Handle Paper Submission
function handlePaperSubmission(event) {
    event.preventDefault();
    
    const formData = {
        timestamp: new Date().toISOString(),
        name: document.getElementById('submissionName').value,
        email: document.getElementById('submissionEmail').value,
        title: document.getElementById('submissionTitle').value,
        subject: document.getElementById('submissionSubject').value,
        level: document.getElementById('submissionLevel').value,
        description: document.getElementById('submissionDescription').value,
        difficulty: document.getElementById('submissionDifficulty').value,
        fileSize: document.getElementById('submissionFile').files[0]?.size,
        fileName: document.getElementById('submissionFile').files[0]?.name,
        status: 'pending_review'
    };
    
    // Get existing submissions or create new array
    let submissions = JSON.parse(localStorage.getItem('submissions_papers')) || [];
    
    // Add new submission
    submissions.push(formData);
    
    // Save to localStorage
    localStorage.setItem('submissions_papers', JSON.stringify(submissions));
    localStorage.setItem('submissions_email', formData.email);
    
    // Show success message
    const statusDiv = document.getElementById('submissionStatus');
    statusDiv.className = 'submission-status success';
    statusDiv.innerHTML = `
        <p>✅ Thank you for your submission!</p>
        <p>We've received your paper: <strong>${formData.title}</strong></p>
        <p>Our team will review it shortly. Check your email (${formData.email}) for updates.</p>
    `;
    statusDiv.style.display = 'block';
    
    // Log submission for console access
    console.log('📝 Paper Submitted:', formData);
    console.log('💾 All submissions:', submissions);
    console.log('To review submissions in browser console, run: JSON.parse(localStorage.getItem("submissions_papers"))');
    
    // Reset form
    document.getElementById('submissionForm').reset();
    
    // Show export option
    setTimeout(() => {
        statusDiv.innerHTML += `
            <p style="font-size: 0.9rem; margin-top: 1rem;">
                <strong>Admin Note:</strong> Run this in browser console to export submissions:
                <br><code>JSON.stringify(JSON.parse(localStorage.getItem('submissions_papers')), null, 2)</code>
            </p>
        `;
    }, 1000);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusDiv.style.display = 'none';
    }, 8000);
}

// Export submissions (for admin use)
function exportSubmissions() {
    const submissions = JSON.parse(localStorage.getItem('submissions_papers')) || [];
    const dataStr = JSON.stringify(submissions, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `submissions-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// View submissions count (for admin dashboard)
function getSubmissionsCount() {
    const submissions = JSON.parse(localStorage.getItem('submissions_papers')) || [];
    return submissions.length;
}

// View pending submissions (for admin)
function getPendingSubmissions() {
    const submissions = JSON.parse(localStorage.getItem('submissions_papers')) || [];
    return submissions.filter(s => s.status === 'pending_review');
}
