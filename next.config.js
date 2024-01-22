/** @type {import('next').NextConfig} */
const nextConfig = {
    // redirect to dashboard
    async redirects() {
        return [
            {
                source: '/',
                destination: '/dashboard',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
