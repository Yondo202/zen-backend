/**
 * A set of functions called "actions" for `web`
 */

export default {
  getConfig: async () => {
    // ctx - end webid av, next
    try {
      const entries = await strapi.entityService.findMany(
        "api::config.config",
        {
          populate: "*",
        }
      );

      const temp = {
        "color.ng": "color",
        "font.segijn-font": "font",
        "mainconfig.nemelt-tohirgoo": "mainconfig",
        "resource.n-cz": "resource",
      };

      let renderData = {};

      entries?.renderData?.forEach((item) => {
        if (temp?.[item?.__component]) {
          renderData[temp?.[item?.__component]] = [
            ...(renderData[temp?.[item?.__component]] ?? []),
          ];
          renderData[temp?.[item?.__component]].push(item);
        }
      });

      delete entries.createdBy;
      delete entries.updatedBy;

      return {
        message: "ok",
        statusCode: 200,
        data: {
          ...entries,
          renderData: renderData ?? {},
        },
      };
    } catch (err) {
      return {
        message: "Хүсэлт амжилтгүй",
        statusCode: 400,
        data: null,
      };
    }
  },
};
