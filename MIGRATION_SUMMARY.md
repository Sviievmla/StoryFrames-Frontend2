# Story Frames Branding Migration Summary

This document summarizes the migration of Story Frames branding, content, and styling from the legacy repository into the modern Medusa storefront.

## Changes Made

### 1. Asset Migration ✅
All product images and branding assets have been copied from the legacy `Sviievmla/storyframes` repository:

**Location**: `public/images/storyframes/`
- Product images:
  - `ball-1.jpg`, `ball-2.jpg`, `ball-3.jpg` (Video Ball)
  - `frame-1.jpg`, `frame-2.jpg`, `frame-3.jpeg` (Premium Frame)
  - `card-1.jpg`, `card-2.jpg`, `card-3.jpg` (Digital Greeting Card)
- Brand assets:
  - `logo.png` (Story Frames logo)
  - `gallery-1.jpeg`, `gallery-2.png`, `gallery-3.jpg` (Gallery images)

### 2. Typography & Theme Setup ✅
**Files Modified**: `tailwind.config.js`, `src/styles/globals.css`

#### Font Families Added
- **Headings**: Playfair Display (serif)
- **Body text**: Manrope (sans-serif)

Google Fonts import added to `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap');
```

#### Color Theme
Added Story Frames color palette to Tailwind config:
- `storyframes-bg`: #836475 (Mauve/purple background)
- `storyframes-text`: #fcfbfc (Light text)
- `storyframes-muted`: rgba(252, 251, 252, 0.85) (Muted text)
- `storyframes-line`: rgba(255, 255, 255, 0.14) (Border color)
- `storyframes-rose`: #ff4d7d (Rose accent)
- `storyframes-rose2`: #ff86ad (Light rose)
- `storyframes-gold`: #e7c27a (Gold accent)
- `storyframes-panel`: rgba(255, 255, 255, 0.06) (Panel background)
- `storyframes-panel2`: rgba(0, 0, 0, 0.25) (Dark panel)

#### Custom CSS Classes
Added to `globals.css`:
- `.storyframes-hero-bg`: Gradient background with radial overlays
- `.storyframes-card`: Card with gradient overlay effect
- `.storyframes-btn-primary`: Rose gradient button
- `.storyframes-btn-gold`: Gold gradient button
- `.storyframes-tag`: Pill-shaped tag with rose styling

### 3. Hero Section Update ✅
**File Modified**: `src/modules/home/components/hero/index.tsx`

#### Content Changes
- **Title**: "Personalized gifts that come to life."
- **Body**: "Send us a photo — we transform it into a short video and embed it into your chosen product. A moving memory that feels premium, personal, and unforgettable."

#### CTA Buttons
Three call-to-action buttons added:
1. **"View products"** (Primary - rose gradient) - Links to #products
2. **"Order by email"** (Gold gradient) - Opens email to Sviievmla@gmail.com
3. **"Message on Facebook"** (Secondary) - Links to Facebook page

#### "How Ordering Works" Card
Added card with three steps:
- "You send us your photo (even an old paper photo)."
- "We turn it into a short "magic" video story."
- "We deliver it inside your selected product."

### 4. Product Card Styling ✅
**File Modified**: `src/modules/products/components/product-preview/index.tsx`

#### Visual Changes
- Rounded corners (24px border-radius)
- Gradient overlay (radial gradients with rose and gold)
- Semi-transparent card background
- Shadow effects with hover state
- Image zoom on hover (scale 1.05)
- Separated meta section with border

#### Card Structure
1. **Image Section** (260px height)
   - Product thumbnail
   - Hover zoom effect
2. **Body Section**
   - Product title (Playfair Display, 24px)
   - Product description (15.5px)
3. **Meta Section**
   - Price (bold, 24px)
   - Payment note (12px, from metadata)
   - "Open details →" pill tag

### 5. Page Metadata Update ✅
**File Modified**: `src/app/[countryCode]/(main)/page.tsx`

Updated page metadata:
- **Title**: "Story Frames — Personalized gifts that come to life"
- **Description**: "Transform photos into magical video stories. Story Frames creates personalized digital frames, video balls, and greeting cards—premium gifts with PayPal or COD."

Added `id="products"` to products section for anchor link navigation.

## Product Data Requirements

Product information must be configured in the Medusa backend. See **PRODUCT_DATA_SETUP.md** for detailed instructions.

### Required Products:
1. **Video Ball** - €39
2. **Premium Frame** - €49.99
3. **Digital Greeting Card** - €29

Each product needs:
- Title, price, description
- Thumbnail and additional images
- Custom metadata field: `paymentNote`

## Testing Checklist

To verify the migration once a Medusa backend is running:

### Visual Checks
- [ ] Hero section displays with correct text and buttons
- [ ] "How ordering works" card appears correctly
- [ ] Product cards show mauve/purple theme
- [ ] Gradient overlays visible on cards
- [ ] Hover effects work (card lift, image zoom)
- [ ] Fonts loaded (Playfair Display for headings, Manrope for body)
- [ ] CTA buttons have correct styling (rose/gold gradients)

### Content Checks
- [ ] Product titles match specification
- [ ] Product descriptions display correctly
- [ ] Prices show in EUR (€39, €49.99, €29)
- [ ] Payment notes appear in meta section
- [ ] Product images load from local assets

### Functional Checks
- [ ] "View products" button scrolls to products section
- [ ] "Order by email" opens email client
- [ ] "Message on Facebook" opens Facebook page
- [ ] Product cards link to detail pages
- [ ] Responsive design works on mobile/tablet

## Known Limitations

1. **Backend Required**: The storefront requires a running Medusa backend to function. The build will fail without it.
2. **Product Data**: Product information (names, prices, descriptions) must be manually configured in the Medusa admin panel.
3. **Image Optimization**: Product images are served from the local public directory. Consider using a CDN for production.

## Next Steps

1. **Set up Medusa backend** with Bulgaria region and EUR currency
2. **Create products** in Medusa admin using PRODUCT_DATA_SETUP.md guide
3. **Upload product images** to Medusa media storage
4. **Test the storefront** with real data
5. **Configure payment providers** (PayPal, COD options)
6. **Set up production environment** with appropriate env variables

## Rollback Instructions

If you need to revert these changes:

```bash
git checkout main
git branch -D copilot/migrate-story-frames-branding
```

## Files Modified

- `tailwind.config.js`
- `src/styles/globals.css`
- `src/modules/home/components/hero/index.tsx`
- `src/modules/products/components/product-preview/index.tsx`
- `src/app/[countryCode]/(main)/page.tsx`
- `public/images/storyframes/*` (13 new image files)
- `PRODUCT_DATA_SETUP.md` (new)
- `MIGRATION_SUMMARY.md` (new)
