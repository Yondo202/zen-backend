/**
 * headerid controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::headerid.headerid", () => ({
  async find(ctx) {
    const { id } = ctx.request.query;
    if (id) {
      const found = await strapi.entityService.findOne(
        "api::headerid.headerid",
        id
      );
      if (!found) return ctx.badRequest("Энэ id - дээр мэдээлэл олдсонгүй");
      return {
        message: "ok",
        statusCode: 200,
        data: found,
      };
    }
    
    const resultAll = await super.find(ctx);

    return {
      message: "ok",
      statusCode: 200,
      data:
        resultAll?.data?.map((item) => ({ id: item.id, ...item.attributes })) ??
        [],
    };
  },

  async findOne(ctx) {
    const result = await super.findOne(ctx);
    return {
      message: "ok",
      statusCode: 200,
      data: { id: result?.data?.id, ...result.data?.attributes },
    };
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entries = await strapi.entityService.update(
      "api::headerid.headerid",
      id,
      { data: ctx.request?.body }
    );

    if (!entries) {
      return ctx.badRequest("Энэ id - дээр мэдээлэл олдсонгүй");
    }

    return {
      message: "ok",
      statusCode: 200,
      data: entries,
    };
  },
}));
