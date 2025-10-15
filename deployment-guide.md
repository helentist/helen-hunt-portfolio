# Deploy Helen Hunt Portfolio to hunthelen.com

## Step 1: Deploy to Vercel (5 minutes, FREE)

1. Go to https://vercel.com/signup
2. Sign up with GitHub (recommended) or email
3. Click "Add New Project"
4. Import from Git Repository
5. Connect to GitHub and create a new repo for this project
6. Deploy (Vercel auto-detects Next.js settings)

## Step 2: Connect Your Domain (hunthelen.com)

### In Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add "hunthelen.com" and "www.hunthelen.com"
4. Vercel will show you DNS records to add

### In Your Domain Registrar (where you bought hunthelen.com):
1. Log into your domain provider (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add these records (Vercel will give you exact values):
   - A Record: @ → 76.76.21.21
   - CNAME: www → cname.vercel-dns.com

## Step 3: Wait 5-60 minutes for DNS propagation

Your site will be live at hunthelen.com!

## Alternative: Quick Deploy Without GitHub

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow prompts
4. Run `vercel --prod` to deploy to production
5. Add domain in Vercel dashboard

---

## Why This Is Better Than Squarespace:

✅ **SEO Optimized**: Custom meta tags, faster load times
✅ **Keyword Rich**: Optimized for "Head of Marketing" + "Social Media Manager" searches
✅ **Professional**: Shows technical understanding to employers
✅ **Free Hosting**: Vercel is free for personal sites
✅ **Easy Updates**: I can help you edit anytime
✅ **Analytics Ready**: Easy to add Google Analytics, tracking pixels

---

Need help with any step? I can guide you through it!
