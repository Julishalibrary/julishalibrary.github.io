# Managing Paper Submissions

## How the System Works

Users can submit papers directly through the **"Submit a Paper"** section on the website. Submissions are stored in the browser's **localStorage** and can be exported for review.

---

## 📊 Viewing Submissions

### Method 1: Browser Console (Easiest)

1. Open the website in your browser
2. Press `F12` or right-click → "Inspect" to open Developer Tools
3. Go to the **Console** tab
4. Run this command:

```javascript
JSON.parse(localStorage.getItem('submissions_papers'))
```

This will show all submissions in a formatted list.

### Method 2: Exporting to JSON File

Run in the browser console:

```javascript
const submissions = JSON.parse(localStorage.getItem('submissions_papers'));
const json = JSON.stringify(submissions, null, 2);
console.log(json);
// Copy the output and save to a .json file
```

Or for a direct download:

```javascript
// Function is built-in, just run it
exportSubmissions();
```

---

## 📥 Submission Format

Each submission contains:

```javascript
{
    timestamp: "2026-02-16T10:30:00.000Z",
    name: "John Doe",
    email: "john@example.com",
    title: "Quadratic Equations",
    subject: "Mathematics",
    level: "Grade 10",
    description: "Complete guide to solving quadratic equations",
    difficulty: "Medium",
    fileSize: 2097152,          // in bytes
    fileName: "quadratic.pdf",  // note: file is NOT stored, user must resubmit PDF
    status: "pending_review"
}
```

---

## 📋 Processing Workflow

### Step 1: Review Submission

1. Check the submission data in localStorage
2. Review title, description, and difficulty level
3. Verify the subject and level match our categories

### Step 2: Request or Receive PDF

**Important:** The PDF file is NOT stored in localStorage (too large). You need to:

1. **Option A:** Email the submitter asking them to resend the PDF
2. **Option B:** The user can resubmit the form with the PDF attached

Once you have the PDF:

1. Verify it's a valid PDF file (not corrupt)
2. Check file size (should be under 10MB)
3. Review content for quality and accuracy

### Step 3: Organize File

1. Place PDF in appropriate `/papers/subject/` folder
2. Create a descriptive filename (lowercase, hyphens):
   ```
   papers/mathematics/quadratic-equations.pdf
   ```

### Step 4: Add to papersData

Update `js/script.js` with the new paper.

**Option 1 - Manual:**

```javascript
{
    id: 13,
    title: "Quadratic Equations",
    subject: "Mathematics",
    level: "Grade 10",
    description: "Complete guide to solving quadratic equations",
    author: "John Doe",
    year: 2026,
    downloads: 0,
    rating: 4.5,
    featured: false,
    pages: 28,
    difficulty: "Medium",
    pdfUrl: "papers/mathematics/quadratic-equations.pdf",
    url: "#"
}
```

**Option 2 - Use CSV Importer:**

Create `new_papers.csv`:
```csv
Title,Subject,Level,Description,Author,Year,Pages,Difficulty,PDF_Path,Featured
Quadratic Equations,Mathematics,Grade 10,Complete guide to solving quadratic equations,John Doe,2026,28,Medium,papers/mathematics/quadratic-equations.pdf,false
```

Then:
```bash
node docs/csv-to-papers.js new_papers.csv
```

### Step 5: Test

1. Commit your changes to git
2. Push to GitHub
3. Visit the live site and verify:
   - Paper appears in search results
   - Paper appears in correct subject/level filters
   - PDF preview works
   - Download works

### Step 6: Follow Up

Send email to submitter:
```
Subject: Your Paper Has Been Published! 🎉

Dear [Author Name],

Your paper "[Paper Title]" has been published on Julisha Library!

View it here: [Link to paper/subject]

Thank you for contributing! Your work will help thousands of students.

Best regards,
Julisha Library Team
```

---

## 🛠️ Useful Console Commands

### View all submissions
```javascript
JSON.parse(localStorage.getItem('submissions_papers'))
```

### Count pending submissions
```javascript
JSON.parse(localStorage.getItem('submissions_papers')).filter(s => s.status === 'pending_review').length
```

### View specific submission
```javascript
const submissions = JSON.parse(localStorage.getItem('submissions_papers'));
submissions[0]  // First submission
```

### Clear all submissions (use with caution!)
```javascript
localStorage.removeItem('submissions_papers');
```

### Get submitter's email
```javascript
localStorage.getItem('submissions_email')
```

### Export as CSV
```javascript
const submissions = JSON.parse(localStorage.getItem('submissions_papers'));
let csv = 'Name,Email,Title,Subject,Level,Difficulty,Date\n';
submissions.forEach(s => {
    csv += `"${s.name}","${s.email}","${s.title}","${s.subject}","${s.level}","${s.difficulty}","${s.timestamp}"\n`;
});
console.log(csv);
// Copy and paste into Google Sheets or Excel
```

---

## ✅ Quality Checklist

Before publishing a submitted paper, verify:

- ✓ PDF is readable and not corrupted
- ✓ Content is educational and appropriate
- ✓ No copyright violations
- ✓ Correct subject assignment
- ✓ Appropriate difficulty level
- ✓ Good PDF quality (not blurry/scanned poorly)
- ✓ File size under 10MB
- ✓ Description is accurate

---

## 🚫 Rejection Criteria

Do NOT publish if:

- ❌ PDF is corrupted or unreadable
- ❌ Content is inappropriate or offensive
- ❌ Copyright-protected material
- ❌ Very poor PDF quality
- ❌ Duplicate of existing paper
- ❌ Wrong file format (not PDF)
- ❌ Content doesn't match description

When rejecting, email the submitter explaining why.

---

## 📊 Admin Dashboard (Future Enhancement)

Potential features to build:

1. **Submission Management Panel**
   - See all pending submissions
   - One-click approve/reject
   - Send templated responses

2. **Stats Dashboard**
   - Total submissions this week/month
   - Most popular subjects
   - Approval rates

3. **Auto-moderation**
   - Detect duplicates
   - Scan for inappropriate content
   - Validate PDF files

4. **Email Notifications**
   - Alert admin of new submissions
   - Auto-reply to submitters
   - Notify on approval/rejection

---

## 🔒 Security Notes

- **User uploads are NOT stored** (only metadata in localStorage)
- localStorage is **browser-specific** (different devices = different data)
- localStorage data is **lost if user clears browser cache**
- To prevent data loss, **regularly export submissions**

### Backup Submissions Regularly

```javascript
// Create backup every week
const backup = {
    date: new Date().toISOString(),
    submissions: JSON.parse(localStorage.getItem('submissions_papers'))
};
console.log(JSON.stringify(backup, null, 2));
```

---

## 📞 Example Workflow

### Scenario: User submits "Photosynthesis in Plants"

1. **Friday 10am:** User submits paper on website
2. **Friday 11am:** You check localStorage and find the submission
3. **Friday 2pm:** User receives automated "Thank you" email
4. **Friday 3pm:** You email user asking for PDF (since it's not stored)
5. **Friday 4pm:** User sends PDF via email reply
6. **Monday 9am:** You review PDF quality (looks good!)
7. **Monday 10am:** You place PDF in `papers/biology/photosynthesis.pdf`
8. **Monday 11am:** You add paper to papersData in script.js
9. **Monday 12pm:** You commit and push to GitHub
10. **Monday 1pm:** Paper is LIVE on the site!
11. **Monday 2pm:** You send congratulations email to author
12. **Success!** Paper now available to thousands of students

---

## Next: Automation Ideas

To make submissions even easier, consider:

1. **Email Integration** - Receive submissions via email
2. **Google Forms** - Use Google Forms + auto-publish system  
3. **GitHub Integration** - Auto-create PRs from submissions
4. **Webhook** - Trigger functions when Papers are submitted

See [AUTOMATION.md](./AUTOMATION.md) for more ideas.
