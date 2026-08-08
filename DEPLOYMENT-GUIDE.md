# Proving Ground Website — Deployment & Customization Guide

## What's in This Package

This folder contains a complete, ready-to-deploy website for **Proving Ground — A Tribute to Widespread Panic**. It is built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, no dependencies. It works on any web host and can be converted to a WordPress theme.

```
proving-ground-website/
├── index.html          ← The entire website (one file)
├── css/
│   └── style.css       ← All styling
├── js/
│   └── main.js         ← All interactivity
└── images/
    ├── pg_live_main.jpg     ← Hero background (band at B-SIDE)
    ├── pg_yt_logo.jpg       ← Band logo (circular)
    ├── pg_yt_banner.jpg     ← YouTube banner
    ├── pg_yt_thumb1.jpg     ← Video thumbnail 1
    ├── pg_yt_thumb2.jpg     ← Video thumbnail 2
    └── pg_yt_thumb3.jpg     ← Video thumbnail 3
```

---

## Option 1: Deploy on Any Web Host (Simplest)

This is the fastest path. Works with Bluehost, SiteGround, GoDaddy, Namecheap, or any cPanel host.

1. Purchase a domain name (suggested: `provingground901.com` or `provinggroundmemphis.com`)
2. Log into your hosting control panel (cPanel)
3. Open **File Manager** and navigate to the `public_html` folder
4. Upload the entire `proving-ground-website` folder contents directly into `public_html`
5. Your site is live!

**Update the canonical URL:** In `index.html`, find `https://www.provingground901.com/` and replace with your actual domain name (appears in 3 places in the `<head>` section).

---

## Option 2: Deploy on WordPress (Recommended for Easy Updates)

WordPress gives the band a simple dashboard to update shows, add photos, and manage content without touching code.

### Step A — Install WordPress
1. Most hosts offer one-click WordPress install via cPanel → Softaculous
2. Install WordPress at your domain root

### Step B — Convert to a WordPress Theme
The HTML file is structured to convert cleanly. Here's the quickest approach:

**Use a "Page Builder" approach (easiest):**
1. Install the free **Elementor** or **Beaver Builder** plugin
2. Create a new Page called "Home"
3. Set it as your static front page (Settings → Reading → Static Page)
4. Paste the HTML sections into Elementor's HTML widget, or rebuild visually using the provided CSS variables

**Use as a custom theme (for developers):**
1. Create a folder: `wp-content/themes/proving-ground/`
2. Copy `style.css` there and add the WordPress theme header comment at the top:
   ```css
   /*
   Theme Name: Proving Ground
   Description: Official website theme for Proving Ground tribute band
   Version: 1.0
   */
   ```
3. Create `index.php` and paste the HTML content, replacing static text with WordPress template tags where needed
4. Activate the theme in Appearance → Themes

### Step C — Recommended WordPress Plugins
| Plugin | Purpose |
|---|---|
| **Yoast SEO** or **RankMath** | Manage SEO titles, meta descriptions, sitemaps |
| **The Events Calendar** (free) | Manage and display upcoming shows easily |
| **WP Forms Lite** | Replace the booking form with a proper form that sends email |
| **Smush** | Compress and optimize images automatically |
| **W3 Total Cache** | Speed up the site with caching |

---

## Keeping the Site Updated

### Updating Shows
In `index.html`, find the `<!-- SHOWS / TOUR SECTION -->` comment and edit the show items. Each show follows this pattern:

```html
<div class="show-item">
  <div class="show-date">
    <div class="show-date-month">Sep</div>  ← Change month
    <div class="show-date-day">15</div>     ← Change day
  </div>
  <div class="show-info">
    <div class="show-info-venue">Venue Name Here</div>
    <div class="show-info-location">City, State</div>
    <div class="show-info-time">Doors 8PM · Show 9PM</div>
  </div>
  <a href="TICKET-LINK-HERE" class="show-ticket-btn">Tickets</a>
</div>
```

### Adding New Videos
In `index.html`, find the `<!-- MEDIA / VIDEOS SECTION -->` comment. Each video card needs:
- The YouTube video ID (the part after `?v=` in the URL)
- A thumbnail image (download from YouTube or use a screenshot)

```html
<div class="video-card" data-video-id="YOUR_VIDEO_ID_HERE">
  <div class="video-thumb">
    <img src="images/your-thumbnail.jpg" alt="Description of video">
    ...
  </div>
  <div class="video-info">
    <div class="video-title">Show Name — Set 1</div>
    <div class="video-meta">Date · Duration</div>
  </div>
</div>
```

### Replacing Photos
Simply replace the files in the `images/` folder with new photos using the same filenames. For best results:
- **Hero background** (`pg_live_main.jpg`): Use a wide landscape photo, at least 1200px wide
- **Logo** (`pg_yt_logo.jpg`): Square image, at least 200×200px

---

## SEO Checklist (Do These After Launch)

- [ ] Submit your sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- [ ] Submit to Bing Webmaster Tools
- [ ] Create a Google Business Profile for "Proving Ground" (helps local search)
- [ ] Update the canonical URL in `index.html` to your real domain
- [ ] Replace `https://www.provingground901.com/` in the JSON-LD schema with your real URL
- [ ] Add the site to your Facebook Page's "Website" field
- [ ] Add the site URL to your Instagram bio and YouTube channel description

---

## Color & Style Customization

All colors are defined as CSS variables at the top of `style.css`. To change the look, just edit these values:

```css
:root {
  --color-primary:  #c8a84b;   /* gold — change this for a different accent */
  --color-accent:   #4a9e8a;   /* teal/green */
  --color-accent2:  #7b4fa0;   /* purple */
  --color-bg-dark:  #0a0c10;   /* main background */
}
```

---

## Contact & Social Links

All contact info is in `index.html`. Search for `provingground901@gmail.com` and `thevelvetdogs20` to find every instance and update them if the email or social handles ever change.

---

*Built with care for Proving Ground — Memphis, TN. The Home Team.*
