# 🚀 Deploy Jannat Khatoon's Biodata to Vercel

## Quick Deploy (1-Click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/username/jannat-biodata)

## Manual Deployment Steps

### 1. Prepare for Deployment

```powershell
# Build the project
cd "c:\Users\VICTUS\OneDrive\Desktop\portfolio\jannat-biodata"
npm run build
```

### 2. Deploy to Vercel

**Option A: Using Vercel CLI (Recommended)**

```powershell
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy the project
vercel

# Follow the prompts:
# - Project name: jannat-biodata
# - Framework: Next.js
# - Build command: npm run build
# - Output directory: .next
# - Development command: npm run dev
```

**Option B: Using Vercel Web Interface**

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub, GitLab, or Bitbucket
3. Click "New Project"
4. Import your repository or upload the project folder
5. Configure project:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click "Deploy"

### 3. Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Go to "Settings" → "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Alternative Deployment Options

### Deploy to Netlify

```powershell
# Build the project
npm run build

# Upload the 'out' folder to Netlify
# OR use Netlify CLI:
npm install -g netlify-cli
netlify init
netlify deploy --prod --dir=out
```

### Deploy to GitHub Pages

```powershell
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

## Environment Configuration

The biodata works out of the box with no environment variables needed!

## Performance Optimizations

✅ **Already Included:**
- Mobile-first responsive design
- Optimized images and icons
- Lazy loading
- Fast CSS animations
- Minimal bundle size
- SEO optimized

## Live Demo

After deployment, your biodata will be available at:
- Vercel: `https://jannat-biodata.vercel.app`
- Custom domain: `https://your-domain.com`

## Features Working Live

✅ PDF Download  
✅ Image Download  
✅ Mobile Responsive  
✅ Touch Navigation  
✅ Smooth Animations  
✅ SEO Optimized  

## Troubleshooting

**Issue: Build fails**
```powershell
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Issue: PDF/Image download not working**
- This is normal in development
- Downloads work perfectly in production/live deployment

## Post-Deployment Checklist

- [ ] Test all navigation buttons
- [ ] Test PDF download
- [ ] Test image download
- [ ] Check mobile responsiveness
- [ ] Verify all information is correct
- [ ] Test loading speed
- [ ] Share the live URL!

## Share Your Biodata

Once live, you can share your professional biodata at:
`https://your-domain.vercel.app`

Perfect for:
- Social media profiles
- WhatsApp status
- LinkedIn bio link
- Email signatures
- Business cards (QR code)

---

**Made with ❤️ by Jannat Khatoon**  
*Full Stack Developer • 1+ Years Experience*
