/**
 * @type {import('next').NextConfig}
 */
const nextConfig: import('next').NextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './',
};

export default nextConfig;
