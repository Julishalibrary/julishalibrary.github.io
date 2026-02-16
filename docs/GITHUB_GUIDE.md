# GitHub Guide: Upload & Share 🚀

Complete guide to uploading Julisha Library to GitHub and sharing with others.

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Repository Structure](#repository-structure)
3. [Uploading to GitHub](#uploading-to-github)
4. [Managing Papers](#managing-papers)
5. [Sharing & Collaboration](#sharing--collaboration)
6. [Live Preview Setup](#live-preview-setup)

## Initial Setup

### Step 1: Create GitHub Account
1. Go to https://github.com
2. Sign up for a free account
3. Verify your email

### Step 2: Create Repository

#### Option A: Fork Existing
```bash
# Visit the repo and click "Fork"
git clone https://github.com/YOUR-USERNAME/Julisha-Library.git
cd Julisha-Library
```

#### Option B: Create New
```bash
# Create on GitHub, then:
git clone https://github.com/YOUR-USERNAME/Julisha-Library.git
cd Julisha-Library
```

### Step 3: Configure Git
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Repository Structure

The organized structure is ready for GitHub:

```
Julisha-Library/
├── 📄 README.md              # Main documentation
├── 📄 QUICK_START.md         # Quick setup
├── 📄 DEPLOYMENT.md          # Deployment guide
├── 📄 LICENSE                # MIT License
├── 📄 .gitignore             # Git ignore rules
│
├── 📁 css/                   # Stylesheets
├── 📁 js/                    # JavaScript
├── 📁 assets/                # Images & fonts
├── 📁 papers/                # Study materials
│   ├── mathematics/
│   ├── physics/
│   ├── chemistry/
│   ├── biology/
│   ├── english/
│   ├── history/
│   └── geography/
├── 📁 docs/                  # Documentation
│   ├── CONTRIBUTING.md
│   ├── STRUCTURE.md
│   ├── API.md
│   └── README.md
│
└── 📄 index.html             # Main page
```

**All files are organized for easy management and collaboration!**

## Uploading to GitHub

### Initial Push

```bash
# Navigate to project directory
cd Julisha-Library

# Initialize git (if not already done)
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit: Julisha Library with organized structure"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/Julisha-Library.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Regular Updates

```bash
# Add new papers
git add papers/subject/new-paper.pdf js/script.js

# Commit
git commit -m "Add: Paper Title"

# Push
git push
```

## Managing Papers

### Adding Papers Locally

1. **Create PDF file**
   ```
   papers/mathematics/algebra-basics.pdf
   ```

2. **Update `js/script.js`**
   ```javascript
   {
       id: 13,
       title: "Algebra Basics",
       subject: "Mathematics",
       level: "Grade 10",
       description: "Fundamental algebra concepts",
       author: "Your Name",
       year: 2026,
       downloads: 0,
       rating: 4.5,
       featured: false,
       pages: 40,
       difficulty: "Medium",
       pdfUrl: "papers/mathematics/algebra-basics.pdf",
       url: "#"
   }
   ```

3. **Commit and push**
   ```bash
   git add papers/mathematics/algebra-basics.pdf
   git add js/script.js
   git commit -m "Add: Algebra Basics"
   git push
   ```

### Viewing Changes

```bash
# See what changed
git status

# See differences
git diff

# See commit history
git log --oneline
```

## Sharing & Collaboration

### Share Repository Link

```
Share this link with others:
https://github.com/YOUR-USERNAME/Julisha-Library

Or enable GitHub Pages:
https://YOUR-USERNAME.github.io/Julisha-Library
```

### Accept Contributions

1. Users fork your repository
2. They make changes in their fork
3. They submit a Pull Request (PR)
4. You review and merge

### Merge a Pull Request

```bash
# Pull and review PR changes
git fetch origin pull/ID/head:branch-name
git checkout branch-name

# Test the changes
# Then merge
git checkout main
git merge branch-name
git push
```

## Live Preview Setup

### Option 1: GitHub Pages (Recommended)

1. **Go to Repository Settings**
   - GitHub.com → Your Repo → Settings → Pages

2. **Enable GitHub Pages**
   - Source: Select "main" branch
   - Folder: Select "/ (root)"
   - Click Save

3. **Wait 1-2 minutes**
   - Your site is live at: `https://USERNAME.github.io/Julisha-Library`

4. **Custom Domain (Optional)**
   - Point your domain DNS to GitHub Pages
   - Add domain in GitHub Pages settings

### Option 2: Local Preview

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server

# Ruby
ruby -run -ehttpd . -p 8000
```

Then visit: `http://localhost:8000`

### Option 3: Netlify Deployment

1. Connect GitHub repository to Netlify
2. Auto-deploys on push
3. Free HTTPS, custom domains
4. Better performance

## Live PDF Preview Features

Users can preview papers directly in browser:

- **Built-in PDF Viewer** using PDF.js
- **Page Navigation** - browse through pages
- **Difficulty Voting** - users vote on paper difficulty
- **Social Sharing** - share papers via link or email
- **Full Screen View** - open PDF in new tab
- **Download** - direct download capability

## Managing Downloads

### Paper Downloads
- Users click "Download PDF" button
- PDF is served from `/papers/subject/` folder
- File downloads to user's computer

### Batch Download
Users can:
- Select multiple papers with checkboxes
- Click "Download Selected"
- Get ZIP file with all papers

## Storage & Limits

### GitHub Limits
- **File size**: Max 100 MB per file
- **Repository size**: Up to 2 GB recommended
- **Bandwidth**: Unlimited for GitHub Pages

### Best Practices
- Keep PDFs < 50 MB each
- Total < 1 GB for fast cloning
- Use compression tools if needed

### If Exceeding Limits
1. **Split by subject** - Create separate branches
2. **Use Releases** - Upload large files as releases
3. **Use CDN** - Store larger PDFs on external storage

## Backup & Version Control

### Create Backup
```bash
# Create a backup branch
git checkout -b backup-$(date +%Y%m%d)
git push origin backup-$(date +%Y%m%d)
```

### Restore from History
```bash
# See all commits
git log

# View old version
git show COMMIT-HASH:papers/subject/paper.pdf

# Revert changes
git revert COMMIT-HASH
```

## Analytics with GitHub

### Track Engagement
- GitHub Insights → Traffic
- See clones, visitors, top referrers
- View network/fork activity

### Check Repository Stats
- Stars (Suggestions)
- Forks (Communities)
- Issues (Problems/Requests)
- Pull Requests (Contributions)

## Security

### Protect Main Branch
1. Settings → Branch protection rules
2. Require pull request reviews
3. Prevent force pushes

### Access Control
- **Public**: Anyone can see/clone
- **Private**: Invite collaborators only
- Can change anytime in Settings

## Collaboration Workflow

### For Team Projects

```bash
# Team member clones
git clone https://github.com/REPO-OWNER/Julisha-Library.git

# Create feature branch
git checkout -b add-chemistry-papers

# Make changes
# Add papers to papers/chemistry/

# Push to own fork
git push origin add-chemistry-papers

# Open Pull Request on GitHub

# After merge, sync local copy
git pull origin main
```

## Maintenance

### Keep Repository Clean

```bash
# Remove unused branches
git branch -d old-branch
git push origin --delete old-branch

# Archive old releases
git tag v1.0
git push origin v1.0
```

### Update Documentation
```bash
# Edit docs
nano docs/CONTRIBUTING.md

# Push changes
git add docs/
git commit -m "Update: Documentation"
git push
```

## Quick Reference Commands

```bash
# Clone
git clone <repo-url>

# Status
git status

# Add files
git add .

# Commit
git commit -m "message"

# Push
git push

# Pull (get latest)
git pull

# Create branch
git checkout -b new-branch

# Switch branch
git checkout branch-name

# Merge
git merge branch-name

# See history
git log

# Undo last commit
git reset --soft HEAD~1
```

## Troubleshooting

### "permission denied (publickey)"
```bash
# Generate SSH key
ssh-keygen -t ed25519

# Add to GitHub: Settings → SSH & GPG Keys
cat ~/.ssh/id_ed25519.pub
```

### "failed to push"
```bash
# Pull latest
git pull

# Fix conflicts if any
# Then push again
git push
```

### "large file error"
```bash
# Check file size
ls -lh papers/subject/paper.pdf

# Compress PDF or use Git LFS for large files
```

## Next Steps

1. ✅ Fork/Create repository
2. ✅ Enable GitHub Pages
3. ✅ Set up collaboration rules
4. ✅ Start adding papers
5. ✅ Share with community

## Support

- GitHub Docs: https://docs.github.com
- PDF.js Docs: https://mozilla.github.io/pdf.js/
- Issues & Questions: Open GitHub Issue

---

**Ready to share knowledge? Let's go! 🚀📚**
