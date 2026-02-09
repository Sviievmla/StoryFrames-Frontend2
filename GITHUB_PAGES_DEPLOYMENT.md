# GitHub Pages Deployment Solution

## Overview
This document explains the solution implemented to deploy the StoryFrames homepage to GitHub Pages at https://sviievmla.github.io/StoryFrames-Frontend2/

## Problem
The original application is a Next.js 15 App Router application with dynamic routes based on country codes (`[countryCode]`). These dynamic routes require:
- Server-side rendering or ISR (Incremental Static Regeneration)
- A Medusa backend for data fetching
- Middleware for routing

GitHub Pages only supports static HTML/CSS/JS files and cannot run Node.js middleware or server-side code.

## Solution

### 1. Static Homepage (`src/app/page.tsx`)
Created a root-level page that displays the StoryFrames Hero component without requiring any backend data. This serves as the entry point for the GitHub Pages deployment.

### 2. Next.js Configuration (`next.config.js`)
When `GITHUB_PAGES=true` environment variable is set:
- `basePath`: Set to `/StoryFrames-Frontend2` to match the repository name
- `assetPrefix`: Set to `/StoryFrames-Frontend2` for correct asset paths
- `output`: Set to `'export'` for static site generation
- `trailingSlash`: Set to `true` for proper routing
- `images.unoptimized`: Set to `true` (Next.js Image Optimization API not available in static export)

### 3. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
The workflow:
1. Checks out the code
2. Sets up Node.js 20 and Yarn
3. Installs dependencies
4. **Temporarily renames** `src/app/[countryCode]` to `src/app/_countryCode_temp` (dynamic routes are incompatible with static export)
5. Builds the static site with `output: 'export'`
6. Restores the `[countryCode]` directory
7. Adds `.nojekyll` file to prevent Jekyll processing
8. Uploads the `out/` directory as a Pages artifact
9. Deploys to GitHub Pages

### 4. Dynamic Route Handling
The application's dynamic `[countryCode]` routes are temporarily excluded from the static build because:
- Next.js 15 App Router requires `generateStaticParams()` for ALL pages with dynamic segments when using `output: 'export'`
- The nested dynamic routes (products, orders, etc.) would require extensive data fetching from a Medusa backend
- For the GitHub Pages use case, only the homepage is needed

## Files Changed

### Created:
- `.github/workflows/deploy.yml` - GitHub Actions workflow for deployment
- `src/app/page.tsx` - Static homepage for GitHub Pages
- `src/app/[countryCode]/layout.tsx` - Layout with `generateStaticParams` for dynamic routes
- `public/.nojekyll` - Prevents Jekyll processing on GitHub Pages

### Modified:
- `next.config.js` - Added GitHub Pages configuration
- Various page files - Added `dynamicParams = false` for static export compatibility

## Result
The deployment creates a static site with:
- Homepage showing the StoryFrames Hero section
- Mauve/purple themed branding
- "Personalized gifts that come to life" messaging
- GitHub repository link
- All assets (images, CSS, JS) properly loaded with base path

## Local Testing
To test the build locally:
```bash
# Temporarily rename dynamic routes
mv src/app/[countryCode] src/app/_countryCode_temp

# Build with GitHub Pages configuration
GITHUB_PAGES=true \
MEDUSA_BACKEND_URL=http://localhost:9000 \
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=pk_test \
NEXT_PUBLIC_BASE_URL=https://sviievmla.github.io/StoryFrames-Frontend2 \
NEXT_PUBLIC_DEFAULT_REGION=us \
yarn build

# Restore dynamic routes
mv src/app/_countryCode_temp src/app/[countryCode]

# View output
ls -la out/
```

## Future Improvements
If you need the full e-commerce functionality on GitHub Pages, consider:
1. Using a headless CMS or static data source
2. Deploying the Medusa backend separately (e.g., Railway, Heroku)
3. Using client-side data fetching
4. Deploying to Vercel/Netlify instead (they support SSR)
