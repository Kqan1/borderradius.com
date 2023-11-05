/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    reactStrictMode: false,
    images: {
        domains:  ['localhost']
    },
    env: {
        
    },
    output: "export",
    images : { unoptimized: true },
}

module.exports = nextConfig;