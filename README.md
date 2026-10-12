# ShiftAI Landing Page - Deployment Summary

## 🚀 Live URLs

**Main Landing Page:** https://shiftai-landing-alwaysg-1637s-projects.vercel.app  
**gregsain.com redirect:** https://gregsain.com/shiftai

## ✅ What's Built

### 1. Landing Page (`index.html`)
- **Matrix-themed design** with ShiftAI color scheme (Hot Pink #FF1493, Purple #9370DB, Deep Sky Blue #00BFFF)
- **Video placeholder** - Ready for you to add your YouTube/Vimeo embed
- **Lead capture form** (First Name + Email)
- **Features grid:**
  - 🌍 Global Opportunity
  - 👥 Powerful Community  
  - 📈 Innovative Technology
  - 💎 Premium Lifestyle
  - ✈️ Travel The World
  - 👑 Build Your Legacy
- **Launch event info:** January 1st, 2027 - Las Vegas, Nevada
- Animated Matrix background effect

### 2. Email Automation (`api/shiftai-lead.js`)
- **Captures lead** when form submitted
- **Sends welcome email** immediately with:
  - Branded ShiftAI email template
  - All 6 features highlighted
  - Launch date/location
  - **ShiftAI access link:** https://suite.shiftai.club/w/92a8dc44
  - CTA button to access portal
- **SMTP.com integration** (channel: TheKingstonAgency)
- **FROM:** gregsain@thekingstonagency.io

### 3. GitHub Repo
**Repo:** https://github.com/KingstonCEO/shiftai-landing
- All code backed up
- Vercel auto-deploys on push

## 📝 To Add Your Video

1. Upload video to YouTube/Vimeo
2. Get embed URL (YouTube: click Share → Embed, copy the `src` URL)
3. Open `index.html` and find this section:

```html
<!-- VIDEO EMBED SPOT - Replace src with your YouTube/Vimeo embed URL -->
<div class="video-container">
  <div class="video-placeholder">📹 Video Coming Soon</div>
  <!-- <iframe src="YOUR_VIDEO_EMBED_URL" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
</div>
```

4. Uncomment the `<iframe>` line and replace `YOUR_VIDEO_EMBED_URL` with your embed URL
5. Delete the `<div class="video-placeholder">` line
6. Commit and push to GitHub (or just edit directly in Vercel dashboard)

## 🎨 Color Scheme

- **Hot Pink:** #FF1493 (primary brand color)
- **Purple:** #9370DB (secondary accent)
- **Deep Sky Blue:** #00BFFF (tertiary accent)
- **Black background** with gradient Matrix rain effect

## 🔧 Technical Details

- **Framework:** Pure HTML/CSS/JS (no dependencies)
- **Email Provider:** SMTP.com API
- **Deployment:** Vercel (auto-deploys from GitHub)
- **Lead Storage:** Currently logs to console (can add database later)
- **Form validation:** Client-side (required fields)

## 📊 Email Flow

1. **User submits form** → First Name + Email captured
2. **API processes lead** → `/api/shiftai-lead` endpoint
3. **Welcome email sent** → Via SMTP.com within seconds
4. **Email includes:**
   - Welcome message
   - 6 key features
   - Launch info (Jan 1, 2027 - Vegas)
   - Access link: https://suite.shiftai.club/w/92a8dc44
   - Branded HTML template

## 🚨 Next Steps

1. **Add your video** (see instructions above)
2. **Test the form** - Submit a lead and check email delivery
3. **Share the link:**
   - Direct: https://shiftai-landing-alwaysg-1637s-projects.vercel.app
   - Branded: https://gregsain.com/shiftai
4. **Monitor leads** - Check console logs or add database storage
5. **Optional:** Set up custom domain (shiftai.com, etc.)

## 💡 Pro Tips

- **Mobile optimized** - Looks great on all devices
- **Fast loading** - Pure HTML, no bloat
- **Email deliverability** - Using SMTP.com ensures inbox delivery
- **Easy updates** - Edit HTML directly or push to GitHub

---

**Built:** October 12, 2026  
**Status:** ✅ LIVE and ready for traffic
