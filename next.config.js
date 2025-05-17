const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: 'https://test.easydietkw.com/api/v1',
        WEBSITE_URL: 'https://test.easydietkw.com'
    },
    images: {
        domains: ['kportals.net', 'easydiet.kportals.net', 'api.easydietkw.com', 'localhost', 'test.easydietkw.com', 'easydietkw.com', 'www.easydietkw.com', 'cdn.easydietkw.com', 'cdn.kportals.net']
    }
};

module.exports = withNextIntl(nextConfig);
