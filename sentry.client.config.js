import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ffc1b2c44434c8d6ad04ba8a2fc945a6@o4508337845829632.ingest.us.sentry.io/4509374479663104",
  debug: true,
  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
  integrations: [Sentry.rewriteFramesIntegration()],
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  tracesSampleRate: 1.0,
});

Sentry.captureException(new Error("Test error"));

// This export will instrument router navigations, and is only relevant if you enable tracing.
// `captureRouterTransitionStart` is available from SDK version 9.12.0 onwards
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
