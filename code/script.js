// Sample Papers Data - You can add more papers here
const papersData = [
    {
        id: 1,
        title: "Algebra Fundamentals",
        subject: "Mathematics",
        description: "Complete guide to algebraic equations and functions",
        author: "Dr. Smith",
        year: 2025,
        url: "#"
    },
    {
        id: 2,
        title: "Mechanics and Motion",
        subject: "Physics",
        description: "Comprehensive study of forces, motion, and energy",
        author: "Prof. Johnson",
        year: 2025,
        url: "#"
    },
    {
        id: 3,
        title: "Organic Chemistry",
        subject: "Chemistry",
        description: "Understanding organic compounds and reactions",
        author: "Dr. Brown",
        year: 2025,
        url: "#"
    },
    {
        id: 4,
        title: "Cell Biology",
        subject: "Biology",
        description: "Structure and function of cells",
        author: "Dr. Wilson",
        year: 2025,
        url: "#"
    },
    {
        id: 5,
        title: "Shakespeare's Works",
        subject: "English",
        description: "Analysis of Shakespeare's major plays and sonnets",
        author: "Prof. Davis",
        year: 2025,
        url: "#"
    },
    {
        id: 6,
        title: "World War II",
        subject: "History",
        description: "Causes, events, and consequences of WWII",
        author: "Dr. Miller",
        year: 2025,
        url: "#"
    },
    {
        id: 7,
        title: "Geometry and Trigonometry",
        subject: "Mathematics",
        description: "Shapes, angles, and trigonometric functions",
        author: "Dr. Smith",
        year: 2025,
        url: "#"
    },
    {
        id: 8,
        title: "Thermodynamics",
        subject: "Physics",
        description: "Heat, temperature, and energy transfer",
        author: "Prof. Johnson",
        year: 2025,
        url: "#"
    },
    {
        id: 9,
        title: "Periodic Table",
        subject: "Chemistry",
        description: "Elements, atomic structure, and chemical bonding",
        author: "Dr. Brown",
        year: 2025,
        url: "#"
    },
    {
        id: 10,
        title: "Evolution and Genetics",
        subject: "Biology",
        description: "Darwin's theory and inheritance patterns",
        author: "Dr. Wilson",
        year: 2025,
        url: "#"
    },
    {
        id: 11,
        title: "Grammar and Composition",
        subject: "English",
        description: "English language rules and writing techniques",
        author: "Prof. Davis",
        year: 2025,
        url: "#"
    },
    {
        id: 12,
        title: "Ancient Civilizations",
        subject: "History",
        description: "Egyptian, Greek, and Roman history",
        author: "Dr. Miller",
        year: 2025,
        url: "#"
    }
];

// Global filter state
let currentFilter = 'All';
let filteredPapers = [...papersData];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    renderPapers(papersData);
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
        <div class="paper-card">
            <div class="paper-header">
                <span class="paper-subject">${paper.subject}</span>
                <h3>${paper.title}</h3>
            </div>
            <div class="paper-body">
                <p class="paper-description">${paper.description}</p>
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
    alert(`Downloading: ${title}\n\nIn a real implementation, this would download the PDF file for this paper.`);
    // In production, you would:
    // 1. Create actual PDF files
    // 2. Store them in a files/ or assets/ directory
    // 3. Link directly to them: window.location.href = 'files/paper-name.pdf';
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
        document.getElementById('searchInput').value = '';
        filterPapers();
    }
});
