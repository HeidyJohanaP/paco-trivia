'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('antony')
      .service('myService')
      .getWelcomeMessage();
  },
});
