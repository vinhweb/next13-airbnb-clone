/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' 'http://blog.logrocket.com'; image-src 'https://unsplash.com'; script-src 'self' https://www.google-analytics.com; font-src 'self' 'https://fonts.googleapis.com'",
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Permissions-Policy',
    value: "camera=(); battery=(self); geolocation=();",
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
]

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  },
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/:path*',
  //       headers: securityHeaders,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
