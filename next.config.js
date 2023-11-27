/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.erii.cc',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
