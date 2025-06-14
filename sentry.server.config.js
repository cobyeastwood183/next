// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://ffc1b2c44434c8d6ad04ba8a2fc945a6@o4508337845829632.ingest.us.sentry.io/4509374479663104",
  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  integrations: [Sentry.vercelAIIntegration()],
});
