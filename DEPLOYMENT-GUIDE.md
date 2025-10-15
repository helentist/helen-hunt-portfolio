# 🚀 Deploy Helen Hunt Portfolio to hunthelen.com

## Quick Overview
Your portfolio is ready to deploy! Follow these steps to get it live on hunthelen.com.

---

## Step 1: Push to GitHub

1. **Go to GitHub.com** and create a new repository:
   - Repository name: `helen-hunt-portfolio`
   - Make it **Public** (required for free Vercel hosting)
   - Don't initialize with README (we already have code)

2. **Copy the commands** GitHub shows you under "push an existing repository"
   
   They'll look like this (replace YOUR-USERNAME):
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/helen-hunt-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Run those commands** in your terminal from the project directory

---

## Step 2: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)** and sign up/login with GitHub

2. **Click "Add New Project"**

3. **Import your GitHub repository:**
   - Find `helen-hunt-portfolio` in the list
   - Click "Import"

4. **Configure the project:**
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (leave as default)
   - Output Directory: `.next` (leave as default)

5. **Click "Deploy"** and wait 2-3 minutes

6. **Your site is now live!** Vercel will give you a URL like:
   `https://helen-hunt-portfolio.vercel.app`

---

## Step 3: Connect Your Domain (hunthelen.com)

### If you already own hunthelen.com:

1. **In your Vercel project**, go to **Settings → Domains**

2. **Add your domain:**
   - Type: `hunthelen.com`
   - Click "Add"

3. **Configure DNS** (at your domain registrar - GoDaddy, Namecheap, etc.):
   
   **Option A - Recommended (Nameservers):**
   - Vercel will show you nameservers like:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```
   - Go to your domain registrar
   - Update nameservers to use Vercel's
   - Wait 24-48 hours for DNS propagation

   **Option B - Quick (A Record):**
   - Add an A record pointing to: `76.76.21.21`
   - Add a CNAME record for `www` pointing to: `cname.vercel-dns.com`
   - Wait 1-2 hours for DNS propagation

4. **Add www subdomain** (optional but recommended):
   - In Vercel, add `www.hunthelen.com` as another domain
   - Set it to redirect to `hunthelen.com`

---

### If you DON'T own hunthelen.com yet:

1. **Buy the domain** from:
   - [Namecheap](https://www.namecheap.com) (recommended, ~$10/year)
   - [GoDaddy](https://www.godaddy.com)
   - [Google Domains](https://domains.google)

2. **Then follow the steps above** to connect it to Vercel

---

## Step 4: Enable HTTPS (Automatic)

Vercel automatically provisions SSL certificates for your domain. Once DNS is configured, your site will be available at:
- ✅ `https://hunthelen.com`
- ✅ `https://www.hunthelen.com`

---

## Updating Your Site

Whenever you want to make changes:

1. **Edit your files locally**
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. **Vercel automatically redeploys** (takes 2-3 minutes)

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Domain Setup Guide**: https://vercel.com/docs/concepts/projects/domains
- **Next.js Docs**: https://nextjs.org/docs

---

## Your Portfolio Features

✅ Professional design with real campaign data
✅ Downloadable resume
✅ Mobile responsive
✅ Fast loading with Next.js
✅ SEO optimized
✅ Easy to update

**Current Preview**: https://helen-hunt-portfolio.lindy.site
**Future Live Site**: https://hunthelen.com

---

Good luck with your job search! 🎉
