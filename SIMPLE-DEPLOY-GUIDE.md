# 🚀 Easiest Way to Deploy Your Portfolio

## Option 1: Upload Directly to GitHub (Easiest!)

Since you already created the repository at https://github.com/helentist/helen-hunt-portfolio, here's the simplest way:

### Step 1: Download Your Code
I've prepared your portfolio code. You'll need to download the project folder.

### Step 2: Upload to GitHub via Web
1. **Go to**: https://github.com/helentist/helen-hunt-portfolio
2. **Click**: "uploading an existing file" link (or "Add file" → "Upload files")
3. **Drag and drop** all your portfolio files into the upload area
4. **Important files to upload**:
   - `app/` folder (with all contents)
   - `components/` folder (with all contents)
   - `public/` folder (with all images and resume)
   - `package.json`
   - `next.config.ts`
   - `tailwind.config.ts`
   - `tsconfig.json`
   - All other config files
5. **Commit message**: "Initial portfolio upload"
6. **Click**: "Commit changes"

### Step 3: Deploy to Vercel (5 minutes)
1. **Go to**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Click**: "Add New Project"
4. **Import**: `helen-hunt-portfolio` repository
5. **Click**: "Deploy"
6. **Wait 2-3 minutes** - Done! ✅

### Step 4: Connect hunthelen.com
1. In Vercel, go to **Settings → Domains**
2. Add `hunthelen.com`
3. Follow Vercel's DNS instructions
4. Wait for DNS to propagate (1-24 hours)

---

## Option 2: Use GitHub Desktop (Recommended for Future Updates)

### Download & Install
1. **Download**: https://desktop.github.com
2. **Install** and sign in with GitHub

### Clone Your Repository
1. **File → Clone Repository**
2. **Select**: `helentist/helen-hunt-portfolio`
3. **Choose** where to save it on your computer

### Add Your Portfolio Files
1. **Copy all your portfolio files** into the cloned folder
2. **GitHub Desktop** will show all the new files
3. **Write commit message**: "Initial portfolio"
4. **Click**: "Commit to main"
5. **Click**: "Push origin"

### Deploy to Vercel
Same as Option 1, Step 3 above!

---

## Option 3: Command Line (For Developers)

If you're comfortable with terminal:

```bash
# Navigate to your portfolio folder
cd path/to/helen-hunt-portfolio

# Add GitHub remote (if not already added)
git remote add origin https://github.com/helentist/helen-hunt-portfolio.git

# Push to GitHub
git push -u origin main
```

You'll be prompted for your GitHub username and password (or personal access token).

---

## What's Included in Your Portfolio?

✅ Professional design with minimalist aesthetic
✅ Real campaign data (Red Band, DHL, Volleyball)
✅ Downloadable resume (your actual PDF)
✅ All images optimized and ready
✅ Mobile responsive
✅ Fast loading with Next.js
✅ SEO optimized

---

## Need Help?

**Current Preview**: https://helen-hunt-portfolio.lindy.site
**GitHub Repo**: https://github.com/helentist/helen-hunt-portfolio
**Vercel**: https://vercel.com

Once deployed, your site will be live at hunthelen.com! 🎉
