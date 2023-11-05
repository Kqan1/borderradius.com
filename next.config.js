/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    reactStrictMode: false,
    images: {
        domains:  ['localhost']
    },
    env: {
        
    },
    images : { unoptimized: true },
}

module.exports = nextConfig;