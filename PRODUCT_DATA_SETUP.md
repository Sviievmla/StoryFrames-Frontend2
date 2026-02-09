# Product Data Setup for Story Frames

This document describes the product data that needs to be configured in the Medusa backend to match the Story Frames branding.

## Products to Create/Update

### 1. Video Ball
- **Title**: `Video Ball`
- **Price**: €39
- **Description**: `A modern spherical display with your animated memory inside.`
- **Metadata**:
  - `paymentNote`: `PayPal (card) • Bulgaria COD`
- **Thumbnail**: Use `/images/storyframes/ball-1.jpg`
- **Additional Images**: `ball-2.jpg`, `ball-3.jpg`

### 2. Premium Frame
- **Title**: `Premium Frame`
- **Price**: €49.99
- **Description**: `A clean, premium digital frame for memories that deserve a spotlight.`
- **Metadata**:
  - `paymentNote`: `PayPal (card) • Bulgaria COD`
- **Thumbnail**: Use `/images/storyframes/frame-1.jpg`
- **Additional Images**: `frame-2.jpg`, `frame-3.jpeg`

### 3. Digital Greeting Card
- **Title**: `Digital Greeting Card`
- **Price**: €29
- **Description**: `A stylish digital card with your story and your music.`
- **Metadata**:
  - `paymentNote`: `PayPal (card) • Instant delivery`
- **Thumbnail**: Use `/images/storyframes/card-1.jpg`
- **Additional Images**: `card-2.jpg`, `card-3.jpg`

## How to Set Up

1. Log into your Medusa admin panel
2. Navigate to Products section
3. Create/Update each product with the details above
4. For images, upload the files from `public/images/storyframes/` directory
5. Add the custom metadata field `paymentNote` with the values specified above

## Image Assets

All product images are located in:
```
public/images/storyframes/
  - ball-1.jpg, ball-2.jpg, ball-3.jpg
  - frame-1.jpg, frame-2.jpg, frame-3.jpeg (Note: mixed .jpg/.jpeg extensions from legacy)
  - card-1.jpg, card-2.jpg, card-3.jpg
  - logo.png
  - gallery-1.jpeg, gallery-2.png, gallery-3.jpg
```

**Note**: Some images use `.jpeg` extension while others use `.jpg`. These are the original filenames from the legacy repository and both are supported.

## Notes

- The product card styling automatically displays the `paymentNote` metadata
- Product descriptions are shown on the cards
- The "Open details →" tag is automatically added to all product cards
- Ensure the EUR currency and Bulgaria region are configured in Medusa
