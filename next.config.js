/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instagram.lern.dev',
                port: '',
                pathname: '/storage/**',
            },
        ],
    },
}

module.exports = nextConfig

