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
        year: 2026,
        downloads: 0,
        rating: 0,
        pages: 0, // Unknown without reading PDF
        difficulty: "Hard",
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
    // automatically added real documents
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
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;

// Add PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// expose data for debugging
window.papersData = papersData;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded: papersData length', papersData.length);
    renderPapers(papersData);
    renderFeatured();
    renderTrending();
    displaySearchHistory();


    // contact form submit
    const contactFormEl = document.getElementById('contactForm');
    if (contactFormEl) {
        contactFormEl.addEventListener('submit', handleContactSubmit);
    }
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
            <input type="checkbox" class="paper-checkbox" data-id="${paper.id}" onclick="togglePaperSelection(event, ${paper.id})" ${selectedPaperIds.has(paper.id) ? 'checked' : ''}>
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
    updateSelectedCount();
}

/**
 * Filter papers by search
 */
let currentSubjectFilter = 'All';
let currentLevelFilter = 'All';

// return list of papers matching current search/filters
function getFilteredPapers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    return papersData.filter(paper => {
        const matchesSearch =
            paper.title.toLowerCase().includes(searchTerm) ||
            paper.description.toLowerCase().includes(searchTerm);
        const matchesSubject =
            currentSubjectFilter === 'All' || paper.subject === currentSubjectFilter;
        const matchesLevel =
            currentLevelFilter === 'All' || paper.level === currentLevelFilter;
        return matchesSearch && matchesSubject && matchesLevel;
    });
}

function filterPapers() {
    const filtered = getFilteredPapers();
    renderPapers(filtered);
}

/**
 * Filter by subject
 */
function filterBySubject(subject) {
    currentSubjectFilter = subject;
    filterPapers();
    document.getElementById('searchInput').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Filter by level
 */
function filterByLevel(level) {
    currentLevelFilter = level;
    filterPapers();
    document.getElementById('searchInput').scrollIntoView({ behavior: 'smooth' });
}

// sorting helpers
function sortByDownloads() {
    const sorted = getFilteredPapers().sort((a, b) => b.downloads - a.downloads);
    renderPapers(sorted);
    updateSelectedCount();
}

function sortByRating() {
    const sorted = getFilteredPapers().sort((a, b) => b.rating - a.rating);
    renderPapers(sorted);
    updateSelectedCount();
}

function sortByNewest() {
    const sorted = getFilteredPapers().sort((a, b) => b.year - a.year);
    renderPapers(sorted);
    updateSelectedCount();
}

function sortByTitle() {
    const sorted = getFilteredPapers().slice().sort((a, b) => a.title.localeCompare(b.title));
    renderPapers(sorted);
    updateSelectedCount();
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
    document.getElementById('previewYear').textContent = paper.year ? `Year: ${paper.year}` : '';
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

    pdfjsLib.getDocument(url).promise.then(function (pdf) {
        pdfDoc = pdf;
        document.getElementById('totalPages').textContent = pdf.numPages;
        pdfViewerSection.style.display = 'block';
        renderPage(pageNum);
    }).catch(function (error) {
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
    pdfDoc.getPage(num).then(function (page) {
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1.5 });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        page.render(renderContext).promise.then(function () {
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


// Wrap original filterPapers to include sorting
const originalFilterPapers = filterPapers;
filterPapers = function () {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Get advanced filters
    const ratingFilter = document.getElementById('ratingFilter')?.value || "";
    const yearFilter = document.getElementById('yearFilter')?.value || "";
    const difficultyFilter = document.getElementById('difficultyFilter')?.value || "";

    let filtered = papersData.filter(paper => {
        const matchesSearch = paper.title.toLowerCase().includes(searchTerm) ||
            paper.description.toLowerCase().includes(searchTerm);
        const matchesSubject = currentSubjectFilter === 'All' || paper.subject === currentSubjectFilter;
        const matchesLevel = currentLevelFilter === 'All' || paper.level === currentLevelFilter;

        // Advanced filters
        const matchesRating = ratingFilter === "" || paper.rating >= parseFloat(ratingFilter);
        const matchesYear = yearFilter === "" || paper.year == parseInt(yearFilter);
        const matchesDifficulty = difficultyFilter === "" || paper.difficulty === difficultyFilter;

        return matchesSearch && matchesSubject && matchesLevel && matchesRating && matchesYear && matchesDifficulty;
    });

    // Apply Sort
    switch (currentSortCriteria) {
        case 'downloads':
            filtered.sort((a, b) => b.downloads - a.downloads);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filtered.sort((a, b) => b.year - a.year);
            break;
        case 'title':
            filtered.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }

    renderPapers(filtered);
}


function sortByDownloads() {
    currentSortCriteria = 'downloads';
    filterPapers();
}

function sortByRating() {
    currentSortCriteria = 'rating';
    filterPapers();
}

function sortByNewest() {
    currentSortCriteria = 'newest';
    filterPapers();
}

function sortByTitle() {
    currentSortCriteria = 'title';
    filterPapers();
}

/**
 * Advanced Filters
 */
function applyAdvancedFilters() {
    filterPapers();
}

/**
 * Search Suggestions
 */
function showSearchSuggestions() {
    const input = document.getElementById('searchInput');
    const value = input.value.toLowerCase();
    const suggestionsList = document.getElementById('searchSuggestions');

    suggestionsList.innerHTML = ''; // Clear previous

    if (value.length < 2) return;

    const suggestions = papersData
        .filter(paper => paper.title.toLowerCase().includes(value))
        .map(paper => paper.title)
        .slice(0, 5); // Limit to 5

    suggestions.forEach(title => {
        const option = document.createElement('option');
        option.value = title;
        suggestionsList.appendChild(option);
    });
}

/**
 * Batch Download (Mock)
 */
function toggleSelectAll() {
    // Checkboxes functionality would need to be added to renderPapers first
    alert('Select All feature requires checkboxes on paper cards. (Feature coming soon)');
}

function batchDownloadPapers() {
    alert('Batch download started... (Mock)');
}

/**
 * Difficulty Voting (Mock)
 */
function voteDifficulty(level) {
    const feedback = document.getElementById('difficultyFeedback');
    feedback.style.display = 'block';
    feedback.textContent = `Thanks for voting! You marked this as '${level}'.`;
    feedback.style.color = 'green';

    // Hide buttons temporarily to show state
    // setTimeout(() => { feedback.style.display = 'none'; }, 3000);
}

/**
 * Social Sharing (Mock)
 */
function sharePaperLink() {
    const url = window.location.href; // In real app, this might be specific paper URL
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard!');
=======
// ------------------
// Utility functions
// ------------------

// Toggle visibility of expandable sections
function toggleSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = el.style.display === 'none' || el.style.display === '' ? 'block' : 'none';
}

// Toggle filter panels
function toggleFilter(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = el.style.display === 'none' || el.style.display === '' ? 'block' : 'none';
}

// ------------------
// Search helpers
// ------------------

function showSearchSuggestions() {
    const input = document.getElementById('searchInput');
    const datalist = document.getElementById('searchSuggestions');
    if (!input || !datalist) return;
    const term = input.value.toLowerCase();
    const suggestions = papersData
        .filter(p => p.title.toLowerCase().includes(term))
        .map(p => p.title);
    // dedupe
    const unique = [...new Set(suggestions)];
    datalist.innerHTML = unique.map(s => `<option value="${s}">`).join('');
}

function addToSearchHistory(term) {
    if (!term) return;
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    history = history.filter(h => h !== term);
    history.unshift(term);
    if (history.length > 10) history = history.slice(0, 10);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    displaySearchHistory();
}

function displaySearchHistory() {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    const container = document.getElementById('historyList');
    if (!container) return;
    container.innerHTML = history
        .map(h => `<button class="history-item" onclick="searchFromHistory('${h}')">${h}</button>`)
        .join('');
    document.getElementById('searchHistory').style.display = history.length ? 'block' : 'none';
}

function searchFromHistory(term) {
    document.getElementById('searchInput').value = term;
    filterPapers();
}

// make sure filterPapers adds to history
const _originalFilterPapers = filterPapers;
filterPapers = function() {
    const term = document.getElementById('searchInput').value.trim();
    if (term) addToSearchHistory(term);
    _originalFilterPapers();
    updateSelectedCount();
};

// ------------------
// Selection & batch operations
// ------------------
let selectedPaperIds = new Set();

function togglePaperSelection(event, paperId) {
    event.stopPropagation();
    if (selectedPaperIds.has(paperId)) {
        selectedPaperIds.delete(paperId);
        event.target.checked = false;
    } else {
        selectedPaperIds.add(paperId);
        event.target.checked = true;
    }
    updateSelectedCount();
}

function updateSelectedCount() {
    document.getElementById('selectedCount').textContent = `${selectedPaperIds.size} papers selected`;
    document.getElementById('batchDownloadBtn').style.display = selectedPaperIds.size > 0 ? 'inline-block' : 'none';
}

function toggleSelectAll() {
    const allCheckboxes = document.querySelectorAll('.paper-checkbox');
    const allIDS = Array.from(allCheckboxes).map(cb => parseInt(cb.dataset.id, 10));
    const allSelected = allIDS.every(id => selectedPaperIds.has(id));
    if (allSelected) {
        selectedPaperIds.clear();
        allCheckboxes.forEach(cb => cb.checked = false);
    } else {
        allIDS.forEach(id => selectedPaperIds.add(id));
        allCheckboxes.forEach(cb => cb.checked = true);
    }
    updateSelectedCount();
}

function batchDownloadPapers() {
    selectedPaperIds.forEach(id => {
        const paper = papersData.find(p => p.id === id);
        if (paper) downloadPaper(null, paper.pdfUrl, paper.title);
    });
}

// ------------------
// Sharing & viewing
// ------------------

function sharePaperLink() {
    if (!currentPreviewedPaper) return;
    const url = window.location.origin + window.location.pathname + `#paper-${currentPreviewedPaper.id}`;
    navigator.clipboard.writeText(url).then(() => {
        alert('Link copied to clipboard');
    });
}

function shareViaEmail() {
    if (!currentPreviewedPaper) return;
    const subject = encodeURIComponent(`Check out this paper: ${currentPreviewedPaper.title}`);
    const body = encodeURIComponent(
        `I found this paper on Julisha Library: ${window.location.origin + window.location.pathname}#paper-${currentPreviewedPaper.id}`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function viewFullPDF() {
    if (currentPreviewedPaper) {
        window.open(currentPreviewedPaper.pdfUrl, '_blank');
    }
}

// ------------------
// Render helpers for featured/trending
// ------------------

function renderFeatured() {
    const featuredGrid = document.getElementById('featuredContent');
    if (!featuredGrid) return;
    const featured = papersData.slice(0, 4);
    featuredGrid.innerHTML = featured
        .map(
            p => `<div class="paper-card" onclick="previewPaper(${p.id})"><h4>${p.title}</h4></div>`
        )
        .join('');
}

function renderTrending() {
    const trendingGrid = document.getElementById('trendingContent');
    if (!trendingGrid) return;
    const sorted = [...papersData].sort((a, b) => b.downloads - a.downloads).slice(0, 4);
    trendingGrid.innerHTML = sorted
        .map(
            p => `<div class="paper-card" onclick="previewPaper(${p.id})"><h4>${p.title}</h4></div>`
        )
        .join('');
}

// ------------------
// Difficulty voting
// ------------------

function voteDifficulty(level) {
    const feedback = document.getElementById('difficultyFeedback');
    if (!feedback) return;
    feedback.style.display = 'block';
    feedback.textContent = `Thanks for your feedback! You marked this paper as "${level}".`;
    setTimeout(() => {
        feedback.style.display = 'none';
    }, 3000);
}

function handleContactSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.contactName.value.trim();
    const email = form.contactEmail.value.trim();
    const subject = form.contactSubject.value.trim() || 'Contact from Julisha Library';
    const message = form.contactMessage.value.trim();

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(subject);
    const mailtoBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    // replace with actual support address if available
    window.location.href = `mailto:support@julishalibrary.org?subject=${mailtoSubject}&body=${mailtoBody}`;

    // reset form after navigation triggered
    form.reset();
}
