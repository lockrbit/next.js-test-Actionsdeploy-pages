/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.GITHUB_ACTIONS && "/next.js-test-Actionsdeploy-pages",
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    },
};

module.exports = nextConfig;