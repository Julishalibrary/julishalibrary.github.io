#!/usr/bin/env node

/**
 * CSV to Papers Data Converter
 * Converts CSV file to JavaScript paper data objects
 * 
 * Usage: node csv-to-papers.js papers_import.csv
 */

const fs = require('fs');
const path = require('path');

// CSV columns to expect
const REQUIRED_COLUMNS = [
    'Title',
    'Subject', 
    'Level',
    'Description',
    'Author',
    'Year',
    'Pages',
    'Difficulty',
    'PDF_Path',
    'Featured'
];

function parseCSV(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.trim().split('\n');
    
    if (lines.length < 2) {
        console.error('❌ CSV file must have headers and at least one data row');
        process.exit(1);
    }
    
    // Parse header
    const headers = lines[0].split(',').map(h => h.trim());
    
    // Validate headers
    const missingColumns = REQUIRED_COLUMNS.filter(col => !headers.includes(col));
    if (missingColumns.length > 0) {
        console.error(`❌ Missing required columns: ${missingColumns.join(', ')}`);
        console.error(`Expected: ${REQUIRED_COLUMNS.join(', ')}`);
        process.exit(1);
    }
    
    // Parse data rows
    const papers = [];
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        
        if (values.length !== headers.length) {
            console.warn(`⚠️  Row ${i + 1} has incorrect number of columns, skipping`);
            continue;
        }
        
        const data = {};
        headers.forEach((header, index) => {
            data[header] = values[index];
        });
        
        papers.push(data);
    }
    
    return papers;
}

function validatePaper(paper, index) {
    const errors = [];
    
    if (!paper.Title || paper.Title.length === 0) {
        errors.push(`Row ${index + 1}: Title is required`);
    }
    if (!paper.Subject || paper.Subject.length === 0) {
        errors.push(`Row ${index + 1}: Subject is required`);
    }
    if (!paper.Level || paper.Level.length === 0) {
        errors.push(`Row ${index + 1}: Level is required`);
    }
    if (!paper.PDF_Path || paper.PDF_Path.length === 0) {
        errors.push(`Row ${index + 1}: PDF_Path is required`);
    }
    
    const validDifficulties = ['Easy', 'Medium', 'Hard'];
    if (paper.Difficulty && !validDifficulties.includes(paper.Difficulty)) {
        errors.push(`Row ${index + 1}: Difficulty must be Easy, Medium, or Hard`);
    }
    
    if (isNaN(parseInt(paper.Year))) {
        errors.push(`Row ${index + 1}: Year must be a number`);
    }
    
    if (isNaN(parseInt(paper.Pages))) {
        errors.push(`Row ${index + 1}: Pages must be a number`);
    }
    
    return errors;
}

function generateJavaScript(papers, startingId = 1) {
    let js = '';
    
    papers.forEach((paper, index) => {
        const id = startingId + index;
        const featured = paper.Featured.toLowerCase() === 'true' ? 'true' : 'false';
        
        js += `    {\n`;
        js += `        id: ${id},\n`;
        js += `        title: "${paper.Title}",\n`;
        js += `        subject: "${paper.Subject}",\n`;
        js += `        level: "${paper.Level}",\n`;
        js += `        description: "${paper.Description}",\n`;
        js += `        author: "${paper.Author}",\n`;
        js += `        year: ${parseInt(paper.Year)},\n`;
        js += `        downloads: 0,\n`;
        js += `        rating: 4.5,\n`;
        js += `        featured: ${featured},\n`;
        js += `        pages: ${parseInt(paper.Pages)},\n`;
        js += `        difficulty: "${paper.Difficulty}",\n`;
        js += `        pdfUrl: "${paper.PDF_Path}",\n`;
        js += `        url: "#"\n`;
        js += `    },\n`;
    });
    
    return js;
}

// Main execution
if (process.argv.length < 3) {
    console.log('📄 CSV to Papers Data Converter\n');
    console.log('Usage: node csv-to-papers.js <csv-file> [starting-id]\n');
    console.log('Example: node csv-to-papers.js papers_import.csv 13\n');
    console.log('CSV Format:');
    console.log(REQUIRED_COLUMNS.join(', '));
    process.exit(1);
}

const csvFile = process.argv[2];
const startingId = process.argv[3] ? parseInt(process.argv[3]) : 13;

if (!fs.existsSync(csvFile)) {
    console.error(`❌ File not found: ${csvFile}`);
    process.exit(1);
}

console.log(`\n📚 Parsing CSV file: ${csvFile}\n`);

try {
    const papers = parseCSV(csvFile);
    console.log(`✅ Found ${papers.length} papers to import\n`);
    
    // Validate all papers
    let hasErrors = false;
    const allErrors = [];
    
    papers.forEach((paper, index) => {
        const errors = validatePaper(paper, index);
        if (errors.length > 0) {
            hasErrors = true;
            allErrors.push(...errors);
        }
    });
    
    if (hasErrors) {
        console.error('❌ Validation errors found:\n');
        allErrors.forEach(error => console.error(`   ${error}`));
        process.exit(1);
    }
    
    console.log('✅ All papers validated successfully\n');
    
    // Generate JavaScript
    const js = generateJavaScript(papers, startingId);
    
    console.log('📝 Generated JavaScript code:\n');
    console.log('Add this to the papersData array in js/script.js:\n');
    console.log('```javascript');
    console.log(js);
    console.log('```\n');
    
    console.log(`ℹ️  Next available ID: ${startingId + papers.length}\n`);
    console.log('📋 Steps to complete:\n');
    console.log('1. Copy the JavaScript code above');
    console.log('2. Open js/script.js and find the papersData array');
    console.log('3. Paste the code inside the array');
    console.log('4. Ensure all PDF files exist at specified paths');
    console.log('5. Commit and push to GitHub\n');
    
} catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
}
