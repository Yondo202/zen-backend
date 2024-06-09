/**
 * page controller
 */

import { factories } from "@strapi/strapi";

const temp = {
  zipInfo: {
    source: {
      "place name": "Beverly Hills",
      longitude: "-118.2987",
      state: "California",
      "state abbreviation": "CA",
      latitude: "33.7866",
      zipcode: "90213",
    },
    destination: {
      "place name": "Osceola",
      longitude: "-93.7712",
      state: "Iowa",
      "state abbreviation": "IA",
      latitude: "41.0295",
      zipcode: "50213",
    },
  },


  vehicleInfo: {
    year: 2025,
    model: {
      vehicle_id: "400925330",
      type: "sedan midsize",
      year: 2024,
      make: "Acura",
      model: "Integra",
      original_model: "Integra",
      fuel_types: ["G"], // ankaaraldaa av
    },
    make: {
      make: "Acura",
    },
   
  },
  
  dateInfo: {
    phoneNumber: "(111) 111-1111",
    email: "nyambayar.saint2@gmail.com",
    date: "2024-06-08",
  },
  cost: {
    calculatedCost: 1348.7190609856,
    baseRate: 0.8,
  },



  operable: "Yes",
  transportType: "Open",


  // generated code
};

const Convert = (item) => {
  const temp = {
    id: item.id,
    ...item?.attributes,

    header: {
      id: item?.attributes?.header?.data?.id,
      ...item?.attributes?.header?.data?.attributes,
    },
    footer: {
      id: item?.attributes?.footer?.data?.id,
      ...item?.attributes?.footer?.data?.attributes,
    },

    seoTitle: item?.attributes?.SEO?.seoTitle,
    seoDescription: item?.attributes?.SEO?.seoDescription,
    seoMedia: item?.attributes?.SEO?.seoMedia?.data?.attributes?.url,
    SEO: null,
  };
  delete temp.SEO;
  return temp;
};

export default factories.createCoreController(
  "api::pageid.pageid",
  ({ strapi }) => ({
    async update(ctx) {
      const { id } = ctx.params;

      // const order = await strapi.entityService.findOne( "api::pageid.pageid", id);
      const entries = await strapi.entityService.update(
        "api::pageid.pageid",
        id,
        {
          data: ctx.request.body,
        }
      );

      return entries;
    },
    async findOne(ctx) {
      const { id } = ctx.params;
      if (id === "published") {
        if (ctx.query.page_slug) {
          ctx.query = {
            ...ctx.query,
            populate: "*",
            filters: { slug: { $eq: ctx.query.page_slug } },
          };

          const resultOne = await super.find(ctx);

          if (!resultOne?.data?.[0]) {
            return ctx.badRequest("Энэ slug - дээр мэдээлэл олдсонгүй");
          }

          return {
            message: "ok",
            statusCode: 200,
            data: Convert(resultOne?.data?.[0]) ?? {},
          };
        } else {
          return ctx.badRequest("page_slug-damjuulna uu");
        }
      }

      return ctx.badRequest("path id дээр - published гэж явуулна уу");
    },

    async find(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: { SEO: { populate: ["seoMedia"] } },
      }; //, locale: "en"

      if (ctx.query.page_slug) {
        ctx.query = {
          ...ctx.query,
          populate: "*",
          filters: { slug: { $eq: ctx.query.page_slug } },
        };
        const resultOne = await super.find(ctx);

        if (!resultOne?.data?.[0]) {
          return ctx.badRequest("Энэ slug - дээр мэдээлэл олдсонгүй");
        }

        return {
          message: "ok",
          statusCode: 200,
          data: Convert(resultOne?.data?.[0]) ?? {},
        };
      }

      const result = await super.find(ctx);

      return {
        message: "ok",
        statusCode: 200,
        data: result?.data?.map((item) => Convert(item)) ?? [],
      };
    },
  })
);
