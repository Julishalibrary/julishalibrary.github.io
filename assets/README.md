# Assets 🎨

This directory contains static assets like images and fonts.

## Structure

```
assets/
├── images/               # Image files
│   └── logo.png (placeholder)
└── fonts/                # Custom fonts (optional)
```

## Images

### Current Images
- `logo.png` - Julisha Library logo (placeholder)

### Adding New Images

1. Place image files in `assets/images/`
2. Use descriptive names: `logo.png`, `hero-banner.jpg`, etc.
3. Optimize for web (compress size)
4. Recommended formats: PNG, JPEG, SVG, WebP

### Image Optimization Tips

- **PNG**: Best for logos and graphics with transparency
- **JPEG**: Best for photos
- **SVG**: Best for scalable graphics
- **WebP**: Modern format with better compression

### Tools for Image Optimization
- TinyPNG (https://tinypng.com/)
- ImageOptim (macOS)
- FileOptimizer (Windows)
- ImageMagick (CLI)

## Fonts

Currently not used, but can be added for custom typography.

### Custom Font Formats
- `.woff2` - Modern, compressed
- `.woff` - Wide browser support
- `.ttf` - TrueType font
- `.otf` - OpenType font

### Using Custom Fonts in CSS

```css
@font-face {
    font-family: 'CustomFont';
    src: url('/assets/fonts/custom.woff2') format('woff2'),
         url('/assets/fonts/custom.woff') format('woff');
}

body {
    font-family: 'CustomFont', sans-serif;
}
```

## Current Media References

In `index.html` and `css/style.css`:
- All images use relative paths: `assets/images/`
- No custom fonts currently defined

## Adding Assets

1. Place files in appropriate subfolder
2. Reference with relative paths:
   ```html
   <img src="assets/images/logo.png" alt="Logo">
   ```
3. Update `git` if necessary
4. Commit with `git add assets/`

## Best Practices

- Optimize all images for web
- Use descriptive alt text for all images
- Keep file sizes reasonable (< 500KB per image)
- Use SVG for icons and logos when possible
- Consider using a CDN for large images

## Future Enhancements

- Add favicon
- Add social media preview image
- Add app icons for PWA
- Add branded fonts

---

For design system documentation, see [STRUCTURE.md](../docs/STRUCTURE.md).
