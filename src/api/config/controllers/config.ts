/**
 * config controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::config.config"
  //   ({ strapi }) => ({
  //     async find(ctx) {
  //       ctx.query = { ...ctx.query, populate: "*" }; //, locale: "en"
  //       const result = await super.find(ctx);

  //       const temp = {
  //         "color.ng": "color",
  //         "font.segijn-font": "font",
  //         "mainconfig.nemelt-tohirgoo": "mainconfig",
  //         "resource.n-cz": "resource",
  //       };

  //       let renderData = {};

  //       result?.data?.attributes?.renderData?.forEach((item) => {
  //         if (temp?.[item?.__component]) {
  //           renderData[temp?.[item?.__component]] = [
  //             ...(renderData[temp?.[item?.__component]] ?? []),
  //           ];
  //           renderData[temp?.[item?.__component]].push(item);
  //         }
  //       });

  //       return {
  //         message: "ok",
  //         statusCode: 200,
  //         data: {
  //           ...result?.data?.attributes,
  //           id: result?.data?.id,
  //           renderData: renderData,
  //         },
  //       };
  //     },
  //   })
);
