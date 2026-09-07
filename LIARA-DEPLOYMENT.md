# Liara deployment guide — setarehkerman.com
# Plain-language steps for launching on Liara (Iranian hosting)

---

## Overview (what goes where)

| Piece | Liara app type | Domain |
|-------|----------------|--------|
| Website (React pages) | **Static** | `setarehkerman.com` |
| Backend (forms, API) | **Node.js** | `api.setarehkerman.com` |

Why two apps? The website is static files (HTML/JS/CSS). The backend is a always-on Node program that sends emails. Liara hosts each type differently — same idea as Vercel + Render, but both on Liara inside Iran.

---

## Before you start — checklist

- [ ] Liara account: https://console.liara.ir
- [ ] Liara CLI installed: https://docs.liara.ir/cli/install
- [ ] Logged in: `liara login`
- [ ] Domain `setarehkerman.com` DNS access at your registrar
- [ ] Gmail App Password ready (for contact/survey forms)
- [ ] `.env.production` filled from `.env.production.example` (for building the frontend)

---

## Step 1 — Create two apps on Liara

In [Liara Console](https://console.liara.ir/apps/create):

1. **Static app** (name example: `setarehkerman-web`)
   - Platform: **Static**
   - Plan: choose based on traffic (start small)

2. **Node app** (name example: `setarehkerman-api`)
   - Platform: **Node.js**
   - Plan: choose based on traffic

Note each app’s default URL, e.g.:
- `https://setarehkerman-web.liara.run`
- `https://setarehkerman-api.liara.run`

---

## Step 2 — Deploy the backend (API) first

Open PowerShell in the project folder:

```powershell
cd server
npm install
```

### Set environment variables in Liara Console

Open **setarehkerman-api** → **Environment variables** → add:

| Variable | Value |
|----------|-------|
| `NODE_ENV` | `production` |
| `CONTACT_EMAIL_TO` | `info.setarehkerman@gmail.com` |
| `CORS_ALLOWED_ORIGINS` | `https://setarehkerman.com,https://www.setarehkerman.com,https://setarehkerman-web.liara.run` |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_SECURE` | `false` |
| `SMTP_USER` | your Gmail address |
| `SMTP_PASS` | Gmail App Password (16 chars) |
| `SMTP_FROM` | `Setareh Kerman Website <your-gmail@gmail.com>` |

Replace `setarehkerman-web.liara.run` with your actual static app URL until the custom domain is live.

`PORT` is set automatically by Liara — do not override unless Liara docs say otherwise.

### Deploy

```powershell
cd server
liara deploy --app=setarehkerman-api --platform=node --port=5000
```

Replace `setarehkerman-api` with your app name.

### Verify

Visit: `https://YOUR-API-APP.liara.run/api/health`

You should see: `{"status":"ok",...}`

### Test email (optional, on your PC)

```powershell
cd server
# Create server/.env with SMTP values, then:
npm run verify:email
```

---

## Step 3 — Build and deploy the frontend

### Create production env file (one time)

```powershell
cd c:\Users\HP\Desktop\setarehKermanWebsite
copy .env.production.example .env.production
```

Edit `.env.production`:

- `VITE_API_BASE_URL` = your API URL (`https://setarehkerman-api.liara.run` until DNS is ready, then `https://api.setarehkerman.com`)
- Add analytics IDs if you have them

### Build

```powershell
npm install
npm run build:production
```

This creates the `dist/` folder. It includes `liara.json` and `liara_nginx.conf` (for SPA routing on Liara).

### Deploy static files

```powershell
cd dist
liara deploy --app=setarehkerman-web --platform=static
```

Replace `setarehkerman-web` with your static app name.

---

## Step 4 — Connect your domain (DNS)

In Liara Console, add custom domains to each app:

### Website app (`setarehkerman-web`)

- Add domain: `setarehkerman.com`
- Add domain: `www.setarehkerman.com`

Liara will show DNS records to add at your registrar. Typically:

| Type | Name | Points to |
|------|------|-----------|
| A or CNAME | `@` | Liara’s value for root domain |
| CNAME | `www` | Liara’s value for www |

Exact values come from Liara’s domain panel — copy them exactly.

### API app (`setarehkerman-api`)

- Add domain: `api.setarehkerman.com`
- Add CNAME: `api` → Liara’s target for the Node app

DNS can take 1–48 hours (often under 2 hours).

---

## Step 5 — Final production settings

After domains work:

1. **Update frontend env and redeploy**
   - `VITE_API_BASE_URL=https://api.setarehkerman.com`
   - Rebuild: `npm run build:production`
   - Redeploy from `dist/`

2. **Update backend CORS** in Liara Console:
   ```
   CORS_ALLOWED_ORIGINS=https://setarehkerman.com,https://www.setarehkerman.com
   ```
   (Remove the temporary `.liara.run` URL if you want stricter security.)

3. **Test live**
   - Open https://setarehkerman.com and https://setarehkerman.com/fa
   - Submit contact form → check `info.setarehkerman@gmail.com`
   - Submit survey form → check inbox

4. **Google Search Console**
   - Add property `setarehkerman.com`
   - Submit sitemap: `https://setarehkerman.com/sitemap.xml`

---

## Redeploying after code changes

**Frontend changed:**
```powershell
npm run build:production
cd dist
liara deploy --app=setarehkerman-web --platform=static
```

**Backend changed:**
```powershell
cd server
liara deploy --app=setarehkerman-api --platform=node --port=5000
```

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| Form says “temporarily unavailable” | SMTP not set on API app | Add SMTP env vars in Liara Console |
| Form fails with network error | Wrong `VITE_API_BASE_URL` | Rebuild frontend with correct API URL |
| 403 on form submit | CORS | Add your website URL to `CORS_ALLOWED_ORIGINS` |
| Page refresh 404 on `/products` etc. | Missing SPA nginx config | Ensure `liara_nginx.conf` is in `dist/` (comes from `public/`) |
| Gmail SMTP fails from Liara | Google blocking datacenter IP | Try Liara mail service or another SMTP provider |

---

## Files in this repo for Liara

| File | Purpose |
|------|---------|
| `public/liara.json` | Static app platform hint (copied to `dist/`) |
| `public/liara_nginx.conf` | SPA routing + caching (copied to `dist/`) |
| `server/liara.json` | Node app settings (timezone, Node 20) |
| `.env.production.example` | Frontend build variables |

---

## Optional: GitHub auto-deploy

Liara supports connecting a GitHub repo in the console for automatic deploys on push. Use:

- **Static app**: build command `npm run build:production`, publish directory `dist`
- **Node app**: root directory `server`, start command `npm start`

See: https://docs.liara.ir/paas/about/how-tos/deploy-app-via-github
