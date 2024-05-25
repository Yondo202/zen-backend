

 // ~/strapi-aws-s3/backend/config/middlewares.js
    
 module.exports = [
  'strapi::errors',
  /* Replace 'strapi::security', with this snippet */
  /* Beginning of snippet */
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            '*.amazonaws.com',
            `${process.env.AWS_BACKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            '*.amazonaws.com',
            `${process.env.AWS_BACKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  /* End of snippet */
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

// export default [
//   'strapi::logger',
//   'strapi::errors',
//   'strapi::security',
//   'strapi::cors',
//   'strapi::poweredBy',
//   'strapi::query',
//   'strapi::body',
//   'strapi::session',
//   'strapi::favicon',
//   'strapi::public',
// ];

