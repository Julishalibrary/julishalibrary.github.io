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

// --- Upload State Handlers ---
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

// --- 2. Global Variables ---
let papersData = []; // Starts empty, will be filled by the JSON file
let currentPreviewedPaper = null;
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;

// Add PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// --- 3. Initial Load & Fetching JSON ---
document.addEventListener('DOMContentLoaded', async function() {
    
    // Fetch the papers from the external JSON file
    try {
        const response = await fetch('papers.json');
        if (!response.ok) throw new Error('Failed to load papers.json');
        
        papersData = await response.json();
        renderPapers(papersData);
    } catch (error) {
        console.error("Error fetching paper data:", error);
        document.getElementById('papersGrid').innerHTML = 
            '<div style="grid-column: 1/-1; text-align:center; color: red;"><p>Failed to load library data. Please try again later.</p></div>';
    }

    // Set up search bar listener
    const searchInput = document.getElementById('searchInput');
    let debounceTimeout;
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                filterPapers();
            }, 300);
        });

        // Hide search suggestions when clicking outside
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
        document.getElementById('customSearchSuggestions').classList.add('d-none'); 
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
    document.body.style.overflow = 'hidden'; 
    
    loadPDF(paper.pdfUrl);
}

function closePreview() {
    document.getElementById('previewModal').style.display = 'none';
    document.body.style.overflow = 'auto'; 
    pdfDoc = null;
    pageNum = 1;
    document.getElementById('pdfViewerSection').style.display = 'none'; 
}

function loadPDF(url) {
    const pdfViewerSection = document.getElementById('pdfViewerSection');
    const loadingState = document.getElementById('pdfLoading');
    
    loadingState.classList.remove('d-none');
    pdfViewerSection.style.display = 'none';

    pdfjsLib.getDocument(url).promise.then(function (pdf) {
        pdfDoc = pdf;
        document.getElementById('totalPages').textContent = pdf.numPages;
        
        loadingState.classList.add('d-none');
        pdfViewerSection.style.display = 'block';
        
        renderPage(pageNum);
    }).catch(function (error) {
        console.error('Error loading PDF:', error);
        loadingState.classList.add('d-none');
        pdfViewerSection.style.display = 'block';
        
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');
        canvas.height = 150; 
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
        
        const containerWidth = canvas.parentElement.clientWidth;
        let viewport = page.getViewport({ scale: 1 });
        const scale = containerWidth / viewport.width;
        viewport = page.getViewport({ scale: scale > 1.2 ? 1.2 : scale }); 

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
