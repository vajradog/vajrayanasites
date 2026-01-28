# Vajrayana Pilgrimage Guide

A comprehensive guide to sacred Vajrayana Buddhist pilgrimage sites across the Himalayas. Built with [Astro](https://astro.build), styled with [Tailwind CSS](https://tailwindcss.com), and deployed to GitHub Pages.

![Vajrayana Pilgrimage Guide](public/images/og-image.jpg)

## 🏔️ Overview

This website serves as a comprehensive resource for anyone interested in Vajrayana Buddhist sacred sites. It covers pilgrimage destinations across:

- **Tibet**: Mount Kailash, Samye, Jokhang Temple, Potala Palace, and more
- **Nepal**: Boudhanath, Swayambhunath, Pharping, Namo Buddha
- **India**: Bodh Gaya, Rewalsar, Dharamsala, Sarnath
- **Bhutan**: Taktsang (Tiger's Nest), Kurje Lhakhang, Punakha Dzong
- **Sikkim**: Tashiding, Pemayangtse, Rumtek

Each site includes:
- Historical background and founding stories
- Associated masters and deities
- Recommended practices for pilgrims
- Practical visitor information
- Related sites and festivals

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/vajradog/vajrayana-pilgrimage.git
cd vajrayana-pilgrimage

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── sites/        # Site images
│   │   └── regions/      # Region images
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── SiteCard.astro
│   │   └── ...
│   ├── content/
│   │   └── sites/        # MDX content for each site
│   │       ├── tibet/
│   │       ├── nepal/
│   │       ├── india/
│   │       ├── bhutan/
│   │       └── sikkim/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── sites/
│   │   ├── regions/
│   │   └── ...
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 📝 Adding New Sites

To add a new pilgrimage site:

1. Create a new `.mdx` file in the appropriate region folder:
   ```
   src/content/sites/[region]/[site-slug].mdx
   ```

2. Include the required frontmatter:
   ```yaml
   ---
   title: "Site Name"
   titleTibetan: "བོད་སྐད"
   titleWylie: "bod skad"
   region: "tibet" # tibet | nepal | india | bhutan | sikkim
   description: "Brief description..."
   significance: 5 # 1-5 scale
   # ... other fields
   ---
   ```

3. Write the content in Markdown below the frontmatter.

## 🖼️ Adding Optimized Images

Astro automatically optimizes images for performance. To add images:

### Option 1: Co-located Images (Recommended)
Place the image in the same folder as the MDX file:
```
src/content/sites/tibet/
  mount-kailash.mdx
  mount-kailash.jpg    ← image here
```

Then reference it in frontmatter:
```yaml
image: ./mount-kailash.jpg
```

### Option 2: Shared Assets Folder
Place images in `src/assets/images/sites/`:
```
src/assets/images/sites/mount-kailash.jpg
```

Then import and reference:
```yaml
image: ../../../assets/images/sites/mount-kailash.jpg
```

### Image Guidelines
- **Format**: JPEG or WebP preferred (Astro will auto-optimize)
- **Size**: At least 1200px wide for hero images
- **Aspect ratio**: 4:3 or 16:9 work best
- **File size**: Astro will compress, but start under 2MB

## 🎨 Design

The site uses a contemplative, editorial aesthetic with:

- **Color palette**: Deep charcoals with warm gold accents (reminiscent of butter lamps and thangka paintings)
- **Typography**: Cormorant Garamond for headings, Source Sans for body text, Noto Serif Tibetan for Tibetan script
- **Animations**: Subtle fade and scroll animations for a meditative feel
- **Grain overlay**: Adds texture and warmth

## 🚀 Deployment

The site is configured for GitHub Pages deployment:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://[username].github.io/vajrayana-pilgrimage/`

### Manual Deployment

```bash
npm run build
# Deploy the /dist folder to your hosting provider
```

## 🙏 Contributing

Contributions are welcome! If you have:

- Corrections to historical or practical information
- Additional sites to suggest
- Improvements to the codebase
- Translations or Tibetan text corrections

Please open an issue or submit a pull request.

## 📜 License

This project is dedicated to the preservation and sharing of Buddhist pilgrimage knowledge. The content is shared freely for educational purposes.

---

*May this resource benefit all beings on the path to awakening.*

སེམས་ཅན་ཐམས་ཅད་བདེ་བ་དང་བདེ་བའི་རྒྱུ་དང་ལྡན་པར་གྱུར་ཅིག།
