# Deploy The Illu Studio to Vercel (Free Forever)

## Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com with GitHub)

## Method 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub
```bash
cd "landing page"
git init
git add .
git commit -m "Initial commit: The Illu Studio landing page"
```

Create a new repository on GitHub (https://github.com/new) named `theillustudio-landing`

```bash
git remote add origin https://github.com/YOUR_USERNAME/theillustudio-landing.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com/new
2. Click "Import Project"
3. Select your GitHub repository `theillustudio-landing`
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

That's it! Your site will be live in ~2 minutes at: `https://theillustudio-landing.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd "landing page"
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? `theillustudio-landing`
- Directory? `./`
- Override settings? **N**

Your site will deploy instantly!

### Step 4: Deploy to Production
```bash
vercel --prod
```

## Custom Domain (Optional)

1. Go to your project on Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `theillustudio.com`)
4. Follow DNS configuration instructions
5. Vercel provides free SSL automatically

## Vercel Hobby Plan Features (Free Forever)

✅ Unlimited deployments
✅ Automatic HTTPS/SSL
✅ Global CDN
✅ Preview deployments for every git push
✅ 100 GB bandwidth per month
✅ Serverless functions
✅ Analytics (basic)
✅ Custom domains

## Automatic Deployments

Once connected to GitHub:
- Every `git push` to main branch = automatic production deployment
- Every pull request = preview deployment with unique URL
- Instant rollbacks from dashboard

## Environment Variables (if needed later)

1. Go to project settings on Vercel
2. Click "Environment Variables"
3. Add variables (e.g., API keys)
4. Redeploy to apply changes

## Monitoring Your Site

- Dashboard: https://vercel.com/dashboard
- Analytics: View traffic, performance, and errors
- Logs: Real-time function logs and build logs

## Cost: $0 Forever

The Hobby plan is completely free with no time limit. Perfect for:
- Personal projects
- Portfolio sites
- Small business websites
- Side projects

You only pay if you upgrade to Pro for team features or higher limits.

---

Need help? Check https://vercel.com/docs or contact hello@theillustudio.com
