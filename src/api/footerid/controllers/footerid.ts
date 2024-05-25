/**
 * footerid controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::footerid.footerid", () => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      // populate: { SEO: { populate: ["seoMedia"] } },
    }; //, locale: "en"

    const resultAll = await super.find(ctx);

    return {
      message: "ok",
      statusCode: 200,
      data:
        resultAll?.data?.map((item) => ({ id: item.id, ...item.attributes })) ??
        [],
    };
  },
}));
