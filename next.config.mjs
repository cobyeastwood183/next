import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

export default withSentryConfig(nextConfig, {
  org: "sentry-coby-us",
  project: "javascript-nextjs-t4",
  silent: !process.env.CI,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  widenClientFileUpload: true,
});