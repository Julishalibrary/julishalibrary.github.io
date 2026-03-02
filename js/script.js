// --- 1. Dark Mode Toggle ---
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// --- Mobile Menu Toggle ---
function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('navLinks').classList.remove('active');
}

// --- Upload State Handlers (Moved from HTML inline scripts) ---
function showSuccessState() {
    setTimeout(() => {
        document.getElementById('prompt-state').classList.add('d-none');
        document.getElementById('success-state').classList.remove('d-none');
        document.getElementById('julisha-upload-card').classList.add('success');
    }, 500);
}

function resetUploadBox() {
    document.getElementById('prompt-state').classList.remove('d-none');
    document.getElementById('success-state').classList.add('d-none');
    document.getElementById('julisha-upload-card').classList.remove('success');
}

// --- 2. Cleaned Papers Data ---
const papersData = [
    { id: 1, title: "KLB Biology Form 4", subject: "Biology", level: "Form 4", description: "Complete KLB Biology Form 4 study guide", author: "KLB Publishers", year: 2026, rating: 0, pages: 0, difficulty: "Hard", downloads: 0, pdfUrl: "papers/biology/klb-biology-form-4.pdf" },
    { id: 2, title: "Form 4 Additional Mathematics Revision", subject: "Mathematics", level: "Form 4", description: "Complete revision questions for Form 4 Additional Mathematics", author: "Mathematics Department", year: 2026, downloads: 0, rating: 0, pages: 0, difficulty: "Hard", pdfUrl: "papers/mathematics/form-4-additional-mathematics.pdf" },
    { id: 3, title: "Physics Form 1 Questions", subject: "Physics", level: "Form 1", description: "Comprehensive practice questions for Form 1 Physics", author: "Education Materials", year: 2026, downloads: 0, rating: 0, pages: 0, difficulty: "Medium", pdfUrl: "papers/physics/physics-form-1-questions.pdf" },
    { id: 16, title: "Kiswahili Form 2 Question Paper", subject: "Kiswahili", level: "Form 2", description: "Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 30, difficulty: "Medium", pdfUrl: "papers/kiswahili/Kiswahili - Kiswahili Form 2 - Zeraki Achievers 3.0 - Question Paper (3).pdf" },
    { id: 17, title: "Kiswahili Form 2 Question Paper (alt)", subject: "Kiswahili", level: "Form 2", description: "Alternate Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 28, difficulty: "Medium", pdfUrl: "papers/kiswahili/Kiswahili - Kiswahili Form 2 - Zeraki Achievers 3.0 - Question Paper (4).pdf" },
    { id: 18, title: "Kiswahili Form 2 Marking Scheme", subject: "Kiswahili", level: "Form 2", description: "Marking scheme for Zeraki Achievers paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 15, difficulty: "Easy", pdfUrl: "papers/kiswahili/Kiswahili - Kiswahili Form 2 - Zeraki Achievers 3.0 - Marking Scheme.pdf" },
    { id: 19, title: "English Form 1 Question Paper", subject: "English", level: "Form 1", description: "Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 32, difficulty: "Medium", pdfUrl: "papers/english/English - English Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf" },
    { id: 20, title: "English Form 1 Marking Scheme", subject: "English", level: "Form 1", description: "Marking scheme for Form 1 paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 12, difficulty: "Easy", pdfUrl: "papers/english/English - English Form 1 - Zeraki Achievers 3.0 - Marking Scheme.pdf" },
    { id: 21, title: "History Form 2 Question Paper", subject: "History", level: "Form 2", description: "Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 28, difficulty: "Medium", pdfUrl: "papers/history/History - History Form 2 - Zeraki Achievers 3.0 - Question Paper.pdf" },
    { id: 22, title: "History Form 2 Marking Scheme", subject: "History", level: "Form 2", description: "Answer scheme for Form 2 history", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 10, difficulty: "Easy", pdfUrl: "papers/history/History - History Form 2 - Zeraki Achievers 3.0 - Marking Scheme.pdf" },
    { id: 23, title: "Chemistry Form 1 Question Paper", subject: "Chemistry", level: "Form 1", description: "Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 30, difficulty: "Medium", pdfUrl: "papers/chemistry/Chemistry - Chemistry Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf" },
    { id: 24, title: "Chemistry Form 1 Marking Scheme", subject: "Chemistry", level: "Form 1", description: "Marking scheme document", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 8, difficulty: "Easy", pdfUrl: "papers/chemistry/Chemistry - Chemistry Form 1 - Zeraki Achievers 3.0 - Marking Scheme.pdf" },
    { id: 25, title: "Physics Form 1 Zeraki Question Paper", subject: "Physics", level: "Form 1", description: "Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 26, difficulty: "Medium", pdfUrl: "papers/physics/Physics - Physics Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf" },
    { id: 26, title: "Physics Form 1 Questions PR", subject: "Physics", level: "Form 1", description: "Practice questions (PR version)", author: "Education Materials", year: 2026, downloads: 0, rating: 0, pages: 25, difficulty: "Medium", pdfUrl: "papers/physics/physics-form-1-questions-pr_520d9ac7b7fa7a1d30494b7bd8d8beb1.pdf" },
    { id: 27, title: "Mathematics Form 2 Question Paper", subject: "Mathematics", level: "Form 2", description: "Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 34, difficulty: "Medium", pdfUrl: "papers/mathematics/Mathematics - Mathematics Form 2 - Zeraki Achievers 3.0 - Question Paper.pdf" },
    { id: 28, title: "Biology Form 1 Question Paper", subject: "Biology", level: "Form 1", description: "Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 22, difficulty: "Medium", pdfUrl: "papers/biology/Biology - Biology Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf" },
    { id: 29, title: "Geography Form 1 Question Paper", subject: "Geography", level: "Form 1", description: "Zeraki Achievers 3.0 question paper", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 28, difficulty: "Medium", pdfUrl: "papers/geography/Geography - Geography Form 1 - Zeraki Achievers 3.0 - Question Paper.pdf" },
    { id: 30, title: "Geography Form 1 Marking Scheme", subject: "Geography", level: "Form 1", description: "Answer scheme document", author: "Zeraki Achievers", year: 2026, downloads: 0, rating: 0, pages: 12, difficulty: "Easy", pdfUrl: "papers/geography/Geography - Geography Form 1 - Zeraki Achievers 3.0 - Marking Scheme.pdf" }
];

let currentPreviewedPaper = null;
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;

// Add PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
window.papersData = papersData;

// --- 3. Initial Load & Event Listeners ---
document.addEventListener('DOMContentLoaded', function() {
    renderPapers(papersData);

    const searchInput = document.getElementById('searchInput');
    let debounceTimeout;
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                filterPapers();
            }, 300);
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', function(e) {
            if (!document.querySelector('.search-bar').contains(e.target)) {
                document.getElementById('customSearchSuggestions').classList.add('d-none');
            }
        });
    }
});

// --- 4. Render & Filter Functions ---
function renderPapers(papers) {
    const papersGrid = document.getElementById('papersGrid');
    if (!papersGrid) return;

    if (papers.length === 0) {
        papersGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center;"><p>No papers found matching your criteria.</p></div>';
        return;
    }

    // Bug Fix: Using the correct CSS structure defined in style.css
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
                    <span>⭐ ${paper.rating}</span>
                    <span>📥 ${paper.downloads}</span>
                </div>
                <button class="download-btn" onclick="downloadPaper(event, '${paper.pdfUrl}', '${paper.title}')">📥 Download PDF</button>
            </div>
        </div>
    `).join('');
}

function filterPapers() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = papersData.filter(paper => 
        paper.title.toLowerCase().includes(searchTerm) ||
        paper.description.toLowerCase().includes(searchTerm) ||
        paper.subject.toLowerCase().includes(searchTerm)
    );
    renderPapers(filtered);
    showSearchSuggestions();
}

function filterBySubject(subject) {
    const input = document.getElementById('searchInput');
    if (input) {
        input.value = subject;
        filterPapers();
        document.getElementById('papers').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('customSearchSuggestions').classList.add('d-none'); // Hide dropdown after clicking subject
    }
}

// Custom Dropdown logic
function showSearchSuggestions() {
    const input = document.getElementById('searchInput');
    const suggestionBox = document.getElementById('customSearchSuggestions');
    if (!input || !suggestionBox) return;
    
    const term = input.value.toLowerCase();
    if (term.length < 2) {
        suggestionBox.classList.add('d-none');
        return;
    }

    const suggestions = papersData
        .filter(p => p.title.toLowerCase().includes(term) || p.subject.toLowerCase().includes(term))
        .map(p => p.title);
        
    const unique = [...new Set(suggestions)];
    
    if (unique.length > 0) {
        suggestionBox.innerHTML = unique.map(s => 
            `<div class="suggestion-item" onclick="selectSuggestion('${s}')">${s}</div>`
        ).join('');
        suggestionBox.classList.remove('d-none');
    } else {
        suggestionBox.classList.add('d-none');
    }
}

function selectSuggestion(value) {
    const input = document.getElementById('searchInput');
    input.value = value;
    document.getElementById('customSearchSuggestions').classList.add('d-none');
    filterPapers();
}

// --- 5. PDF Modal & Pagination Logic ---
function previewPaper(paperId) {
    const paper = papersData.find(p => p.id === paperId);
    if (!paper) return;

    currentPreviewedPaper = paper;
    document.getElementById('previewTitle').textContent = paper.title;
    document.getElementById('previewAuthor').textContent = `By: ${paper.author}`;
    document.getElementById('previewYear').textContent = paper.year ? `Year: ${paper.year}` : '';
    document.getElementById('previewDescription').textContent = paper.description;
    
    document.getElementById('previewModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    loadPDF(paper.pdfUrl);
}

function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore background scrolling
    pdfDoc = null;
    pageNum = 1;
    document.getElementById('pdfViewerSection').style.display = 'none'; // Hide viewer until next load
}

function loadPDF(url) {
    const pdfViewerSection = document.getElementById('pdfViewerSection');
    const loadingState = document.getElementById('pdfLoading');
    
    // Show loading UI
    loadingState.classList.remove('d-none');
    pdfViewerSection.style.display = 'none';

    pdfjsLib.getDocument(url).promise.then(function (pdf) {
        pdfDoc = pdf;
        document.getElementById('totalPages').textContent = pdf.numPages;
        
        // Hide loading UI, show Viewer
        loadingState.classList.add('d-none');
        pdfViewerSection.style.display = 'block';
        
        renderPage(pageNum);
    }).catch(function (error) {
        console.error('Error loading PDF:', error);
        loadingState.classList.add('d-none');
        pdfViewerSection.style.display = 'block';
        
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        canvas.height = 150; // Give it some height for the error message
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "16px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Preview unavailable locally or file missing.", 20, 50);
        document.getElementById('totalPages').textContent = "0";
    });
}

function renderPage(num) {
    if (!pdfDoc) return;
    pageRendering = true;
    
    pdfDoc.getPage(num).then(function (page) {
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        
        // Responsive scaling
        const containerWidth = canvas.parentElement.clientWidth;
        let viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        viewport = page.getViewport({ scale: scale > 1.2 ? 1.2 : scale }); // Cap scale at 1.2 for clarity

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = { canvasContext: ctx, viewport: viewport };

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

function nextPage() {
    if (!pdfDoc || pageNum >= pdfDoc.numPages) return;
    pageNumPending = pageNum + 1;
    if (!pageRendering) {
        renderPage(pageNumPending);
        pageNumPending = null;
    }
    pageNum++;
}

function previousPage() {
    if (!pdfDoc || pageNum <= 1) return;
    pageNumPending = pageNum - 1;
    if (!pageRendering) {
        renderPage(pageNumPending);
        pageNumPending = null;
    }
    pageNum--;
}

// --- 6. Download Logic ---
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
