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
        pdfUrl: "papers/physics/physics-form-1-questions.pdf"
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
document.addEventListener('DOMContentLoaded', function () {
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

/**
 * Toggle Section Visibility
 */
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Toggle content visibility
    if (section.style.display === 'none' || section.classList.contains('d-none')) {
        section.style.display = 'grid'; // Or 'block' based on layout, but grid is used for paper grids
        section.classList.remove('d-none');
    } else {
        section.style.display = 'none';
        section.classList.add('d-none');
    }

    // Rotate icon
    // Find the button that toggles this section
    const toggleBtn = document.querySelector(`button[onclick="toggleSection('${sectionId}')"]`);
    if (toggleBtn) {
        const icon = toggleBtn.querySelector('.toggle-icon');
        if (icon) {
            icon.classList.toggle('rotate-icon');
        }
    }
}

/**
 * Sort Papers
 */
function sortPapers(criteria) {
    let sortedPapers = [...papersData]; // Create a copy

    switch (criteria) {
        case 'downloads':
            sortedPapers.sort((a, b) => b.downloads - a.downloads);
            break;
        case 'rating':
            sortedPapers.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest': // Assuming 'year' is the only date metric, could use added date if available
            sortedPapers.sort((a, b) => b.year - a.year);
            break;
        case 'title':
            sortedPapers.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }

    // Re-render only if we are currently viewing filtered list or full list, 
    // but simplified approach: re-render filtered list based on current filters + sort
    // Better: Apply sort to current filtered view.
    // Allow filterPapers to handle sorting if we upgrade it, but for now let's just sort the displayed data.
    // To do this properly with existing filterPapers logic, we should probably add a global 'currentSort' variable
    // and use it inside filterPapers.

    currentSortCriteria = criteria; // Define this variable globally or at top scope
    filterPapers();
}

let currentSortCriteria = 'newest'; // Default

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
    });
}

function shareViaEmail() {
    const subject = `Check out this paper: ${currentPreviewedPaper ? currentPreviewedPaper.title : 'Julisha Library'}`;
    const body = `I found this great resource on Julisha Library: ${window.location.href}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Handle Paper Submission
 */
function handlePaperSubmission(event) {
    event.preventDefault();
    const statusDiv = document.getElementById('submissionStatus');
    statusDiv.style.display = 'block';
    statusDiv.textContent = 'Submitting paper...';
    statusDiv.style.color = 'blue';

    // Simulate API call
    setTimeout(() => {
        statusDiv.textContent = 'Paper submitted successfully! Thank you for your contribution.';
        statusDiv.style.color = 'green';
        event.target.reset();
        setTimeout(() => {
            statusDiv.style.display = 'none';
        }, 5000);
    }, 1500);
}
