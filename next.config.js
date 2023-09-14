/** @type {import('next').NextConfig} */
const nextConfig = {
   transpilePackages: [
        '@patternfly/patternfly',
        '@patternfly/react-core',
        '@patternfly/react-icons',
        '@patternfly/react-table',
        '@patternfly/react-styles',
        '@patternfly/react-tokens',
        '@patternfly/react-log-viewer',
        'next-auth',
    ],
}

module.exports = nextConfig
