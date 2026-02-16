# Deployment Guide - Julisha Library

## 🚀 Deploy to GitHub Pages

This guide will help you deploy Julisha Library to GitHub Pages in less than 5 minutes.

### Prerequisites
- A GitHub account
- Git installed on your computer
- This repository cloned or forked

## Step-by-Step Deployment

### Step 1: Fork or Create the Repository

If you haven't already:
1. Fork this repository, OR
2. Create a new repository named `your-username.github.io` (replace with your GitHub username)

### Step 2: Clone Your Repository Locally

```bash
git clone https://github.com/your-username/Julisha-Library.git
cd Julisha-Library
```

### Step 3: Configure GitHub Pages

#### Method 1: Using GitHub Web Interface (Easiest)

1. Go to your repository on GitHub.com
2. Click **Settings** (top right)
3. In the left sidebar, click **Pages**
4. Under "Source", select:
   - Branch: `main` (or your default branch)
   - Folder: `/code`
5. Click **Save**
6. Wait 1-2 minutes for the site to build
7. Your live site will be at: `https://your-username.github.io/Julisha-Library` (if repo is named Julisha-Library)

#### Method 2: Alternative - Using docs/ folder

If you prefer using `docs/` folder instead:

1. Copy contents of `code/` to `docs/` folder
2. Go to Settings → Pages
3. Select `/docs` as the source
4. Your site will be live

### Step 4: Verify Deployment

1. Check that your site is live by visiting your GitHub Pages URL
2. Test all features:
   - Search functionality
   - Subject filters
   - Download buttons
   - Responsive design on mobile

### Step 5: Customize Your Site

Edit these files to customize:

- **Site Title**: `code/index.html` - Change `<h1>📚 Julisha Library</h1>`
- **Colors**: `code/style.css` - Modify CSS variables in `:root`
- **Papers**: `code/script.js` - Edit `papersData` array
- **About Text**: `code/index.html` - Update About section
- **Footer**: `code/index.html` - Change footer content

### Step 6: Add Custom Domain (Optional)

To use your own domain:

1. Go to Settings → Pages
2. Under "Custom domain", type your domain name
3. Click Save
4. Update your domain's DNS settings to point to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

OR use a CNAME record pointing to `your-username.github.io`

## Troubleshooting

### Site Not Showing Up?

1. **Check GitHub Pages is Enabled**
   - Settings → Pages → Ensure a source is selected

2. **Clear Browser Cache**
   ```bash
   # Or use Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   ```

3. **Check File Structure**
   - Ensure `index.html` is in the `code/` folder
   - CSS and JS files should be in the same `code/` folder

4. **Wait a Bit**
   - GitHub Pages can take 1-5 minutes to deploy changes

### Papers Not Showing?

- Check browser console for JavaScript errors (F12)
- Verify `script.js` is properly linked in `index.html`
- Check that `papersData` array in `script.js` is valid JSON

### Styling Looks Wrong?

- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Verify `style.css` path is correct in `index.html`
- Check that CSS file has no syntax errors

## Going Further

### Add PDF Downloads

1. Create a `code/files/` folder
2. Add your PDF files there
3. Update paper URLs in `code/script.js`:
   ```javascript
   {
       // ...
       url: "files/your-paper.pdf"
   }
   ```

### Set Up Automatic Deployment

GitHub automatically deploys when you push to your repository:

```bash
git add .
git commit -m "Update papers and content"
git push origin main
```

### Enable HTTPS (Automatic)

GitHub Pages automatically provides HTTPS for all sites. Your URL will be:
`https://your-username.github.io/Julisha-Library`

## Performance Tips

1. **Compress Images**: Use online tools to reduce image file sizes
2. **Minimize CSS/JS**: Use minification tools for production
3. **Use CDN for Fonts**: Consider using Google Fonts CDN
4. **Enable Caching**: GitHub Pages handles caching automatically

## Security & Privacy

- GitHub Pages is static hosting (very secure)
- No user data is collected unless you add tracking
- All your code is open-source and visible
- No backend server needed

## Next Steps

- Add more papers to grow your library
- Share your site on social media
- Contribute improvements back to the project
- Consider adding a newsletter signup
- Create social media accounts to promote

## Support

If you encounter issues:
1. Check the main [README.md](README.md)
2. Review GitHub Pages documentation: [https://docs.github.com/en/pages](https://docs.github.com/en/pages)
3. Open an issue on GitHub with detailed description

---

🎉 **Congratulations! Your Julisha Library is now live on GitHub Pages!**

Happy studying! 📚
