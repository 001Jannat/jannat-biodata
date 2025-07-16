# Jannat Khatoon - Professional Biodata

A beautiful, mobile-optimized biodata website built with Next.js and Tailwind CSS.

## Features

✅ **Complete Professional Biodata**
- Personal Information with automatic age calculation
- Contact Information
- Educational Timeline 
- Professional Experience
- Family Information

✅ **Mobile-First Design**
- Fully responsive layout
- Touch-friendly interface
- Modern gradient design
- Card-based layout

✅ **Download Options**
- PDF Download (jsPDF)
- High-quality PNG Image Download (html2canvas)
- Mobile-optimized downloads

✅ **Professional Features**
- Read-only form fields (data protection)
- Timeline-style education display
- Modern UI with Lucide React icons
- Gradient backgrounds and shadows

## Tech Stack

- **Framework**: Next.js 15.4.1
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **PDF Generation**: jsPDF
- **Image Export**: html2canvas
- **Language**: TypeScript

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open browser**
   Navigate to `http://localhost:3000`

## Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder to Netlify**

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main biodata component
│   │   ├── globals.css         # Global styles
│   │   └── favicon.ico
│   └── components/             # (Future components)
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
└── package.json
```

## Customization

To customize the biodata for another person:

1. Update personal information in `src/app/page.tsx`
2. Modify the `calculateAge` function if needed
3. Update metadata in `src/app/layout.tsx`
4. Customize colors in Tailwind classes

## Key Information Included

- **Name**: Jannat Khatoon
- **Age**: 24 years (auto-calculated)
- **Location**: Dhanbad, Jharkhand
- **Profession**: Full Stack Developer
- **Experience**: 1+ Years
- **Education**: B.Tech Computer Science (Expected 2025)
- **Skills**: HTML, CSS, JavaScript, React, Node.js, MongoDB

## Contact Information

- **Email**: jannatkhatoon.dev@gmail.com
- **Phone**: +91-9876543210
- **Address**: Kasiyatand Basti, PO- Bhelatand, PS- Jogta, Dhanbad, Jharkhand

## License

This project is created for personal use. Feel free to use as a template for your own biodata.

---

Built with ❤️ using Next.js and Tailwind CSS
