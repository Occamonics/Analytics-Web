/**
 * @type {import('next').NextConfig}
 */

const repo = 'Analytics-Web'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


const nextConfig = {
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix,
    basePath,
};


module.exports = nextConfig;
