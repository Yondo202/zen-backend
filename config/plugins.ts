export default ({ env }) => ({
    // seo: {
    //   enabled: true,
    // },
    // "file-system": {
    //   enabled: true,
    // },
  
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_ACCESS_SECRET,
          },
          region: process.env.AWS_REGION,
          baseUrl: `https://s3.${process.env.AWS_REGION}.amazonaws.com/${process.env.AWS_BUCKET}`, // This line sets the custom url format
          params: {
            ACL: process.env.AWS_ACL || "public-read",
            signedUrlExpires: process.env.AWS_SIGNED_URL_EXPIRES || 15 * 60,
            Bucket: process.env.AWS_BUCKET,
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  
    
    // meilisearch: {
    //     config: {
    //         product:{
    //             title:''
    //         },
    //       // Your meili host
    //       host: "http://localhost:7700",
    //       // Your master key or private key
    //       apiKey: "8502F099-01AE-4A2D-93A6-B75AD780CCFE",
    //     }
    //   }
  
    // upload: {
    //   config: {
    //     provider: 'aws-s3',
    //     providerOptions: {
    //       baseUrl: env('CDN_URL'),
    //       rootPath: env('CDN_ROOT_PATH'),
    //       s3Options: {
    //         credentials: {
    //           accessKeyId: env('AWS_ACCESS_KEY_ID'),
    //           secretAccessKey: env('AWS_ACCESS_SECRET'),
    //         },
    //         region: env('AWS_REGION'),
    //         params: {
    //           ACL: env('AWS_ACL', 'public-read'),
    //           signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
    //           Bucket: env('AWS_BUCKET'),
    //         },
    //       },
    //     },
    //     actionOptions: {
    //       upload: {},
    //       uploadStream: {},
    //       delete: {},
    //     },
    //   },
    // },
  });
  