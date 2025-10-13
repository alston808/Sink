# Cloudflare Pages Deployment Guide

## Node.js Compatibility Fix

This guide addresses the "No such module 'node:buffer'" error when deploying to Cloudflare Pages.

## Changes Made

### 1. Nuxt Configuration (`nuxt.config.ts`)
- Added `preset: 'cloudflare-pages'` to the nitro configuration
- Added `compatibilityFlags: ['nodejs_compat']` for Node.js compatibility
- Set `ssr: true` for proper server-side rendering

### 2. Cloudflare Pages Configuration Files
- Created `wrangler.toml` with Node.js compatibility flags
- Created `functions/_middleware.js` for function-level compatibility
- Created `_headers` and `_redirects` for proper routing

### 3. Function Middleware
- Added middleware to ensure Node.js compatibility is enabled for all functions

## Deployment Steps

1. **Build the project:**
   ```bash
   pnpm build
   ```

2. **Deploy to Cloudflare Pages:**
   ```bash
   pnpm deploy:pages
   ```

3. **Alternative: Deploy via Cloudflare Dashboard:**
   - Go to Cloudflare Dashboard > Pages
   - Select your project
   - Go to Settings > Functions
   - Under "Compatibility Flags", add `nodejs_compat`
   - Redeploy your project

## Verification

After deployment, your application should:
- Load without the "node:buffer" error
- Have access to Node.js built-in modules
- Function properly with all dependencies

## Troubleshooting

If you still encounter issues:

1. **Check the Cloudflare Dashboard:**
   - Go to Pages > Your Project > Functions
   - Verify `nodejs_compat` is enabled

2. **Check build logs:**
   - Look for any compatibility warnings during build

3. **Test locally:**
   ```bash
   pnpm preview
   ```

## Files Created/Modified

- `nuxt.config.ts` - Updated with Cloudflare Pages preset and compatibility flags
- `wrangler.toml` - Cloudflare configuration with Node.js compatibility
- `functions/_middleware.js` - Function middleware for compatibility
- `.functions/_middleware.js` - Alternative function middleware location
- `_headers` - Cloudflare Pages headers configuration
- `_redirects` - Cloudflare Pages redirects configuration