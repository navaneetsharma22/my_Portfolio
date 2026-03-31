# Portfolio Website

Static portfolio site built with HTML/CSS/JS.

## Files
- `index.html` (entry page)
- `style.css`
- `script.js`
- Images/assets in the repo root and folders

## Run locally
Open `index.html` in your browser.

If you want a local web server (recommended for consistent behavior), run one of these from the project folder:
- Python: `python -m http.server 5173`
- Node: `npx serve`

Then visit `http://localhost:5173`.

## Deploy
### Netlify (quickest)
1. Go to Netlify → **Add new site** → **Deploy manually**
2. Drag-and-drop this project folder

### GitHub Pages
1. Push this repo to GitHub
2. GitHub → **Settings** → **Pages**
3. **Build and deployment** → **Deploy from a branch** → select `main` and `/ (root)`

### Vercel
1. Push this repo to GitHub
2. Import the repo in Vercel
3. Framework preset: **Other**
4. No build step needed (static files served from the repo root)

