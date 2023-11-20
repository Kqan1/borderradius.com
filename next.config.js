/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    reactStrictMode: false,

    // For Dev
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'parrotdigital.com.au',
            port: '',
            pathname: '/wp-content/uploads/2022/06/business-email-banner-examples.jpg',
            },
        ],
    },
};

module.exports = nextConfig;