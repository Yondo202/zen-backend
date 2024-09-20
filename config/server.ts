export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  // proxy: true, // from js
  // url: env("HOST_URL"), // from js
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  }
});

// proxy: true,
//     url: env('HOST_URL'), // Sets the public URL of the application.
//     app: {
//       keys: env.array('APP_KEYS')
//     },
