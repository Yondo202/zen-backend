/**
 * A set of functions called "actions" for `contenttypes`
 */

const modelNameToSkip = ["pageid", "headerid", "footerid"];

export default {
  getContentTypes: async (ctx) => {
    const types = Object.keys(strapi.contentTypes).reduce((acc, cur) => {
      const instance = strapi.contentTypes[cur];
      if (instance.kind === "collectionType" && !instance.plugin)
        acc.push(instance);
      return acc;
    }, []);

    const filterd = types.filter(
      (item) => !modelNameToSkip.includes(item.modelName)
    );

    if (filterd.length > 0) {
      return {
        data: filterd.map((item) => ({
          name: item.info.displayName,
          api_key: item.collectionName,
        })),
      };
    }

    try {
      return {
        data: [],
      };
    } catch (err) {
      return ctx.err;
    }
  },
};
