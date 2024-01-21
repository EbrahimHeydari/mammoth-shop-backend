const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  //Find with populate ----------------------------------------
  async find(ctx) {
    const populateList = ["image", "savedBy", "comments", "reservedBy"];

    // Push any additional query params to the array
    populateList.push(ctx.query.populate);
    ctx.query.populate = populateList.join(",");
    const content = await super.find(ctx);
    return content;
  },
}));
