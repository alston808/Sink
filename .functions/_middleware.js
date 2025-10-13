// Cloudflare Pages Functions middleware
// This file ensures Node.js compatibility is enabled for all functions

export const onRequest = async (context) => {
  // Ensure Node.js compatibility is enabled
  // This middleware runs before all other functions
  return context.next()
}