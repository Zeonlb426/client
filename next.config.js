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
    // reactStrictMode: true,
    // swcMinify: true,
    // async rewrites() {
    //     return [
    //         {
    //             source: "/back/api/v1/login",
    //             destination: "https://instagram.lern.dev/back/api/v1/login",
    //         },
    //     ];
    // },
}

module.exports = nextConfig

